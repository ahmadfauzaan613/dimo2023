import { Link } from 'react-router-dom'
import Logo from '../../Images/Logo.png'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <img src={Logo} alt="Logo PT Telaga Selat Samudra" />
          <p>PT Telaga Selat Samudra</p>
          <span>Merencanakan, membangun, dan menyelesaikan detail bangunan di Pekanbaru.</span>
        </div>
        <div className="footer-links" aria-label="Tautan footer">
          <Link to="/pengalaman">Pengalaman</Link>
          <Link to="/portofolio">Portofolio</Link>
          <Link to="/struktur-organisasi">Organisasi</Link>
          <a href="/#kontak">Kontak</a>
        </div>
        <p className="footer-meta">© {new Date().getFullYear()} PT Telaga Selat Samudra</p>
      </div>
    </footer>
  )
}

export default Footer
