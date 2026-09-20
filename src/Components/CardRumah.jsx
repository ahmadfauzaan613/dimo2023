function CardRumah({ gambar, nama_rumah, harga_rumah, lokasi_rumah }) {
  const message = encodeURIComponent(`Halo, saya ingin menanyakan ketersediaan ${nama_rumah || 'properti yang ditawarkan'}.`)

  return (
    <article className="property-card">
      <div className="property-image"><img src={gambar} alt={`Tampilan ${nama_rumah || 'properti'}`} loading="lazy" /></div>
      <div className="property-content">
        <p className="property-location">{lokasi_rumah || 'Lokasi tersedia melalui admin'}</p>
        <h3>{nama_rumah || 'Unit properti'}</h3>
        <p className="property-price">{harga_rumah || 'Hubungi admin untuk harga'}</p>
        <a href={`https://wa.me/6285263238701?text=${message}`} target="_blank" rel="noopener noreferrer">Tanyakan unit ini</a>
      </div>
    </article>
  )
}

export default CardRumah
