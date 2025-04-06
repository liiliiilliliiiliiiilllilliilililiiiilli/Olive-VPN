import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


const setMainPageStatusText = createAsyncThunk (

  'mainPageStatusText/setMainPageStatusText',

  async (mainPageStatusText, {getState, dispatch}) => {

    dispatch (setMainPageStatusTextState (mainPageStatusText))

  }

)


const mainPageStatusTextSlice = createSlice ({

  name: 'mainPageStatusText',

  initialState: {value: 'Соединение не защищено'},  // temporal

  reducers: {
    
    setMainPageStatusTextState: (state, action) => {state.value = action.payload}
  
  },

  extraReducers: builder => {

    builder.addCase (setMainPageStatusText.fulfilled)

    builder.addCase (setMainPageStatusText.rejected, (state, action) => {

      throw new Error (`mainPageStatusTextSlice error: ${action.error.message}`)

    })

  }

})

const { setMainPageStatusTextState } = mainPageStatusTextSlice.actions

const mainPageStatusTextReducer = mainPageStatusTextSlice.reducer


export { mainPageStatusTextReducer, setMainPageStatusText }