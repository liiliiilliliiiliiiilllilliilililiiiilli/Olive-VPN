import { useThemes } from '../../../../../../Styles/Hooks/UseThemes'
import { Text, View } from 'react-native'


const OliveVPN_Title = () => {

  const [styles] = useThemes (styles => styles.MainPage.Top.Title)


  return (

    <View style = {{
    flex: 1,
    alignItems: 'center'}}>

      <Text style = {{
      fontSize: 25,
      fontFamily: styles.fontFamily,
      color: styles.color}}>

        OliveVPN

      </Text>

      <View style = {{
      width: 110,
      height: 2.75,
      marginTop: -2.25,
      borderRadius: 1000,
      backgroundColor: '#8B9E80'}}/>

    </View>

  )

}


export default OliveVPN_Title