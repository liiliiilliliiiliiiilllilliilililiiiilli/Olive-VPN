import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


const setOpenedWindows = createAsyncThunk (

  'openedWindows/setOpenedWindows',

  async (openedWindows, {getState, dispatch}) => {

    dispatch (setOpenedWindowsState (openedWindows))

  }

)


const openedWindowsSlice = createSlice ({

  name: 'openedWindows',

  initialState: {value: []},  // temporal

  reducers: {
    
    setOpenedWindowsState: (state, action) => {state.value = action.payload}
  
  },

  extraReducers: builder => {

    builder.addCase (setOpenedWindows.fulfilled)

    builder.addCase (setOpenedWindows.rejected, (state, action) => {

      throw new Error (`openedWindowsSlice error: ${action.error.message}`)

    })

  }

})

const { setOpenedWindowsState } = openedWindowsSlice.actions

const openedWindowsReducer = openedWindowsSlice.reducer


export { openedWindowsReducer, setOpenedWindows }