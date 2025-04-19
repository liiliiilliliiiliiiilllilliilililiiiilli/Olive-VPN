// Component.


import publicIP from 'react-native-public-ip'
import NetInfo from '@react-native-community/netinfo'
import RNSimpleOpenvpn, { addVpnStateListener, removeVpnStateListener } from 'react-native-simple-openvpn'

import { useState, useEffect } from 'react'
import { useThemes } from '../../../../../../Redux/Hooks/UseThemes'
import { useMainPageStatusText } from '../../../../../../Redux/Hooks/MainPageStatusText'

import { View } from 'react-native'
import { Platform } from 'react-native'

import Animated, { useSharedValue, withSequence, withTiming, Easing } from 'react-native-reanimated'
import { useAppLanguage } from '../../../../../../Redux/Hooks/AppLanguage'
import { useAppVpn } from '../../../../../../Redux/Hooks/AppVpn'


const device_is_iphone = Platform.OS === 'ios'


const Top = () => {

  return (

    <View style = {{
    alignItems: 'center',
    gap: 7.5}}>

      <StatusText/>
      <Action/>

    </View>

  )

}


const StatusText = () => {

  const [styles, theme] = useThemes (styles => styles.MainPage.Main.Top)
  const [textValue] = useMainPageStatusText ()

  const colorControl = useSharedValue (styles.StatusText.color)

  const commonEasing = comEsng = Easing.inOut (Easing.quad)
  const themeAnimationDuration = thAnDu = 250


  // theme animations:

  useEffect (() =>

    colorControl.value = withTiming (styles.StatusText.color, {duration: thAnDu, easing: comEsng})

  , [theme])

  // .


  return (

    <Animated.Text style = {{
    fontFamily: styles.StatusText.fontFamily,
    color: colorControl,
    fontSize: 29}}>

      {textValue}

    </Animated.Text>

  )

}

const Action = () => {

  const [styles, theme] = useThemes (styles => styles.MainPage.Main.Top)
  const [texts] = useAppLanguage (texts => texts.MainPage.Main.Top.Actions)
  const [appVpn] = useAppVpn ()


  const [ipTextState, setIpTextState] = useState ('')

  const colorControl = useSharedValue (styles.Action.color)
  const opacityControl = useSharedValue (1)

  const commonEasing = comEsng = Easing.inOut (Easing.quad)
  const themeAnimationDuration = thAnDu = 250
  const switchAnimationDuration = swAnDu = 350

  const [actionsUpdated, setActionsUpdated] = useState (0)


  // theme animations:

  useEffect (() =>

    colorControl.value = withTiming (styles.Action.color, {duration: thAnDu, easing: comEsng})

  , [theme])

  // .


  // + switch animations:

  const setIpText = text => {

    if (text == ' ') {

      setTimeout (() => setIpTextState (''), swAnDu)
      opacityControl.value = withSequence (withTiming (0, {duration: swAnDu}), withTiming (1, {duration: swAnDu}))

    }

    else if (text != '') {

      if (ipTextState == '') {

        setTimeout (() => setIpTextState (`IP:  ${text}`), swAnDu)
        opacityControl.value = withSequence (withTiming (0, {duration: swAnDu}), withTiming (1, {duration: swAnDu}))

      }

      else {

        setTimeout (() => setIpTextState (`IP:  ${text}`), swAnDu)
        opacityControl.value = withSequence (withTiming (0, {duration: swAnDu}), withTiming (1, {duration: swAnDu}))

      }

    }

    else {

      opacityControl.value = withTiming (0, {duration: swAnDu})
      setTimeout (() => setIpTextState (''), swAnDu)

    }

  }


  useEffect (() => {

    setIpText (texts [{"Netherlands": "netherlands_ip", "Germany": "germany_ip", "Finland": "finland_ip"}[appVpn]])

  }, [actionsUpdated])


  const subscribeNet = () => {

    return NetInfo.addEventListener (async event => {

      let currVpnState = await RNSimpleOpenvpn.getCurrentState ()

      if (currVpnState == 2) {

        setActionsUpdated (prev => ((prev + 1) % 100))

      }

      else {

        if (event.isConnected) {

          publicIP ()
         .then (ip => setIpText (ip))
         .catch (error => console.info (`Unable to get IP address:\n\n${error}`))

        }

        else setIpText (' ')

      }

    })

  }

  const subscribeVpn = async () => {

    if (device_is_iphone) await RNSimpleOpenvpn.observeState ()

    addVpnStateListener (async () => {

      let currVpnState = await RNSimpleOpenvpn.getCurrentState ()

      if (currVpnState == 2) {

        setActionsUpdated (prev => ((prev + 1) % 100))

      }

      else {

       let networkConnected

        NetInfo.fetch ()
        .then (state => networkConnected = state.isConnected)

       if (networkConnected) {

          publicIP ()
          .then (ip => setIpText (ip))
          .catch (error => console.info (`Unable to get IP address:\n\n${error}`))

       }

       else setIpText ('')

      }

    })

  }

  const unsubscribeVpn = async () => {  // removing triggering
  
    if (device_is_iphone) await RNSimpleOpenvpn.stopObserveState ()
      
    removeVpnStateListener ()

  }

  // .


  useEffect (() => {(async () => {

    let currVpnState = await RNSimpleOpenvpn.getCurrentState ()

    if (currVpnState == 2) {

      setActionsUpdated (prev => ((prev + 1) % 100))

    }

    else {

      publicIP ()
      .then (ip => setIpText (ip))
      .catch (error => console.info (`Unable to get IP address:\n\n${error}`))

    }

    const unsubscribeNet = subscribeNet ()
    subscribeVpn ()

    return () => {

      unsubscribeNet ()
      unsubscribeVpn ()
      setIpText ('')

    }

  })()}, [])


  return (

    <View style = {{
    flexDirection: 'row',
    alignItems: 'center',
    margin: -5,
    gap: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 10}}>

      <Animated.Text style = {{
      fontFamily: styles.Action.fontFamily,
      color: colorControl,
      fontSize: 19.5,
      opacity: opacityControl}}>

        {ipTextState}

      </Animated.Text>

    </View>

  )

}


export default Top