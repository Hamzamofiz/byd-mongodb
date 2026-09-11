import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
import { FaRegUserCircle } from 'react-icons/fa'
import { HiMenuAlt3 } from 'react-icons/hi'
import { IoClose } from 'react-icons/io5'
import { BsCart3 } from 'react-icons/bs'
import LoginModal from './LoginModal'

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

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset'
    return () => { document.body.style.overflow = 'unset' }
  }, [isMenuOpen])

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
          <button className="nav-icon" onClick={() => setShowLogin(true)}>
            <FaRegUserCircle size={22} />
          </button>
          <Link to="/store" className="nav-icon"><BsCart3 size={22} /></Link>
        </div>
      </nav>

      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
    </>
  )
}

export default Nav
