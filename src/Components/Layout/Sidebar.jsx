import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Menu = (props) => {
  const navigate = useNavigate()
  return (
    <div className="px-3 py-4 ">
      <div onClick={() => navigate(props.link)} className="flex items-end gap-2  hover:cursor-pointer">
        <span className={`material-symbols-outlined ${props.active === true ? 'text-[#EAB200] ' : 'text-white '}`}>{props.icon}</span>
        <p className={`${props.active === true ? 'text-[#EAB200] font-bold' : 'text-white '}  `}>{props.menuname}</p>
      </div>
    </div>
  )
}

function Sidebar() {
  const location = window.location.pathname

  return (
    <div className="bg-[#031E33] max-h-screen h-screen w-full">
      <Menu menuname={'Home'} icon={'home'} link={'/admin/dashboard'} active={location === '/admin/dashboard' && true} />
      <Menu menuname={'Penawaran'} icon={'storefront'} link={'/admin/penawaran'} active={location === '/admin/penawaran' && true} />
      <Menu menuname={'Pengalaman'} icon={'engineering'} link={'/admin/pengalaman'} active={location === '/admin/pengalaman' && true} />
      <Menu menuname={'Portofolio'} icon={'article'} link={'/admin/portofolio'} active={location === '/admin/portofolio' && true} />
      <Menu menuname={'User'} icon={'person'} link={'/admin/user'} active={location === '/admin/user' && true} />
      <div className="absolute bottom-2">
        <Menu menuname={'Back To Website'} icon={'logout'} link={''} />
      </div>
    </div>
  )
}

export default Sidebar
