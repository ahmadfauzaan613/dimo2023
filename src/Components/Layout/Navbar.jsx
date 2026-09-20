import { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { Logout } from '../../Redux/User/action'
import Logo from '../../Images/Logo.png'

function Navbar() {
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const username = localStorage.getItem('username') || 'Administrator'

  useEffect(() => {
    const close = (event) => {
      if (event.key === 'Escape') setOpen(false)
      if (menuRef.current && !menuRef.current.contains(event.target)) setOpen(false)
    }
    document.addEventListener('keydown', close)
    document.addEventListener('mousedown', close)
    return () => { document.removeEventListener('keydown', close); document.removeEventListener('mousedown', close) }
  }, [])

  const onLogout = () => {
    dispatch(Logout())
    navigate('/admin')
  }

  return (
    <header className="admin-topbar">
      <Link className="admin-brand" to="/admin/dashboard"><img src={Logo} alt="" /><span><strong>Telaga Selat Samudra</strong><small>Content management</small></span></Link>
      <div className="admin-account" ref={menuRef}>
        <button type="button" aria-expanded={open} aria-haspopup="menu" onClick={() => setOpen((value) => !value)}><span className="material-symbols-outlined" aria-hidden="true">account_circle</span>{username}<span className="material-symbols-outlined" aria-hidden="true">expand_more</span></button>
        {open && <div className="admin-account-menu" role="menu"><Link to="/" role="menuitem">Buka website</Link><button type="button" role="menuitem" onClick={onLogout}>Keluar</button></div>}
      </div>
    </header>
  )
}

export default Navbar
