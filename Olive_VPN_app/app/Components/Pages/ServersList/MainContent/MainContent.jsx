// Component.


import { useThemes } from '../../../../../Redux/Hooks/UseThemes'
import { useAppLanguage } from '../../../../../Redux/Hooks/AppLanguage'

import { View } from 'react-native'

import Liner from './Components/Liner'
import ServerInstance from './Components/ServerInstance'


const MainContent = () => {

  const [styles, theme] = useThemes (styles => styles.ServersListPage.Main)


  const [texts] = useAppLanguage (texts => texts.ServersListPage.Main)

  const online_TXT = texts.Liner.online
  const offline_TXT = texts.Liner.offline

  const netherlands_TXT = texts.ServerInstance.netherlands
  const germany_TXT = texts.ServerInstance.germany
  const poland_TXT = texts.ServerInstance.poland


  // const [availableServers, setServer] = useAppAvailableServers ()
  const [availableServers, setServer] = [1, () => 1]


  const Netherlands = {

    title: netherlands_TXT,
    availability: 3

  }

  const Germany = {

    title: germany_TXT,
    availability: 3

  }


  return (

    <View style = {{
    alignItems: 'center',
    flexGrow: 1,
    width: '100%'}}>

      <Liner
      text = {`3 ${offline_TXT}`}
      style = {{marginBottom: 14}}/>

      {/* {availableServers.map ((server, index) => */}

        {/* <ServerInstance pic = {server.pic} title = {server.tutle} availability = {server.availability} id = {index}/> */}

      {/* )} */}

      <ServerInstance
      isChosen = {true}
      pic = {styles.ServerInstance.Netherlands_PNG}
      title = {Netherlands.title}
      availability = {Netherlands.availability}/>

      <ServerInstance
      pic = {styles.ServerInstance.Germany_PNG}
      title = {Germany.title}
      availability = {2}/>

      <ServerInstance
      pic = {styles.ServerInstance.Germany_PNG}
      title = {Germany.title}
      availability = {Germany.availability}/>

      <Liner
      text = {`1 ${online_TXT}`}
      style = {{marginBottom: 25}}/>

      {/* {availableServers.map ((server, index) => */}

        {/* <ServerInstance pic = {server.pic} title = {server.tutle} availability = {server.availability} id = {index}/> */}

      {/* )} */}

      <ServerInstance
      pic = {styles.ServerInstance.Germany_PNG}
      title = {Germany.title}
      availability = {0}/>

    </View>

  )

}


export default MainContent