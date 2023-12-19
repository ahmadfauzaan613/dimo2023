import axios from 'axios'

export const RESET_FORM = 'RESET_FORM'

export const setLoading = (loading) => {
  return {
    type: 'SET_LOADING',
    payload: loading,
  }
}

export const allEntity = (allEntity) => {
  return {
    type: 'ALL_ENTITY',
    payload: allEntity,
  }
}

export const setEntity = (entity) => {
  return {
    type: 'SET_ENTITY',
    payload: entity,
  }
}

export const resetForm = () => ({
  type: RESET_FORM,
})

const apiurl = process.env.REACT_APP_API_URL

export const getAllPenawaran = () => {
  return async (dispatch) => {
    try {
      // const token = localStorage.getItem('token')
      // if (!token) {
      //   console.error('Token is not available.')
      //   dispatch(setLoading(false))
      //   return
      // }
      // const config = {
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
      // }
      // const res = await axios.get(`${apiurl}/penawaran`, config)
      const res = await axios.get(`${apiurl}/penawaran`)
      const dataPenawaran = res.data
      dispatch(allEntity(dataPenawaran))
      dispatch(setLoading(false))
    } catch (error) {
      // Menangani kesalahan
      dispatch(setLoading(false))
      console.error('Error fetching penawaran data:', error)
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
