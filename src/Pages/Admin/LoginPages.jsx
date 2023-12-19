import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { Login } from '../../Redux/User/action'

// IMG
import BgLogin from '../../Images/background-1.jpg'
import { useNavigate } from 'react-router-dom'

function LoginPages() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { register, handleSubmit, setValue, reset } = useForm()

  const onSubmit = async ({ name, password }) => {
    try {
      await dispatch(Login(name, password))
      reset()
      navigate('/admin/dashboard')
    } catch (error) {
      throw new Error(error)
    }
  }

  const [showPass, setShowPass] = useState(false)
  const buttonShowPass = () => {
    setShowPass(!showPass)
  }

  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="col-span-8">
          <img src={BgLogin} alt="" className="w-full h-full" />
        </div>
        <div className="col-span-4 bg-[#031E33] px-[5%] ">
          <div className="mt-[50%]">
            <h4 className="font-bold text-center mb-3 text-[38px] uppercase text-white">Admin</h4>
            {/* <p className="text-center text-red-600 font-bold mb-3  uppercase text-[18px]">Wrong username and password</p> */}
            <form action="" onSubmit={handleSubmit(onSubmit)} className="grid  gap-y-4 mt-3">
              <input type="text" {...register('name')} onChange={(e) => setValue('name', e.target.value)} className="p-2 rounded-md outline-none" autoComplete="off" placeholder="Username" />
              <div className="flex items-center">
                <input type={!showPass ? 'password' : 'text'} {...register('password')} onChange={(e) => setValue('password', e.target.value)} className="p-2 rounded-l-md w-full outline-none" autoComplete="off" placeholder="Password" />
                <button type="button" onClick={buttonShowPass} className="outline-none border rounded-r-md  bg-slate-300 ">
                  <span className="material-symbols-outlined px-2 py-[6.9px]  m-0 text-black">{showPass ? 'Visibility' : 'visibility_off'}</span>
                </button>
              </div>
              <button type="submit" className="bg-[#EAB200] font-bold text-white rounded-md uppercase py-2">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPages
