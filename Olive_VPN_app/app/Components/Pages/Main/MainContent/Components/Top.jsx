// Component.


import publicIP from 'react-native-public-ip'
import NetInfo from '@react-native-community/netinfo'
import RNSimpleOpenvpn, { addVpnStateListener, removeVpnStateListener } from 'react-native-simple-openvpn'

import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useThemes } from '../../../../../../Styles/Hooks/UseThemes'

import { View } from 'react-native'
import { Platform } from 'react-native'

import Animated, { useSharedValue, withSequence, withTiming, Easing } from 'react-native-reanimated'


const device_is_iphone = Platform.OS === 'ios'

let styles, theme


const Top = () => {

  [styles, theme] = useThemes (styles => styles.MainPage.Main.Top)


  const statusText = useSelector (state => state.MainPageStatusText.value)


  return (

    <View style = {{
    alignItems: 'center',
    gap: 7.5}}>

      <StatusText
      text = {statusText}/>

      <Action/>

    </View>

  )

}


const StatusText = ({text}) => {

  const colorControl = useSharedValue (styles.StatusText.color)


  const commonEasing = comEsng = Easing.inOut (Easing.quad)
  const themeAnimationDuration = thAnDu = 250


  // theme animations

  useEffect (() =>

    colorControl.value = withTiming (styles.StatusText.color, {duration: thAnDu, easing: comEsng})

  , [theme])

  // .


  return (

    <Animated.Text style = {{
    fontFamily: styles.StatusText.fontFamily,
    color: colorControl,
    fontSize: 29}}>

      {text}

    </Animated.Text>

  )

}

const Action = () => {

  const [ipTextState, setIpTextState] = useState ('')


  const colorControl = useSharedValue (styles.Action.color)
  const opacityControl = useSharedValue (1)


  // theme animations

  useEffect (() =>

    colorControl.value = withTiming (styles.Action.color, {duration: thAnDu, easing: comEsng})

  , [theme])

  // .


  // + press animations

  const setIpText = text => {

    if (text == ' ') {

      setTimeout (() => setIpTextState (''), 350)
      opacityControl.value = withSequence (withTiming (0, {duration: 350}), withTiming (1, {duration: 350}))

    }

    else if (text != '') {

      if (ipTextState == '') {

        setTimeout (() => setIpTextState (`IP:  ${text}`), 350)
        opacityControl.value = withSequence (withTiming (0, {duration: 350}), withTiming (1, {duration: 350}))

      }

      else {

        setTimeout (() => setIpTextState (`IP:  ${text}`), 350)
        opacityControl.value = withSequence (withTiming (0, {duration: 350}), withTiming (1, {duration: 350}))

      }

    }

    else {

      opacityControl.value = withTiming (0, {duration: 350})
      setTimeout (() => setIpTextState (''), 350)

    }

  }

  const subscribeNet = () => {

    return NetInfo.addEventListener (async event => {

      if (event.isConnected) {

        publicIP ()
        .then (ip => setIpText (ip))
        .catch (error => console.info ('Unable to get IP address:', error))

      }

      else setIpText (' ')

    })

  }

  const subscribeVpn = async () => {

    if (device_is_iphone) await RNSimpleOpenvpn.observeState ()

    addVpnStateListener (async () => {

      let networkConnected

      NetInfo.fetch ()
      .then (state => networkConnected = state.isConnected)

      if (networkConnected) {

        publicIP ()
        .then (ip => setIpText (ip))
        .catch (error => console.info ('Unable to get IP address:', error))

      }

      else setIpText ('')

    })

  }

  const unsubscribeVpn = async () => {  // removing triggering
  
    if (device_is_iphone) await RNSimpleOpenvpn.stopObserveState ()
      
    removeVpnStateListener ()

  }

  // .


  useEffect (() => {

    publicIP ()
    .then (ip => setIpText (ip))
    .catch (error => console.info ('Unable to get IP address:', error))

    const unsubscribeNet = subscribeNet ()
    subscribeVpn ()

    return () => {

      unsubscribeNet ()
      unsubscribeVpn ()
      setIpText ('')

    }

  }, [])


  return (

    <View style = {{
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    padding: 5,
    paddingHorizontal: 15,
    margin: -5,
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