import axios from 'axios'

export const setLoading = (loading) => {
  return {
    type: 'user/SET_LOADING',
    payload: loading,
  }
}

export const setAlluser = (allUser) => {
  return {
    type: 'user/ALL_USER',
    payload: allUser,
  }
}

export const setUser = (User) => {
  return {
    type: 'user/SET_USER',
    payload: User,
  }
}

export const setError = (error) => ({ type: 'user/SET_ERROR', payload: error })

const apiurl = import.meta.env.VITE_API_URL

export const Login = (username, password) => {
  return async (dispatch) => {
    dispatch(setLoading(true))
    dispatch(setError(null))
    try {
      const res = await axios.post(`${apiurl}/login`, {
        username,
        password,
      })
      const loginUser = res.data
      const token = loginUser.Authorization
      const user = loginUser.username
      localStorage.setItem('token', token)
      localStorage.setItem('username', user)
      dispatch(setUser(loginUser))
      dispatch(setLoading(false))
    } catch (error) {
      dispatch(setLoading(false))
      dispatch(setError('Username atau kata sandi tidak sesuai.'))
      console.error('Login error:', error)
      throw error
    }
  }
}

export const Logout = () => (dispatch) => {
  try {
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    dispatch(setUser({}))
    window.location.href = '/admin'
  } catch (error) {
    console.error('Logout error:', error)
  }
}
