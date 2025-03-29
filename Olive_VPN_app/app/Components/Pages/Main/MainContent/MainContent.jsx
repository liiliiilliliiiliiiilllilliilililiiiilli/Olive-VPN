// Component.


import { View } from 'react-native'

import Top from './Components/Top'
import Center from './Components/Center'
import Bottom from './Components/Bottom'


const MainContent = () => {

  return (

    <View style = {{
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    gap: 25}}>

      <Top/>
      <Center/>
      <Bottom/>

    </View>

  )

}


export default MainContent