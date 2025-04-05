import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


const setOpenedWindows = createAsyncThunk (

  'openedWindows/setOpenedWindows',

  async (openedWindows, {getState, dispatch}) => {

    dispatch (setOpenedWindowsState (openedWindows))

  }

)


const OpenedWindowsSlice = createSlice ({

  name: 'openedWindows',

  initialState: {value: []},  // temporal

  reducers: {
    
    setOpenedWindowsState: (state, action) => {state.value = action.payload}
  
  },

  extraReducers: builder => {

    builder.addCase (setOpenedWindows.fulfilled)

    builder.addCase (setOpenedWindows.rejected, (state, action) => {

      throw new Error (`OpenedWindowsSlice error: ${action.error.message}`)

    })

  }

})

const { setOpenedWindowsState } = OpenedWindowsSlice.actions

const OpenedWindowsReducer = OpenedWindowsSlice.reducer


export { OpenedWindowsReducer, setOpenedWindows }