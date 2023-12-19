import React from 'react'
import Whatsapp from '../../Images/whatsapp.png'
import Navbar from './Navbar'
import Footer from './Footer'
import Contacs from './Contacs'

function LayoutUser(props) {
  return (
    <div>
      <Navbar />
      {props.children}
      <div class="absolute desktop3:bottom-3 right-3 phone:bottom-2 desktop:bottom-3 desktop2:bottom-3 laptop:bottom-2 tablet:bottom-2 ">
        <a href="https://wa.me/+6281371017363" target="_blank" rel="noopener noreferrer">
          <img src={Whatsapp} class="cursor-pointer phone:w-[13vw] tablet:w-[8vw] laptop:w-[5vw] desktop:w-[5vw] desktop2:w-[5vw]" alt="" />
        </a>
      </div>
      <Contacs />
      <Footer />
    </div>
  )
}

export default LayoutUser
