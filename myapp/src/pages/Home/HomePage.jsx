import { Link } from 'react-router-dom'
import { HiShieldCheck } from 'react-icons/hi'
import { MdElectricBolt } from 'react-icons/md'
import { PiLeafFill } from 'react-icons/pi'
import './HomePage.css'

// ── 2. Hero ──────────────────────────────────────────────
const Hero = () => (
  <section className="hp-hero">
    <img src="/byd-shark-angle.webp" alt="BYD Hero" className="hp-hero-video" />
    <div className="hp-hero-overlay" />
    <div className="hp-hero-content">
      <span className="hp-hero-tag">NEW ENERGY VEHICLES — PAKISTAN</span>
      <h1>Build Your Dreams —<br />The Future of Electric<br />Mobility in Pakistan</h1>
      <p>Experience luxury, performance, and zero-emissions with world-leading New Energy Vehicles.</p>
      <div className="hp-hero-btns">
        <Link to="/vehicles" className="btn-primary">EXPLORE VEHICLES</Link>
        <Link to="/store" className="btn-secondary">VISIT STORE</Link>
      </div>
    </div>
  </section>
)

// ── 3. Vehicles Showcase ─────────────────────────────────
const vehicles = [
  {
    name: "BYD SEAL",
    type: "Luxury EV Sedan",
    tagline: "Performance Meets Elegance",
    specs: ["570 km Range", "0-100 in 3.8s", "Blade Battery"],
    price: "PKR 14,500,000",
    image: "/seal-new.webp",
    slug: "seal",
  },
  {
    name: "BYD ATTO 3",
    type: "Dynamic EV SUV",
    tagline: "Designed for Modern Adventures",
    specs: ["420 km Range", "Panoramic Sunroof", "Smart Cockpit"],
    price: "PKR 11,800,000",
    image: "/atto-3.webp",
    slug: "atto-3",
  },
  {
    name: "BYD SEALION 7",
    type: "Plug-in Hybrid SUV",
    tagline: "Unmatched Efficiency & Long Range",
    specs: ["1,100 km Combined Range", "Super DM-i Technology"],
    price: "PKR 12,500,000",
    image: "/sealion-7.webp",
    slug: "sealion-7",
  },
]

const VehiclesShowcase = () => (
  <section className="hp-vehicles">
    <div className="hp-section-header">
      <h2>DISCOVER BYD ELECTRIC LINEUP</h2>
    </div>
    <div className="hp-vehicles-grid">
      {vehicles.map((car, i) => (
        <div key={i} className="hp-vehicle-card">
          <div className="hp-vehicle-img">
            <img src={car.image} alt={car.name} />
          </div>
          <div className="hp-vehicle-info">
            <span className="hp-vehicle-type">{car.type}</span>
            <h3>{car.name}</h3>
            <p className="hp-vehicle-tagline">{car.tagline}</p>
            <ul className="hp-vehicle-specs">
              {car.specs.map((s, j) => <li key={j}>{s}</li>)}
            </ul>
            <p className="hp-vehicle-price">{car.price} <span>Estimated Starting</span></p>
            <Link to={`/vehicles/${car.slug}`} className="btn-outline">VIEW DETAILS →</Link>
          </div>
        </div>
      ))}
    </div>
  </section>
)

// ── 4. Technology Highlights ─────────────────────────────
const features = [
  {
    icon: <MdElectricBolt size={32} color="#1db954" />,
    title: "Ultra-Safe Blade Battery",
    desc: "Industry-leading safety standards with extreme nail-penetration test compliance and thermal stability.",
  },
  {
    icon: <HiShieldCheck size={32} color="#1db954" />,
    title: "e-Platform 3.0",
    desc: "Purpose-built electric vehicle architecture providing enhanced rigidity, cabin space, and efficiency.",
  },
  {
    icon: <PiLeafFill size={32} color="#1db954" />,
    title: "Green Energy Mobility",
    desc: "Zero direct carbon emissions, contributing to a cleaner and greener environment for Pakistan.",
  },
]

const TechHighlights = () => (
  <section className="hp-tech">
    <div className="hp-section-header">
      <h2>WHY CHOOSE BYD?</h2>
    </div>
    <div className="hp-tech-grid">
      {features.map((f, i) => (
        <div key={i} className="hp-tech-card">
          <span className="hp-tech-icon">{f.icon}</span>
          <h4>{f.title}</h4>
          <p>{f.desc}</p>
        </div>
      ))}
    </div>
  </section>
)

// ── 5. Store Preview ─────────────────────────────────────
const storeItems = [
  { name: "BYD 7kW Home Wallbox Charger", image: "/charging-sec-img-1.webp" },
  { name: "All-Weather Vehicle Floor Mats", image: "/floormate.webp" },
  { name: "Smart Remote Key Fob & Accessories", image: "/accessirios.webp" },
]

const StorePreview = () => (
  <section className="hp-store">
    <div className="hp-store-left">
      <h2>OFFICIAL BYD STORE</h2>
      <p>Reserve your vehicle online or browse genuine accessories and home charging stations.</p>
      <Link to="/store" className="btn-primary">GO TO FULL STORE</Link>
    </div>
    <div className="hp-store-items">
      {storeItems.map((item, i) => (
        <div key={i} className="hp-store-item">
          <div className="hp-store-item-img">
            <img src={item.image} alt={item.name} />
          </div>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  </section>
)

// ── Page ─────────────────────────────────────────────────
const HomePage = () => (
  <>
    <Hero />
    <VehiclesShowcase />
    <TechHighlights />
    <StorePreview />
  </>
)

export default HomePage
