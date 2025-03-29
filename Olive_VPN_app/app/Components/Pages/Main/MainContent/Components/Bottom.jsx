// Component.


import { useState } from 'react'
import { useThemes } from '../../../../../../Styles/Hooks/UseThemes'

import { View, TouchableOpacity, Image, Text } from 'react-native'


let styles


const Bottom = () => {

  [styles] = useThemes (styles => styles.MainPage.Main.Bottom)
  
  const [manageNetButtonText, setManageNetButtonText] = useState ('Расширить сеть')  // to redux later
  const [netInfoData, setNetInfoData] = useState ('WiFi: TP-Link-GH-51')  // to redux later
  

  const HandleNetButtonPress = () => {

    console.info ('Expand the network')

  }


  return (

    <View style = {{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 18}}>

      <ManageNetButton
      text = {manageNetButtonText}
      onPress = {() => HandleNetButtonPress()}/>

      <NetInfo
      text = {netInfoData}/>

    </View>

  )

}


const ManageNetButton = ({text, onPress}) => {

  return (

    <TouchableOpacity
    onPress = {() => onPress()}
    style = {{
    padding: 5,
    margin: -5,
    borderRadius: 1000}}>

      <View style = {{
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
      paddingTop: 7.5,
      paddingBottom: 7,
      paddingHorizontal: 15,
      borderWidth: 2,
      borderRadius: 1000,
      borderColor: styles.ManageNetButton.borderColor,
      backgroundColor: styles.ManageNetButton.backgroundColor}}>

        <Text style = {{
        fontFamily: styles.ManageNetButton.fontFamily,
        color: styles.ManageNetButton.color,
        fontSize: 16}}>

          {text}

        </Text>

        <Image
        source = {styles.ManageNetButton.MagicWand_PNG}
        style = {{
        width: 17,
        height: 17}}/>

      </View>

    </TouchableOpacity>

  )

}

const NetInfo = ({text}) => {

  return (

    <Text style = {{
    fontFamily: styles.NetInfo.fontFamily,
    color: styles.NetInfo.color,
    fontSize: 16}}>

      {text}

    </Text>

  )

}


export default Bottom