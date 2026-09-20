const initialstate = {
  allEntity: [],
  entity: {},
  loading: true,
  error: null,
}

export const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case 'portofolio/ALL_ENTITY':
      return {
        ...state,
        allEntity: action.payload,
      }
    case 'portofolio/SET_ENTITY':
      return {
        ...state,
        entity: action.payload,
      }
    case 'portofolio/SET_LOADING':
      return { ...state, loading: action.payload }
    case 'portofolio/SET_ERROR':
      return { ...state, error: action.payload }
    case 'portofolio/RESET_FORM':
      return initialstate
    default:
      return state
  }
}
