import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './Redux'
// PAGES
import Dashboard from './Pages/Admin/Dashboard'
import LayoutAdmin from './Components/Layout/LayoutAdmin'
import LoginPages from './Pages/Admin/LoginPages'
import Penawaran from './Pages/Admin/Penawaran'
import Pengalaman from './Pages/Admin/Pengalaman'
import PengalamanUser from './Pages/Pengalaman'
import User from './Pages/Admin/User'
import Portofolio from './Pages/Admin/Portofolio'
import PortofolioUser from './Pages/Portofolio'
import LayoutUser from './Components/Layoutuser/LayoutUser'
import Home from './Pages/Home'
import Struktur from './Pages/Struktur'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<LoginPages />} />
          <Route
            path="/admin/dashboard"
            element={
              <LayoutAdmin>
                <Dashboard />
              </LayoutAdmin>
            }
          />
          <Route
            path="/admin/penawaran"
            element={
              <LayoutAdmin>
                <Penawaran />
              </LayoutAdmin>
            }
          />
          <Route
            path="/admin/pengalaman"
            element={
              <LayoutAdmin>
                <Pengalaman />
              </LayoutAdmin>
            }
          />
          <Route
            path="/admin/portofolio"
            element={
              <LayoutAdmin>
                <Portofolio />
              </LayoutAdmin>
            }
          />
          <Route
            path="/admin/user"
            element={
              <LayoutAdmin>
                <User />
              </LayoutAdmin>
            }
          />
          <Route
            path="/"
            element={
              <LayoutUser>
                <Home />
              </LayoutUser>
            }
          />
          <Route
            path="/pengalaman"
            element={
              <LayoutUser>
                <PengalamanUser />
              </LayoutUser>
            }
          />
          <Route
            path="/struktur-organisasi"
            element={
              <LayoutUser>
                <Struktur />
              </LayoutUser>
            }
          />
          <Route
            path="/portofolio"
            element={
              <LayoutUser>
                <PortofolioUser />
              </LayoutUser>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
