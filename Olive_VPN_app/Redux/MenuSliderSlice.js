import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


const setIsMenuSliderOpened = createAsyncThunk (

  'isMenuSliderOpened/setIsMenuSliderOpened',

  async (isMenuSliderOpened, {getState, dispatch}) => {

    dispatch (setIsMenuSliderOpenedState (isMenuSliderOpened))

  }

)


const menuSliderSlice = createSlice ({

  name: 'isMenuSliderOpened',

  initialState: {value: false},

  reducers: {
    
    setIsMenuSliderOpenedState: (state, action) => {state.value = action.payload}
  
  },

  extraReducers: builder => {

    builder.addCase (setIsMenuSliderOpened.fulfilled)

    builder.addCase (setIsMenuSliderOpened.rejected, (state, action) => {

      throw new Error (`menuSliderSlice error: ${action.error.message}`)

    })

  }

})

const { setIsMenuSliderOpenedState } = menuSliderSlice.actions

const menuSliderReducer = menuSliderSlice.reducer


export { menuSliderReducer, setIsMenuSliderOpened }