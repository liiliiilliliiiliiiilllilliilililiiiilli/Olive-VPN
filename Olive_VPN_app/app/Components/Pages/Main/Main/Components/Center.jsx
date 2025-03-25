import { useState, useEffect } from 'react'
import { useThemes } from '../../../../../../Styles/Hooks/UseThemes'

import { View, TouchableOpacity, Image, Text } from 'react-native'
import { Platform } from 'react-native'

import RNSimpleOpenvpn, { addVpnStateListener, removeVpnStateListener } from 'react-native-simple-openvpn'


const is_iphone = Platform.OS === 'ios'

let styles


const Center = () => {

  [styles] = useThemes (styles => styles.MainPage.Main.Center)


  const [VPN_Logs, set_VPN_Logs] = useState ('')

  const [tipText, setTipText] = useState ('Нажмите для подключения к VPN')


  const updateLogs = log => {

    const currentTime = new Date().toLocaleTimeString()
    set_VPN_Logs (prev => `${prev}\n` + `[${currentTime}]:  ${log}`)

  }

  const clearLogs = () => {

    set_VPN_Logs ('')

  }

  const printVpnState = async () => {

    const VPN_state = await RNSimpleOpenvpn.getCurrentState ()

    updateLogs (VPN_state)

  }

  const printVpnStateTypes = () => {

    updateLogs (JSON.stringify (RNSimpleOpenvpn.VpnState, undefined, 2))

  }


  const startVPN = async () => {

    try {

      await RNSimpleOpenvpn.connect ({

        remoteAddress: '185.233.184.204 1194',  // may be removed
        username: 'lime',  // may be removed
        password: 'prime_pilo',  // may be removed
        ovpnFileName: 'lime',
        notificationTitle: 'RNSimpleOpenVPN',
        compatMode: RNSimpleOpenvpn.CompatMode.MODERN_DEFAULTS,
        providerBundleIdentifier: 'com.example.OliveVPN',
        localizedDescription: 'TestRNSimpleOvpn'

      })

    }
    
    catch (error) {
      
      updateLogs (error)
    
    }

  }

  const stopVPN = async () => {

    try {
      
      await RNSimpleOpenvpn.disconnect ()

    }
    
    catch (error) {
      
      updateLogs (error)
    
    }

  }

  const toggleVPN = async () => {

    console.info ('toggle VPN acted!')

    const VPN_state = await RNSimpleOpenvpn.getCurrentState ()


    if (VPN_state == 2 || VPN_state == '2') {console.info ('stopVPN()'); await stopVPN ()}

    else if (VPN_state == 0 || VPN_state == '0') {console.info ('startVPN()'); await startVPN ()}

    else updateLogs ('problems with switching to another state of VPN')

  }


  const subscribeVPN = async () => {  // logging on triggering

    if (is_iphone) await RNSimpleOpenvpn.observeState ()

    addVpnStateListener (async event => {

      updateLogs (JSON.stringify(event), undefined, 2)

      
      const VPN_state = await RNSimpleOpenvpn.getCurrentState ()

      switch (VPN_state) {

        case 2: setTipText ('Нажмите, чтобы отключиться'); break

        case 0: setTipText ('Нажмите для подключения к VPN'); break

        default: alert ('Просисходит какое-то одновременное переключение')

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
    gap: 25}}>

      <VPN_button
      onPress = {() => toggleVPN()}/>

      <Tip
      text = {tipText}
      onPress = {() => {}}/>

      <Action 
      text = 'Нидерланды'/>

    </View>

  )

}


const VPN_button = ({onPress}) => {

  return (

    <TouchableOpacity
    onPress = {() => onPress()}
    style = {{
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200,
    backgroundColor: styles.VPN_button.backgroundColor,
    borderRadius: 1000}}>

      <Image
      source = {styles.VPN_button.Olive_PNG}
      style = {{
      width: 175,
      height: 175}}/>

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
    gap: 8}}>

      <Image
      source = {styles.Tip.Tap_dark_green_PNG}
      style = {{
      width: 17,
      height: 17}}/>

      <Text style = {{
      fontFamily: styles.Tip.fontFamily,
      color: styles.Tip.color,
      fontSize: 15}}>

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
    gap: 8}}>

      <Image
      source = {styles.Action.Location_green_PNG}
      style = {{
      width: 17,
      height: 17,
      top: 0.75}}/>

      <Text style = {{
      fontFamily: styles.Action.fontFamily,
      color: styles.Action.color,
      fontSize: 15}}>

        {text}

      </Text>

      <Image
      source = {styles.Action.ArrowCompact_green_PNG}
      style = {{
      width: 15,
      height: 15,
      top: 1.5}}/>

    </TouchableOpacity>

  )

}


export default Center