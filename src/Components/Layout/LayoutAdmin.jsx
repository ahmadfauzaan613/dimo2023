import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { useNavigate } from 'react-router-dom'

function LayoutAdmin(props) {
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      navigate('/admin')
    }
  }, [navigate])

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-12">
        <div className="col-span-2">
          <Sidebar />
        </div>
        <div className="col-span-10">
          <div className="p-5 bg-white h-screen max-h-screen">{props.children}</div>
        </div>
      </div>
    </div>
  )
}

export default LayoutAdmin
