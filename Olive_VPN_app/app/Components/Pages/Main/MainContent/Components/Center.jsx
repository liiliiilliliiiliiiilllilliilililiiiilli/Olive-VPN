// Component.


const lodash = require ('lodash')

import AsyncStorage from '@react-native-async-storage/async-storage'
import RNSimpleOpenvpn, { addVpnStateListener, removeVpnStateListener } from 'react-native-simple-openvpn'

import React from 'react'

import { useNavigation } from 'expo-router'
import { useState, useEffect, useRef } from 'react'
import { useThemes } from '../../../../../../Redux/Hooks/UseThemes'
import { useAppLanguage } from '../../../../../../Redux/Hooks/AppLanguage'
import { useMainPageStatusText } from '../../../../../../Redux/Hooks/MainPageStatusText'
import { useAppVpn } from '../../../../../../Redux/Hooks/AppVpn'

import { View, TouchableOpacity, Image } from 'react-native'
import { Platform } from 'react-native'

import Animated, { useSharedValue, useAnimatedStyle, withSequence, withRepeat, withDelay, withTiming, Easing } from 'react-native-reanimated'


const device_is_iphone = Platform.OS === 'ios'


const Center = () => {

  const [appVpn, setAppVpn, getVpnState, connectToVpn, disconnectFromVpn] = useAppVpn ()

  const [texts, appLanguage] = useAppLanguage (texts => texts.MainPage.Main.Center)

  const connection_is_not_protected_TXT = texts.connection_is_not_protected
  const tap_to_connect_to_vpn_TXT = texts.tap_to_connect_to_vpn
  const tap_again_to_disconnect_TXT = texts.tap_again_to_disconnect
  const netherlands_TXT = texts.netherlands
  const connected_TXT = texts.connected

  const seconds_TXT = texts.seconds
  const minutes_TXT = texts.minutes
  const hours_TXT = texts.hours
  const days_TXT = texts.days


  const [mainPageStatusText, setMainPageStatusText] = useMainPageStatusText ()
  
  const durationInterval = useRef (null)
  const [connectionTime, setConnectionTime] = useState ({initialization_moment: null, current_duration: null})

  const [tipText, setTipText] = useState (texts.tap_to_connect_to_vpn)
  const [connectionDestinationText, setConnectionDestinationText] = useState (texts[appVpn])
  useEffect (() => setConnectionDestinationText (texts[appVpn]), [appVpn])
  useEffect (() => setConnectionDestinationText (texts[appVpn]), [])

  useEffect (() => {(async () => {

    const VpnState = await getVpnState ()
  
    switch (VpnState) {
  
      case 0: setTipText (texts.tap_to_connect_to_vpn); break
      case 2: setTipText (texts.tap_again_to_disconnect); break
  
    }

    // setConnectionDestinationText (netherlands_TXT)
    
    setConnectionDestinationText (texts[appVpn])

  }) ()}, [appLanguage])


  const connectVPN = async () => { await connectToVpn () }

  const disconnectVPN = async () => { await disconnectFromVpn () }

  const toggleVPN = async () => {

    const VpnState = await getVpnState ()

    switch (VpnState) {

      case 0: await connectVPN (); break
      case 2: await disconnectVPN (); break

    }

  } 


  const currentTime = () => {

    return Math.floor (new Date().getTime() / 1000)

  }

  const convertTime = inp_seconds => {

    let days = Math.floor (inp_seconds / (60 * 60 * 24))
    let hours = Math.floor ((inp_seconds - (days * 60 * 60 * 24)) / (60 * 60))
    let minutes = Math.floor ((inp_seconds - (hours * 60 * 60) - (days * 60 * 60 * 24)) / 60)
    let seconds = inp_seconds - (days * 60 * 60 * 24) - (hours * 60 * 60) - (minutes * 60)
  
    days = days == 0 ? '' : `${days} ${days_TXT} `
    hours = days == 0 && hours == 0 ? '' : `${hours} ${hours_TXT} `
    minutes = days == 0 && hours == 0 && minutes == 0 ? '' : `${minutes} ${minutes_TXT} `
    seconds = hours != 0 || days != 0 ? '' : `${seconds} ${seconds_TXT}`
  
    return days + hours + minutes + seconds
  
  }


  const clearDurationInterval = () => {

    if (durationInterval.current != null) clearInterval (durationInterval.current)
    durationInterval.current = null

  }

  const setDurationInterval = (func, interval) => {

    clearDurationInterval ()
    durationInterval.current = setInterval (() => func(), interval)

  }


  class manageStatusText {

    static async connected (init_time_type) {

      let init_time


      switch (init_time_type) {

        case 'onAsyncStorage':

          init_time = parseInt (await AsyncStorage.getItem ('init_time'))
          break

        case 'onCurrentTime':

          init_time = currentTime ()
          await AsyncStorage.setItem ('init_time', `${init_time}`)
          break

        default:

          console.info ('manageStatusText: error on init_time argument')

      }

      
      setConnectionTime (prev => ({  // triggers useEffect
  
        initialization_moment: typeof (prev.initialization_moment) == 'number' ? prev.initialization_moment : init_time,
        current_duration: typeof (prev.initialization_moment) == 'number' ? currentTime() - prev.initialization_moment : currentTime() - init_time

      }))


      setDurationInterval (() =>

        setConnectionTime (prev => ({  // triggers useEffect
  
          initialization_moment: typeof (prev.initialization_moment) == 'number' ? prev.initialization_moment : init_time,
          current_duration: typeof (prev.initialization_moment) == 'number' ? currentTime() - prev.initialization_moment : currentTime() - init_time
  
        }))
  
      , 1000)


      setTipText (texts.tap_again_to_disconnect)

    }
  
    static disconnected () {
  
      clearDurationInterval ()
      setConnectionTime ({initialization_moment: null, current_duration: null})  // triggers useEffect
      setTipText (texts.tap_to_connect_to_vpn)

    }

  }


  const subscribeVPN = async () => {  // logging on triggering

    if (device_is_iphone) await RNSimpleOpenvpn.observeState ()

    addVpnStateListener (async () => {

      const VpnState = await getVpnState ()

      switch (VpnState) {

        case 0: manageStatusText.disconnected (); break
        case 2: manageStatusText.connected ('onCurrentTime'); break

      }

    })

  }

  const unsubscribeVPN = async () => {  // removing triggering

    if (device_is_iphone) await RNSimpleOpenvpn.stopObserveState ()
      
    removeVpnStateListener ()

  }


  const handleVpnPress = () => {

    toggleVPN ()

  }


  useEffect (() => {

    lodash.isEqual (connectionTime, {initialization_moment: null, current_duration: null})

      ? setMainPageStatusText (connection_is_not_protected_TXT)
      : setMainPageStatusText (`${connected_TXT}:  ${convertTime(connectionTime.current_duration)}`)

  }, [connectionTime, appLanguage])  // appLanguage


  useEffect (() => {(async () => {

    await subscribeVPN ()


    const VpnState = await getVpnState ()

    switch (VpnState) {

      case 0: manageStatusText.disconnected (); break
      case 2: manageStatusText.connected ('onAsyncStorage'); break

    }


    return async () => await unsubscribeVPN ()

  })()}, [appLanguage])


  return (

    <View style = {{
    justifyContent: 'center',
    alignItems: 'center',
    gap: 21}}>

      <VpnButton
      onPress = {() => handleVpnPress()}/>

      <Tip
      text = {tipText}/>

      <Action 
      text = {connectionDestinationText}/>

    </View>

  )

}


