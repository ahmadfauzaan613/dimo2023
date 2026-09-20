import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TitlePage from '../Components/TitlePage'
import CardPengalaman from '../Components/CardPengalaman'
import { getAllPengalaman } from '../Redux/Pengalaman/action'

function Pengalaman() {
  const dispatch = useDispatch()
  const { allEntity, loading, error } = useSelector((state) => state.pengalaman)
  useEffect(() => { dispatch(getAllPengalaman()) }, [dispatch])

  return (
    <section className="inner-page section-shell">
      <TitlePage index="Pengalaman / Proyek" judul="Pekerjaan yang pernah kami tangani." intro="Daftar berikut ditarik langsung dari arsip proyek perusahaan. Detail lebih lanjut dapat dibahas bersama tim kami." />
      {loading && <div className="data-state" role="status"><span className="loading-line" />Memuat pengalaman proyek…</div>}
      {!loading && error && <div className="data-state data-error" role="alert"><strong>Data proyek belum dapat dimuat.</strong><span>{error}</span><button type="button" onClick={() => dispatch(getAllPengalaman())}>Coba lagi</button></div>}
      {!loading && !error && allEntity.length === 0 && <div className="data-state"><strong>Arsip proyek belum tersedia.</strong><span>Hubungi tim kami untuk meminta profil pengalaman pekerjaan.</span></div>}
      {!loading && !error && allEntity.length > 0 && <div className="experience-grid">{allEntity.map((item) => <CardPengalaman key={item.id || item.gambar} gambar={item.gambar} judul={item.nama_rumah} value={item.project_value} />)}</div>}
    </section>
  )
}

export default Pengalaman
