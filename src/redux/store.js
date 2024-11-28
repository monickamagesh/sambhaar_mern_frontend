import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartSlice'
import authApi from './features/auth/authApi'
import authReducer from "./features/auth/authSlice"
import productsApi from './features/products/productsApi'
import statsApi from './features/stats/statsApi'
import reviewApi from './features/reviews/reviewsApi'
import orderApi from './features/orders/orderApi'
import categoriesApi from './features/categories/categoriesApi'
import milksApi from './features/milks/milksApi'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [authApi.reducerPath] : authApi.reducer,
    auth: authReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [reviewApi.reducerPath] : reviewApi.reducer,
    [statsApi.reducerPath]: statsApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [milksApi.reducerPath]: milksApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, productsApi.middleware, reviewApi.middleware, statsApi.middleware, orderApi.middleware, categoriesApi.middleware, milksApi.middleware)
})