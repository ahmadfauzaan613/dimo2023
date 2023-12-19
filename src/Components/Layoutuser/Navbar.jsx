import React, { useState } from 'react'
import Logo from '../../Images/Logo.png'
import { useNavigate } from 'react-router-dom'
function Navbar() {
  const navigate = useNavigate('')
  const location = window.location.pathname
  const [buttonMenu, setButtonMenu] = useState(false)
  const toggleButton = () => {
    setButtonMenu(!buttonMenu)
  }
  return (
    <div className="phone:relative tablet:relative laptop:relative">
      <div className="px-[10%] phone:px-[7%] tablet:px-[7%] laptop:px-[7%] desktop:px-[3%] desktop2:px-[3%] py-[1.3%] bg-white shadow">
        <div className="flex items-center justify-between  phone:py-[10px] tablet:py-[10px] laptop:py-[10px]">
          <img src={Logo} alt="" className="w-[3vw]  phone:w-[12vw] tablet:w-[10vw] desktop:w-[5vw] desktop2:w-[3vw] laptop:w-[6vw]" />
          <div className="flex items-center gap-x-8 desktop:gap-x-6 phone:hidden tablet:hidden laptop:hidden ">
            <a onClick={() => navigate('/')} href="#about" className={`cursor-pointer desktop:text-[14px] hover:font-bold ${location === '/' && 'font-bold'}`}>
              <p>Tentang Kami</p>
            </a>
            <a onClick={() => navigate('/')} href="#servis" className={`cursor-pointer desktop:text-[14px]  hover:font-bold `}>
              <p>Bidang Usaha</p>
            </a>
            <a onClick={() => navigate('/')} href="#penawaran" className={`cursor-pointer desktop:text-[14px]  hover:font-bold `}>
              <p>Penawaran</p>
            </a>
            <p className={`cursor-pointer desktop:text-[14px] hover:font-bold ${location === '/pengalaman' && 'font-bold'}`} onClick={() => navigate('/pengalaman')}>
              Pengalaman Kami
            </p>
            <p className={`cursor-pointer desktop:text-[14px] hover:font-bold ${location === '/struktur-organisasi' && 'font-bold'}`} onClick={() => navigate('/struktur-organisasi')}>
              Struktur Organisasi
            </p>
            <p className={`cursor-pointer desktop:text-[14px] hover:font-bold  ${location === '/portofolio' && 'font-bold'}`} onClick={() => navigate('/portofolio')}>
              Portofolio
            </p>
            <a onClick={() => navigate('/')} href="#contacs" className="cursor-pointer desktop:text-[14px]  hover:font-bold">
              <p>Hubungi Kami</p>
            </a>
          </div>
          <span onClick={toggleButton} className="desktop3:hidden desktop2:hidden desktop:hidden material-symbols-outlined text-[28px]">
            {!buttonMenu ? 'menu' : 'close'}
          </span>
          {buttonMenu && (
            <div class="absolute phone:top-[80px] phone:left-0 tablet:left-0 laptop:left-0 tablet:top-[100px] laptop:top-[90px] w-full h-full z-[100] desktop3:hidden desktop2:hidden desktop:hidden">
              <div class="bg-[#031E33] text-white px-[5%] py-[3%]">
                <a
                  onClick={() => {
                    navigate('/')
                    toggleButton()
                  }}
                  href="#about"
                  class={`cursor-pointer hover:font-bold`}
                >
                  <p class="pb-[10px]">Tentang Kami</p>
                </a>
                <a
                  onClick={() => {
                    navigate('/')
                    toggleButton()
                  }}
                  href="#servis"
                  class={`cursor-pointer hover:font-bold`}
                >
                  <p class="pb-[10px]">Bidang Usaha</p>
                </a>
                <a
                  onClick={() => {
                    navigate('/')
                    toggleButton()
                  }}
                  href="#penawaran"
                  class={`cursor-pointer hover:font-bold`}
                >
                  <p class="pb-[10px]">Penawaran</p>
                </a>
                <p
                  class={`${location === '/pengalaman' && 'font-bold'} cursor-pointer  hover:font-bold pb-[10px]`}
                  onClick={() => {
                    navigate('/pengalaman')
                    toggleButton()
                  }}
                >
                  Pengalaman Kami
                </p>
                <p
                  class={`${location === '/struktur-organisasi' && 'font-bold'} cursor-pointer  hover:font-bold pb-[10px]`}
                  onClick={() => {
                    navigate('/struktur-organisasi')
                    toggleButton()
                  }}
                >
                  Struktur Organisasi
                </p>
                <p
                  class={`cursor-pointer ${location === '/portofolio' && 'font-bold'}  hover:font-bold pb-[10px]`}
                  onClick={() => {
                    navigate('/portofolio')
                    toggleButton()
                  }}
                >
                  Portofolio
                </p>
                <a
                  onClick={() => {
                    navigate('/')
                    toggleButton()
                  }}
                  href="#contacs"
                  class="cursor-pointer hover:font-bold"
                >
                  <p>Hubungi Kami</p>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="absolute phone:top-[80px] tablet:top-[95px] laptop:top-[90px] w-full h-full z-[99] desktop3:hidden desktop2:hidden desktop:hidden"></div>
    </div>
  )
}

export default Navbar
