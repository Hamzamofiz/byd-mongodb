import { useState, useEffect, useRef } from 'react'
import { IoClose } from 'react-icons/io5'
import { useAuth } from '../context/AuthContext'
import './LoginModal.css'

const LoginModal = ({ onClose }) => {
  const [tab, setTab] = useState('login')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const modalRef = useRef()
  const { login, register } = useAuth()

  useEffect(() => {
    const handleOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) onClose()
    }
    document.addEventListener('mousedown', handleOutside)
    return () => document.removeEventListener('mousedown', handleOutside)
  }, [onClose])

  const handleLogin = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const email = e.target.email.value
      const password = e.target.password.value
      await login(email, password)
      onClose()
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  const handleRegister = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const name = e.target.name.value
      const email = e.target.email.value
      const password = e.target.password.value
      await register(name, email, password)
      onClose()
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="modal-backdrop">
      <div className="modal-box" ref={modalRef}>

        <button className="modal-close" onClick={onClose}><IoClose size={22} /></button>

        <div className="modal-tabs">
          <button className={tab === 'login' ? 'active' : ''} onClick={() => { setTab('login'); setError('') }}>LOGIN</button>
          <button className={tab === 'signup' ? 'active' : ''} onClick={() => { setTab('signup'); setError('') }}>SIGN UP</button>
        </div>

        {error && <p className="modal-error">{error}</p>}

        {tab === 'login' ? (
          <form className="modal-form" onSubmit={handleLogin}>
            <div className="form-group">
              <label>EMAIL</label>
              <input name="email" type="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label>PASSWORD</label>
              <input name="password" type="password" placeholder="Enter your password" required />
            </div>
            <button type="submit" className="modal-btn" disabled={loading}>
              {loading ? 'LOGGING IN...' : 'LOGIN'}
            </button>
            <p className="modal-switch">Don't have an account? <span onClick={() => setTab('signup')}>Sign Up</span></p>
          </form>
        ) : (
          <form className="modal-form" onSubmit={handleRegister}>
            <div className="form-group">
              <label>FULL NAME</label>
              <input name="name" type="text" placeholder="Enter your full name" required />
            </div>
            <div className="form-group">
              <label>EMAIL</label>
              <input name="email" type="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label>PASSWORD</label>
              <input name="password" type="password" placeholder="Create a password" required />
            </div>
            <button type="submit" className="modal-btn" disabled={loading}>
              {loading ? 'CREATING...' : 'CREATE ACCOUNT'}
            </button>
            <p className="modal-switch">Already have an account? <span onClick={() => setTab('login')}>Login</span></p>
          </form>
        )}

      </div>
    </div>
  )
}

export default LoginModal
