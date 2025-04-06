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


const setTheme = createAsyncThunk (

  'theme/setTheme',

  async (theme, {getState, dispatch}) => {

    const currentThemeType = JSON.parse (await AsyncStorage.getItem ('AppTheme'))


    Appearance.addChangeListener (async preferences => {  // trigger

      const systemTheme = preferences.colorScheme
      const currentThemeType = JSON.parse (await AsyncStorage.getItem ('AppTheme'))

      if (currentThemeType == appThemeTypes.system)
        
        dispatch (setThemeState ( {light: 'systemThemeLight', dark: 'systemThemeDark'} [systemTheme] ))

    })


    switch (theme) {

      case 'init': {

        if (!currentThemeType) {  // app's very 1st launch

          defaultAppTheme == appThemeTypes.system
        
            ? dispatch (setThemeState ( {light: 'systemThemeLight', dark: 'systemThemeDark'} [Appearance.getColorScheme()] ))  // and then the trigger acts
            : dispatch (setThemeState (defaultAppTheme))

          await AsyncStorage.setItem ('AppTheme', JSON.stringify (defaultAppTheme))

        }

        else currentThemeType == appThemeTypes.system
        
          ? dispatch (setThemeState ( {light: 'systemThemeLight', dark: 'systemThemeDark'} [Appearance.getColorScheme()] ))  // and then the trigger acts
          : dispatch (setThemeState (currentThemeType))

      break }


      case 'next': {

        let nextThemeState
        
        for (let index in appThemes)

          if (lodash.isEqual (appThemes[index], currentThemeType)) nextThemeState = appThemes[(index + 1) % 3]


        nextThemeState == appThemeTypes.system
        
          ? dispatch (setThemeState ( {light: 'systemThemeLight', dark: 'systemThemeDark'} [Appearance.getColorScheme()] ))  // and then the trigger acts
          : dispatch (setThemeState (nextThemeState))


        await AsyncStorage.setItem ('AppTheme', JSON.stringify (nextThemeState))

      break }


      case 'light': {

        dispatch (setThemeState (appThemeTypes.light))
        await AsyncStorage.setItem ('AppTheme', JSON.stringify (appThemeTypes.light))

      break }


      case 'dark': {

        dispatch (setThemeState (appThemeTypes.dark))
        await AsyncStorage.setItem ('AppTheme', JSON.stringify (appThemeTypes.dark))

      break }

    }

  }

)


const themeSlice = createSlice ({

  name: 'theme',

  initialState: {value: null},

  reducers: {
    
    setThemeState: (state, action) => {state.value = action.payload}
  
  },

  extraReducers: builder => {

    builder.addCase (setTheme.fulfilled)

    builder.addCase (setTheme.rejected, (state, action) => {

      throw new Error (`themeSlice error: ${action.error.message}`)

    })

  }

})

const { setThemeState } = themeSlice.actions

const themeReducer = themeSlice.reducer


export { themeReducer, setTheme }