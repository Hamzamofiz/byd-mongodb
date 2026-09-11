import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/nav'
import Footer from './components/footer'
import HomePage from './pages/Home/HomePage'
import VehiclesPage from './pages/Vehicles/VehiclesPage'
import StorePage from './pages/Store/StorePage'
import Shark6 from './pages/Vehicles/cars/Shark6'
import Seal from './pages/Vehicles/cars/Seal'
import Atto3 from './pages/Vehicles/cars/Atto3'
import Atto2 from './pages/Vehicles/cars/Atto2'
import Sealion7 from './pages/Vehicles/cars/Sealion7'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/vehicles" element={<VehiclesPage />} />
        <Route path="/vehicles/shark-6" element={<Shark6 />} />
        <Route path="/vehicles/seal" element={<Seal />} />
        <Route path="/vehicles/atto-3" element={<Atto3 />} />
        <Route path="/vehicles/atto-2" element={<Atto2 />} />
        <Route path="/vehicles/sealion-7" element={<Sealion7 />} />
        <Route path="/store" element={<StorePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
