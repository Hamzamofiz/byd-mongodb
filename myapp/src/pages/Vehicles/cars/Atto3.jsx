import CarPage from './CarPage'

const data = {
  name: "BYD ATTO 3",
  type: "Electric SUV",
  tagline: "Explore More — The Smart Electric SUV",
  price: "PKR 11,500,000",
  heroImage: "/atto-3.webp",
  overviewImage: "/atto-3-transparent-new.webp",
  overviewTitle: "Smart, Safe & Spacious",
  overviewDesc: "The BYD Atto 3 is a feature-packed electric SUV designed for modern families. With 480 KM range, a 12.8-inch rotating touchscreen, and a 5-star ANCAP safety rating, it blends practicality with cutting-edge technology.",
  specs: [
    { value: "204 HP", label: "Total Power" },
    { value: "410 KM", label: "NEDC Range" },
    { value: "7.9s", label: "0-100 km/h" },
    { value: "310 NM", label: "Torque" },
    { value: "49.92 kWh", label: "Battery" },
    { value: "5 Star", label: "ANCAP Safety" },
  ],
  features: [
    { image: "/atto3-box-img-1.webp", title: "INFOTAINMENT", desc: `15.6" rotating display with Wireless Apple Carplay® Android Auto™.` },
    { image: "/atto3-box-img-2.webp", title: "PREMIUM INTERIOR", desc: "Two-Toned, Soft Touch, premium materials creating an up-market cabin." },
    { image: "/atto3-box-img-3.webp", title: "PANORAMIN SUNROOF", desc: "Electric sliding, anti-trap panoramic sunroof." },
    { image: "/atto3-box-img-4.webp", title: "UPTO 1,340 LITERS OF BOOT SPACE ", desc: "One-Touch Electric tailgate." },
  ],
}

const Atto3 = () => <CarPage car={data} />
export default Atto3
