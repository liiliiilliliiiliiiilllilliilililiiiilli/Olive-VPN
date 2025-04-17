import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import AsyncStorage from '@react-native-async-storage/async-storage'


const defaultAppVpn = 'Netherlands'


const setAppVpn = createAsyncThunk (

  'AppVpn/setAppVpn',

  async (AppVpn, {getState, dispatch}) => {

    switch (AppVpn) {

      case 'init': {

        const currentAppVpn = await AsyncStorage.getItem ('AppVpn')

        if (!currentAppVpn) {

          await AsyncStorage.setItem ('AppVpn', defaultAppVpn)
          dispatch (setAppVpnState (defaultAppVpn))

        }
        
        else dispatch (setAppVpnState (currentAppVpn))

        break

      }

      default: {

        await AsyncStorage.setItem ('AppVpn', AppVpn)
        dispatch (setAppVpnState (AppVpn))

      }

    }

  }

)


const AppVpnSlice = createSlice ({

  name: 'AppVpn',

  initialState: {value: null},

  reducers: {
    
    setAppVpnState: (state, action) => {state.value = action.payload}
  
  },

  extraReducers: builder => {

    builder.addCase (setAppVpn.fulfilled)

    builder.addCase (setAppVpn.rejected, (state, action) => {

      throw new Error (`AppVpnSlice error: ${action.error.message}`)

    })

  }

})

const { setAppVpnState } = AppVpnSlice.actions

const AppVpnReducer = AppVpnSlice.reducer


export { AppVpnReducer, setAppVpn }