import { useThemes } from '../../../../../../Styles/Hooks/UseThemes'
import { View, TouchableOpacity, Image, Text } from 'react-native'


let styles


const Top = () => {

  [styles] = useThemes (styles => styles.MainPage.Main.Top)


  return (

    <View style = {{
    alignItems: 'center',
    gap: 8}}>

      <StatusText
      text = 'Соединение не защищено'/>

      <Action
      text = 'Для всех приложений'
      onPress = {() => {}}/>

    </View>

  )

}


const StatusText = ({text}) => {

  return (

    <Text style = {{
    fontFamily: styles.StatusText.fontFamily,
    color: styles.StatusText.color,
    fontSize: 27}}>

      {text}

    </Text>

  )

}

const Action = ({text, onPress}) => {

  return (

    <TouchableOpacity
    onPress = {() => onPress()}
    style = {{
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10}}>

      <Image
      source = {styles.Action.Apps_PNG}
      style = {{
      width: 17,
      height: 17}}/>

      <Text style = {{
      fontFamily: styles.Action.fontFamily,
      color: styles.Action.color,
      fontSize: 21}}>

        {text}

      </Text>

      <Image
      source = {styles.Action.Arrow_PNG}
      style = {{
      width: 15,
      height: 15}}/>

    </TouchableOpacity>

  )

}


export default Top