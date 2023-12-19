import React from 'react'

function CardRumah(props) {
  return (
    <div key={props.key} className="bg-white rounded shadow p-4">
      <img src={props.gambar} class="rounded mb-3" alt="" />
      <div>
        <div class="flex items-center pb-[2%] justify-between">
          <p class=" text-[18px] phone:text-[14px] laptop:text-[14px] desktop:text-[16px] desktop2:text-[16px] font-bold">{props.nama_rumah}</p>
          <p class="text-[18px] phone:text-[14px] laptop:text-[14px] desktop:text-[16px] desktop2:text-[16px] text-[#216c2a] font-bold">{props.harga_rumah}</p>
        </div>
        <p class="text-[18px] phone:text-[14px] desktop:text-[16px] desktop2:text-[16px] laptop:text-[14px]">
          Lokasi: <span class="font-bold pl-1">{props.lokasi_rumah}</span>
        </p>
        <a href="https://wa.me/+6285263238701" target="_blank" rel="noopener noreferrer">
          <button class="bg-[#EAB200] font-bold p-2 mt-[3%] w-full laptop:w-full phone:w-full tablet:w-full desktop:w-full desktop2:w-full rounded text-white">Hubungi Admin</button>
        </a>
      </div>
    </div>
  )
}

export default CardRumah
