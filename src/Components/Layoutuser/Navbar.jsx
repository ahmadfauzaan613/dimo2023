import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Logo from '../../Images/Logo.png'

const pageLinks = [
  { to: '/pengalaman', label: 'Pengalaman' },
  { to: '/portofolio', label: 'Portofolio' },
  { to: '/struktur-organisasi', label: 'Organisasi' },
]

function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => setOpen(false), [location.pathname, location.hash])

  useEffect(() => {
    const closeOnEscape = (event) => event.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [])

  return (
    <header className="site-header">
      <nav className="site-nav shell" aria-label="Navigasi utama">
        <Link className="brand" to="/" aria-label="PT Telaga Selat Samudra, beranda">
          <img src={Logo} alt="" />
          <span>
            <strong>Telaga Selat Samudra</strong>
            <small>Konstruksi &amp; properti</small>
          </span>
        </Link>
        <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="main-menu" aria-label={open ? 'Tutup menu' : 'Buka menu'} onClick={() => setOpen((value) => !value)}>
          <span aria-hidden="true">{open ? '×' : '☰'}</span>
        </button>
        <div id="main-menu" className={`nav-links ${open ? 'is-open' : ''}`}>
          <a href="/#tentang">Tentang</a>
          <a href="/#layanan">Layanan</a>
          {pageLinks.map((item) => (
            <NavLink key={item.to} to={item.to} className={({ isActive }) => (isActive ? 'is-active' : undefined)}>{item.label}</NavLink>
          ))}
          <a className="nav-contact" href="/#kontak">Hubungi kami</a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
