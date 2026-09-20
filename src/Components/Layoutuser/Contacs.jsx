import Phone from '../../Images/phone-call.png'
import Email from '../../Images/email.png'
import Location from '../../Images/location-pin.png'

const contacts = [
  { icon: Phone, label: 'Telepon dan WhatsApp', value: '0852 6323 8701', href: 'https://wa.me/6285263238701' },
  { icon: Email, label: 'Email', value: 'telagass7@gmail.com', href: 'mailto:telagass7@gmail.com' },
  { icon: Location, label: 'Kantor', value: 'Jl. Patria Sari IV, Umbansari, Rumbai, Pekanbaru, Riau', href: 'https://goo.gl/maps/BwxeQDE7ENKhfLm58' },
]

function Contacs() {
  return (
    <section id="kontak" className="contact-section" aria-labelledby="contact-title">
      <div className="contact-copy">
        <div className="contact-inner">
          <p className="section-index">05 / Mulai percakapan</p>
          <h2 id="contact-title">Ceritakan bangunan yang sedang Anda rencanakan.</h2>
          <p className="contact-lead">Sampaikan lokasi, jenis pekerjaan, dan gambaran kebutuhannya. Tim kami akan membantu menentukan langkah pembahasan berikutnya.</p>
          <div className="contact-list">
            {contacts.map((item) => (
              <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                <img src={item.icon} alt="" />
                <span><small>{item.label}</small>{item.value}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      <iframe className="contact-map" title="Lokasi kantor PT Telaga Selat Samudra" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.616966284393!2d101.41965881531496!3d0.575629563732576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d5ab6919a570b1%3A0x3bf751a98117c3e5!2sPT.%20Telaga%20Selat%20Samudera!5e0!3m2!1sen!2sid!4v1678705803464!5m2!1sen!2sid" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
    </section>
  )
}

export default Contacs
