import Construction from '../../Images/Icon/Kontruksi.png'
import Architecture from '../../Images/Icon/Arsitektural.png'
import Interior from '../../Images/Icon/Interior.png'
import Utilities from '../../Images/Icon/Instalasi.png'

const services = [
  { number: '01', icon: Construction, title: 'Konstruksi & renovasi', intro: 'Pekerjaan bangunan baru maupun pembaruan bangunan yang sudah digunakan.', items: ['Rumah tinggal, ruko, kios, dan kantor', 'Renovasi serta perbaikan bangunan', 'Pengadaan pasir dan batu kerikil'] },
  { number: '02', icon: Architecture, title: 'Desain & dokumen', intro: 'Kebutuhan teknis disusun sebelum pekerjaan lapangan dimulai.', items: ['Gambar arsitektur dan pemodelan', 'Visualisasi render', 'Rencana anggaran biaya dan perizinan PBG'] },
  { number: '03', icon: Interior, title: 'Interior & penyelesaian', intro: 'Detail akhir yang membuat ruang siap dihuni atau digunakan.', items: ['Interior berbahan HPL', 'Kaca, teralis, partisi, dan moulding gypsum', 'Waterproofing membran'] },
  { number: '04', icon: Utilities, title: 'Utilitas bangunan', intro: 'Pekerjaan pendukung yang menentukan fungsi bangunan sehari-hari.', items: ['Instalasi listrik', 'Pembuatan sumur bor'] },
]

function Service() {
  return (
    <section id="layanan" className="services-section" aria-labelledby="services-title">
      <div className="section-shell">
        <div className="services-head">
          <div><p className="section-index">03 / Bidang layanan</p><h2 id="services-title">Cakupan kerja yang saling terhubung.</h2></div>
          <p>Mulai dari gambar awal sampai instalasi, setiap pekerjaan dibahas sesuai kebutuhan proyek dan kondisi lapangan.</p>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <article key={service.number} className="service-item">
              <span className="service-number">{service.number}</span>
              <img src={service.icon} alt="" />
              <div className="service-main"><h3>{service.title}</h3><p>{service.intro}</p></div>
              <ul>{service.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Service