const VpnButton = ({onPress}) => {

  const [appVpn, setAppVpn, getVpnState, connectToVpn, disconnectFromVpn] = useAppVpn ()

  const [styles] = useThemes (styles => styles.MainPage.Main.Center)


  const scaleControl = useSharedValue (1)
  const opacityControl = useSharedValue (1)

  const animationStyles = useAnimatedStyle (() => ({

    transform: [{scale: scaleControl.value}],
    opacity: opacityControl.value

  }))


  const commonEasing = comEsng = Easing.inOut (Easing.quad)
  const animationDuration = AnDu = 95


  // press animations:

  const handlePressIn = () => {

    scaleControl.value = withTiming (0.955, {duration: AnDu, easing: comEsng})
    opacityControl.value = withTiming (0.5, {duration: AnDu, easing: comEsng})

  }

  const handlePressOut = () => {

    scaleControl.value = withTiming (1, {duration: AnDu, easing: comEsng})
    opacityControl.value = withTiming (1, {duration: AnDu, easing: comEsng})

  }

  const handlePress = () => {

    scaleControl.value = withSequence (withTiming (0.955, {duration: AnDu, easing: comEsng}), withTiming (1, {duration: AnDu, easing: comEsng}))
    opacityControl.value = withSequence (withTiming (0.5, {duration: AnDu, easing: comEsng}), withTiming (1, {duration: AnDu, easing: comEsng}))

    onPress ()

  }

  // .


  return (

    <TouchableOpacity
    activeOpacity = {1}
    onPressIn = {() => handlePressIn()}
    onPressOut = {() => handlePressOut()}
    onPress = {() => handlePress()}
    style = {{
    padding: 15,
    marginBottom: -15,
    borderRadius: 1000}}>

      <Animated.View style = {[{
      justifyContent: 'center',
      alignItems: 'center',
      width: 225,
      height: 225,
      borderWidth: 3.5,
      borderRadius: 1000,
      borderColor: styles.VpnButton.borderColor,
      backgroundColor: styles.VpnButton.backgroundColor,
      boxShadow: styles.VpnButton.boxShadow},
      animationStyles]}>

        <Image
        source = {styles.VpnButton.Olive_PNG}
        style = {{
        width: 155,
        height: 155,
        bottom: 6.5,
        transform: [{rotate: '5deg'}]}}/>

      </Animated.View>

    </TouchableOpacity>

  )

}

