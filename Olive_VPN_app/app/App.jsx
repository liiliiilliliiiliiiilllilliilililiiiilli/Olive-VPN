// This is application main file.


import axios from 'axios'
import * as SecureStore from 'expo-secure-store'

import { useState, useEffect } from 'react'
import { useFonts } from 'expo-font'
import { useThemes } from '../Styles/Hooks/UseThemes'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Text } from 'react-native'

import Main from './Pages/Main'
import Options from './Pages/Options'


// axios.defaults.baseURL = 'https://OliveVPN.net:5000'
axios.defaults.method = 'post'
axios.defaults.rejectUnauthorized = false
axios.defaults.timeout = 2500


const Stack = createNativeStackNavigator ()

const generalScreenOptions = {

  headerShown: false

}


const App = () => {

  const [isAppSetUp, setIsAppSetUp] = useState (false)

  const [styles, theme, setTheme] = useThemes ()

  const [JWT_Access_user, set_JWT_Access_user] = useState ()  // need to put into redux for futher global usage and trigger it
  const [JWT_Refresh_user, set_JWT_Refresh_user] = useState ()  // need to put into redux for futher global usage and trigger it


  const configureUserTokens = async () => {

    set_JWT_Access_user (await SecureStore.getItemAsync ('JWT_Access_user') || '')
    set_JWT_Refresh_user (await SecureStore.getItemAsync ('JWT_Refresh_user') || '')

  }

  const configureThemes = () => {

    setTheme (`{"type": "Dark", "palette": "MainTheme"}`)  // add Initialization later

  }


  // set up the app after start up:

  useFonts ({  // configure global app fonts
    
    'Archivo-Regular': require ('../assets/Fonts/Archivo/Archivo-Regular.ttf'),
    'Archivo-SemiBold': require ('../assets/Fonts/Archivo/Archivo-SemiBold.ttf'),
    'Archivo-Bold': require ('../assets/Fonts/Archivo/Archivo-Bold.ttf'),
    'Archivo-ExtraBold': require ('../assets/Fonts/Archivo/Archivo-ExtraBold.ttf'),
    
    'Arimo': require ('../assets/Fonts/Arimo/Arimo-VariableFont_wght.ttf'),
    'Arimo-Regular': require ('../assets/Fonts/Arimo/Arimo-Regular.ttf'),
    'Arimo-SemiBold': require ('../assets/Fonts/Arimo/Arimo-SemiBold.ttf'),
    'Arimo-Bold': require ('../assets/Fonts/Arimo/Arimo-Bold.ttf'),
    
    'FiraSans-SemiBold': require ('../assets/Fonts/FiraSans/FiraSans-SemiBold.ttf'),
    
    'Fredoka-SemiBold': require ('../assets/Fonts/Fredoka/Fredoka-SemiBold.ttf'),
    
    'Gadugi-Regular': require ('../assets/Fonts/Gadugi/gadugi-normal.ttf'),
    'Gadugi-Bold': require ('../assets/Fonts/Gadugi/gadugi-bold.ttf'),
    
    'Inter-SemiBold': require ('../assets/Fonts/Inter/Inter_18pt-SemiBold.ttf')

  })

  useEffect (() => {  // call all independant initialization threads in parallel

    Promise.all ([

      configureUserTokens (),
      configureThemes ()

    ])
    
  }, [])

  useEffect (() => {  // trigger threads readiness

    const isThemeConfigured = theme != null
    const areUserTokensConfigured = (JWT_Access_user != null) && (JWT_Refresh_user != null)

    if (isThemeConfigured && areUserTokensConfigured) setIsAppSetUp (true)
      
  }, [JWT_Access_user, JWT_Refresh_user, theme])

  // .


  return (

    <>
    
      {!isAppSetUp ?

        <Text> Загрузка... </Text>

      :

        <Stack.Navigator
        initialRouteName = 'Main'
        screenOptions = {generalScreenOptions}>

          <Stack.Screen
          name = 'Main'
          component = {Main}/>

          <Stack.Screen
          name = 'Options'
          component = {Options}/>

        </Stack.Navigator>

      }
    
    </>

  )

}


export default App