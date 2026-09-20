import Background from '../../Images/IMG-8172.JPG'

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <img className="hero-image" src={Background} alt="Visualisasi kawasan perumahan satu lantai" />
      <div className="hero-shade" />
      <div className="shell hero-content">
        <p className="hero-kicker">Kontraktor dan pengembang properti di Pekanbaru</p>
        <h1 id="hero-title">Bangunan yang dipikirkan sampai <em>detail terakhir.</em></h1>
        <p className="hero-summary">PT Telaga Selat Samudra menangani perencanaan, konstruksi, renovasi, perizinan, dan pekerjaan akhir bangunan dalam satu koordinasi.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="https://wa.me/6285263238701?text=Halo%2C%20saya%20ingin%20membahas%20rencana%20proyek." target="_blank" rel="noopener noreferrer">Bicarakan proyek Anda</a>
          <a className="text-link" href="#layanan">Lihat bidang layanan <span aria-hidden="true">↓</span></a>
        </div>
      </div>
      <div className="hero-facts" aria-label="Informasi perusahaan">
        <div className="shell fact-row">
          <p><strong>Sejak 2016</strong><span>Aktif di bidang konstruksi dan properti</span></p>
          <p><strong>Pekanbaru, Riau</strong><span>Berbasis di Rumbai</span></p>
          <p><strong>APERSI</strong><span>Nomor anggota 15.18.0236</span></p>
        </div>
      </div>
    </section>
  )
}

export default Hero
