import { View } from 'react-native'

import Top from './Components/Top'
import Center from './Components/Center'
import Bottom from './Components/Bottom'


const Main = () => {

  return (

    <View style = {{
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    gap: 25,
    flexGrow: 1}}>

      <Top/>
      <Center/>
      <Bottom/>

    </View>

  )

}


export default Main