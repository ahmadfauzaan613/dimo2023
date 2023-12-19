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

export const getAllUser = () => {
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
      const res = await axios.get(`${apiurl}/user`, config)
      const dataUser = res.data.data
      dispatch(allEntity(dataUser))
      dispatch(setLoading(false))
    } catch (error) {
      dispatch(setLoading(false))
      console.error('Error fetching penawaran data:', error)
    }
  }
}
export const postEntity = (full_name, username, password, role) => {
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
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }

      const response = await axios.post(`${apiurl}/user`, { full_name, username, password, role }, config)

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
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }

      const response = await axios.delete(`${apiurl}/user/${id}`, config)
      const userDelete = response.data
      dispatch(setEntity(userDelete))
      dispatch(setLoading(false))
    } catch (error) {
      throw new Error(error.response.data)
    }
  }
}

export const updateEntity = (id, newFullName, newUsername, newPassword) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('token')
      if (!token) {
        console.error('Token is not available.')
        dispatch(setLoading(false))
        return
      }

      const formData = new FormData()
      formData.append('full_name', newFullName)
      formData.append('username', newUsername)
      formData.append('password', newPassword)

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
      const response = await axios.put(`${apiurl}/user/${id}`, formData, config)

      const putEntity = response.data
      dispatch(setEntity(putEntity))
      dispatch(setLoading(false))
    } catch (error) {
      throw new Error(error.response)
    }
  }
}
