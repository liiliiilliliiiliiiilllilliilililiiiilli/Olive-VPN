// This is Options page.


import { View } from 'react-native'

import TopBar from '../Components/Pages/ServersList/TopBar/TopBar'
import MainContent from '../Components/Pages/ServersList/MainContent/MainContent'


const ServersList = () => {

  return (

    <View style = {{
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'black'}}>

      <TopBar/>
      <MainContent/>

    </View>

  )

}


export default ServersList