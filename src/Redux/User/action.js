import { authenticate } from '../../Data/dummyApi'

export const setLoading = (payload) => ({ type: 'user/SET_LOADING', payload })
export const setAlluser = (payload) => ({ type: 'user/ALL_USER', payload })
export const setUser = (payload) => ({ type: 'user/SET_USER', payload })
export const setError = (payload) => ({ type: 'user/SET_ERROR', payload })

export const Login = (username, password) => async (dispatch) => {
  dispatch(setLoading(true))
  dispatch(setError(null))
  try {
    const user = await authenticate(username, password)
    localStorage.setItem('token', user.Authorization)
    localStorage.setItem('username', user.username)
    dispatch(setUser(user))
  } catch (error) {
    dispatch(setError('Username atau kata sandi tidak sesuai.'))
    throw error
  } finally {
    dispatch(setLoading(false))
  }
}
export const Logout = () => (dispatch) => {
  localStorage.removeItem('token')
  localStorage.removeItem('username')
  dispatch(setUser({}))
  window.location.href = '/admin'
}
