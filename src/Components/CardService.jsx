import React from 'react'

function CardService(props) {
  return (
    <div key={props.key} class="phone:pb-[30px] tablet:pb-[30px] laptop:pb-[30px] desktop:pt-[10%] desktop2:pt-[10%]">
      <div class="grid phone:grid-cols-6 phone:items-center  tablet:grid-cols-6 tablet:items-center laptop:grid-cols-7 laptop:items-start desktop:grid-cols-7 desktop:items-start desktop2:grid-cols-8 desktop2:items-start desktop3:grid-cols-9 desktop3:items-start  ">
        <div class="phone:col-span-1 tablet:col-span-1 laptop:col-span-2 desktop:col-span-1 desktop2:col-span-2 desktop3:col-span-2">
          <img src={props.gambar} alt="" class="phone:w-[40px] tablet:w-[50px] laptop:w-[50px] desktop:w-[50px] desktop2:w-[50px] desktop3:w-[45px]" />
        </div>
        <div class="phone:col-span-5 tablet:col-span-5 laptop:col-span-5 desktop:col-span-6 desktop2:col-span-6 desktop3:col-span-7">
          <p className="text-[#EAB200] text-[16px] font-bold mb-1">{props.judul}</p>
          <div>
            <p className="text-white text-[16px]">{props.text}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardService
