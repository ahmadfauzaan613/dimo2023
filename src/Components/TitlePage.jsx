import React from 'react'

function TitlePage(props) {
  return (
    <div class="flex items-center mb-[3%]">
      <div class="bg-[#EAB200] mr-4 w-[0.2vw] h-[4vh] phone:w-[1vw]  tablet:w-[1vw] laptop:w-[0.4vw] desktop:w-[0.4vw] desktop2:w-[0.4vw]"></div>
      <p class="text-[38px] phone:text-[24px] tablet:text-[24px] laptop:text-[24px] desktop:text-[24px] desktop2:text-[24px] font-Quicksand font-bold text-[#031E33]">{props.judul}</p>
    </div>
  )
}

export default TitlePage
