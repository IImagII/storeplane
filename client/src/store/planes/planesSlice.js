import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { planesService } from '../../store/services/planesServices'

export const getPlanes = createAsyncThunk('GET_PLANES', async (_, thunkAPI) => {
   try {
      return await planesService.getPlanes()
   } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data)
   }
})

const planesSlice = createSlice({
   name: 'planes',
   initialState: {
      planes: null,
      isError: false,
      isLoading: true,
      message: '',
   },
   extraReducers: builder => {
      builder.addCase(getPlanes.pending, state => {
         state.isLoading = true
      })
      builder.addCase(getPlanes.fulfilled, (state, action) => {
         state.isLoading = false
         state.planes = action.payload
      })
      builder.addCase(getPlanes.rejected, (state, action) => {
         state.isError = true
         state.isLoading = false
         state.message = action.payload.message
         state.planes = null
      })
   },
})

export default planesSlice.reducer
