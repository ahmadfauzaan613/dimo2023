import TitlePage from '../Components/TitlePage'
import StrukturImg from '../Images/struktur.png'

function Struktur() {
  return (
    <section className="inner-page section-shell organization-page">
      <TitlePage index="Perusahaan / Organisasi" judul="Tanggung jawab yang tersusun jelas." intro="Struktur organisasi membantu setiap keputusan teknis, administrasi, dan pelaksanaan lapangan memiliki penanggung jawab yang tepat." />
      <figure className="organization-chart"><img src={StrukturImg} alt="Bagan struktur organisasi PT Telaga Selat Samudra" /><figcaption>Struktur organisasi PT Telaga Selat Samudra</figcaption></figure>
    </section>
  )
}

export default Struktur
