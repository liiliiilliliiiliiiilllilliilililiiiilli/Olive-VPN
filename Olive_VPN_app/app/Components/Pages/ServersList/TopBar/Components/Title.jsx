// Component.


import { useEffect } from 'react'
import { useThemes } from '../../../../../../Styles/Hooks/UseThemes'
import { View } from 'react-native'
import Animated, { useSharedValue, withTiming, Easing } from 'react-native-reanimated'


const Title = () => {

  const [styles, theme] = useThemes (styles => styles.ServersListPage.Top.Title)

  
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
    paddingLeft: 14}}>

      <Animated.Text style = {{
      fontFamily: styles.fontFamily,
      color: textColorControl,
      fontSize: 25}}>

        Выберете сервер

      </Animated.Text>

    </View>

  )

}


export default Title