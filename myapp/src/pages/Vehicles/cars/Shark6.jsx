import CarPage from './CarPage'

const data = {
  name: "BYD SHARK 6",
  type: "PHEV Pickup Truck",
  tagline: "World's No.1 PHEV — Built for Every Terrain",
  price: "PKR 19,950,000",
  heroImage: "/byd-shark-angle.webp",
  overviewImage: "/byd-shark-angle.webp",
  overviewTitle: "Power Meets Adventure",
  overviewDesc: "The BYD Shark 6 is Pakistan's biggest PHEV pickup truck. With the Super Dual Mode Off-Road Platform, it combines a ladder frame chassis with a high-performance hybrid architecture delivering 436 HP, 800 KM combined range, and 2,500 KG towing capacity.",
  specs: [
    { value: "436 HP", label: "Total Power" },
    { value: "800 KM", label: "Combined Range" },
    { value: "5.7s", label: "0-100 km/h" },
    { value: "650 NM", label: "Torque" },
    { value: "2,500 KG", label: "Towing Capacity" },
    { value: "230 mm", label: "Ground Clearance" },
  ],
  features: [
    { image: "/feature-01.webp", title: "ELECTRIC HYBRID", desc: "World's first longitudinal EHS drive assembly." },
    { image: "/feature-02.webp", title: "CELL TO CHASSIS", desc: "Increases structural rigidity by 22%." },
    { image: "/feature-03.webp", title: "OFF-ROAD READY", desc: "Mud, Snow & Sand drivetrain modes." },
    { image: "/feature-04.webp", title: "V2L FUNCTION", desc: "Use vehicle battery as external power source." },
  ],
}

const Shark6 = () => <CarPage car={data} />
export default Shark6
