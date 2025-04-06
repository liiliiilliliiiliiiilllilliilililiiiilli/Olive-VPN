// Component.


import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useThemes } from '../../../../../../Styles/Hooks/UseThemes'

import { Text, View } from 'react-native'

import Animated, { useSharedValue, withTiming, Easing } from 'react-native-reanimated'


const Liner = ({text, style}) => {

  const [styles, theme] = useThemes (styles => styles.MainPage.Main.Top)


  return (

    <View style = {[{  // items container
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 42,
    marginTop: 28,
    gap: 17},
    style]}>

      <Text style = {{
      zIndex: 1,
      fontSize: 27,
      fontFamily: 'Archivo-SemiBold',
      color: '#f2f2f2',
      height: '100%',
      left: 36,
      paddingHorizontal: 8,
      backgroundColor: 'black'}}>

        {text}

      </Text>

      <View style = {{  // crossline
      position: 'absolute',
      width: '100%',
      height: 1,
      bottom: 20,
      backgroundColor: 'rgba(44, 44, 44, 1)'}}/>

    </View>


  )

}


export default Liner