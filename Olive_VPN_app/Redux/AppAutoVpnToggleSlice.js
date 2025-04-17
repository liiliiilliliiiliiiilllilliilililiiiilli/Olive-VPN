import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import AsyncStorage from '@react-native-async-storage/async-storage'


const defaultIsAutoVpnOn = false


const setIsAutoVpnOn = createAsyncThunk (

  'isAutoVpnOn/setIsAutoVpnOn',

  async (isAutoVpnOn, {getState, dispatch}) => {

    switch (isAutoVpnOn) {

      case 'init': {

        const currentState = JSON.parse (await AsyncStorage.getItem ('isAutoVpnOn'))

        if (!currentState) {

          dispatch (setIsAutoVpnOnState (defaultIsAutoVpnOn))
          await AsyncStorage.setItem ('isAutoVpnOn', JSON.stringify (defaultIsAutoVpnOn))

        }
        
        else dispatch (setIsAutoVpnOnState (currentState))

        break

      }

      default: {

        await AsyncStorage.setItem ('isAutoVpnOn', JSON.stringify (isAutoVpnOn))
        dispatch (setIsAutoVpnOnState (isAutoVpnOn))

      }

    }

  }

)


const appAutoVpnToggleSlice = createSlice ({

  name: 'isAutoVpnOn',

  initialState: {value: null},

  reducers: {
    
    setIsAutoVpnOnState: (state, action) => {state.value = action.payload}
  
  },

  extraReducers: builder => {

    builder.addCase (setIsAutoVpnOn.fulfilled)

    builder.addCase (setIsAutoVpnOn.rejected, (state, action) => {

      throw new Error (`appAutoVpnToggleSlice error: ${action.error.message}`)

    })

  }

})

const { setIsAutoVpnOnState } = appAutoVpnToggleSlice.actions

const autoVpnOnReducer = appAutoVpnToggleSlice.reducer


export { autoVpnOnReducer, setIsAutoVpnOn }