import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Logout } from '../../Redux/User/action'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const username = localStorage.getItem('username')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [dropdown, setDropdown] = useState(false)
  const buttonDropdown = () => {
    setDropdown(!dropdown)
  }

  const onLogout = () => {
    try {
      dispatch(Logout())
      navigate('/admin')
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  return (
    <div className="px-3 py-5 bg-[#031E33] flex items-center justify-between">
      <p className="text-white text-[24px] font-bold">PT. Telaga Selat Samudra</p>
      <div onClick={buttonDropdown} className="flex items-center gap-2 pr-7 cursor-pointer">
        <span className="material-symbols-outlined text-white">person</span>
        <p className="text-white">{username}</p>
      </div>
      {dropdown && (
        <div className="absolute bg-[#EAB200]  w-[8vw] rounded-md p-3 right-10 top-16">
          <div onClick={onLogout} className="flex items-center justify-between cursor-pointer">
            <p className=" text-white font-bold">Logout</p>
            <span className="material-symbols-outlined text-white">logout</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
