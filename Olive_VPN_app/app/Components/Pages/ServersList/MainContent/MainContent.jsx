// Component.


import { useThemes } from '../../../../../Redux/Hooks/UseThemes'

import { View } from 'react-native'

import Liner from './Components/Liner'
import ServerInstance from './Components/ServerInstance'


const MainContent = () => {

  const [styles, theme] = useThemes (styles => styles.ServersListPage.Main)

  // const [availableServers, setServer] = useAppAvailableServers ()
  const [availableServers, setServer] = [1, () => 1]


  const Netherlands = {

    title: 'Нидерланды',
    availability: 1

  }

  const Germany = {

    title: 'Германия',
    availability: 1

  }


  return (

    <View style = {{
    alignItems: 'center',
    flexGrow: 1,
    width: '100%'}}>

      <Liner
      text = '3 онлайн'
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
      availability = {0.5}/>

      <ServerInstance
      pic = {styles.ServerInstance.Germany_PNG}
      title = {Germany.title}
      availability = {Germany.availability}/>

      <Liner
      text = '1 оффлайн'
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