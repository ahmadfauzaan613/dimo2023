import { createItem, deleteItem, getCollection, updateItem } from '../../Data/dummyApi'

export const RESET_FORM = 'RESET_FORM'
const scope = 'pengguna'

export const setLoading = (payload) => ({ type: `${scope}/SET_LOADING`, payload })
export const allEntity = (payload) => ({ type: `${scope}/ALL_ENTITY`, payload })
export const setEntity = (payload) => ({ type: `${scope}/SET_ENTITY`, payload })
export const resetForm = () => ({ type: `${scope}/${RESET_FORM}` })

export const getAllUser = () => async (dispatch) => {
  dispatch(allEntity(await getCollection(scope)))
}
export const postEntity = (full_name, username, password, role) => async (dispatch) => {
  dispatch(setEntity(await createItem(scope, { full_name, username, password, role })))
}

export const deleteEntity = (id) => async (dispatch) => {
  dispatch(setEntity(await deleteItem(scope, id)))
}

export const updateEntity = (id, full_name, username, password) => async (dispatch) => {
  const values = { full_name, username }
  if (password) values.password = password
  dispatch(setEntity(await updateItem(scope, id, values)))
}
