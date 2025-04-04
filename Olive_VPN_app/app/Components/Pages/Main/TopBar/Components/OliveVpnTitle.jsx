// Component.


import { useEffect } from 'react'
import { useThemes } from '../../../../../../Styles/Hooks/UseThemes'
import { View } from 'react-native'
import Animated, { useSharedValue, withTiming, Easing } from 'react-native-reanimated'


const OliveVpnTitle = () => {

  const [styles, theme] = useThemes (styles => styles.MainPage.Top.Title)

  
  const textColorControl = useSharedValue (styles.color)
  const lineColorControl = useSharedValue (styles.lineColor)

  const commonEasing = comEsng = Easing.inOut (Easing.quad)
  const themeAnimationDuration = thAnDu = 250


  // theme animations:

  useEffect (() => {

    textColorControl.value = withTiming (styles.color, {duration: thAnDu, easing: comEsng})
    lineColorControl.value = withTiming (styles.lineColor, {duration: thAnDu, easing: comEsng})

  }, [theme])

  // .


  return (

    <View style = {{
    flex: 1,
    alignItems: 'center'}}>

      <Animated.Text style = {{
      fontFamily: styles.fontFamily,
      color: textColorControl,
      fontSize: 25}}>

        OliveVPN

      </Animated.Text>

      <Animated.View style = {{
      width: 110,
      height: 2.75,
      marginTop: -2.25,
      borderRadius: 1000,
      backgroundColor: lineColorControl}}/>

    </View>

  )

}


export default OliveVpnTitle