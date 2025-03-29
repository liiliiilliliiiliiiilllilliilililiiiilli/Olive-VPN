// Component.


import { useThemes } from '../../../../../../Styles/Hooks/UseThemes'
import { View, Text } from 'react-native'


const OliveVpnTitle = () => {

  const [styles] = useThemes (styles => styles.MainPage.Top.Title)


  return (

    <View style = {{
    flex: 1,
    alignItems: 'center'}}>

      <Text style = {{
      fontFamily: styles.fontFamily,
      color: styles.color,
      fontSize: 25}}>

        OliveVPN

      </Text>

      <View style = {{
      width: 110,
      height: 2.75,
      marginTop: -2.25,
      borderRadius: 1000,
      backgroundColor: styles.lineColor}}/>

    </View>

  )

}


export default OliveVpnTitle