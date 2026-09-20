const initialstate = {
  allEntity: [],
  entity: {},
  loading: true,
  error: null,
}

export const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case 'penawaran/ALL_ENTITY':
      return {
        ...state,
        allEntity: action.payload,
      }
    case 'penawaran/SET_ENTITY':
      return {
        ...state,
        entity: action.payload,
      }
    case 'penawaran/SET_LOADING':
      return { ...state, loading: action.payload }
    case 'penawaran/SET_ERROR':
      return { ...state, error: action.payload }
    case 'penawaran/RESET_FORM':
      return initialstate
    default:
      return state
  }
}
