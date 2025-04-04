// This is application start up file.


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

  const [JwtAccessUser, setJwtAccessUser] = useState ()  // need to put into redux for futher global usage and trigger it
  const [JwtRefreshUser, setJwtRefreshUser] = useState ()  // need to put into redux for futher global usage and trigger it


  const configureThemes = () => {

    setTheme ('init')

  }

  const configureUserTokens = async () => {

    setJwtAccessUser (await SecureStore.getItemAsync ('JwtAccessUser') || '')
    setJwtRefreshUser (await SecureStore.getItemAsync ('JwtRefreshUser') || '')

  }


  // set up the app after start up:

  useFonts ({  // configure global app fonts

    'Archivo': require ('../assets/Fonts/Archivo/Archivo-VariableFont_wdth,wght.ttf'),

    'Archivo-Regular': require ('../assets/Fonts/Archivo/Archivo-Regular.ttf'),
    'Archivo-Medium': require ('../assets/Fonts/Archivo/Archivo-Medium.ttf'),
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

      configureThemes (),
      configureUserTokens ()

    ])
    
  }, [])

  useEffect (() => {  // trigger threads readiness

    const isThemeConfigured = theme != null
    const areUserTokensConfigured = (JwtAccessUser != null) && (JwtRefreshUser != null)

    if (isThemeConfigured && areUserTokensConfigured) setIsAppSetUp (true)
      
  }, [theme, JwtAccessUser, JwtRefreshUser])

  // .


  return (

    <>
    
      {!isAppSetUp ?

        <Text>Загрузка...</Text>

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