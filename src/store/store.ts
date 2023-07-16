import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './reducers/user'
import { RootState } from '.'

const reducer = {
  user: userSlice.reducer,
}
const store = configureStore({
    reducer,
})

export const createStoreInstance = (preloadedState: RootState) => {
  return configureStore({
    reducer,
    preloadedState,
  })
}


export default store