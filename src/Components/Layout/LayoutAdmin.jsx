import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

function LayoutAdmin({ children }) {
  const navigate = useNavigate()

  useEffect(() => {
    if (!localStorage.getItem('token')) navigate('/admin')
  }, [navigate])

  return (
    <div className="admin-shell">
      <Navbar />
      <div className="admin-body">
        <Sidebar />
        <main className="admin-content">{children}</main>
      </div>
    </div>
  )
}

export default LayoutAdmin
