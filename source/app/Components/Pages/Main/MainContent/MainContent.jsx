// Component.


import { View } from 'react-native'

import Top from './Components/Top'
import Center from './Components/Center'
import Bottom from './Components/Bottom'


const MainContent = () => {

  return (

    <View style = {{
    justifyContent: 'space-between',
    alignItems: 'center',
    flexGrow: 1,
    width: '100%',
    gap: 25}}>

      <Top/>
      <Center/>
      <Bottom/>

    </View>

  )

}


export default MainContent