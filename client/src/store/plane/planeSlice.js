import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { planesService } from '../../store/services/planesServices'

export const getPlane = createAsyncThunk('GET_PLANE', async (id, thunkAPI) => {
   try {
      return await planesService.getPlane(id)
   } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data)
   }
})

export const createPlane = createAsyncThunk(
   'CREATE_PLANE',
   async (planeData, thunkAPI) => {
      try {
         return await planesService.createPlane(planeData)
      } catch (e) {
         return thunkAPI.rejectWithValue(e.response.data)
      }
   }
)

const planeSlice = createSlice({
   name: 'plane',
   initialState: {
      plane: null,
      isError: false,
      isLoading: true,
      message: '',
      errors: null,
   },
   reducers: {
      resetPlaneErrors: state => {
         state.errors = null
      },
   },
   extraReducers: builder => {
      builder.addCase(getPlane.pending, state => {
         state.isLoading = true
      })
      builder.addCase(getPlane.fulfilled, (state, action) => {
         state.isLoading = false
         state.plane = action.payload[0]
      })
      builder.addCase(getPlane.rejected, (state, action) => {
         state.isError = true
         state.isLoading = false
         state.message = action.payload.message
         state.plane = null
      })

      builder.addCase(createPlane.fulfilled, state => {
         state.isLoading = false
         state.errors = null
      })
      builder.addCase(createPlane.rejected, (state, action) => {
         state.isError = true
         state.isLoading = false
         state.errors = action.payload
      })
   },
})

export const { resetPlaneErrors } = planeSlice.actions
export default planeSlice.reducer