const Tip = ({text}) => {

  const [appVpn, setAppVpn, getVpnState, connectToVpn, disconnectFromVpn] = useAppVpn ()

  const [styles, theme] = useThemes (styles => styles.MainPage.Main.Center)
  const [texts, appLanguage] = useAppLanguage (texts => texts.MainPage.Main.Center)


  const [tipText, setTipText] = useState (text)


  const picOpacityTemporalControl = useSharedValue (1)
  const textColorControl = useSharedValue (styles.Tip.color)

  const opacityControl = useSharedValue (1)
  const opacityTextControl = useSharedValue (1)
  const scaleControl = useSharedValue (1)

  const animationDuration = AnDu = 350
  const commonEasing = comEsng = Easing.inOut (Easing.quad)


  useEffect (() => {

    opacityTextControl.value = withTiming (0, {duration: AnDu, easing: comEsng})

    setTimeout (() => {

      setTipText (text)
      opacityTextControl.value = withTiming (1, {duration: AnDu, easing: comEsng})

    }, AnDu)

  }, [text])


  // theme animations:

  const hexToRgb = hex => {

    const rgb_data = hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
    ,(m, r, g, b) => '#' + r + r + g + g + b + b)
    .substring(1).match(/.{2}/g)
    .map(x => parseInt(x, 16))

    return `rgba(${rgb_data[0]}, ${rgb_data[1]}, ${rgb_data[2]}, 1)`

  }

  useEffect (() => {

    const currRgba = textColorControl.value[0] == '#' ? hexToRgb (textColorControl.value) : textColorControl.value
    const nextRgba = hexToRgb (styles.Tip.color)

    if (currRgba != nextRgba) picOpacityTemporalControl.value = withSequence (withTiming (0.66, {duration: 125, easing: comEsng}), withTiming (1, {duration: 125, easing: comEsng}))
    textColorControl.value = withTiming (styles.Tip.color, {duration: 250, easing: comEsng})

  }, [theme])

  // .


  // + press animations:

  const subscribeVPN = async () => {  // logging on triggering

    const VpnState = await getVpnState ()

    switch (VpnState) {

      case 2:

        opacityControl.value = withTiming (1, {duration: 1000})
        scaleControl.value = withTiming (1, {duration: 1000})
        break

      default:

        opacityControl.value = withRepeat (withSequence (withDelay (5000, withTiming (1, {duration: 1})), withDelay (500, withTiming (0.33, {duration: 1000})), withTiming (1, {duration: 1000})), -1)
        scaleControl.value = withRepeat (withSequence (withDelay (5000, withTiming (1, {duration: 1})), withDelay (500, withTiming (0.995, {duration: 1000})), withTiming (1, {duration: 1000})), -1)

    }


    if (device_is_iphone) await RNSimpleOpenvpn.observeState ()

    addVpnStateListener (async () => {

      const VpnState = await getVpnState ()

      switch (VpnState) {

        case 2:

          opacityControl.value = withTiming (1, {duration: 1000})
          scaleControl.value = withTiming (1, {duration: 1000})
          break

        default:

          opacityControl.value = withRepeat (withSequence (withDelay (5000, withTiming (1, {duration: 1})), withDelay (500, withTiming (0.33, {duration: 1000})), withTiming (1, {duration: 1000})), -1)
          scaleControl.value = withRepeat (withSequence (withDelay (5000, withTiming (1, {duration: 1})), withDelay (500, withTiming (0.995, {duration: 1000})), withTiming (1, {duration: 1000})), -1)

      }

    })

  }

  const unsubscribeVPN = async () => {  // removing triggering

    if (device_is_iphone) await RNSimpleOpenvpn.stopObserveState ()
      
    removeVpnStateListener ()

  }

  // .


  useEffect (() => {

    subscribeVPN ()

    return () => unsubscribeVPN ()

  }, [])


  return (

    <Animated.View style = {{
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    padding: 10,
    marginVertical: -10,
    borderRadius: 15,
    opacity: opacityControl,
    transform: [{scale: scaleControl}]}}>

      <Animated.Image
      source = {styles.Tip.Tap_PNG}
      style = {{
      width: 17,
      height: 17,
      opacity: picOpacityTemporalControl}}/>

      <Animated.Text style = {{
      fontFamily: styles.Tip.fontFamily,
      color: textColorControl,
      fontSize: 19,
      opacity: opacityTextControl}}>

        {tipText}

      </Animated.Text>

    </Animated.View>

  )

}

