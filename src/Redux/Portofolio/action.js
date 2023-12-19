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

export const getAllPortofolio = () => {
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
      // const res = await axios.get(`${apiurl}/portofolio`, config)
      const res = await axios.get(`${apiurl}/portofolio`)
      const dataPortofolio = res.data
      dispatch(allEntity(dataPortofolio))
      dispatch(setLoading(false))
    } catch (error) {
      dispatch(setLoading(false))
      console.error('Error fetching penawaran data:', error)
    }
  }
}

export const postEntity = (nama_portofolio, gambar) => {
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
      formData.append('nama_portofolio', nama_portofolio)

      const response = await axios.post(`${apiurl}/portofolio`, formData, config)

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

      const response = await axios.delete(`${apiurl}/portofolio/${id}`, config)
      const portofolioDelete = response.data
      dispatch(setEntity(portofolioDelete))
      dispatch(setLoading(false))
    } catch (error) {
      throw new Error(error.response.data)
    }
  }
}

export const updateEntity = (id, newnama_portofolio, newgambar) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('token')
      if (!token) {
        console.error('Token is not available.')
        dispatch(setLoading(false))
        return
      }

      const formData = new FormData()
      formData.append('gambar', newgambar)
      formData.append('nama_portofolio', newnama_portofolio)

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      }

      const response = await axios.put(`${apiurl}/portofolio/${id}`, formData, config)

      const putEntity = response.data
      dispatch(setEntity(putEntity))
      dispatch(setLoading(false))
    } catch (error) {
      throw new Error(error.response)
    }
  }
}
