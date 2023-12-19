import React from 'react'
import Pone from '../../Images/phone-call.png'
import Email from '../../Images/email.png'
import Location from '../../Images/location-pin.png'

function Contacs() {
  return (
    <div id="contacs" className="mt-[3%]">
      <div class="grid desktop3:grid-cols-2 desktop:grid-cols-2 phone:h-[45vh] desktop2:grid-cols-2 laptop:grid-cols-2 h-[35vh] laptop:h-[40vh] desktop:h-[40vh] desktop2:h-[40vh]">
        <div class="bg-[#EAB200] tablet:pb-[30px]">
          <p className="desktop3:text-[38px] desktop:text-[32px] desktop2:text-[32px] phone:text-[24px]  tablet:text-[24px] laptop:text-[24px] text-center pt-[2%] font-Quicksand font-bold text-white">Contact Us</p>
          <a href="https://wa.me/+6281371017363" target="_blank" rel="noopener noreferrer">
            <div className="desktop3:px-[11%] desktop:px-[7%] desktop2:px-[7%] pt-[3%] flex items-center gap-x-[3%] phone:px-[5%] tablet:px-[5%] laptop:px-[8%]">
              <img src={Pone} className="w-[24px]" alt="" />
              <p class="text-white text-[20px] desktop:text-[16px] desktop2:text-[16px] phone:text-[14px] tablet:text-[16px] laptop:text-[16px]">0852-6323-8701</p>
            </div>
          </a>
          <a href="mailto:telagass7@gmail.com" target="_blank" rel="noopener noreferrer">
            <div class="desktop3:px-[11%] desktop:px-[7%] desktop2:px-[7%] laptop:px-[8%] pt-[3%] flex items-center gap-x-[3%] phone:px-[5%] tablet:px-[5%]">
              <img src={Email} className="w-[24px]" alt="" />
              <p class="text-white text-[20px] desktop:text-[16px] desktop2:text-[16px] phone:text-[14px] tablet:text-[16px] laptop:text-[16px]">telagass7@gmail.com</p>
            </div>
          </a>
          <a href="https://goo.gl/maps/BwxeQDE7ENKhfLm58" target="_blank" rel="noopener noreferrer">
            <div class="desktop3:px-[11%] desktop:px-[7%] desktop2:px-[7%] laptop:px-[8%] pt-[3%] flex items-center gap-x-[3%] phone:px-[5%] tablet:px-[5%]">
              <img src={Location} className="w-[24px]" alt="" />
              <p class="text-white text-[20px] desktop:text-[16px] desktop2:text-[16px] phone:text-[14px] tablet:text-[16px] laptop:text-[16px]">Jl. Patria Sari IV, Umbansari, Rumbai Pekanbaru, Riau</p>
            </div>
          </a>
        </div>
        <iframe
          title="myFrame"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.616966284393!2d101.41965881531496!3d0.575629563732576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d5ab6919a570b1%3A0x3bf751a98117c3e5!2sPT.%20Telaga%20Selat%20Samudera!5e0!3m2!1sen!2sid!4v1678705803464!5m2!1sen!2sid"
          width="600"
          height="100%"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  )
}

export default Contacs
