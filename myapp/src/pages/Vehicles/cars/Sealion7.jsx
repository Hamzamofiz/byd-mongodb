import CarPage from './CarPage'

const data = {
  name: "BYD SEALION 7",
  type: "Electric SUV",
  tagline: "The Ultimate Electric SUV Experience",
  price: "PKR 16,500,000",
  heroImage: "/sealion-7.webp",
  overviewImage: "/sealion-7.webp",
  overviewTitle: "Powerful. Refined. Electric.",
  overviewDesc: "The BYD Sealion 7 is a premium electric SUV that combines breathtaking performance with luxurious comfort. With 390 HP AWD, 502 KM range, and a sophisticated interior, it sets a new benchmark for electric SUVs in Pakistan.",
  specs: [
    { value: "390 HP", label: "Total Power" },
    { value: "502 KM", label: "NEDC Range" },
    { value: "4.5s", label: "0-100 km/h" },
    { value: "620 NM", label: "Torque" },
    { value: "91.3 kWh", label: "Battery" },
    { value: "5 Star", label: "ANCAP Safety" },
  ],
  features: [
    { image: "/sealion-7-box-img-1.webp", title: "AWD PERFORMANCE", desc: "Dual motor AWD with 390 HP for thrilling acceleration." },
    { image: "/sealion-7-box-img-2.webp", title: "PREMIUM INTERIOR", desc: "15.6-inch rotating screen with premium Dynaudio sound." },
    { image: "/sealion-7-box-img-3.webp", title: "BLADE BATTERY", desc: "91.3 kWh Blade Battery for maximum range." },
    { image: "/sealion-7-box-img-4.webp", title: "INTELLIGENT ADAS", desc: "Full Level 2 autonomous driving assistance suite." },
  ],
}

const Sealion7 = () => <CarPage car={data} />
export default Sealion7
