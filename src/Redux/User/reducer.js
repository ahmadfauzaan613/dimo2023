const initialstate = {
  allUser: [],
  User: {},
  loading: false,
  error: null,
}

export const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case 'user/SET_USER':
      return {
        ...state,
        user: action.payload,
      }
    case 'user/ALL_USER':
      return {
        ...state,
        allUser: action.payload,
      }
    case 'user/SET_LOADING':
      return { ...state, loading: action.payload }
    case 'user/SET_ERROR':
      return { ...state, error: action.payload }
    default:
      return state
  }
}
