// Component.


import { useEffect } from 'react'
import { useThemes } from '../../../../../Redux/Hooks/UseThemes'
import { useAppLanguage } from '../../../../../Redux/Hooks/AppLanguage'
import { useAppOpenedWindows } from '../../../../../Redux/Hooks/OpenedWindows'

import { View, TouchableOpacity } from 'react-native'

import Animated, { useSharedValue, useAnimatedStyle, withSequence, withTiming, Easing } from 'react-native-reanimated'


const AnimatedTouchableOpacity = Animated.createAnimatedComponent (TouchableOpacity)


const BottomBar = () => {

  const [appOpenedWindows, setAppOpenedWindows] = useAppOpenedWindows ()


  const setIsAppDescriptionOpened = bool => {

    bool

      ? setAppOpenedWindows (prev => [...prev, 'AppDescription'])
      : setAppOpenedWindows (prev => prev.filter (el => el != 'AppDescription'))

  }

  const handleTipPress = () => {

    setIsAppDescriptionOpened (true)

  }


  return (

    <View style = {{
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingTop: 14}}>

      <Tip
      onPress = {() => handleTipPress()}/>

    </View>

  )

}


const Tip = ({onPress}) => {

  const [styles, theme] = useThemes (styles => styles.MainPage.Bottom)
  const [texts] = useAppLanguage (texts => texts.MainPage.Bottom)


  const barBorderColorControl = useSharedValue (styles.borderColor)
  const barBackgroundColorControl = useSharedValue (styles.backgroundColor)
  const textColorControl = useSharedValue (styles.color)

  const scaleControl = useSharedValue (1)
  const opacityControl = useSharedValue (1)
  const marginControl = useSharedValue (0)

  const animationStyles = useAnimatedStyle (() => ({

    color: textColorControl.value,

    transform: [{scale: scaleControl.value}],
    opacity: opacityControl.value,
    marginBottom: marginControl.value

  }))


  const commonEasing = comEsng = Easing.inOut (Easing.quad)
  const themeAnimationDuration = thAnDu = 250
  const animationDuration = AnDu = 95


  // theme animations:

  useEffect (() => {

    barBorderColorControl.value = withTiming (styles.borderColor, {duration: thAnDu, easing: comEsng})
    barBackgroundColorControl.value = withTiming (styles.backgroundColor, {duration: thAnDu, easing: comEsng})
    textColorControl.value = withTiming (styles.color, {duration: thAnDu, easing: comEsng})

  }, [theme])

  // .


  // press animations:

  const handlePressIn = () => {

    scaleControl.value = withTiming (0.975, {duration: AnDu, easing: comEsng})
    opacityControl.value = withTiming (0.5, {duration: AnDu, easing: comEsng})
    marginControl.value = withTiming (1, {duration: AnDu, easing: comEsng})

  }

  const handlePressOut = () => {

    scaleControl.value = withTiming (1, {duration: AnDu, easing: comEsng})
    opacityControl.value = withTiming (1, {duration: AnDu, easing: comEsng})
    marginControl.value = withTiming (0, {duration: AnDu, easing: comEsng})

  }

  const handlePress = () => {

    scaleControl.value = withSequence (withTiming (0.975, {duration: AnDu, easing: comEsng}), withTiming (1, {duration: AnDu, easing: comEsng}))
    opacityControl.value = withSequence (withTiming (0.5, {duration: AnDu, easing: comEsng}), withTiming (1, {duration: AnDu, easing: comEsng}))
    marginControl.value = withSequence (withTiming (1, {duration: AnDu, easing: comEsng}), withTiming (0, {duration: AnDu, easing: comEsng}))

    setTimeout (() => onPress (), AnDu)

  }

  // .


  return (

    <View style = {{
    width: '100%',
    height: 75}}>

      <AnimatedTouchableOpacity
      activeOpacity = {1}
      onPressIn = {() => handlePressIn()}
      onPressOut = {() => handlePressOut()}
      onPress = {() => handlePress()}
      style = {{
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: 75,
      // paddingVertical: 12,
      paddingHorizontal: 25,
      borderTopWidth: 2,
      borderColor: barBorderColorControl,
      backgroundColor: barBackgroundColorControl}}>

        <Animated.Text style = {[{
        maxWidth: 500,
        fontFamily: styles.fontFamily,
        fontSize: 17},
        animationStyles]}>

          <MetaLink>{texts.metalink}</MetaLink>{texts.rest_text}

        </Animated.Text>

      </AnimatedTouchableOpacity>

    </View>

  )

}

const MetaLink = ({children: text}) => {

  const [styles, theme] = useThemes (styles => styles.MainPage.Bottom)


  const textColorControl = useSharedValue (styles.metalinkColor)

  const commonEasing = comEsng = Easing.inOut (Easing.quad)
  const themeAnimationDuration = thAnDu = 250


  // theme animations:

  useEffect (() =>

    textColorControl.value = withTiming (styles.metalinkColor, {duration: thAnDu, easing: comEsng})

  , [theme])

  // .


  return (

    <Animated.Text style = {{color: textColorControl}}>

      {text}

    </Animated.Text>

  )

}


export default BottomBar