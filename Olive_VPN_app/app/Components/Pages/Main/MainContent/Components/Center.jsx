// Component.


const lodash = require ('lodash')

import AsyncStorage from '@react-native-async-storage/async-storage'
import RNSimpleOpenvpn, { addVpnStateListener, removeVpnStateListener } from 'react-native-simple-openvpn'

import { useDispatch } from 'react-redux'
import { useState, useEffect, useRef } from 'react'
import { useThemes } from '../../../../../../Styles/Hooks/UseThemes'

import { SetMainPageStatusText } from '../../../../../../Redux/MainPageStatusTextSlice'

import { View, TouchableOpacity, Image, Text } from 'react-native'
import { Platform } from 'react-native'


const device_is_iphone = Platform.OS === 'ios'

let styles


const Center = () => {

  [styles] = useThemes (styles => styles.MainPage.Main.Center)
  
  const durationInterval = useRef (null)
  const [connectionTime, setConnectionTime] = useState ({initialization_moment: null, current_duration: null})
  const dispatch = useDispatch ()
  const setReduxStatusText = text => dispatch (SetMainPageStatusText (text))

  const [tipText, setTipText] = useState ('Нажмите для подключения к VPN')
  const [connectionDestinationText, setConnectionDestinationText] = useState ('Нидерланды')


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

          'MODERN_DEFAULTS': RNSimpleOpenvpn.CompatMode.MODERN_DEFAULTS,
          'OVPN_TWO_FIVE_PEER': RNSimpleOpenvpn.CompatMode.OVPN_TWO_FIVE_PEER,
          'OVPN_TWO_FOUR_PEER': RNSimpleOpenvpn.CompatMode.OVPN_TWO_FOUR_PEER,
          'OVPN_TWO_THREE_PEER': RNSimpleOpenvpn.CompatMode.OVPN_TWO_THREE_PEER

        } [vpnConnectionConfiguration.compatMode]

      })

    }

    catch (error) {

      console.info ('connectVPN: error while connecting to VPN server', `\n${error}`)

    }

  }

  const disconnectVPN = async () => {

    try {
      
      await RNSimpleOpenvpn.disconnect ()

    }
    
    catch (error) {

      console.info ('disconnectVPN: error while disconnecting from VPN server.', `\n${error}`)

    }

  }

  const toggleVPN = async () => {

    const VpnState = await RNSimpleOpenvpn.getCurrentState ()

    switch (VpnState) {

      case 0: connectVPN (limeVpnConnectionConfiguration); break
      case 2: disconnectVPN (); break

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
  
    days = days == 0 ? '' : `${days} дн. `
    hours = days == 0 && hours == 0 ? '' : `${hours} ч. `
    minutes = days == 0 && hours == 0 && minutes == 0 ? '' : `${minutes} мин. `
    seconds = hours != 0 || days != 0 ? '' : `${seconds} сек.`
  
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


      setDurationInterval (() =>

        setConnectionTime (prev => ({  // triggers useEffect
  
          initialization_moment: typeof (prev.initialization_moment) == 'number' ? prev.initialization_moment : init_time,
          current_duration: typeof (prev.initialization_moment) == 'number' ? currentTime() - prev.initialization_moment : currentTime() - init_time
  
        }))
  
      , 1000)


      setTipText ('Нажмите, чтобы отключиться')

    }
  
    static disconnected () {
  
      clearDurationInterval ()
      setConnectionTime ({initialization_moment: null, current_duration: null})  // triggers useEffect
      setTipText ('Нажмите для подключения к VPN')

    }

  }


  const subscribeVPN = async () => {  // logging on triggering

    if (device_is_iphone) await RNSimpleOpenvpn.observeState ()

    addVpnStateListener (async () => {

      const VpnState = await RNSimpleOpenvpn.getCurrentState ()

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


  const HandleVpnPress = () => {

    toggleVPN ()

  }

  const HandleLocationPress = () => {

    console.info ('Location pressed')

  }


  useEffect (() => {

    lodash.isEqual (connectionTime, {initialization_moment: null, current_duration: null})

      ? setReduxStatusText ('Соединение не защищено')
      : setReduxStatusText (`Подключено:  ${convertTime(connectionTime.current_duration)}`)

  }, [connectionTime])


  useEffect (() => {(async () => {

    await subscribeVPN ()


    const VpnState = await RNSimpleOpenvpn.getCurrentState ()

    switch (VpnState) {

      case 0: manageStatusText.disconnected (); break
      case 2: manageStatusText.connected ('onAsyncStorage'); break

    }


    return async () => await unsubscribeVPN ()

  })()}, [])


  return (

    <View style = {{
    justifyContent: 'center',
    alignItems: 'center',
    gap: 21}}>

      <VpnButton
      onPress = {() => HandleVpnPress()}/>

      <Tip
      text = {tipText}
      onPress = {() => HandleVpnPress()}/>

      <Action 
      text = {connectionDestinationText}
      onPress = {() => HandleLocationPress()}/>

    </View>

  )

}


const VpnButton = ({onPress}) => {

  return (

    <TouchableOpacity
    onPress = {() => onPress()}
    style = {{
    padding: 15,
    marginBottom: -15,
    borderRadius: 1000}}>

      <View
      onPress = {() => onPress()}
      style = {{
      justifyContent: 'center',
      alignItems: 'center',
      width: 225,
      height: 225,
      borderWidth: 2.5,
      borderRadius: 1000,
      borderColor: styles.VpnButton.borderColor,
      backgroundColor: styles.VpnButton.backgroundColor,
      boxShadow: styles.VpnButton.boxShadow}}>

        <Image
        source = {styles.VpnButton.Olive_PNG}
        style = {{
        width: 185,
        height: 185}}/>

      </View>

    </TouchableOpacity>

  )

}

const Tip = ({text, onPress}) => {

  return (

    <TouchableOpacity
    onPress = {() => onPress()}
    style = {{
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    padding: 10,
    marginVertical: -10,
    borderRadius: 15}}>

      <Image
      source = {styles.Tip.Tap_PNG}
      style = {{
      width: 17,
      height: 17}}/>

      <Text style = {{
      fontFamily: styles.Tip.fontFamily,
      color: styles.Tip.color,
      fontSize: 19}}>

        {text}

      </Text>

    </TouchableOpacity>

  )

}

const Action = ({text, onPress}) => {

  return (

    <TouchableOpacity
    onPress = {() => onPress()}
    style = {{
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    padding: 10,
    paddingHorizontal: 16,
    marginVertical: -10,
    borderRadius: 8}}>

      <Image
      source = {styles.Action.Location_PNG}
      style = {{
      width: 17,
      height: 17,
      bottom: 0.75}}/>

      <Text style = {{
      fontFamily: styles.Action.fontFamily,
      color: styles.Action.color,
      fontSize: 19}}>

        {text}

      </Text>

      <Image
      source = {styles.Action.Arrow_PNG}
      style = {{
      width: 15,
      height: 15,
      top: 0.75}}/>

    </TouchableOpacity>

  )

}


export default Center