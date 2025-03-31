import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { Appearance } from 'react-native'

const lodash = require ('lodash')


const appThemes = {

  light: {palette: 'MainTheme', type: 'Light'},
  dark: {palette: 'MainTheme', type: 'Dark'},
  system: 'systemTheme'

}

const appThemesValues = Object.values (appThemes)

const defaultAppTheme = appThemes.dark


const SetTheme = createAsyncThunk (

  'theme/SetTheme',

  async (theme, {getState, dispatch}) => {

    const currentThemeType = JSON.parse (await AsyncStorage.getItem ('AppTheme'))


    Appearance.addChangeListener (async preferences => {  // tgigger

      const systemTheme = preferences.colorScheme
      const currentThemeType = JSON.parse (await AsyncStorage.getItem ('AppTheme'))

      if (currentThemeType == appThemes.system)
        
        dispatch (SetThemeState ( {'light': 'systemThemeLight', 'dark': 'systemThemeDark'} [systemTheme] ))

    })


    switch (theme) {

      case 'init': {

        if (!currentThemeType) {  // app's very 1st launch

          dispatch (SetThemeState (defaultAppTheme))
          await AsyncStorage.setItem ('AppTheme', JSON.stringify (defaultAppTheme))

        }

        else currentThemeType == appThemes.system
        
          ? dispatch (SetThemeState ( {'light': 'systemThemeLight', 'dark': 'systemThemeDark'} [Appearance.getColorScheme()] ))  // and then the tgigger acts
          : dispatch (SetThemeState (currentThemeType))

      break }


      case 'next': {

        let nextThemeState
        
        for (let index in appThemesValues)

          if (lodash.isEqual (appThemesValues[index], currentThemeType)) nextThemeState = appThemesValues[(index + 1) % 3]


        nextThemeState == appThemes.system
        
          ? dispatch (SetThemeState ( {'light': 'systemThemeLight', 'dark': 'systemThemeDark'} [Appearance.getColorScheme()] ))  // and then the tgigger acts
          : dispatch (SetThemeState (nextThemeState))


        await AsyncStorage.setItem ('AppTheme', JSON.stringify (nextThemeState))

      break }


      case 'light': {

        dispatch (SetThemeState (appThemes.light))
        await AsyncStorage.setItem ('AppTheme', JSON.stringify (appThemes.light))

      break }


      case 'dark': {

        dispatch (SetThemeState (appThemes.dark))
        await AsyncStorage.setItem ('AppTheme', JSON.stringify (appThemes.dark))

      break }

    }

  }

)


const ThemeSlice = createSlice ({

  name: 'theme',

  initialState: {value: null},

  reducers: {
    
    SetThemeState: (state, action) => {state.value = action.payload}
  
  },

  extraReducers: builder => {

    builder.addCase (SetTheme.fulfilled)

    builder.addCase (SetTheme.rejected, (state, action) => {

      throw new Error (`ThemeSlice error: ${action.error.message}`)

    })

  }

})

const { SetThemeState } = ThemeSlice.actions

const ThemeReducer = ThemeSlice.reducer


export { ThemeReducer, SetTheme }