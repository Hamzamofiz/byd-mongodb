import { useState, useEffect } from 'react'
import api from '../../api/axios'
import { useCart } from '../../context/CartContext'
import './StorePage.css'

const categories = ["All", "Apparel", "Accessories", "Chargers", "Lifestyle"]

const StoreCard = ({ product }) => {
  const { addToCart } = useCart()
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    addToCart(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <div className="store-card">
      <div className="store-card-img">
        <img src={product.image} alt={product.title} />
        <span className="store-category">{product.category}</span>
      </div>
      <div className="store-card-info">
        <h3>{product.title}</h3>
        <p className="store-desc">{product.description}</p>
        <div className="store-card-bottom">
          <span className="store-price">PKR {product.price.toLocaleString()}</span>
          <button
            className={`add-to-cart ${added ? 'added' : ''}`}
            disabled={!product.inStock}
            onClick={handleAdd}
          >
            {!product.inStock ? 'OUT OF STOCK' : added ? '✓ ADDED' : 'ADD TO CART'}
          </button>
        </div>
      </div>
    </div>
  )
}

const StorePage = () => {
  const [products, setProducts] = useState([])
  const [activeCategory, setActiveCategory] = useState("All")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await api.get('/store')
        setProducts(data)
      } catch {
        setError('Failed to load products')
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  const filtered = activeCategory === "All"
    ? products
    : products.filter(p => p.category === activeCategory)

  return (
    <div className="store-page">
      <div className="store-hero">
        <h1>BYD STORE</h1>
        <p>Official BYD Pakistan Merchandise</p>
      </div>

      <div className="store-filters">
        {categories.map(cat => (
          <button
            key={cat}
            className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {loading && <p className="store-status">Loading products...</p>}
      {error && <p className="store-status">{error}</p>}

      <div className="store-grid">
        {filtered.map(product => (
          <StoreCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default StorePage
