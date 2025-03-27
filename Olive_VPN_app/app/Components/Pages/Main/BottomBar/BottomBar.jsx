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
    borderTopWidth: 2,
    borderColor: styles.borderColor,
    backgroundColor: styles.backgroundColor}}>

      <Text style = {{
      fontFamily: styles.fontFamily,
      color: styles.color,
      fontSize: 17}}>

        <Text style = {{color: styles.metalinkColor}}>Подробнее</Text> о приложении, которое созданно для обхода ограничений.

      </Text>

    </View>

  )

}


export default BottomBar