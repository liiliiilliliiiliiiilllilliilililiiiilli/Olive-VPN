import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { Appearance } from 'react-native'

const lodash = require ('lodash')


const appThemeTypes = {

  system: 'systemTheme',
  light: {palette: 'MainTheme', type: 'Light'},
  dark: {palette: 'MainTheme', type: 'Dark'}

}

const appThemes = Object.values (appThemeTypes)

const defaultAppTheme = appThemeTypes.system


const SetTheme = createAsyncThunk (

  'theme/SetTheme',

  async (theme, {getState, dispatch}) => {

    const currentThemeType = JSON.parse (await AsyncStorage.getItem ('AppTheme'))


    Appearance.addChangeListener (async preferences => {  // trigger

      const systemTheme = preferences.colorScheme
      const currentThemeType = JSON.parse (await AsyncStorage.getItem ('AppTheme'))

      if (currentThemeType == appThemeTypes.system)
        
        dispatch (SetThemeState ( {light: 'systemThemeLight', dark: 'systemThemeDark'} [systemTheme] ))

    })


    switch (theme) {

      case 'init': {

        if (!currentThemeType) {  // app's very 1st launch

          defaultAppTheme == appThemeTypes.system
        
            ? dispatch (SetThemeState ( {light: 'systemThemeLight', dark: 'systemThemeDark'} [Appearance.getColorScheme()] ))  // and then the trigger acts
            : dispatch (SetThemeState (defaultAppTheme))

          await AsyncStorage.setItem ('AppTheme', JSON.stringify (defaultAppTheme))

        }

        else currentThemeType == appThemeTypes.system
        
          ? dispatch (SetThemeState ( {light: 'systemThemeLight', dark: 'systemThemeDark'} [Appearance.getColorScheme()] ))  // and then the trigger acts
          : dispatch (SetThemeState (currentThemeType))

      break }


      case 'next': {

        let nextThemeState
        
        for (let index in appThemes)

          if (lodash.isEqual (appThemes[index], currentThemeType)) nextThemeState = appThemes[(index + 1) % 3]


        nextThemeState == appThemeTypes.system
        
          ? dispatch (SetThemeState ( {light: 'systemThemeLight', dark: 'systemThemeDark'} [Appearance.getColorScheme()] ))  // and then the trigger acts
          : dispatch (SetThemeState (nextThemeState))


        await AsyncStorage.setItem ('AppTheme', JSON.stringify (nextThemeState))

      break }


      case 'light': {

        dispatch (SetThemeState (appThemeTypes.light))
        await AsyncStorage.setItem ('AppTheme', JSON.stringify (appThemeTypes.light))

      break }


      case 'dark': {

        dispatch (SetThemeState (appThemeTypes.dark))
        await AsyncStorage.setItem ('AppTheme', JSON.stringify (appThemeTypes.dark))

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