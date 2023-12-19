import React from 'react'
import TentangKami from '../Components/User/TentangKami'
import MisiVisi from '../Components/User/MisiVisi'
import Service from '../Components/User/Service'
import Penawaran from '../Components/User/Penawaran'
import Hero from '../Components/User/Hero'

function Home() {
  return (
    <div>
      <Hero />
      <TentangKami />
      <MisiVisi />
      <Service />
      <Penawaran />
    </div>
  )
}

export default Home
