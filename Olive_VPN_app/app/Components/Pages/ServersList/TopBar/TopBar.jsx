// Component.


import { useEffect } from 'react'
import { useNavigation } from 'expo-router'
import { useThemes } from '../../../../../Styles/Hooks/UseThemes'

import { View } from 'react-native'

import Animated, { useSharedValue, withTiming, Easing } from 'react-native-reanimated'

import BackButton from './Components/BackButton'
import Title from './Components/Title'



const TopBar = () => {
  
  const [styles, theme] = useThemes (styles => styles.MainPage.Top)
  const navigatiton = useNavigation ()

  const borderColorControl = useSharedValue (styles.borderColor)
  const backgroundColorControl = useSharedValue (styles.backgroundColor)

  const commonEasing = comEsng = Easing.inOut (Easing.quad)
  const themeAnimationDuration = thAnDu = 250


  const handleBackButtonPressed = () => {

    navigatiton.goBack ()

  }


  useEffect (() => {

    borderColorControl.value = withTiming (styles.borderColor, {duration: thAnDu, easing: comEsng})
    backgroundColorControl.value = withTiming (styles.backgroundColor, {duration: thAnDu, easing: comEsng})

  }, [theme])


  return (

    <Animated.View style = {{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 65.5,
    paddingHorizontal: 18.5,
    borderBottomWidth: 2,
    borderColor: borderColorControl,
    backgroundColor: backgroundColorControl}}>
            
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