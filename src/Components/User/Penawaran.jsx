import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPenawaran } from '../../Redux/Penawaran/action'
import CardRumah from '../CardRumah'

function Penawaran() {
  const dispatch = useDispatch()
  const { allEntity, loading, error } = useSelector((state) => state.penawaran)

  useEffect(() => { dispatch(getAllPenawaran()) }, [dispatch])

  return (
    <section id="penawaran" className="offers-section section-shell" aria-labelledby="offers-title">
      <div className="offers-heading">
        <div><p className="section-index">04 / Pilihan properti</p><h2 id="offers-title">Rumah yang sedang ditawarkan.</h2></div>
        <p>Informasi ketersediaan, harga, dan detail unit dapat berubah. Hubungi admin untuk konfirmasi terbaru.</p>
      </div>
      {loading && <div className="data-state" role="status"><span className="loading-line" />Memuat penawaran properti…</div>}
      {!loading && error && <div className="data-state data-error" role="alert"><strong>Penawaran belum dapat dimuat.</strong><span>{error}</span><button type="button" onClick={() => dispatch(getAllPenawaran())}>Coba lagi</button></div>}
      {!loading && !error && allEntity.length === 0 && <div className="data-state"><strong>Belum ada unit yang ditampilkan.</strong><span>Silakan hubungi admin untuk menanyakan pilihan properti saat ini.</span></div>}
      {!loading && !error && allEntity.length > 0 && <div className="offers-grid">{allEntity.slice(0, 6).map((item) => <CardRumah key={item.id || item.gambar} {...item} />)}</div>}
    </section>
  )
}

export default Penawaran
