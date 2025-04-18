// This is application start up file.


import * as SplashScreen from 'expo-splash-screen'

import * as SecureStore from 'expo-secure-store'
// import RNSimpleOpenvpn from 'react-native-simple-openvpn'

import { useState, useEffect } from 'react'
import { useFonts } from 'expo-font'
import { useThemes } from '../Redux/Hooks/UseThemes'
import { useAppLanguage } from '../Redux/Hooks/AppLanguage'
import { useAppAutoVpnToggle } from '../Redux/Hooks/AppAutoVpnToggle'
import { useAppVpn } from '../Redux/Hooks/AppVpn'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Main from './Pages/Main'
import ServersList from './Pages/ServersList'


const Stack = createNativeStackNavigator ()

const generalScreenOptions = {

  headerShown: false

}


const App = ({setBackgroundColor}) => {

  const [isAppSetUp, setIsAppSetUp] = useState (false)
  const [isAppReady, setIsAppReady] = useState (false)

  const [styles, theme, setTheme] = useThemes ()
  const [texts, appLanguage, setAppLanguage] = useAppLanguage ()
  const [isAutoVpnOn, setIsAutoVpnOn] = useAppAutoVpnToggle ()

  const [appVpn, setAppVpn, getVpnState, connectToVpn, disconnectFromVpn] = useAppVpn ()

  const [JwtAccessUser, setJwtAccessUser] = useState ()  // need to put into redux for futher global usage and trigger it
  const [JwtRefreshUser, setJwtRefreshUser] = useState ()  // need to put into redux for futher global usage and trigger it


  const configureThemes = () => {

    setTheme ('init')

  }

  const configureAppLanguage = async () => {

    setAppLanguage ('init')

  }

  const configureAutoVpn = () => {

    setIsAutoVpnOn ('init')

  }

  const configureUserTokens = async () => {
    
    setJwtAccessUser (await SecureStore.getItemAsync ('JwtAccessUser') || '')
    setJwtRefreshUser (await SecureStore.getItemAsync ('JwtRefreshUser') || '')
    
  }

  const configureAppVpn = () => {

    setAppVpn ('init')

  }


  // set up the app after start up:

  useFonts ({  // configure global app fonts

    'Archivo-Regular': require ('../assets/Fonts/Archivo/Archivo-Regular.ttf'),
    'Archivo-Medium': require ('../assets/Fonts/Archivo/Archivo-Medium.ttf'),
    'Archivo-SemiBold': require ('../assets/Fonts/Archivo/Archivo-SemiBold.ttf'),
    'Archivo-Bold': require ('../assets/Fonts/Archivo/Archivo-Bold.ttf'),
    'Archivo-ExtraBold': require ('../assets/Fonts/Archivo/Archivo-ExtraBold.ttf'),

    'Arimo-SemiBold': require ('../assets/Fonts/Arimo/Arimo-SemiBold.ttf'),
    'Arimo-Bold': require ('../assets/Fonts/Arimo/Arimo-Bold.ttf'),
    
    'Fredoka-SemiBold': require ('../assets/Fonts/Fredoka/Fredoka-SemiBold.ttf')

  })

  useEffect (() => {  // call all independant initialization threads in parallel

    Promise.all ([

      configureThemes (),
      configureAppLanguage (),
      configureUserTokens (),
      configureAutoVpn (),
      configureAppVpn ()

    ])
    
  }, [])

  useEffect (() => {  // trigger threads readiness

    const isThemeConfigured = theme != null
    const isAppLanguageConfigured = appLanguage != null
    const areUserTokensConfigured = (JwtAccessUser != null) && (JwtRefreshUser != null)
    const isAutoVpnConfigured = isAutoVpnOn != null
    const isAppVpnConfigured = appVpn != null

    if (isThemeConfigured && isAppLanguageConfigured && areUserTokensConfigured && isAutoVpnConfigured, isAppVpnConfigured) setIsAppSetUp (true)
      
  }, [theme, appLanguage, JwtAccessUser, JwtRefreshUser, isAutoVpnOn, appVpn])

  // .


  useEffect (() => {(async () => {

    setBackgroundColor (styles.MainBackground.backgroundColor)

    if (isAutoVpnOn) {

      const VpnState = await getVpnState ()
      if (VpnState == 0) { await connectToVpn () }

    }

    setIsAppReady (true)

    SplashScreen.hide ()

  })()}, [isAppSetUp])


  return (

    <>

      {isAppReady ?

        <Stack.Navigator
        initialRouteName = 'Main'
        screenOptions = {generalScreenOptions}>

          <Stack.Screen
          name = 'Main'
          component = {Main}/>

          <Stack.Screen
          name = 'ServersList'
          component = {ServersList}/>

        </Stack.Navigator>

      : null}

    </>

  )

}


export default App