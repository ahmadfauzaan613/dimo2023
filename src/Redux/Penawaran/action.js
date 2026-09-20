import axios from 'axios'

export const RESET_FORM = 'RESET_FORM'
const scope = 'penawaran'

export const setLoading = (loading) => {
  return {
    type: `${scope}/SET_LOADING`,
    payload: loading,
  }
}

export const allEntity = (allEntity) => {
  return {
    type: `${scope}/ALL_ENTITY`,
    payload: allEntity,
  }
}

export const setEntity = (entity) => {
  return {
    type: `${scope}/SET_ENTITY`,
    payload: entity,
  }
}

export const resetForm = () => ({
  type: `${scope}/${RESET_FORM}`,
})

export const setError = (error) => ({ type: `${scope}/SET_ERROR`, payload: error })

const apiurl = import.meta.env.VITE_API_URL

export const getAllPenawaran = () => {
  return async (dispatch) => {
    dispatch(setLoading(true))
    dispatch(setError(null))
    try {
      const res = await axios.get(`${apiurl}/penawaran`)
      const dataPenawaran = res.data
      dispatch(allEntity(dataPenawaran))
      dispatch(setLoading(false))
    } catch {
      dispatch(setLoading(false))
      dispatch(setError('Periksa koneksi Anda, lalu coba kembali.'))
    }
  }
}

export const postEntity = (nama_rumah, harga_rumah, lokasi_rumah, gambar) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('token')
      if (!token) {
        console.error('Token is not available.')
        dispatch(setLoading(false))
        return
      }

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      }

      const formData = new FormData()
      formData.append('gambar', gambar)

      formData.append('nama_rumah', nama_rumah)
      formData.append('harga_rumah', harga_rumah)
      formData.append('lokasi_rumah', lokasi_rumah)

      const response = await axios.post(`${apiurl}/penawaran`, formData, config)

      const postEntity = response.data
      dispatch(setEntity(postEntity))
      dispatch(setLoading(false))
    } catch (error) {
      throw new Error(error.response)
    }
  }
}

export const deleteEntity = (id) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('token')
      if (!token) {
        console.error('Token is not available.')
        dispatch(setLoading(false))
        return
      }

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }

      const response = await axios.delete(`${apiurl}/penawaran/${id}`, config)
      const penawaranDelete = response.data
      dispatch(setEntity(penawaranDelete))
      dispatch(setLoading(false))
    } catch (error) {
      throw new Error(error.response.data)
    }
  }
}

export const updateEntity = (id, newnama_rumah, newharga_rumah, newlokasi_rumah, newgambar) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('token')
      if (!token) {
        console.error('Token is not available.')
        dispatch(setLoading(false))
        return
      }

      const formData = new FormData()
      formData.append('gambar', newgambar) // Assuming newgambar is a File object
      formData.append('nama_rumah', newnama_rumah)
      formData.append('harga_rumah', newharga_rumah)
      formData.append('lokasi_rumah', newlokasi_rumah)

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      }

      const response = await axios.put(`${apiurl}/penawaran/${id}`, formData, config)

      const putEntity = response.data
      dispatch(setEntity(putEntity))
      dispatch(setLoading(false))
    } catch (error) {
      throw new Error(error.response)
    }
  }
}
