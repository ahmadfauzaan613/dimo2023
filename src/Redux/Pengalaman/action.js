import { createItem, deleteItem, fileToDataUrl, getCollection, updateItem } from '../../Data/dummyApi'

export const RESET_FORM = 'RESET_FORM'
const scope = 'pengalaman'

export const setLoading = (payload) => ({ type: `${scope}/SET_LOADING`, payload })
export const allEntity = (payload) => ({ type: `${scope}/ALL_ENTITY`, payload })
export const setEntity = (payload) => ({ type: `${scope}/SET_ENTITY`, payload })
export const resetForm = () => ({ type: `${scope}/${RESET_FORM}` })
export const setError = (payload) => ({ type: `${scope}/SET_ERROR`, payload })

export const getAllPengalaman = () => async (dispatch) => {
  dispatch(setLoading(true))
  dispatch(setError(null))
  dispatch(allEntity(await getCollection(scope)))
  dispatch(setLoading(false))
}
export const postEntity = (nama_rumah, project_value, gambar) => async (dispatch) => {
  dispatch(setEntity(await createItem(scope, { nama_rumah, project_value, gambar: await fileToDataUrl(gambar) })))
}

export const deleteEntity = (id) => async (dispatch) => {
  dispatch(setEntity(await deleteItem(scope, id)))
}

export const updateEntity = (id, nama_rumah, project_value, gambar) => async (dispatch) => {
  const current = (await getCollection(scope)).find((item) => String(item.id) === String(id))
  dispatch(setEntity(await updateItem(scope, id, { nama_rumah, project_value, gambar: await fileToDataUrl(gambar, current?.gambar) })))
}
