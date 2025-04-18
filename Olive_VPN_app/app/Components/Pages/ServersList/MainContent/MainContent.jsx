// Component.


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

  const online_TXT = texts.Liner.online
  // const offline_TXT = texts.Liner.offline
  const netherlands_TXT = texts.ServerInstance.netherlands
  const germany_TXT = texts.ServerInstance.germany
  const finland_TXT = texts.ServerInstance.finland


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
      onPress = {() => setAppVpn ('Netherlands')}
      pic = {styles.ServerInstance.Netherlands_PNG}
      title = {netherlands_TXT}
      availability = {3}/>

      <ServerInstance
      isChosen = {appVpn == 'Germany'}
      onPress = {() => setAppVpn ('Germany')}
      pic = {styles.ServerInstance.Germany_PNG}
      title = {germany_TXT}
      availability = {3}/>

      <ServerInstance
      isChosen = {appVpn == 'Finland'}
      onPress = {() => setAppVpn ('Finland')}
      pic = {styles.ServerInstance.Finland_PNG}
      title = {finland_TXT}
      availability = {3}/>

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