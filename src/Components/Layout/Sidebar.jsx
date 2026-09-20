import { NavLink } from 'react-router-dom'

const menus = [
  { label: 'Ringkasan', icon: 'space_dashboard', to: '/admin/dashboard' },
  { label: 'Penawaran', icon: 'home_work', to: '/admin/penawaran' },
  { label: 'Pengalaman', icon: 'engineering', to: '/admin/pengalaman' },
  { label: 'Portofolio', icon: 'photo_library', to: '/admin/portofolio' },
  { label: 'Pengguna', icon: 'manage_accounts', to: '/admin/user' },
]

function Sidebar() {
  return (
    <aside className="admin-sidebar">
      <p>Kelola konten</p>
      <nav aria-label="Navigasi dashboard">
        {menus.map((menu) => <NavLink key={menu.to} to={menu.to} className={({ isActive }) => isActive ? 'is-active' : undefined}><span className="material-symbols-outlined" aria-hidden="true">{menu.icon}</span>{menu.label}</NavLink>)}
      </nav>
    </aside>
  )
}

export default Sidebar
