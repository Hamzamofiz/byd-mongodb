import CarPage from './CarPage'

const data = {
  name: "BYD ATTO 2",
  type: "Electric SUV",
  tagline: "Compact. Smart. Unstoppable.",
  price: "PKR 9,500,000",
  heroImage: "/atto-2.webp",
  overviewImage: "/atto2-exterior-full-img-1.webp",
  overviewTitle: "City-Ready Electric SUV",
  overviewDesc: "The BYD Atto 2 is the perfect urban electric SUV. Compact yet spacious, it offers 400 KM range, a stylish interior with a 10.1-inch touchscreen, and BYD's proven Blade Battery safety — all at an accessible price point.",
  specs: [
    { value: "170 HP", label: "Total Power" },
    { value: "400 KM", label: "NEDC Range" },
    { value: "7.9s", label: "0-100 km/h" },
    { value: "250 NM", label: "Torque" },
    { value: "45.1 kWh", label: "Battery" },
    { value: "5 Star", label: "ANCAP Safety" },
  ],
  features: [
    { image: "/atto-2-box-img-1.webp", title: "SMART ACCESS", desc: "Seamless NFC keyless enrty using your card or phone." },
    { image: "/atto-2-box-img-2.webp", title: "WIRELESS CHARGING PAD", desc: "Everyday essentials, thoughtfully placed." },
    { image: "/atto-2-box-img-3.webp", title: "V2L FUNCTION", desc: "With Vechicle-to-load(V2L) functinality." },
    { image: "/atto-2-box-img-4.webp", title: "ERGONOMIC SEATING FOR ", desc: "The multifunctional seat offer expceptional." },
  ],
}

const Atto2 = () => <CarPage car={data} />
export default Atto2
