const initialstate = {
  allEntity: [],
  entity: {},
  loading: true,
  error: null,
}

export const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case 'pengalaman/ALL_ENTITY':
      return {
        ...state,
        allEntity: action.payload,
      }
    case 'pengalaman/SET_ENTITY':
      return {
        ...state,
        entity: action.payload,
      }
    case 'pengalaman/SET_LOADING':
      return { ...state, loading: action.payload }
    case 'pengalaman/SET_ERROR':
      return { ...state, error: action.payload }
    case 'pengalaman/RESET_FORM':
      return initialstate
    default:
      return state
  }
}
