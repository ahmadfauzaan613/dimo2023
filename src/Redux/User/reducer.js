const initialstate = {
  allUser: [],
  User: {},
}

export const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      }
    case 'ALL_USER':
      return {
        ...state,
        allUser: action.payload,
      }
    default:
      return state
  }
}
