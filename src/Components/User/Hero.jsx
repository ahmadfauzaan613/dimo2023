import React from 'react'
import Background1 from '../../Images/Group 2.png'

function Hero() {
  return (
    <div class="relative">
      <img src={Background1} alt="" class="phone:h-[18vh] tablet:h-[20vh] tablet:w-full laptop:h-full laptop:w-full  desktop:h-full" />
      <div class="absolute desktop3:top-[35%] phone:top-[35%]  tablet:top-[30%] laptop:top-[30%] desktop:top-[30%] desktop2:top-[30%] left-[11%]">
        <p class="text-white font-Roboto text-left font-bold text-[56px] phone:text-[20px] tablet:text-[28px] laptop:text-[35px] desktop:text-[44px] desktop2:text-[44px]">PT. Telaga Selat Samudra</p>
      </div>
    </div>
  )
}

export default Hero
