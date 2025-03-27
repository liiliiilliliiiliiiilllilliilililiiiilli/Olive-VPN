// Component.


import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useThemes } from '../../../../../../Styles/Hooks/UseThemes'

import { View, TouchableOpacity, Image, Text } from 'react-native'


let styles


const Top = ({style}) => {

  [styles] = useThemes (styles => styles.MainPage.Main.Top)

  const statusText = useSelector (state => state.MainPageStatusText.value)
  const [actionText, setActionText] = useState ('Для всех приложений')  // need to change to redux too later


  const HandleActionPress = () => {

    console.info ('Top Action pressed')

  }


  return (

    <View style = {{
    alignItems: 'center',
    gap: 7.5,

    ...style}}>

      <StatusText
      text = {statusText}/>

      <Action  // temporal, this feature is for futher develoment
      // style = {{opacity: 0}}
      text = {actionText}
      onPress = {() => HandleActionPress()}/>

    </View>

  )

}


const StatusText = ({text}) => {

  return (

    <Text style = {{
    fontFamily: styles.StatusText.fontFamily,
    color: styles.StatusText.color,
    fontSize: 29}}>

      {text}

    </Text>

  )

}

const Action = ({text, onPress, style}) => {

  return (

    <TouchableOpacity
    // activeOpacity = {1}
    onPress = {() => onPress()}
    style = {{
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    padding: 5,
    paddingHorizontal: 15,
    margin: -5,
    borderRadius: 10,
    
    ...style}}>

      <Image
      source = {styles.Action.Apps_PNG}
      style = {{
      width: 17,
      height: 17,
      bottom: 0.75}}/>

      <Text style = {{
      fontFamily: styles.Action.fontFamily,
      color: styles.Action.color,
      fontSize: 19.5}}>

        {text}

      </Text>

      <Image
      source = {styles.Action.Arrow_PNG}
      style = {{
      width: 15,
      height: 15,
      top: 0.75}}/>

    </TouchableOpacity>

  )

}


export default Top