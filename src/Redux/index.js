import { applyMiddleware, createStore, combineReducers } from 'redux'
import { thunk } from 'redux-thunk'
import { reducer as userReducer } from './User/reducer'
import { reducer as penawaranReducer } from './Penawaran/reducer'
import { reducer as pengalamanReducer } from './Pengalaman/reducer'
import { reducer as portofolioReducer } from './Portofolio/reducer'
import { reducer as penggunaReducer } from './Pengguna/reducer'

export const reducer = combineReducers({
  user: userReducer,
  penawaran: penawaranReducer,
  pengalaman: pengalamanReducer,
  portofolio: portofolioReducer,
  pengguna: penggunaReducer,
})
export const store = createStore(reducer, applyMiddleware(thunk))
