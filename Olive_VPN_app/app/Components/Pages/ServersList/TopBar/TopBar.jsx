// Component.


import { useNavigation } from 'expo-router'
import { useEffect } from 'react'
import { useThemes } from '../../../../../Redux/Hooks/UseThemes'

import { View } from 'react-native'

import Animated, { useSharedValue, withTiming, Easing } from 'react-native-reanimated'

import BackButton from './Components/BackButton'
import Title from './Components/Title'


const TopBar = () => {
  
  const navigatiton = useNavigation ()
  const [styles, theme] = useThemes (styles => styles.MainPage.Top)

  const borderColorControl = useSharedValue (styles.borderColor)
  const backgroundColorControl = useSharedValue (styles.backgroundColor)

  const commonEasing = comEsng = Easing.inOut (Easing.quad)
  const themeAnimationDuration = thAnDu = 250


  // theme animations:

  useEffect (() => {

    borderColorControl.value = withTiming (styles.borderColor, {duration: thAnDu, easing: comEsng})
    backgroundColorControl.value = withTiming (styles.backgroundColor, {duration: thAnDu, easing: comEsng})

  }, [theme])

  // .


  const handleBackButtonPressed = () => {

    navigatiton.goBack ()

  }


  return (

    <Animated.View style = {{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 65.5,
    paddingHorizontal: 18.5,
    borderBottomWidth: 2,
    borderColor: borderColorControl,
    backgroundColor: backgroundColorControl,
    transform: [{scale: 0.5}]}}>
            
      <BackButton
      onPress = {() => handleBackButtonPressed()}/>

      <Title/>

      <View style = {{
      width: 38,
      height: 38,
      marginHorizontal: 6.25}}/>

    </Animated.View>

  )

}


export default TopBar