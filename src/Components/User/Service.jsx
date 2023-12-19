import React from 'react'
import CardService from '../CardService'
import gambar1 from '../../Images/Icon/Kontruksi.png'
import gambar2 from '../../Images/Icon/Arsitektural.png'
import gambar3 from '../../Images/Icon/Administrasi.png'
import gambar4 from '../../Images/Icon/Instalasi.png'
import gambar5 from '../../Images/Icon/Waterproofing.png'
import gambar6 from '../../Images/Icon/Kaca.png'
import gambar7 from '../../Images/Icon/Interior.png'
import gambar8 from '../../Images/Icon/Material.png'
import gambar9 from '../../Images/Icon/Sumur.png'
import gambar10 from '../../Images/Icon/Partisi.png'

function Service() {
  const dataService = [
    { gambar: gambar1, judul: 'Kontruksi Bangunan', text: 'Melayani jasa konstruksi dan jasa renovasi bangunan, meliputi rumah tinggal, ruko, kios, gedung kantor, dsb' },
    { gambar: gambar2, judul: 'Arsitektural & Design', text: 'Melayani jasa gambar, modeling, render,dan penyusunan RAB proyek' },
    { gambar: gambar3, judul: 'Administrasi Perizinan', text: 'Melayani jasa pengurusan perizinan seperti IMB/PBG, Site Plan, dsb' },
    { gambar: gambar4, judul: 'Instalasi Listrik', text: 'Melayani jasa pemasangan dan instalasi listrik pada bangunan' },
    { gambar: gambar5, judul: 'Instalasi Waterproofing Membran', text: 'Melayani jasa pemasangan membran anti air (waterproofing) pada bangunan' },
    { gambar: gambar6, judul: 'Instalasi Kaca & Teralis', text: 'Melayani jasa pemasangan kaca dan teralis pada jendela, pintu, dsb' },
    { gambar: gambar7, judul: 'Jasa Interior', text: 'Melayani jasa perancangan dan pemasangan interior berbahan HPL seperti Pintu, Backdrop TV, Partisi, dsb' },
    { gambar: gambar8, judul: 'Pengadaan Material Sirtu', text: 'Melayani jasa pengadaan material pasir dan batu kerikil' },
    { gambar: gambar9, judul: 'Pembuatan Sumur Bor', text: 'Melayani jasa pembuatan sumur bor' },
    { gambar: gambar10, judul: 'Partisi dan Moulding Gypsum', text: 'Melayani jasa pemasangan partisi dan moulding gypsum' },
  ]
  return (
    <div id="servis" className="bg-[#031E33] desktop3:px-[11%] desktop:px-[7%] desktop:h-full desktop2:px-[7%] desktop2:h-full py-[2rem]  mt-[3%] phone:px-[5%] phone:h-full tablet:px-[5%] tablet:h-full laptop:px-[8%] laptop:h-full">
      <div className="flex items-center my-[1,4rem]">
        <div className="bg-white mr-4 desktop3:w-[0.2vw] desktop:w-[0.4vw] desktop2:w-[0.4vw] h-[4vh] phone:w-[1vw] tablet:w-[1vw] laptop:w-[0.4vw]"></div>
        <p className="text-[38px] font-Quicksand font-bold text-[#EAB200] phone:text-[24px] tablet:text-[24px] laptop:text-[24px]  desktop:text-[24px] desktop2:text-[24px]">Bidang Usaha</p>
      </div>
      <div class="grid desktop3:grid-cols-4 desktop:grid-cols-2 desktop2:grid-cols-3 laptop:grid-cols-2 desktop3:pt-[5%] desktop3:gap-10 desktop:gap-x-5 desktop2:gap-x-7 desktop3:pb-[2%]  phone:pt-[40px] tablet:pt-[40px] laptop:pt-[40px] laptop:gap-x-10">
        {dataService.map((item, i) => (
          <CardService key={i} gambar={item.gambar} judul={item.judul} text={item.text} />
        ))}
      </div>
    </div>
  )
}

export default Service
