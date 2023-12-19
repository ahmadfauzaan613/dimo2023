import React from 'react'
import Logo from '../../Images/Logo.png'
function Footer() {
  return (
    <div class="desktop3:px-[10%] desktop:px-[3%] desktop2:px-[3%] phone:px-[5%] tablet:px-[5%] laptop:px-[8%] py-[1.3%] bg-[#031E33]">
      <div class="flex items-center justify-between phone:py-[10px] tablet:py-[10px]  laptop:py-[10px]">
        <img src={Logo} alt="" class="desktop3:w-[3vw] phone:w-[12vw] desktop:w-[5vw] desktop2:w-[5vw] tablet:w-[10vw] laptop:w-[6vw]" />
        <div>
          <p class="text-white font-bold">PT Telaga Selat Samudra</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
