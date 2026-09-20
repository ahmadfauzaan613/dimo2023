const initialstate = {
  allEntity: [],
  entity: {},
}

export const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case 'pengguna/ALL_ENTITY':
      return {
        ...state,
        allEntity: action.payload,
      }
    case 'pengguna/SET_ENTITY':
      return {
        ...state,
        entity: action.payload,
      }
    case 'pengguna/RESET_FORM':
      return initialstate
    default:
      return state
  }
}
