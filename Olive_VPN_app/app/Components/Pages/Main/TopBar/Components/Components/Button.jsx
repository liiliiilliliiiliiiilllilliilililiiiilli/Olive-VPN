// Component.


import { useEffect } from 'react'
import { useThemes } from '../../../../../../../Redux/Hooks/UseThemes'

import { TouchableOpacity, Image } from 'react-native'

import Animated, { useSharedValue, useAnimatedStyle, withSequence, withTiming, Easing } from 'react-native-reanimated'


const Button = ({onPress, pic, style, imageStyle}) => {

  const [styles, theme] = useThemes (styles => styles.MainPage.Top.Button)

  const borderColorControl = useSharedValue (styles.borderColor)
  const backgroundColorControl = useSharedValue (styles.backgroundColor)

  const scaleControl = useSharedValue (1)
  const marginControl = useSharedValue (0)
  const opacityControl = useSharedValue (1)

  const animationStyles = useAnimatedStyle (() => ({

    borderColor: borderColorControl.value,
    backgroundColor: backgroundColorControl.value,

    transform: [{scale: scaleControl.value}],
    top: marginControl.value,
    opacity: opacityControl.value

  }))

  const commonEasing = comEsng = Easing.inOut (Easing.quad)
  const themeAnimationDuration = thAnDu = 250
  const animationDuration = AnDu = 95


  // theme animations:

  useEffect (() => {

    borderColorControl.value = withTiming (styles.borderColor, {duration: thAnDu, easing: comEsng})
    backgroundColorControl.value = withTiming (styles.backgroundColor, {duration: thAnDu, easing: comEsng})

  }, [theme])

  // .


  // press animations:

  const handlePressIn = () => {

    scaleControl.value = withTiming (0.975, {duration: AnDu, easing: comEsng})
    marginControl.value = withTiming (0.5, {duration: AnDu, easing: comEsng})
    opacityControl.value = withTiming (0.5, {duration: AnDu, easing: comEsng})

  }

  const handlePressOut = () => {

    scaleControl.value = withTiming (1, {duration: AnDu, easing: comEsng})
    marginControl.value = withTiming (0, {duration: AnDu, easing: comEsng})
    opacityControl.value = withTiming (1, {duration: AnDu, easing: comEsng})

  }

  const handlePress = () => {

    scaleControl.value = withSequence (withTiming (0.975, {duration: AnDu, easing: comEsng}), withTiming (1, {duration: AnDu, easing: comEsng}))
    marginControl.value = withSequence (withTiming (0.5, {duration: AnDu, easing: comEsng}), withTiming (0, {duration: AnDu, easing: comEsng}))
    opacityControl.value = withSequence (withTiming (0.5, {duration: AnDu, easing: comEsng}), withTiming (1, {duration: AnDu, easing: comEsng}))

    onPress ()

  }

  // .


  return (

    <Animated.View style = {[{
    justifyContent: 'center',
    alignItems: 'center',
    width: 38,
    height: 38,
    padding: 7,
    borderWidth: 3,
    borderRadius: 10,
    marginHorizontal: 6.25},
    animationStyles,
    style]}>

      <TouchableOpacity  // touch field
      activeOpacity = {1}
      onPressIn = {() => handlePressIn()}
      onPressOut = {() => handlePressOut()}
      onPress = {() => handlePress()}
      style = {{
      zIndex: 1,
      position: 'absolute',
      width: 50,
      height: 50,
      borderRadius: 10}}/>

      <Image
      source = {pic}
      style = {[{
      width: 17,
      height: 17},
      imageStyle]}/>

    </Animated.View>

  )

}


export default Button