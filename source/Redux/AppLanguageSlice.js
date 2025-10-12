import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { getLocales } from 'expo-localization'


const defaultAppLanguage = 'English'

const languageCode_map = {

  'ru': 'Russian',
  'en': 'English',
  'ch': 'Chinese'

}


const setAppLanguage = createAsyncThunk (

  'appLanguage/setAppLanguage',

  async (appLanguage, {getState, dispatch}) => {

    switch (appLanguage) {

      case 'init': {

        const currentAppLanguage = JSON.parse (await AsyncStorage.getItem ('appLanguage'))

        if (!currentAppLanguage) {

          const languageCode = languageCode_map [getLocales () [0] .languageCode] || defaultAppLanguage

          dispatch (setLanguageState (languageCode))
          await AsyncStorage.setItem ('appLanguage', JSON.stringify (languageCode))

        } else {

          dispatch (setLanguageState (currentAppLanguage))

        }

        break

      }

      default: {

        await AsyncStorage.setItem ('appLanguage', JSON.stringify (appLanguage))
        dispatch (setLanguageState (appLanguage))

      }

    }

  }

)


const appLanguageSlice = createSlice ({

  name: 'appLanguage',

  initialState: {value: null},

  reducers: {
    
    setLanguageState: (state, action) => {state.value = action.payload}
  
  },

  extraReducers: builder => {

    builder.addCase (setAppLanguage.fulfilled)

    builder.addCase (setAppLanguage.rejected, (state, action) => {

      throw new Error (`appLanguageSlice error: ${action.error.message}`)

    })

  }

})

const { setLanguageState } = appLanguageSlice.actions

const appLanguageReducer = appLanguageSlice.reducer


export { appLanguageReducer, setAppLanguage }