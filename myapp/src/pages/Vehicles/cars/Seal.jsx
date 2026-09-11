import CarPage from './CarPage'

const data = {
  name: "BYD SEAL",
  type: "Electric Sedan",
  tagline: "Performance Redefined — Pure Electric Elegance",
  price: "PKR 14,790,000",
  heroImage: "/byd-seal-main.webp",
  overviewImage: "/seal-new.webp",
  overviewTitle: "Born to Perform",
  overviewDesc: "The BYD Seal is a high-performance electric sedan built on BYD's e-Platform 3.0. With 530 HP in AWD configuration and a 0-100 time of 3.8 seconds, it delivers supercar-level performance with everyday practicality and a 570 KM range.",
  specs: [
    { value: "530 HP", label: "Total Power" },
    { value: "510 KM", label: "NEDC Range" },
    { value: "7.5s", label: "0-100 km/h" },
    { value: "670 NM", label: "Torque" },
    { value: "61.44 kWh", label: "Battery" },
    { value: "150 kW", label: "Fast Charging" },
  ],
  features: [
    { image: "/seal-box-img-1.webp", title: "HEAD-UP DISPALY", desc: "Critical information in your dash vision at all time." },
    { image: "/seal-box-img-2.webp", title: "ADVANCE INTELLIGENT COCKPIT", desc: "Ventilation, memory and electirc adjustment function." },
    { image: "/seal-box-img-3.webp", title: "SILVER-PLATED PANORAMIC GLASS ROOF", desc: "sliver plated panoramic glass roof." },
    { image: "/seal-box-img-4.webp", title: "ADVENCE DRIVER ASSISTANCE SYSTEM", desc: "intelligent driveing systems & multi-sensor." },
  ],
}

const Seal = () => <CarPage car={data} />
export default Seal
