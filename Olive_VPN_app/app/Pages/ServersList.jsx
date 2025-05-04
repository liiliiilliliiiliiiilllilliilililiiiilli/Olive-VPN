// This is ServersList page.


import { Dimensions } from 'react-native'

import { useThemes } from '../../Redux/Hooks/UseThemes'

import { View } from 'react-native'

import TopBar from '../Components/Pages/ServersList/TopBar/TopBar'
import MainContent from '../Components/Pages/ServersList/MainContent/MainContent'


const ServersList = () => {

  // Configuring app scales for different devices:

  const [height_adaptive, set_height_adaptive] = useState ()
  const [width_adaptive, set_width_adaptive] = useState ()
  const [scale_adaptive, set_scale_adaptive] = useState ()

  // .





  const [styles] = useThemes (styles => styles.MainField)


  return (

    <View style = {{
    // width: width_adaptive,
    // height: height_adaptive,
    // scale: scale_adaptive,
    alignItems: 'center',
    flex: 1,
    backgroundColor: styles.backgroundColor}}>

      <TopBar/>
      <MainContent/>

    </View>

  )

}


export default ServersList