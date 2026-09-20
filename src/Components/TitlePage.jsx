function TitlePage({ index, judul, intro }) {
  return (
    <header className="page-heading">
      <p className="section-index">{index}</p>
      <h1>{judul}</h1>
      {intro && <p>{intro}</p>}
    </header>
  )
}

export default TitlePage
