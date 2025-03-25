import { useThemes } from '../../../../../Styles/Hooks/UseThemes'
import { View, Text } from 'react-native'


let styles


const BottomBar = () => {

  [styles] = useThemes (styles => styles.MainPage.Bottom)


  return (

    <View style = {{
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingTop: 28}}>

      <Tip/>

    </View>

  )

}


const Tip = () => {

  return (

    <View style = {{
    justifyContent: 'center',
    width: '100%',
    height: 75,
    paddingVertical: 12,
    paddingHorizontal: 25,
    backgroundColor: styles.backgroundColor}}>

      <Text style = {{
      fontSize: 17,
      color: styles.textColor}}>

        <Text style = {{color: styles.metalinkColor}}>Подробнее</Text> о приложении, которое созданно для обхода ограничений.

      </Text>

    </View>

  )

}


export default BottomBar