import React, { useEffect, useState } from 'react'
import Title from '../../Components/Title'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import Loading from '../../Components/Loading'
import Data404 from '../../Components/Data404'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Modal from 'react-modal'
import { deleteEntity, getAllUser, postEntity, updateEntity } from '../../Redux/Pengguna/action'

function User() {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [dataObj, setDataObj] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  const resetFilter = () => {
    setSearchTerm('')
  }
  const { register, handleSubmit, setValue, reset } = useForm()

  useEffect(() => {
    dispatch(getAllUser())
  }, [dispatch])

  const { allEntity } = useSelector((state) => state.pengguna)

  const [modalAddData, setmodalAddData] = useState(false)
  const [modalDeleteData, setmodalDeleteData] = useState(false)
  const [modalUpdateData, setmodalUpdateData] = useState(false)
  const [modalShowData, setmodalShowData] = useState(false)

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      height: 'auto',
      width: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)', // Atur warna latar belakang overlay
      zIndex: 1000, // Atur zIndex agar overlay tumpukan di atas elemen lain
    },
  }

  const customStyles2 = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      height: 'auto',
      width: '50vw',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)', // Atur warna latar belakang overlay
      zIndex: 1000, // Atur zIndex agar overlay tumpukan di atas elemen lain
    },
  }

  const buttonModal = () => {
    setmodalAddData(!modalAddData)
  }
  const buttonDelete = () => {
    setmodalDeleteData(!modalDeleteData)
  }

  const buttonUpdate = () => {
    setmodalUpdateData(!modalUpdateData)
  }

  const buttonShow = () => {
    setmodalShowData(!modalShowData)
  }

  const onAddData = async (data) => {
    try {
      await dispatch(postEntity(data.full_name, data.username, data.password, 'admin'))
      reset()
      toast.success('Add Data Successfully')
      setmodalAddData(!modalAddData)
      dispatch(getAllUser())
    } catch (error) {
      toast.error('Failed to Add Data')
      throw new Error(error)
    }
  }

  const HandledeleteData = async () => {
    try {
      await dispatch(deleteEntity(dataObj.id))
      toast.success('Successfully Delete Data')
      setmodalDeleteData(!modalDeleteData)
      dispatch(getAllUser())
    } catch (error) {
      toast.warning('Failed to Delete Data')
      throw new Error(error)
    }
  }

  const DetailData = (props) => {
    return (
      <div>
        <p className="font-bold">{props.label}</p>
        <input type="text" name="text" id="text" value={props.data} disabled placeholder="Nama Rumah" className="border outline-none w-full p-1 mt-2 rounded-md" />
      </div>
    )
  }

  const onUpdate = async (data) => {
    try {
      setLoading(true)
      await dispatch(updateEntity(dataObj.id, data.newFullName, data.newUsername, data.newPassword))
      reset()
      toast.success('Update Data Successfully')
      setmodalUpdateData(!modalUpdateData)
      dispatch(getAllUser())
    } catch (error) {
      console.error('Error in onUpdate:', error)
      toast.error('Failed to Update Data')
      throw new Error(error)
    }
  }

  const [showPass, setShowPass] = useState(false)
  const buttonShowPass = () => {
    setShowPass(!showPass)
  }

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <div className="flex items-center justify-between">
            <Title title={'User'} />
            <button onClick={buttonModal} className="outline-none bg-[#031E33] px-10 py-2 rounded-sm text-white font-bold">
              Add Data
            </button>
          </div>
          {allEntity && allEntity.length > 1 ? (
            <div className="mt-10">
              <div className="flex items-end justify-end gap-3">
                <div>
                  <p className="pb-1">Username:</p>
                  <input type="text" name="text" id="text" placeholder="Searh" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-70 outline-none px-3 py-[5px] border rounded-md" />
                </div>
                <p onClick={resetFilter} className="text-red-600 cursor-pointer hover:font-bold">
                  Reset Filter
                </p>
              </div>
              <div className="border rounded-md mt-4 overflow-y-scroll max-h-screen h-[630px]">
                <table className="w-full text-left ">
                  <thead>
                    <tr>
                      <th className="p-3">No</th>
                      <th>Full Name</th>
                      <th>Username</th>
                      <th>Role</th>
                      <th>Created At</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allEntity
                      .filter((item) => item && item.username && item.username.toLowerCase().includes(searchTerm ? searchTerm.toLowerCase() : ''))
                      .filter((item) => item.role !== 'superadmin')
                      .map((item, i) => (
                        <tr className="border-t" key={i}>
                          <td className="p-3">{i + 1}</td>
                          <td>{item.full_name}</td>
                          <td>{item.username}</td>
                          <td>{item.role}</td>
                          <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                          <td>
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => {
                                  buttonUpdate()
                                  setDataObj(item)
                                  reset()
                                }}
                                className="outline-none  p-[2px] rounded-md"
                              >
                                <span className="material-symbols-outlined p-0 m-0 text-blue-600">edit_document</span>
                              </button>
                              <button
                                onClick={() => {
                                  buttonShow()
                                  setDataObj(item)
                                }}
                                className="outline-none  p-[2px] rounded-md"
                              >
                                <span className="material-symbols-outlined p-0 m-0 text-green-500">visibility</span>
                              </button>
                              <button
                                onClick={() => {
                                  buttonDelete()
                                  setDataObj(item)
                                }}
                                className="outline-none  p-[2px] rounded-md"
                              >
                                <span className="material-symbols-outlined p-0 m-0 text-red-600">delete</span>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <Data404 />
          )}
        </div>
      )}
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" />
      <Modal isOpen={modalAddData} onRequestClose={buttonModal} style={customStyles2} contentLabel="Add Modal">
        <div className="border-b flex items-center justify-between pb-4">
          <h3 className="text-[20px] uppercase font-bold">Add Data</h3>
          <span onClick={buttonModal} className="material-symbols-outlined cursor-pointer">
            close
          </span>
        </div>
        <form action="" onSubmit={handleSubmit(onAddData)} className="pt-5 space-y-4">
          <div>
            <p className="pb-2 font-bold">Full Name</p>
            <input type="text" name="full_name" id="full_name" {...register('full_name')} onChange={(e) => setValue('full_name', e.target.value)} placeholder="Full Name" className="border outline-none w-full p-1 rounded-md" />
          </div>
          <div>
            <p className="pb-2 font-bold">Username</p>
            <input type="text" name="username" id="username" {...register('username')} onChange={(e) => setValue('username', e.target.value)} placeholder="Username" className="border outline-none w-full p-1 rounded-md" />
          </div>
          <div>
            <p className="pb-2 font-bold">Password</p>
            <div className="flex items-center">
              <input type={!showPass ? 'password' : 'text'} name="password" id="password" {...register('password')} onChange={(e) => setValue('password', e.target.value)} placeholder="Password" className="border outline-none w-full p-1 " />
              <button type="button" onClick={buttonShowPass} className="outline-none border bg-slate-300 ">
                <span className="material-symbols-outlined px-2 py-1 m-0 text-black">{showPass ? 'Visibility' : 'visibility_off'}</span>
              </button>
            </div>
          </div>
          <button type="submit" className="bg-green-700 py-2 uppercase  text-white w-full rounded-md">
            Save
          </button>
        </form>
      </Modal>
      <Modal isOpen={modalShowData} onRequestClose={buttonShow} style={customStyles} contentLabel="Delete Modal">
        <div className="border-b flex items-center justify-between pb-4">
          <h3 className="text-[20px] uppercase font-bold">Show Data</h3>
          <span onClick={buttonShow} className="material-symbols-outlined cursor-pointer">
            close
          </span>
        </div>
        <div className=" mt-3 space-y-4">
          <DetailData data={dataObj.username} label={'Username'} />
        </div>
      </Modal>
      <Modal isOpen={modalDeleteData} onRequestClose={buttonDelete} style={customStyles} contentLabel="Delete Modal">
        <h3 className="font-bold text-center text-[20px] pb-2">Are you sure to delete this data?</h3>
        <div className="pt-3 border-t flex gap-2">
          <button onClick={buttonDelete} className="outline-none bg-red-700 w-full px-10 py-2 rounded-sm text-white font-bold">
            NO
          </button>
          <button onClick={HandledeleteData} className="outline-none bg-green-700 w-full px-10 py-2 rounded-sm text-white font-bold">
            YES
          </button>
        </div>
      </Modal>
      <Modal isOpen={modalUpdateData} onRequestClose={buttonUpdate} style={customStyles2} contentLabel="Delete Modal">
        <div className="border-b flex items-center justify-between pb-4">
          <h3 className="text-[20px] uppercase font-bold">Update Data</h3>
          <span onClick={buttonUpdate} className="material-symbols-outlined cursor-pointer">
            close
          </span>
        </div>
        <form action="" onSubmit={handleSubmit(onUpdate)} className="pt-5 space-y-4">
          <div>
            <p className="pb-2 font-bold">Full Name:</p>
            <input type="text" name="text" id="text" defaultValue={dataObj.full_name} {...register('newFullName')} onChange={(e) => setValue('newFullName', e.target.value)} placeholder="Full Name" className="border outline-none w-full p-1 rounded-md" />
          </div>
          <div>
            <p className="pb-2 font-bold">Username:</p>
            <input type="text" name="text" id="text" defaultValue={dataObj.username} {...register('newUsername')} onChange={(e) => setValue('newUsername', e.target.value)} placeholder="Username" className="border outline-none w-full p-1 rounded-md" />
          </div>
          <div>
            <p className="pb-2 font-bold">Role</p>
            <input type="text" name="text" id="text" disabled defaultValue={dataObj.role} placeholder="Role" className="border outline-none w-full p-1 rounded-md" />
          </div>
          {dataObj.role === 'superadmin' && (
            <div>
              <p className="pb-2 font-bold">Password</p>
              <div className="flex items-center">
                <input type={!showPass ? 'password' : 'text'} name="password" id="password" {...register('newPassword')} onChange={(e) => setValue('newPassword', e.target.value)} placeholder="Password" className="border outline-none w-full p-1 " />
                <button type="button" onClick={buttonShowPass} className="outline-none border bg-slate-300 ">
                  <span className="material-symbols-outlined px-2 py-1 m-0 text-black">{showPass ? 'Visibility' : 'visibility_off'}</span>
                </button>
              </div>
            </div>
          )}
          <button type="submit" className="bg-green-700 py-2 uppercase  text-white w-full rounded-md">
            Save
          </button>
        </form>
      </Modal>
    </div>
  )
}

export default User
