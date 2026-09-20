function CardPengalaman({ gambar, judul, value }) {
  return (
    <article className="experience-card">
      <img src={gambar} alt={`Dokumentasi ${judul || 'proyek'}`} loading="lazy" />
      <div><h2>{judul || 'Proyek konstruksi'}</h2>{value && <p><span>Nilai proyek</span>{value}</p>}</div>
    </article>
  )
}

export default CardPengalaman
