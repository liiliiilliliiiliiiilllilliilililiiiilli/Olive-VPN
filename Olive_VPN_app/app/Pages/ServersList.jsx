// This is ServersList page.


import { useThemes } from '../../Redux/Hooks/UseThemes'

import { View } from 'react-native'

import TopBar from '../Components/Pages/ServersList/TopBar/TopBar'
import MainContent from '../Components/Pages/ServersList/MainContent/MainContent'


const ServersList = () => {

  const [styles] = useThemes (styles => styles.MainField)


  return (

    <View style = {{
    alignItems: 'center',
    flex: 1,
    backgroundColor: styles.backgroundColor}}>

      <TopBar/>
      <MainContent/>

    </View>

  )

}


export default ServersList