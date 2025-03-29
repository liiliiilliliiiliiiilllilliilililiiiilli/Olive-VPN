// Component.


import { useThemes } from '../../../../../Styles/Hooks/UseThemes'
import { View, TouchableOpacity, Text } from 'react-native'


let styles


const BottomBar = () => {

  [styles] = useThemes (styles => styles.MainPage.Bottom)


  const tipText = [

    'Подробнее',
    ' о приложении, которое созданно для обхода ограничений.'

  ]


  const HandleTipPress = () => {
    
    console.info ('Metalink pressed!')

  }


  return (

    <View style = {{
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingTop: 28}}>

      <Tip
      tipText = {tipText}
      onPress = {() => HandleTipPress()}/>

    </View>

  )

}


const Tip = ({tipText, onPress}) => {

  return (

    <TouchableOpacity
    onPress = {() => onPress()}
    style = {{
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

        <MetaLink>{tipText[0]}</MetaLink>{tipText[1]}

      </Text>

    </TouchableOpacity>

  )

}

const MetaLink = ({children: text}) => {

  return (

    <Text style = {{color: styles.metalinkColor}}>

      {text}

    </Text>

  )

}


export default BottomBar