// Component.


import publicIP from 'react-native-public-ip'
import NetInfo from '@react-native-community/netinfo'
import RNSimpleOpenvpn, { addVpnStateListener, removeVpnStateListener } from 'react-native-simple-openvpn'

import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useThemes } from '../../../../../../Styles/Hooks/UseThemes'

import { View } from 'react-native'
import { Platform } from 'react-native'

import Animated, { Easing, useSharedValue, withSequence, withTiming } from 'react-native-reanimated'

// const AnimatedTouchableOpacity = Animated.createAnimatedComponent (TouchableOpacity)


const device_is_iphone = Platform.OS === 'ios'

let styles, theme


const Top = () => {

  [styles, theme] = useThemes (styles => styles.MainPage.Main.Top)

  const statusText = useSelector (state => state.MainPageStatusText.value)
  // const [actionText, setActionText] = useState ('Для всех приложений')  // need to change to redux too later


  const HandleActionPress = () => {

    console.info ('Top Action pressed')

  }


  return (

    <View style = {{
    alignItems: 'center',
    gap: 7.5}}>

      <StatusText
      text = {statusText}/>

      <Action/>

      {/* <Action
      text = {actionText}
      onPress = {() => HandleActionPress()}/> */}

    </View>

  )

}


const StatusText = ({text}) => {

  const colorControl = useSharedValue (styles.StatusText.color)


  // theme animations

  useEffect (() =>

    colorControl.value = withTiming (styles.StatusText.color, {duration: 250, easing: Easing.inOut(Easing.quad)})

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

const Action = ({text, onPress, style}) => {

  const [ipTextState, setIpTextState] = useState ('')


  // animations:
  
  // const scaleControl = useSharedValue (1)
  // const opacityControl = useSharedValue (1)

  // const animationStyles = useAnimatedStyle (() => {

  //   return {

  //     transform: [{scale: scaleControl.value}],
  //     opacity: opacityControl.value

  //   }

  // })


  // const animationDuration = 95

  // const handlePressIn = () => {

  //   scaleControl.value = withTiming (0.9575, {duration: animationDuration})
  //   opacityControl.value = withTiming (0.5, {duration: animationDuration})

  // }

  // const handlePressOut = () => {

  //   scaleControl.value = withTiming (1, {duration: animationDuration})
  //   opacityControl.value = withTiming (1, {duration: animationDuration})

  // }

  // .


  // const handlePress = () => {

  //   onPress ()

  // }


  const colorControl = useSharedValue (styles.Action.color)

  const opacityControl = useSharedValue (1)


  // theme animations

  useEffect (() =>

    colorControl.value = withTiming (styles.Action.color, {duration: 250, easing: Easing.inOut(Easing.quad)})

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

    <View
    activeOpacity = {1}
    // onPressIn = {() => handlePressIn()}
    // onPressOut = {() => handlePressOut()}
    // onPress = {() => handlePress()}
    style = {{
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    padding: 5,
    paddingHorizontal: 15,
    margin: -5,
    borderRadius: 10,
    ...style}
    // animationStyles
    }>

      {/* <Image
      source = {styles.Action.Apps_PNG}
      style = {{
      width: 17,
      height: 17,
      right: 0.25}}/> */}

      <Animated.Text style = {{
      fontFamily: styles.Action.fontFamily,
      color: colorControl,
      fontSize: 19.5,
      opacity: opacityControl}}>

        {ipTextState}

      </Animated.Text>

      {/* <Image
      source = {styles.Action.Arrow_PNG}
      style = {{
      width: 15,
      height: 15,
      right: 0.25}}/> */}

    </View>

  )

}


export default Top