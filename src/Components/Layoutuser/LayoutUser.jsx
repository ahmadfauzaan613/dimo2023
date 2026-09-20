import Whatsapp from '../../Images/whatsapp.png'
import Navbar from './Navbar'
import Footer from './Footer'
import Contacs from './Contacs'

function LayoutUser({ children }) {
  return (
    <div className="site-frame">
      <a className="skip-link" href="#main-content">Lewati ke konten utama</a>
      <Navbar />
      <main id="main-content">{children}</main>
      <Contacs />
      <Footer />
      <a className="whatsapp-float" href="https://wa.me/6285263238701?text=Halo%20PT%20Telaga%20Selat%20Samudra%2C%20saya%20ingin%20berkonsultasi%20tentang%20proyek." target="_blank" rel="noopener noreferrer" aria-label="Konsultasi melalui WhatsApp">
        <img src={Whatsapp} alt="" />
        <span>Konsultasi proyek</span>
      </a>
    </div>
  )
}

export default LayoutUser
