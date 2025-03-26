// Component.


import { useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
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
  const setStatusText = text => dispatch (SetMainPageStatusText (text))
  
  const [tipText, setTipText] = useState ('Нажмите для подключения к VPN')
  const [connectionDestination, setConnectionDestination] = useState ('Нидерланды')
  
  const [VPN_logs, set_VPN_logs] = useState ('')


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

    console.info ('toggle VPN acted!')


    const VPN_state = await RNSimpleOpenvpn.getCurrentState ()

    switch (VPN_state) {

      case 2: await stopVPN (); break

      case 0: await startVPN (); break

      default: console.info ('Просисходит какое-то одновременное переключение')

    }

  }


  const HandleLocationPress = () => {

    console.info ('Location pressed')

  }


  const subscribeVPN = async () => {  // logging on triggering

    if (is_iphone) await RNSimpleOpenvpn.observeState ()

    addVpnStateListener (async event => {

      addLogs (JSON.stringify(event))


      const VPN_state = await RNSimpleOpenvpn.getCurrentState ()

      switch (VPN_state) {

        case 2: setTipText ('Нажмите, чтобы отключиться'); setStatusText ('Подключено: 5:27'); break

        case 0: setTipText ('Нажмите для подключения к VPN'); setStatusText ('Соединение не защищено'); break

      }

    })

  }

  const unsubscribeVPN = async () => {  // removing triggering

    if (is_iphone) await RNSimpleOpenvpn.stopObserveState ()

    removeVpnStateListener ()

  }


  useEffect (() => {
    
    subscribeVPN ()

    return async () => await unsubscribeVPN ()

  })


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
      onPress = {() => HandleLocationPress()}/>

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
      fontSize: 17}}>

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
      fontSize: 17}}>

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