import { Link } from 'react-router-dom'
import LayoutUser from '../Components/Layoutuser/LayoutUser'

function NotFound() {
  return (
    <LayoutUser>
      <section className="not-found section-shell">
        <p className="section-index">404 / Halaman tidak ditemukan</p>
        <h1>Alamat ini tidak mengarah ke halaman yang tersedia.</h1>
        <p>Periksa kembali tautannya atau kembali ke halaman utama untuk melihat layanan dan informasi perusahaan.</p>
        <Link className="button button-primary" to="/">Kembali ke beranda</Link>
      </section>
    </LayoutUser>
  )
}

export default NotFound