const Action = ({text}) => {

  const [appVpn, setAppVpn, getVpnState, connectToVpn, disconnectFromVpn] = useAppVpn ()

  const [styles, theme] = useThemes (styles => styles.MainPage.Main.Center)
  const navigation = useNavigation ()


  const picOpacityTemporalControl = useSharedValue (1)
  const textColorControl = useSharedValue (styles.Action.color)

  const scaleControl = useSharedValue (1)
  const opacityControl = useSharedValue (1)

  const animationStyles = useAnimatedStyle (() => ({

    transform: [{scale: scaleControl.value}],
    opacity: opacityControl.value

  }))


  const commonEasing = comEsng = Easing.inOut (Easing.quad)
  const animationDuration = AnDu = 95
  const pressAnimationDuration = prAnDu = 250


  // theme animations:

  const hexToRgb = hex => {

    const rgb_data = hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
    ,(m, r, g, b) => '#' + r + r + g + g + b + b)
    .substring(1).match(/.{2}/g)
    .map(x => parseInt(x, 16))

    return `rgba(${rgb_data[0]}, ${rgb_data[1]}, ${rgb_data[2]}, 1)`

  }
  
  useEffect (() => {
    
    const currRgba = textColorControl.value[0] == '#' ? hexToRgb (textColorControl.value) : textColorControl.value
    const nextRgba = hexToRgb (styles.Action.color)
    
    if (currRgba != nextRgba) picOpacityTemporalControl.value = withSequence (withTiming (0.66, {duration: prAnDu/2, easing: comEsng}), withTiming (1, {duration: prAnDu/2, easing: comEsng}))
    textColorControl.value = withTiming (styles.Action.color, {duration: prAnDu, easing: comEsng})

  }, [theme])

  // .


  // press animations:

  const handlePressIn = () => {

    scaleControl.value = withTiming (0.9575, {duration: AnDu, easing: comEsng})
    opacityControl.value = withTiming (0.5, {duration: AnDu, easing: comEsng})

  }

  const handlePressOut = () => {

    scaleControl.value = withTiming (1, {duration: AnDu, easing: comEsng})
    opacityControl.value = withTiming (1, {duration: AnDu, easing: comEsng})

  }

  const handlePress = () => {

    scaleControl.value = withSequence (withTiming (0.9575, {duration: AnDu, easing: comEsng}), withTiming (1, {duration: AnDu, easing: comEsng}))
    opacityControl.value = withSequence (withTiming (0.5, {duration: AnDu, easing: comEsng}), withTiming (1, {duration: AnDu, easing: comEsng}))

    setTimeout (() => navigation.navigate ('ServersList'), AnDu/2)

  }

  // .


  return (

    <TouchableOpacity
    activeOpacity = {1}
    onPressIn = {() => handlePressIn()}
    onPressOut = {() => handlePressOut()}
    onPress = {() => handlePress()}
    style = {{
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginVertical: -10,
    borderRadius: 8}}>

      <Animated.View style = {[{
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8},
      animationStyles]}>

        <Animated.Image
        source = {styles.Action.Location_PNG}
        style = {{
        width: 17,
        height: 17,
        bottom: 0.75,
        right: 0.25,
        opacity: picOpacityTemporalControl}}/>

        <Animated.Text style = {{
        fontFamily: styles.Action.fontFamily,
        color: textColorControl,
        fontSize: 19}}>

          {text}

        </Animated.Text>

        <Animated.Image
        source = {styles.Action.Arrow_PNG}
        style = {{
        width: 15,
        height: 15,
        top: 0.25,
        right: 0.25,
        opacity: picOpacityTemporalControl}}/>

      </Animated.View>

    </TouchableOpacity>

  )

}


export default Center