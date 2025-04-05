// Component.


import AsyncStorage from '@react-native-async-storage/async-storage'

import { useDispatch } from 'react-redux'
import { useState, useEffect, useRef } from 'react'
import { useThemes } from '../../../../../../Styles/Hooks/UseThemes'

import { SetMainPageStatusText } from '../../../../../../Redux/MainPageStatusTextSlice'

import { View, TouchableOpacity, Image, Text } from 'react-native'
import { Platform } from 'react-native'

import RNSimpleOpenvpn, { addVpnStateListener, removeVpnStateListener } from 'react-native-simple-openvpn'


const is_iphone = Platform.OS === 'ios'

let styles


const Center = () => {

  [styles] = useThemes (styles => styles.MainPage.Main.Center)


  const dispatch = useDispatch ()
  const setReduxStatusText = text => dispatch (SetMainPageStatusText (text))

  const ConnectionDurationInterval = useRef (null)
  const [savedConnectionDuration, setSavedConnectionDuration] = useState ({'connection_initialization_time': null, 'current_connection_duration': null})
  const [connectionDuration, setConnectionDuration] = useState ({'connection_initialization_time': null, 'current_connection_duration': null})


  const [VPN_logs, set_VPN_logs] = useState ('')

  const [tipText, setTipText] = useState ('Нажмите для подключения к VPN')
  const [connectionDestination, setConnectionDestination] = useState ('Нидерланды')


  const addLogs = text => {

    const currentTime = new Date().toLocaleTimeString()

    set_VPN_logs (prev => `${prev}\n` + `[${currentTime}]:  ${text}`)

  }

  const clearLogs = () => {

    set_VPN_logs ('')

  }

  const printVpnState = async () => {

    const VPN_state = await RNSimpleOpenvpn.getCurrentState ()

    addLogs (VPN_state)

  }

  const printVpnStateTypes = () => {

    addLogs (JSON.stringify (RNSimpleOpenvpn.VpnState))

  }


  const startVPN = async () => {

    try {

      await RNSimpleOpenvpn.connect ({

        ovpnFileName: 'lime',
        notificationTitle: 'RNSimpleOpenVPN',
        compatMode: RNSimpleOpenvpn.CompatMode.MODERN_DEFAULTS,
        providerBundleIdentifier: 'com.example.OliveVPN',
        localizedDescription: 'TestRNSimpleOvpn'

      })

    }
    
    catch (error) {
      
      addLogs (error)
    
    }

  }

  const stopVPN = async () => {

    try {
      
      await RNSimpleOpenvpn.disconnect ()

    }
    
    catch (error) {
      
      addLogs (error)
    
    }

  }

  const toggleVPN = async () => {

    SetStatusText_Connected ()


    const VPN_state = await RNSimpleOpenvpn.getCurrentState ()

    switch (VPN_state) {

      case 2: await stopVPN (); break

      case 0: await startVPN (); break

      default: console.info ('Просисходит какое-то одновременное переключение')

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


  const SetStatusText_Connected = async () => {

    if (ConnectionDurationInterval.current != null) {clearInterval (ConnectionDurationInterval.current); ConnectionDurationInterval.current = null}


    const initSeconds = (savedConnectionDuration?.['connection_initialization_time'] != null)
      
      ? initSeconds = savedConnectionDuration?.['connection_initialization_time']
      : currentTime ()

    // setConnectionDuration ({'connection_initialization_time': initSeconds, 'current_connection_duration': 0})


    ConnectionDurationInterval.current = setInterval (() =>

      setConnectionDuration (prev => ({'connection_initialization_time': prev['connection_initialization_time'] != initSeconds ? initSeconds : prev['connection_initialization_time'], 'current_connection_duration': prev['connection_initialization_time'] != initSeconds ? 0 : currentTime() - prev['connection_initialization_time']}))

    , 1000)

  }

  const SetStatusText_Disconnected = async () => {

    if (ConnectionDurationInterval.current !== null) {clearInterval (ConnectionDurationInterval.current); ConnectionDurationInterval.current = null}

    setConnectionDuration ({'connection_initialization_time': null, 'current_connection_duration': null})
    await AsyncStorage.setItem ('connectionDuration', JSON.stringify ({'connection_initialization_time': null, 'current_connection_duration': null}))

    setSavedConnectionDuration ({'connection_initialization_time': null, 'current_connection_duration': null})

  }


  const subscribeVPN = async () => {  // logging on triggering

    if (is_iphone) await RNSimpleOpenvpn.observeState ()

    addVpnStateListener (async event => {

      alert ('listener acted')

      addLogs (JSON.stringify (event))


      const VPN_state = await RNSimpleOpenvpn.getCurrentState ()

      switch (VPN_state) {

        case 2: setTipText ('Нажмите, чтобы отключиться'); SetStatusText_Connected (); break

        case 0: setTipText ('Нажмите для подключения к VPN'); SetStatusText_Disconnected (); break

        default: console.info ('something else')

      }

    })

  }

  const unsubscribeVPN = async () => {  // removing triggering

    if (is_iphone) await RNSimpleOpenvpn.stopObserveState ()

    removeVpnStateListener ()

  }


  const handleLocationPress = () => {

    console.info ('Location pressed')

  }


  useEffect (() => {

    (async () => {

      setReduxStatusText (
      
        connectionDuration['connection_initialization_time'] != null && connectionDuration['current_connection_duration'] != null
  
          ? `Подключено:  ${convertTime (connectionDuration['current_connection_duration'])}`
          : 'Соединение не защищено'
  
      )

      await AsyncStorage.setItem ('connectionDuration', JSON.stringify (connectionDuration))
      setSavedConnectionDuration (connectionDuration)

    }) ()

  }, [connectionDuration])


  useEffect (() => {

    (async () => {

      const fromAsyncStorage = await AsyncStorage.getItem ('connectionDuration')
      if (fromAsyncStorage != null) {if (fromAsyncStorage?.['connection_initialization_time'] != null) setSavedConnectionDuration (JSON.parse (fromAsyncStorage))}

      console.info ('JSON.parse (fromAsyncStorage):', JSON.parse (fromAsyncStorage), `;  fromAsyncStorage?.['connection_initialization_time']:`, fromAsyncStorage?.connection_initialization_time)
      
      
      subscribeVPN ()


      const VPN_state = await RNSimpleOpenvpn.getCurrentState ()

      switch (VPN_state) {

        case 2: setTipText ('Нажмите, чтобы отключиться'); SetStatusText_Connected (); break

        case 0: setTipText ('Нажмите для подключения к VPN'); SetStatusText_Disconnected (); break

        default: console.info ('something else')

      }

      
      return async () => await unsubscribeVPN ()

    }) ()

  }, [])


  return (

    <View style = {{
    alignItems: 'center',
    justifyContent: 'center',
    gap: 21}}>

      <VPN_button
      onPress = {() => toggleVPN()}/>

      <Tip
      text = {tipText}
      onPress = {() => toggleVPN()}/>

      <Action 
      text = {connectionDestination}
      onPress = {() => handleLocationPress()}/>

    </View>

  )

}


const VPN_button = ({onPress}) => {

  return (

    <TouchableOpacity
    activeOpacity = {1}
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
      borderColor: styles.VPN_button.borderColor,
      backgroundColor: styles.VPN_button.backgroundColor,
      boxShadow: styles.VPN_button.boxShadow}}>

        <Image
        source = {styles.VPN_button.Olive_PNG}
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
    activeOpacity = {1}
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