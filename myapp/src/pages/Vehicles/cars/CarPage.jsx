import { Link } from 'react-router-dom'
import './CarPage.css'

const CarPage = ({ car }) => {
  return (
    <div className="car-page">

      {/* Hero */}
      <div className="car-hero">
        <img src={car.heroImage} alt={car.name} className="car-hero-video" />
        <div className="car-hero-overlay">
          <span className="car-hero-type">{car.type}</span>
          <h1>{car.name}</h1>
          <p className="car-hero-tagline">{car.tagline}</p>
        </div>
      </div>

      {/* Key Specs */}
      <div className="car-specs-bar">
        {car.specs.map((spec, i) => (
          <div key={i} className="spec-item">
            <strong>{spec.value}</strong>
            <span>{spec.label}</span>
          </div>
        ))}
      </div>

      {/* Overview */}
      <div className="car-overview">
        <div className="car-overview-text">
          <h2>{car.overviewTitle}</h2>
          <p>{car.overviewDesc}</p>
        </div>
        <div className="car-overview-img">
          <img src={car.overviewImage} alt={car.name} />
        </div>
      </div>

      {/* Features */}
      <div className="car-features">
        <h2>KEY FEATURES</h2>
        <div className="features-grid">
          {car.features.map((f, i) => (
            <div key={i} className="feature-card">
              <img src={f.image} alt={f.title} />
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Price & CTA */}
      <div className="car-cta">
        <div className="car-cta-price">
          <span>Starting From</span>
          <h2>{car.price}</h2>
        </div>
      </div>

      {/* Back link */}
      <div className="car-back">
        <Link to="/vehicles">← BACK TO ALL VEHICLES</Link>
      </div>

    </div>
  )
}

export default CarPage
