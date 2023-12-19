import React from 'react'
import Background1 from '../../Images/Mask2.png'

function TentangKami() {
  return (
    <div id="about" className="desktop3:px-[11%] desktop:px-[7%] desktop2:px-[7%] py-[1.5%] mt-[3%] phone:px-[5%] tablet:px-[5%] laptop:px-[8%]">
      <div class="flex items-center mb-[2rem]">
        <div className="bg-[#EAB200] mr-4 w-[0.2vw] h-[4vh] phone:w-[1vw] tablet:w-[1vw]  laptop:w-[0.4vw] desktop:w-[0.4vw]  desktop2:w-[0.4vw]"></div>
        <p className="text-[38px] phone:text-[24px] tablet:text-[24px] laptop:text-[24px] desktop:text-[34px] desktop2:text-[34px] font-Quicksand font-bold text-[#031E33]">Tentang Kami</p>
      </div>
      <div className="grid desktop3:grid-cols-2 desktop:grid-cols-2 desktop2:grid-cols-2 items-center gap-x-[10%]">
        <div class="border-2 border-[#EAB200] rounded p-3 desktop3:hidden desktop2:hidden desktop:hidden">
          <img src={Background1} className="rounded" alt="" />
        </div>
        <div>
          <p class="text-[18px] phone:text-justify desktop:text-[18px] desktop2:text-[18px] phone:text-[16px] tablet:text-[16px] laptop:text-[18px] font-Roboto phone:mt-8 tablet:mt-8 laptop:mt-8">
            PT. Telaga Selat Samudra (TSS) secara resmi berdiri pada tahun 2016. Perusahaan kami bergerak di bidang jasa konstruksi, dan developer perumahan. Memasuki masa bakti 6 tahun, perusahaan kami selalu aktif berkarya dan berperan aktif dalam bidang pembangunan. Perusahaan kami memiliki
            pengalaman dan kompetensi, yang didukung dengan sumber daya manusia yang profesional untuk memberikan pelayanan terbaik demi menjamin kepuasan klien kami.
          </p>
        </div>
        <div class="border-2 border-[#EAB200] rounded p-3 phone:hidden tablet:hidden laptop:hidden">
          <img src={Background1} className="rounded" alt="" />
        </div>
      </div>
    </div>
  )
}

export default TentangKami
