import ProjectImage from '../../Images/Mask2.png'

function TentangKami() {
  return (
    <section id="tentang" className="about-section section-shell" aria-labelledby="about-title">
      <div className="section-heading about-heading">
        <p className="section-index">01 / Tentang perusahaan</p>
        <h2 id="about-title">Satu tim untuk keputusan besar dan detail kecil.</h2>
      </div>
      <div className="about-copy">
        <p className="lead">PT Telaga Selat Samudra berdiri pada 2016 dan bergerak dalam jasa konstruksi serta pengembangan perumahan.</p>
        <p>Kami mendampingi pekerjaan sejak kebutuhan awal dirumuskan, gambar dan anggaran disusun, perizinan diproses, hingga bangunan siap digunakan. Koordinasi yang lebih ringkas membantu pemilik proyek memahami apa yang sedang dikerjakan dan apa langkah berikutnya.</p>
        <a className="inline-link" href="/pengalaman">Tinjau pengalaman proyek <span aria-hidden="true">↗</span></a>
      </div>
      <figure className="about-visual">
        <img src={ProjectImage} alt="Pekerja konstruksi sedang mengukur material di lokasi proyek" />
        <figcaption>Perumahan dan bangunan dirancang dengan mempertimbangkan fungsi, biaya, serta kondisi lokasi.</figcaption>
      </figure>
    </section>
  )
}

export default TentangKami
