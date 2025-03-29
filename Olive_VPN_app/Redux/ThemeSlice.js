const _ = require ('lodash')

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage'


const defaultAppTheme = `{"type": "Dark", "palette": "MainTheme"}`  // there may me error because of added '{', '}'

const appThemes = [

  `{"type": "Dark", "palette": "MainTheme"}`,
  `{"type": "Light", "palette": "MainTheme"}`

]


const SetTheme = createAsyncThunk (

  'theme/SetTheme',

  async (theme, {getState, dispatch}) => {

    const current_state = getState().theme.value


    if (theme == 'Initialization') {  // app launching

      const AsyncStorageTheme = JSON.parse (await AsyncStorage.getItem ('AppTheme'))

      if (!AsyncStorageTheme) {  // 1st launch

        await AsyncStorage.setItem ('AppTheme', defaultAppTheme)
        dispatch (SetThemeState (defaultAppTheme))

      }

      else  // regular launch

        dispatch (SetThemeState (AsyncStorageTheme))

    }

    else if (theme == 'reverse') {  // functionality

      const settedTheme = appThemes[1 - appThemes.indexOf(current_state)]

      await AsyncStorage.setItem ('AppTheme', JSON.stringify (settedTheme))
      dispatch (SetThemeState (settedTheme))

    }

    else {  // app usage

      await AsyncStorage.setItem ('AppTheme', JSON.stringify (theme))
      dispatch (SetThemeState (theme))

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