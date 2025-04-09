// This is application start up file.


import * as SecureStore from 'expo-secure-store'
import RNSimpleOpenvpn from 'react-native-simple-openvpn'

import { useState, useEffect } from 'react'
import { useFonts } from 'expo-font'
import { useThemes } from '../Redux/Hooks/UseThemes'
import { useAppLanguage } from '../Redux/Hooks/AppLanguage'
import { useAppAutoVpnToggle } from '../Redux/Hooks/AppAutoVpnToggle'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Text } from 'react-native'

import Main from './Pages/Main'
import ServersList from './Pages/ServersList'


const Stack = createNativeStackNavigator ()

const generalScreenOptions = {

  headerShown: false

}


const App = ({setBackgroundColor}) => {

  const [isAppSetUp, setIsAppSetUp] = useState (false)

  const [styles, theme, setTheme] = useThemes ()
  const [texts, appLanguage, setAppLanguage] = useAppLanguage ()
  const [isAutoVpnOn, setIsAutoVpnOn] = useAppAutoVpnToggle ()

  const [JwtAccessUser, setJwtAccessUser] = useState ()  // need to put into redux for futher global usage and trigger it
  const [JwtRefreshUser, setJwtRefreshUser] = useState ()  // need to put into redux for futher global usage and trigger it

  const [afterDark, setAfterDark] = useState (false)


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
      configureAutoVpn ()

    ])
    
  }, [])

  useEffect (() => {  // trigger threads readiness

    const isThemeConfigured = theme != null
    const isAppLanguageConfigured = appLanguage != null
    const areUserTokensConfigured = (JwtAccessUser != null) && (JwtRefreshUser != null)
    const isAutoVpnConfigured = isAutoVpnOn != null

    if (isThemeConfigured && isAppLanguageConfigured && areUserTokensConfigured && isAutoVpnConfigured) {setIsAppSetUp (true); setAfterDark (true)}
      
  }, [theme, appLanguage, JwtAccessUser, JwtRefreshUser, isAutoVpnOn])

  // .


  useEffect (() => {

    if (theme != null) setBackgroundColor (styles.MainBackground.backgroundColor)

  }, [theme])


  const limeVpnConnectionConfiguration = {

    ovpnFileName: 'lime',
    notificationTitle: 'RNSimpleOpenVPN',
    providerBundleIdentifier: 'com.example.OliveVPN',
    localizedDescription: 'TestRNSimpleOvpn',
    compatMode: 'MODERN_DEFAULTS'

  }

  const connectVPN = async vpnConnectionConfiguration => {

    try {

      await RNSimpleOpenvpn.connect ({

        ...vpnConnectionConfiguration,

        compatMode: {

          MODERN_DEFAULTS: RNSimpleOpenvpn.CompatMode.MODERN_DEFAULTS,
          OVPN_TWO_FIVE_PEER: RNSimpleOpenvpn.CompatMode.OVPN_TWO_FIVE_PEER,
          OVPN_TWO_FOUR_PEER: RNSimpleOpenvpn.CompatMode.OVPN_TWO_FOUR_PEER,
          OVPN_TWO_THREE_PEER: RNSimpleOpenvpn.CompatMode.OVPN_TWO_THREE_PEER

        } [vpnConnectionConfiguration.compatMode]

      })

    }

    catch (error) {

      console.info (`connectVPN: error while connecting to VPN server:\n\n${error}`)

    }

  }


  useEffect (() => {(async () => {

    if (!afterDark && isAutoVpnOn) {

      const VpnState = await RNSimpleOpenvpn.getCurrentState ()
      if (VpnState == 0) connectVPN (limeVpnConnectionConfiguration)

      setAfterDark (true)

    }

  })()}, [isAutoVpnOn])


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
          name = 'ServersList'
          component = {ServersList}/>

        </Stack.Navigator>

      }
    
    </>

  )

}


export default App