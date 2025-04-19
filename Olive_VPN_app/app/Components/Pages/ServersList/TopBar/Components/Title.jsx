// Component.


import { useEffect } from 'react'
import { useThemes } from '../../../../../../Redux/Hooks/UseThemes'
import { useAppLanguage } from '../../../../../../Redux/Hooks/AppLanguage'

import { View } from 'react-native'

import Animated, { useSharedValue, withTiming, Easing } from 'react-native-reanimated'


const Title = () => {

  const [styles, theme] = useThemes (styles => styles.ServersListPage.Top.Title)
  const [texts] = useAppLanguage (texts => texts.ServersListPage.Top.Title)

  const choose_your_server_TXT = texts.choose_your_server


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
    paddingLeft: 16 * 0.5,
    flex: 1}}>

      <Animated.Text style = {{
      fontFamily: styles.fontFamily,
      color: textColorControl,
      fontSize: 25,
      transform: [{scale: 0.5}]}}>

        {choose_your_server_TXT}

      </Animated.Text>

    </View>

  )

}


export default Title