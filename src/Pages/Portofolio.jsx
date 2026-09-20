import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TitlePage from '../Components/TitlePage'
import { getAllPortofolio } from '../Redux/Portofolio/action'

function Portofolio() {
  const dispatch = useDispatch()
  const { allEntity, loading, error } = useSelector((state) => state.portofolio)
  useEffect(() => { dispatch(getAllPortofolio()) }, [dispatch])

  return (
    <section className="inner-page section-shell">
      <TitlePage index="Portofolio / Dokumentasi" judul="Ruang, bangunan, dan pekerjaan lapangan." intro="Dokumentasi visual dari pekerjaan yang telah masuk ke dalam arsip PT Telaga Selat Samudra." />
      {loading && <div className="data-state" role="status"><span className="loading-line" />Memuat dokumentasi…</div>}
      {!loading && error && <div className="data-state data-error" role="alert"><strong>Portofolio belum dapat dimuat.</strong><span>{error}</span><button type="button" onClick={() => dispatch(getAllPortofolio())}>Coba lagi</button></div>}
      {!loading && !error && allEntity.length === 0 && <div className="data-state"><strong>Dokumentasi belum tersedia.</strong><span>Silakan kembali lagi atau hubungi tim kami untuk melihat profil proyek.</span></div>}
      {!loading && !error && allEntity.length > 0 && <div className="portfolio-grid">{allEntity.map((item, index) => <figure key={item.id || item.gambar} className={index % 5 === 0 ? 'portfolio-wide' : ''}><img src={item.gambar} alt={item.nama_portofolio || `Dokumentasi proyek ${index + 1}`} loading="lazy" />{item.nama_portofolio && <figcaption>{item.nama_portofolio}</figcaption>}</figure>)}</div>}
    </section>
  )
}

export default Portofolio
