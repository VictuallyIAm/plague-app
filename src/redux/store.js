import { configureStore, combineReducers } from '@reduxjs/toolkit'
import authReducer from './features/authSlice'
import cartReducer from './features/cartSlice'
import orderReducer from './features/orderSlice'

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  orders: orderReducer,
})

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export default store
