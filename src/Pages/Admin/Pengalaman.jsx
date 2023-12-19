import React, { useEffect, useState } from 'react'
import Title from '../../Components/Title'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { deleteEntity, getAllPengalaman, postEntity, updateEntity } from '../../Redux/Pengalaman/action'
import Data404 from '../../Components/Data404'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Modal from 'react-modal'
import Loading from '../../Components/Loading'

function Pengalaman() {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [dataObj, setDataObj] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  const resetFilter = () => {
    setSearchTerm('')
  }
  const { register, handleSubmit, setValue, reset } = useForm()

  useEffect(() => {
    dispatch(getAllPengalaman())
  }, [dispatch])

  const { allEntity } = useSelector((state) => state.pengalaman)

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
      setLoading(true)
      await dispatch(postEntity(data.nama_rumah, data.project_value, data.gambar[0]))
      reset()
      toast.success('Add Data Successfully')
      setmodalAddData(!modalAddData)
      dispatch(getAllPengalaman())
    } catch (error) {
      toast.error('Failed to Add Data')
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

  const HandledeleteData = async () => {
    try {
      await dispatch(deleteEntity(dataObj.id))
      toast.success('Successfully Delete Data')
      setmodalDeleteData(!modalDeleteData)
      dispatch(getAllPengalaman())
    } catch (error) {
      toast.warning('Failed to Delete Data')
      throw new Error(error)
    }
  }

  const onUpdate = async (data) => {
    try {
      await dispatch(updateEntity(dataObj.id, data.newnama_rumah, data.newproject_value, data.newgambar[0]))
      reset()
      toast.success('Update Data Successfully')
      setmodalUpdateData(!modalUpdateData)
      dispatch(getAllPengalaman())
    } catch (error) {
      console.error('Error in onUpdate:', error)
      toast.error('Failed to Update Data')
      throw new Error(error)
    }
  }

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <div className="flex items-center justify-between">
            <Title title={'Pengalaman'} />
            <button onClick={buttonModal} className="outline-none bg-[#031E33] px-10 py-2 rounded-sm text-white font-bold">
              Add Data
            </button>
          </div>
          {allEntity && allEntity.length > 0 ? (
            <div className="mt-10">
              <div className="flex items-end justify-end gap-3">
                <div>
                  <p className="pb-1">Nama Rumah:</p>
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
                      <th>Nama Rumah</th>
                      <th>Project Value</th>
                      <th>Foto Produk</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allEntity
                      .filter((item) => item && item.nama_rumah && item.nama_rumah.toLowerCase().includes(searchTerm ? searchTerm.toLowerCase() : ''))
                      .map((item, i) => (
                        <tr className="border-t" key={i}>
                          <td className=" p-3">{i + 1}</td>
                          <td>{item.nama_rumah}</td>
                          <td className="py-2">
                            <img src={item.gambar} alt="" className="w-[150px] h-full overflow-hidden" />
                          </td>
                          <td>{item.project_value}</td>
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
            <p className="pb-2 font-bold">Upload Gambar:</p>
            <input type="file" name="file" {...register('gambar')} id="file" className="border w-full p-1 rounded-md outline-none" accept="image/*" />
          </div>
          <div>
            <p className="pb-2 font-bold">Nama Rumah:</p>
            <input type="text" name="text" id="text" {...register('nama_rumah')} onChange={(e) => setValue('nama_rumah', e.target.value)} placeholder="Nama Rumah" className="border outline-none w-full p-1 rounded-md" />
          </div>
          <div>
            <p className="pb-2 font-bold">Project Value:</p>
            <input type="number" name="number" id="number" {...register('project_value')} onChange={(e) => setValue('project_value', e.target.value)} pattern="/^[0-9]+$/" placeholder="Harga Rumah" className="border outline-none w-full p-1 rounded-md" />
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
        <div className="w-full h-full flex justify-center overflow-hidden mt-4">
          <img src={dataObj.gambar} alt="" className="h-[40vh]" />
        </div>
        <div className=" mt-3 space-y-4">
          <DetailData data={dataObj.nama_rumah} label={'Nama Rumah'} />
          <DetailData data={dataObj.project_value} label={'Project Value'} />
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
          <div className="flex items-center gap-3">
            <img src={dataObj.gambar} alt="" className="w-[350px] h-full overflow-hidden" />
            <div>
              <p className="pb-2 font-bold">Upload Gambar:</p>
              <input type="file" name="file" {...register('newgambar')} id="file" className="border w-full p-1 rounded-md outline-none" accept="image/*" />
            </div>
          </div>
          <div>
            <p className="pb-2 font-bold">Nama Rumah:</p>
            <input type="text" name="text" id="text" defaultValue={dataObj.nama_rumah} {...register('newnama_rumah')} onChange={(e) => setValue('newnama_rumah', e.target.value)} placeholder="Nama Rumah" className="border outline-none w-full p-1 rounded-md" />
          </div>
          <div>
            <p className="pb-2 font-bold">Project Value:</p>
            <input type="text" name="text" id="text" defaultValue={dataObj.project_value} {...register('newproject_value')} onChange={(e) => setValue('newproject_value', e.target.value)} placeholder="Project Value" className="border outline-none w-full p-1 rounded-md" />
          </div>
          <button type="submit" className="bg-green-700 py-2 uppercase  text-white w-full rounded-md">
            Save
          </button>
        </form>
      </Modal>
    </div>
  )
}

export default Pengalaman
