// Component.


import { useState, useEffect } from 'react'
import { useThemes } from '../../../../../Redux/Hooks/UseThemes'
import { useAppLanguage } from '../../../../../Redux/Hooks/AppLanguage'
import { useAppVpn } from '../../../../../Redux/Hooks/AppVpn'

import { View } from 'react-native'

import Liner from './Components/Liner'
import ServerInstance from './Components/ServerInstance'


const MainContent = () => {

  const [appVpn, setAppVpn, getVpnState, connectToVpn, disconnectFromVpn] = useAppVpn ()
  const [styles, theme] = useThemes (styles => styles.ServersListPage.Main)
  const [texts] = useAppLanguage (texts => texts.ServersListPage.Main)

  const [netherlandsAvailability, setNetherlandsAvailability] = useState ()
  const [germanyAvailability, setGermanyAvailability] = useState ()
  const [finlandAvailability, setFinlandAvailability] = useState ()

  useEffect (() => {(async () => {

    let netherlands_data
    try {
      netherlands_data = await fetch ('http://77.83.86.57:505/get_server_load_data')
      netherlands_data = await netherlands_data.json ()
    }
    catch {netherlands_data = 1.0}

    let germany_data
    try {
      germany_data = await fetch ('http://217.11.167.238:505/get_server_load_data')
      germany_data = await germany_data.json ()
    }
    catch {germany_data = 1.0}

    let finland_data
    try {
      finland_data = await fetch ('http://217.11.166.234:505/get_server_load_data')
      finland_data = await finland_data.json ()
    }
    catch {finland_data = 1.0}

    setNetherlandsAvailability (parseFloat (netherlands_data))
    setGermanyAvailability (parseFloat (germany_data))
    setFinlandAvailability (parseFloat (finland_data))

    console.info (netherlands_data)
    console.info (germany_data)
    comsole.info (finland_data)

  })()}, [])


  const online_TXT = texts.Liner.online
  // const offline_TXT = texts.Liner.offline
  const netherlands_TXT = texts.ServerInstance.netherlands
  const germany_TXT = texts.ServerInstance.germany
  const finland_TXT = texts.ServerInstance.finland


  const toggleConditionalSwitch = async () => {

    const currVpnState = await getVpnState ()

    if (currVpnState == 2) {

      await disconnectFromVpn ()
      await connectToVpn ()

    }

  }


  return (

    <View style = {{
    alignItems: 'center',
    flexGrow: 1,
    width: '100%'}}>

      <Liner
      text = {`3 ${online_TXT}`}
      style = {{marginBottom: 14}}/>

      {/* {availableServers.map ((server, index) => */}

        {/* <ServerInstance pic = {server.pic} title = {server.tutle} availability = {server.availability} id = {index}/> */}

      {/* )} */}

      <ServerInstance
      isChosen = {appVpn == 'Netherlands'}
      onPress = {() => {setAppVpn('Netherlands'); setTimeout (async () => await toggleConditionalSwitch(), 100)}}
      pic = {styles.ServerInstance.Netherlands_PNG}
      title = {netherlands_TXT}
      availability = {netherlandsAvailability ? (netherlandsAvailability <= 0.33 ? 3 : netherlandsAvailability <= 0.66 ? 2 : 1) : 0}/>

      <ServerInstance
      isChosen = {appVpn == 'Germany'}
      onPress = {() => {setAppVpn('Germany'); setTimeout (async () => await toggleConditionalSwitch(), 100)}}
      pic = {styles.ServerInstance.Germany_PNG}
      title = {germany_TXT}
      availability = {germanyAvailability ? (germanyAvailability <= 0.33 ? 3 : germanyAvailability <= 0.66 ? 2 : 1) : 0}/>

      <ServerInstance
      isChosen = {appVpn == 'Finland'}
      onPress = {() => {setAppVpn('Finland'); setTimeout (async () => await toggleConditionalSwitch(), 100)}}
      pic = {styles.ServerInstance.Finland_PNG}
      title = {finland_TXT}
      availability = {finlandAvailability ? (finlandAvailability <= 0.33 ? 3 : finlandAvailability <= 0.66 ? 2 : 1) : 0}/>

      {/* <Liner
      text = {`1 ${offline_TXT}`}
      style = {{marginBottom: 25}}/> */}

      {/* {availableServers.map ((server, index) => */}

        {/* <ServerInstance pic = {server.pic} title = {server.tutle} availability = {server.availability} id = {index}/> */}

      {/* )} */}

      {/* <ServerInstance
      pic = {styles.ServerInstance.Germany_PNG}
      title = {Germany.title}
      availability = {0}/> */}

    </View>

  )

}


export default MainContent