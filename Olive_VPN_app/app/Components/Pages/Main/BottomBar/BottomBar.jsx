// Component.


import { useDispatch, useSelector } from 'react-redux'
import { setOpenedWindows } from '../../../../../Redux/OpenedWindowsSlice'

import { useEffect } from 'react'
import { useThemes } from '../../../../../Styles/Hooks/UseThemes'

import { View, TouchableOpacity } from 'react-native'

import Animated, { useSharedValue, useAnimatedStyle, withTiming, withSequence, Easing } from 'react-native-reanimated'


const AnimatedTouchableOpacity = Animated.createAnimatedComponent (TouchableOpacity)

let styles, theme


const BottomBar = () => {

  [styles, theme] = useThemes (styles => styles.MainPage.Bottom)


  const tipText = {

    metalinkText: 'Подробнее',
    restText: ' о приложении, которое созданно для обхода ограничений.'

  }


  const openedWindows = useSelector (state => state.openedWindows.value)

  const dispatch = useDispatch ()
  const setReduxOpenedWindows = callback => dispatch (setOpenedWindows (callback (openedWindows)))

  const setReduxIsOpened = bool => {

    bool

      ? setReduxOpenedWindows (prev => [...prev, 'AppDescription'])
      : setReduxOpenedWindows (prev => prev.filter (el => el != 'AppDescription'))

  }

  const handleTipPress = () => {

    setReduxIsOpened (true)

  }


  return (

    <View style = {{
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingTop: 28}}>

      <Tip
      tipText = {tipText}
      onPress = {() => handleTipPress()}/>

    </View>

  )

}


const Tip = ({tipText, onPress}) => {

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
      top: marginControl.value

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
    marginControl.value = withTiming (-0.5, {duration: AnDu, easing: comEsng})

  }

  const handlePressOut = () => {

    scaleControl.value = withTiming (1, {duration: AnDu, easing: comEsng})
    opacityControl.value = withTiming (1, {duration: AnDu, easing: comEsng})
    marginControl.value = withTiming (0, {duration: AnDu, easing: comEsng})

  }

  // .


  const handlePress = () => {

    scaleControl.value = withSequence (withTiming (0.975, {duration: AnDu, easing: comEsng}), withTiming (1, {duration: AnDu, easing: comEsng}))
    opacityControl.value = withSequence (withTiming (0.5, {duration: AnDu, easing: comEsng}), withTiming (1, {duration: AnDu, easing: comEsng}))
    marginControl.value = withSequence (withTiming (-0.5, {duration: AnDu, easing: comEsng}), withTiming (0, {duration: AnDu, easing: comEsng}))

    onPress ()

  }


  return (

    <AnimatedTouchableOpacity
    activeOpacity = {1}
    onPressIn = {() => handlePressIn()}
    onPressOut = {() => handlePressOut()}
    onPress = {() => handlePress()}
    style = {{
    justifyContent: 'center',
    width: '100%',
    height: 75,
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderTopWidth: 2,
    borderColor: barBorderColorControl,
    backgroundColor: barBackgroundColorControl}}>

      <Animated.Text style = {[{
      fontFamily: styles.fontFamily,
      fontSize: 17},
      animationStyles]}>

        <MetaLink>{tipText.metalinkText}</MetaLink>{tipText.restText}

      </Animated.Text>

    </AnimatedTouchableOpacity>

  )

}

const MetaLink = ({children: text}) => {

  const textColorControl = useSharedValue (styles.metalinkColor)


  useEffect (() =>

    textColorControl.value = withTiming (styles.metalinkColor, {duration: thAnDu, easing: comEsng})

  , [theme])


  return (

    <Animated.Text style = {{color: textColorControl}}>

      {text}

    </Animated.Text>

  )

}


export default BottomBar