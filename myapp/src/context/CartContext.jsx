import { createContext, useContext, useState, useEffect } from 'react'
import api from '../api/axios'
import { useAuth } from './AuthContext'

const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])
    const { user } = useAuth()

    // User login hone par cart fetch karo, logout par clear karo
    useEffect(() => {
        if (user) {
            fetchCart()
        } else {
            setCartItems([])
        }
    }, [user])

    const fetchCart = async () => {
        try {
            const { data } = await api.get('/cart')
            setCartItems(data.items || [])
        } catch {
            setCartItems([])
        }
    }

    const addToCart = async (product) => {
        if (!user) return alert('Please login to add items to cart')
        try {
            const { data } = await api.post('/cart/add', {
                product: product._id,
                title: product.title,
                image: product.image,
                price: product.price
            })
            setCartItems(data.items)
        } catch (error) {
            console.error('Add to cart failed:', error.message)
        }
    }

    const updateQty = async (productId, qty) => {
        try {
            const { data } = await api.put(`/cart/update/${productId}`, { qty })
            setCartItems(data.items)
        } catch (error) {
            console.error('Update qty failed:', error.message)
        }
    }

    const removeFromCart = async (productId) => {
        try {
            const { data } = await api.delete(`/cart/remove/${productId}`)
            setCartItems(data.items)
        } catch (error) {
            console.error('Remove failed:', error.message)
        }
    }

    const clearCart = async () => {
        try {
            await api.delete('/cart/clear')
            setCartItems([])
        } catch (error) {
            console.error('Clear cart failed:', error.message)
        }
    }

    const totalItems = cartItems.reduce((sum, i) => sum + i.qty, 0)
    const totalPrice = cartItems.reduce((sum, i) => sum + i.price * i.qty, 0)

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQty, clearCart, totalItems, totalPrice }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)
