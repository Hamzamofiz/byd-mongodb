import { useState } from 'react'
import './StorePage.css'

const products = [
  {
    id: 1,
    name: "BYD Racing Jacket",
    category: "Apparel",
    price: "PKR 8,500",
    image: "/jacket.png",
    colors: ["#000000", "#1a1a2e", "#c0392b"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 2,
    name: "BYD Classic T-Shirt",
    category: "Apparel",
    price: "PKR 2,500",
    image: "/byd-tshirt.jpg",
    colors: ["#000000", "#ffffff", "#1db954"],
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: 3,
    name: "BYD Water Bottle",
    category: "Accessories",
    price: "PKR 1,800",
    image: "/bottel.jpg",
    colors: ["#000000", "#silver", "#1a1a2e"],
    sizes: ["500ml", "750ml"],
  },
  {
    id: 4,
    name: "BYD Polo Shirt",
    category: "Apparel",
    price: "PKR 3,500",
    image: "/polo.jpg",
    colors: ["#000000", "#ffffff"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 5,
    name: "BYD Cap",
    category: "Accessories",
    price: "PKR 1,200",
    image: "/pair-cap-image.png",
    colors: ["#000000", "#1a1a2e"],
    sizes: ["One Size"],
  },
  {
    id: 6,
    name: "BYD Hoodie",
    category: "Apparel",
    price: "PKR 5,500",
    image: "/hoodie.jpg",
    colors: ["#000000", "#333333"],
    sizes: ["S", "M", "L", "XL"],
  },
]

const categories = ["All", "Apparel", "Accessories"]

const StoreCard = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(null)
  const [selectedColor, setSelectedColor] = useState(0)

  return (
    <div className="store-card">
      <div className="store-card-img">
        <img src={product.image} alt={product.name} />
        <span className="store-category">{product.category}</span>
      </div>
      <div className="store-card-info">
        <h3>{product.name}</h3>

        <div className="color-options">
          {product.colors.map((color, i) => (
            <button
              key={i}
              className={`color-dot ${selectedColor === i ? 'active' : ''}`}
              style={{ background: color }}
              onClick={() => setSelectedColor(i)}
            />
          ))}
        </div>

        <div className="size-options">
          {product.sizes.map((size, i) => (
            <button
              key={i}
              className={`size-btn ${selectedSize === size ? 'active' : ''}`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>

        <div className="store-card-bottom">
          <span className="store-price">{product.price}</span>
          <button className="add-to-cart">ADD TO CART</button>
        </div>
      </div>
    </div>
  )
}

const StorePage = () => {
  const [activeCategory, setActiveCategory] = useState("All")

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

      <div className="store-grid">
        {filtered.map(product => (
          <StoreCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default StorePage
