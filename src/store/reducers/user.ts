import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import fetchUser from '../actions/getUser'

interface UserState {
  id: string
  updated_at: number | null
  name: string
}

const initialState: UserState = {
  id: '',
  updated_at: null,
  name: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getName: (state) => {
      state.name = 'test'
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.id = action.payload.id
      state.updated_at = action.payload.updated_at
    })
  },

})

export const { getName } = userSlice.actions

export default userSlice.reducer

