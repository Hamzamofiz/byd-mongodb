import { useCart } from '../context/CartContext'
import { IoClose } from 'react-icons/io5'
import './CartDrawer.css'

const CartDrawer = ({ onClose }) => {
    const { cartItems, removeFromCart, updateQty, totalPrice, clearCart } = useCart()

    return (
        <>
            <div className="cart-backdrop" onClick={onClose} />
            <div className="cart-drawer">
                <div className="cart-header">
                    <h2>YOUR CART</h2>
                    <button className="cart-close" onClick={onClose}><IoClose size={22} /></button>
                </div>

                {cartItems.length === 0 ? (
                    <div className="cart-empty">
                        <p>Your cart is empty</p>
                    </div>
                ) : (
                    <>
                        <div className="cart-items">
                            {cartItems.map(item => (
                                <div key={item._id} className="cart-item">
                                    <img src={item.image} alt={item.title} />
                                    <div className="cart-item-info">
                                        <p className="cart-item-title">{item.title}</p>
                                        <p className="cart-item-price">PKR {(item.price * item.qty).toLocaleString()}</p>
                                        <div className="cart-item-qty">
                                            <button onClick={() => updateQty(item._id, item.qty - 1)}>−</button>
                                            <span>{item.qty}</span>
                                            <button onClick={() => updateQty(item._id, item.qty + 1)}>+</button>
                                        </div>
                                    </div>
                                    <button className="cart-item-remove" onClick={() => removeFromCart(item._id)}>
                                        <IoClose size={16} />
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="cart-footer">
                            <div className="cart-total">
                                <span>TOTAL</span>
                                <span>PKR {totalPrice.toLocaleString()}</span>
                            </div>
                            <button className="cart-checkout">PROCEED TO CHECKOUT</button>
                            <button className="cart-clear" onClick={clearCart}>CLEAR CART</button>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}

export default CartDrawer
