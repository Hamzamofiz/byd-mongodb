import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './nav.css'
import { FaRegUserCircle } from 'react-icons/fa'
import { HiMenuAlt3 } from 'react-icons/hi'
import { IoClose } from 'react-icons/io5'
import { BsCart3 } from 'react-icons/bs'
import LoginModal from './LoginModal'
import CartDrawer from './CartDrawer'
import { useAuth } from '../context/AuthContext'
import { useCart } from '../context/CartContext'

const Nav = ({
  logo = "/download.png",
  links = [
    { label: "HOME", href: "/" },
    { label: "VEHICLES", href: "/vehicles" },
    { label: "STORE", href: "/store" },
  ],
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [showCart, setShowCart] = useState(false)
  const { user, logout } = useAuth()
  const { totalItems } = useCart()
  const location = useLocation()

  // route change hone par menu band karo aur scroll reset karo
  useEffect(() => {
    setIsMenuOpen(false)
    document.body.style.overflow = 'unset'
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset'
    return () => { document.body.style.overflow = 'unset' }
  }, [isMenuOpen])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <>
      <nav>
        <div className="logo"><img src={logo} alt="logo" /></div>

        <div className="hamburger" onClick={toggleMenu}>
          {isMenuOpen ? <IoClose size={30} /> : <HiMenuAlt3 size={30} />}
        </div>

        <ul className={`links ${isMenuOpen ? 'active' : ''}`}>
          {links.map((link, i) => (
            <li key={i}><Link to={link.href} className="link" onClick={toggleMenu}>{link.label}</Link></li>
          ))}
        </ul>

        <div className="nav-icons">
          {user ? (
            <div className="nav-user">
              <span className="nav-username"><FaRegUserCircle size={18} /> {user.name}</span>
              <button className="nav-logout" onClick={logout}>LOGOUT</button>
            </div>
          ) : (
            <button className="nav-icon" onClick={() => setShowLogin(true)}>
              <FaRegUserCircle size={22} />
            </button>
          )}
          <Link to="/store" className="nav-icon"><BsCart3 size={22} /></Link>
          <button className="nav-icon cart-btn" onClick={() => setShowCart(true)}>
            <BsCart3 size={22} />
            {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
          </button>
        </div>
      </nav>

      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
      {showCart && <CartDrawer onClose={() => setShowCart(false)} />}
    </>
  )
}

export default Nav
