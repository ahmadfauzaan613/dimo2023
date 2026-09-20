import { Link } from 'react-router-dom'
import Title from '../../Components/Title'

const sections = [
  { to: '/admin/penawaran', index: '01', title: 'Penawaran properti', text: 'Tambah dan perbarui unit yang tampil di halaman utama.' },
  { to: '/admin/pengalaman', index: '02', title: 'Pengalaman proyek', text: 'Kelola arsip pekerjaan beserta nilai proyeknya.' },
  { to: '/admin/portofolio', index: '03', title: 'Dokumentasi visual', text: 'Atur foto yang muncul pada halaman portofolio.' },
  { to: '/admin/user', index: '04', title: 'Akses pengguna', text: 'Kelola akun yang dapat membuka dashboard.' },
]

function Dashboard() {
  return (
    <section className="admin-dashboard">
      <p className="admin-eyebrow">Ringkasan pengelolaan</p>
      <Title title="Pilih konten yang ingin diperbarui." />
      <p className="admin-dashboard-intro">Mode dummy aktif. Perubahan disimpan secara lokal di browser ini dan langsung tampil pada halaman publik.</p>
      <div className="admin-module-list">{sections.map((item) => <Link key={item.to} to={item.to}><span>{item.index}</span><div><h2>{item.title}</h2><p>{item.text}</p></div><span className="material-symbols-outlined" aria-hidden="true">arrow_forward</span></Link>)}</div>
    </section>
  )
}

export default Dashboard
