// Component.


import { useState, useEffect } from 'react'
import { useThemes } from '../../../../Redux/Hooks/UseThemes'
import { useAppMenuSlider } from '../../../../Redux/Hooks/MenuSlider'

import { StatusBar } from 'react-native'
import { Dimensions, PixelRatio } from 'react-native'

import Animated, { useSharedValue, withDelay, withTiming, Easing } from 'react-native-reanimated'
import { useAppOpenedWindows } from '../../../../Redux/Hooks/OpenedWindows'


const MainField = ({style, children}) => {

  const [styles, theme] = useThemes ()
  const [isAppMenuSliderOpened, setIsAppMenuSliderOpened] = useAppMenuSlider ()
  const [appOpenedWindows] = useAppOpenedWindows ()


  const [statusBarColor, setStatusBarColor] = useState (styles.StatusBar.backgroundColor)


  const windowWidth = Dimensions.get('window').width  // should it be under triggering ?
  const windowHeight = Dimensions.get('window').height  // should it be under triggering ?
  const ww = Dimensions.get('screen').width
  const wh = Dimensions.get('screen').height
  const windowSize = Math.max (style.height, style.width)

  // console.info ('qqqqq:', windowWidth, windowHeight, ww, wh)
  // console.info ('q:', PixelRatio.get (), PixelRatio.getPixelSizeForLayoutSize (1))


  const getRandom = (min, max) => {

    return min + Math.random() * (max - min)

  }


  const viewBackgroundColorControl = useSharedValue (styles.MainField.backgroundColor)

  const backgroundRotateControl = useSharedValue (`-${getRandom(25, 0)}deg`)
  const backgroundScaleControl = useSharedValue (getRandom(1, 1.1))
  const backgroundOpacityControl = useSharedValue (getRandom(0.45, 0.55))

  const marginControl = useSharedValue (0)


  useEffect (() => {

    isAppMenuSliderOpened

      ? marginControl.value = withDelay (25, withTiming (50, {duration: 180, easing: Easing.inOut (Easing.quad)}))
      : marginControl.value = withTiming (0, {duration: 95, easing: Easing.inOut (Easing.quad)})

  }, [isAppMenuSliderOpened])


  // background image animations:

  const slow_mo_index = smi = 1

  useEffect (() => {

    // before the intervals act:
    backgroundRotateControl.value = withTiming (`${getRandom(-45, 75)}deg`, {duration: 3200 * smi})
    backgroundScaleControl.value = withTiming (getRandom(1, 1.4), {duration: 2500 * smi})
    backgroundOpacityControl.value = withTiming (getRandom(0.35, 0.625), {duration: 1500 * smi})

    // and then with intervals:
    const rotationInterval = setInterval (() =>
      
      backgroundRotateControl.value = withTiming (`${getRandom(-45, 75)}deg`, {duration: 3200 * smi})

    , 3800 * smi)

    const scaleInterval = setInterval (() =>

      backgroundScaleControl.value = withTiming (getRandom(1, 1.4), {duration: 2500 * smi})

    , 2600 * smi)

    const opacityInterval = setInterval (() =>

      backgroundOpacityControl.value = withTiming (getRandom(0.35, 0.625), {duration: 1500 * smi})

    , 1600 * smi)

    return () => {clearInterval (rotationInterval); clearInterval (scaleInterval); clearInterval (opacityInterval)}

  }, [])

  // .


  // theme animations:

  useEffect (() => {

    viewBackgroundColorControl.value = withTiming (styles.MainField.backgroundColor, {duration: 250, easing: Easing.inOut(Easing.quad)})

    setStatusBarColor (styles.StatusBar.backgroundColor)

  }, [theme])

  // .


  // handle topbar on windows color change:

  useEffect (() => {

    if (appOpenedWindows.length != 0)
      
      setStatusBarColor (styles.StatusBar.backgroundColor_Shadowed)

    else

      setStatusBarColor (styles.StatusBar.backgroundColor)

  }, [appOpenedWindows])

  // .


  return (

    <Animated.View style = {[{
    // width: '100%',
    // height: '100%',
    backgroundColor: viewBackgroundColorControl,
    left: marginControl},
    style]}>

      <StatusBar
      animated = {true}
      translucent = {false}  // temporal
      backgroundColor = {statusBarColor}
      barStyle = {styles.StatusBar.color}/>

      <Animated.Image  // cool animated background gradient image, temporal
      source = {styles.MainField.ColorfulBackground_PNG}
      style = {{
      zIndex: 0,
      position: 'absolute',
      width: windowSize * 1.4,
      height: windowSize * 1.4,
      resizeMode: 'stretch',
      top: - backgroundScaleControl.value * windowSize * 0.7 / 2.5,
      transform: [
        {rotate: backgroundRotateControl},
        {scale: backgroundScaleControl}],
      opacity: backgroundOpacityControl}}/>

      {children}

    </Animated.View>

  )

}


export default MainField