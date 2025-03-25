import { useThemes } from '../../../../../../Styles/Hooks/UseThemes'
import { View, TouchableOpacity, Image, Text } from 'react-native'


let styles


const Bottom = () => {

  [styles] = useThemes (styles => styles.MainPage.Main.Bottom)


  return (

    <View style = {{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 19}}>

      <NetButton
      text = 'Расширить сеть'
      onPress = {() => {}}/>

      <NetInfo
      text = 'WiFi: TP-Link-GH-51'/>

    </View>

  )

}


const NetButton = ({text, onPress}) => {

  return (

    <TouchableOpacity
    onPress = {() => onPress()}
    style = {{
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingTop: 7.5,
    paddingBottom: 7,
    paddingHorizontal: 15,
    backgroundColor: styles.backgroundColor,
    borderRadius: 1000}}>

      <Text style = {{
      fontFamily: styles.NetButton.fontFamily,
      color: styles.NetButton.color,
      fontSize: 15}}>

        {text}

      </Text>

      <Image
      source = {styles.NetButton.Magic_wand_PNG}
      style = {{
      width: 17,
      height: 17,
      bottom: 0.5}}/>

    </TouchableOpacity>

  )

}

const NetInfo = ({text}) => {

  return (

    <Text style = {{
    fontFamily: styles.NetInfo.fontFamily,
    color: styles.NetInfo.color,
    fontSize: 15}}>

      {text}

    </Text>

  )

}


export default Bottom