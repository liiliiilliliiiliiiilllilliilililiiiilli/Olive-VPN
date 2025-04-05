import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


const setIsMainSliderOpened = createAsyncThunk (

  'isMainSliderOpened/setIsMainSliderOpened',

  async (isMainSliderOpened, {getState, dispatch}) => {

    dispatch (setIsMainSliderOpenedState (isMainSliderOpened))

  }

)


const IsMainSliderOpenedSlice = createSlice ({

  name: 'isMainSliderOpened',

  initialState: {value: false},

  reducers: {
    
    setIsMainSliderOpenedState: (state, action) => {state.value = action.payload}
  
  },

  extraReducers: builder => {

    builder.addCase (setIsMainSliderOpened.fulfilled)

    builder.addCase (setIsMainSliderOpened.rejected, (state, action) => {

      throw new Error (`IsMainSliderOpenedSlice error: ${action.error.message}`)

    })

  }

})

const { setIsMainSliderOpenedState } = IsMainSliderOpenedSlice.actions

const IsMainSliderOpenedReducer = IsMainSliderOpenedSlice.reducer


export { IsMainSliderOpenedReducer, setIsMainSliderOpened }