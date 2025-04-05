import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


const SetMainPageStatusText = createAsyncThunk (

  'MainPageStatusText/SetMainPageStatusText',

  async (MainPageStatusText, {getState, dispatch}) => {

    dispatch (SetMainPageStatusTextState (MainPageStatusText))

  }

)


const MainPageStatusTextSlice = createSlice ({

  name: 'MainPageStatusText',

  initialState: {value: 'Соединение не защищено'},  // temporal

  reducers: {
    
    SetMainPageStatusTextState: (state, action) => {state.value = action.payload}
  
  },

  extraReducers: builder => {

    builder.addCase (SetMainPageStatusText.fulfilled)

    builder.addCase (SetMainPageStatusText.rejected, (state, action) => {

      throw new Error (`MainPageStatusTextSlice error: ${action.error.message}`)

    })

  }

})

const { SetMainPageStatusTextState } = MainPageStatusTextSlice.actions

const MainPageStatusTextReducer = MainPageStatusTextSlice.reducer


export { MainPageStatusTextReducer, SetMainPageStatusText }