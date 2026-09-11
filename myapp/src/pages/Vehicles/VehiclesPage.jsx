import { Link } from 'react-router-dom'
import './VehiclesPage.css'

const cars = [
  {
    name: "BYD SHARK 6",
    type: "PHEV Pickup Truck",
    price: "PKR 19,950,000",
    image: "/byd-shark-angle.webp",
    specs: ["436 HP", "800 KM Range", "5.7s 0-100"],
    slug: "shark-6",
  },
  {
    name: "BYD SEAL",
    type: "Electric Sedan",
    price: "PKR 14,790,000",
    image: "/seal-new.webp",
    specs: ["530 HP", "650 KM Range", "5.9s 0-100"],
    slug: "seal",
  },
  {
    name: "BYD ATTO 3",
    type: "Electric SUV",
    price: "PKR 8,990,000",
    image: "/atto-3.webp",
    specs: ["204 HP", "410 KM Range", "7.9s 0-100"],
    slug: "atto-3",
  },
  {
    name: "BYD ATTO 2",
    type: "Electric SUV",
    price: "PKR 9,500,000",
    image: "/atto-2.webp",
    specs: ["170 HP", "400 KM Range", "7.9s 0-100"],
    slug: "atto-2",
  },
  {
    name: "BYD SEALION 7",
    type: "Electric SUV",
    price: "PKR 16,500,000",
    image: "/sealion-7.webp",
    specs: ["390 HP", "502 KM Range", "4.5s 0-100"],
    slug: "sealion-7",
  },
]

const VehiclesPage = () => {
  return (
    <div className="vehicles-page">
      <div className="vehicles-hero">
        <h1>BYD VEHICLES</h1>
        <p>Explore the full lineup of BYD Pakistan</p>
      </div>

      <div className="vehicles-grid">
        {cars.map((car, i) => (
          <Link key={i} to={`/vehicles/${car.slug}`} className="vehicle-card-link">
            <div className="vehicle-card">
              <div className="vehicle-img">
                <img src={car.image} alt={car.name} />
              </div>
              <div className="vehicle-info">
                <span className="vehicle-type">{car.type}</span>
                <h2>{car.name}</h2>
                <div className="vehicle-specs">
                  {car.specs.map((spec, j) => (
                    <span key={j} className="spec-badge">{spec}</span>
                  ))}
                </div>
                <p className="vehicle-price">{car.price}</p>
                <div className="vehicle-btns">
                  <span className="btn-primary">EXPLORE →</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default VehiclesPage
