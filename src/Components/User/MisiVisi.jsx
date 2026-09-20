const legalities = [
  ['SK Menkumham', 'AHU-0096844.AH.01.11'],
  ['SIUP', '1954/M.04.01/BPTPM/X/2016'],
  ['NPWP', '80.301.434.9-211.000'],
  ['APERSI', '15.18.0236'],
  ['TDP', '04.01.1.46.11483'],
]

function MisiVisi() {
  return (
    <section className="principles-section" aria-labelledby="principles-title">
      <div className="section-shell principles-grid">
        <div className="principles-intro">
          <p className="section-index">02 / Cara kami bekerja</p>
          <h2 id="principles-title">Pekerjaan yang jelas sejak awal.</h2>
          <p>Kami mengutamakan pelayanan profesional, pelaksanaan yang mengikuti ketentuan, serta hasil bangunan yang bermanfaat bagi penggunanya.</p>
        </div>
        <div className="vision-block">
          <span>Visi</span>
          <blockquote>Mengembangkan kawasan melalui perumahan dan ruang usaha yang menjawab kebutuhan masyarakat.</blockquote>
        </div>
        <div className="mission-block">
          <span>Misi kerja</span>
          <ol>
            <li><strong>01</strong> Mendengar kebutuhan dan menjelaskan pilihan pekerjaan secara terbuka.</li>
            <li><strong>02</strong> Melaksanakan konstruksi sesuai standar dan peraturan yang berlaku.</li>
            <li><strong>03</strong> Menjaga mutu bangunan agar relevan untuk penggunaan jangka panjang.</li>
          </ol>
        </div>
        <div className="legal-block">
          <p>Legalitas perusahaan</p>
          <dl>{legalities.map(([term, value]) => <div key={term}><dt>{term}</dt><dd>{value}</dd></div>)}</dl>
        </div>
      </div>
    </section>
  )
}

export default MisiVisi
