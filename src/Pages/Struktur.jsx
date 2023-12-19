import React from 'react'
import TitlePage from '../Components/TitlePage'
import StrukturImg from '../Images/struktur.png'

function Struktur() {
  return (
    <div class="desktop3:px-[11%] desktop:px-[7%] desktop2:px-[7%] py-[2rem] phone:px-[5%] tablet:px-[5%] laptop:px-[8%]">
      <TitlePage judul={'Struktur Organisasi'} />
      <img src={StrukturImg} alt="" className="w-full h-full mt-4" />
    </div>
  )
}

export default Struktur
