import React from 'react'

function CardPengalaman(props) {
  return (
    <div key={props.key} class="bg-white rounded p-5 shadow">
      <img src={props.gambar} class="rounded mx-auto " alt="" />
      <div class="flex items-start mt-[3%] justify-between">
        <div>
          <p class="text-[16px] font-bold">{props.judul}</p>
        </div>
      </div>
      <p class="mt-2 text-[16px]">
        Project Value : <span class="font-bold">{props.value}</span>
      </p>
    </div>
  )
}

export default CardPengalaman
