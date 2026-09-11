import { useState, useEffect, useRef } from 'react'
import { IoClose } from 'react-icons/io5'
import './LoginModal.css'

const LoginModal = ({ onClose }) => {
  const [tab, setTab] = useState('login')
  const modalRef = useRef()

  useEffect(() => {
    const handleOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) onClose()
    }
    document.addEventListener('mousedown', handleOutside)
    return () => document.removeEventListener('mousedown', handleOutside)
  }, [onClose])

  return (
    <div className="modal-backdrop">
      <div className="modal-box" ref={modalRef}>

        <button className="modal-close" onClick={onClose}><IoClose size={22} /></button>

        {/* Tabs */}
        <div className="modal-tabs">
          <button className={tab === 'login' ? 'active' : ''} onClick={() => setTab('login')}>LOGIN</button>
          <button className={tab === 'signup' ? 'active' : ''} onClick={() => setTab('signup')}>SIGN UP</button>
        </div>

        {tab === 'login' ? (
          <form className="modal-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label>EMAIL</label>
              <input type="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label>PASSWORD</label>
              <input type="password" placeholder="Enter your password" required />
            </div>
            <a href="#" className="forgot-link">Forgot Password?</a>
            <button type="submit" className="modal-btn">LOGIN</button>
            <p className="modal-switch">Don't have an account? <span onClick={() => setTab('signup')}>Sign Up</span></p>
          </form>
        ) : (
          <form className="modal-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label>FULL NAME</label>
              <input type="text" placeholder="Enter your full name" required />
            </div>
            <div className="form-group">
              <label>EMAIL</label>
              <input type="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label>PHONE</label>
              <input type="tel" placeholder="+92 300 0000000" />
            </div>
            <div className="form-group">
              <label>PASSWORD</label>
              <input type="password" placeholder="Create a password" required />
            </div>
            <button type="submit" className="modal-btn">CREATE ACCOUNT</button>
            <p className="modal-switch">Already have an account? <span onClick={() => setTab('login')}>Login</span></p>
          </form>
        )}

      </div>
    </div>
  )
}

export default LoginModal
