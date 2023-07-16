import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const fetchUser = createAsyncThunk(
  'users/fetchByIdStatus',
  async () => {
    const response = await fetch('/api/user')
    const data = await response.json()

    return data
  }
)


export default fetchUser