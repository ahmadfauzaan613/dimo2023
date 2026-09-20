import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Login } from '../../Redux/User/action'
import BgLogin from '../../Images/background-1.jpg'
import Logo from '../../Images/Logo.png'

function LoginPages() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { loading, error } = useSelector((state) => state.user)
  const [showPassword, setShowPassword] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = async ({ username, password }) => {
    try {
      await dispatch(Login(username, password))
      navigate('/admin/dashboard')
    } catch {
      // Pesan kesalahan ditampilkan dari state autentikasi.
    }
  }

  return (
    <main className="admin-login">
      <section className="admin-login-visual" aria-label="PT Telaga Selat Samudra">
        <img src={BgLogin} alt="Bangunan bertingkat dengan fasad geometris" />
        <div><p>Ruang administrasi</p><h1>Kelola materi website dalam satu tempat.</h1></div>
      </section>
      <section className="admin-login-panel">
        <div className="admin-login-form">
          <img className="admin-login-logo" src={Logo} alt="Logo PT Telaga Selat Samudra" />
          <p className="section-index">Panel internal</p>
          <h2>Masuk ke dashboard</h2>
          <p className="admin-login-intro">Mode dummy: masuk dengan username <strong>admin</strong> dan kata sandi <strong>admin</strong>.</p>
          {error && <p className="form-error" role="alert">{error}</p>}
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <label htmlFor="username">Username</label>
            <input id="username" autoComplete="username" {...register('username', { required: 'Username wajib diisi.' })} aria-invalid={Boolean(errors.username)} />
            {errors.username && <span className="field-error">{errors.username.message}</span>}
            <label htmlFor="password">Kata sandi</label>
            <div className="password-field">
              <input id="password" type={showPassword ? 'text' : 'password'} autoComplete="current-password" {...register('password', { required: 'Kata sandi wajib diisi.' })} aria-invalid={Boolean(errors.password)} />
              <button type="button" onClick={() => setShowPassword((value) => !value)} aria-label={showPassword ? 'Sembunyikan kata sandi' : 'Tampilkan kata sandi'}>{showPassword ? 'Sembunyikan' : 'Lihat'}</button>
            </div>
            {errors.password && <span className="field-error">{errors.password.message}</span>}
            <button className="admin-login-submit" type="submit" disabled={loading}>{loading ? 'Memeriksa akun…' : 'Masuk'}</button>
          </form>
          <a className="admin-back-link" href="/">Kembali ke website</a>
        </div>
      </section>
    </main>
  )
}

export default LoginPages
