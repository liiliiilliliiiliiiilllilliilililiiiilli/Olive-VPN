// Component.


import { useEffect } from 'react'
import { useThemes } from '../../../../Styles/Hooks/UseThemes'

import { StatusBar } from 'react-native'
import { Dimensions } from 'react-native'

import Animated, { useSharedValue, withTiming, Easing } from 'react-native-reanimated'


const MainField = ({style, children}) => {

  const [styles, theme] = useThemes ()


  const windowWidth = Dimensions.get('window').width  // should it be under triggering ?
  const windowHeight = Dimensions.get('window').height  // should it be under triggering ?
  const windowSize = Math.max (windowWidth, windowHeight)


  const getRandom = (min, max) => {

    return min + Math.random() * (max - min)

  }


  const viewBackgroundColorControl = useSharedValue (styles.MainField.backgroundColor)

  const backgroundRotateControl = useSharedValue (`-${getRandom(25, 0)}deg`)
  const backgroundScaleControl = useSharedValue (getRandom(1, 1.1))
  const backgroundOpacityControl = useSharedValue (getRandom(0.45, 0.55))


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


  // main view animations:

  useEffect (() =>

    viewBackgroundColorControl.value = withTiming (styles.MainField.backgroundColor, {duration: 250, easing: Easing.inOut(Easing.quad)})

  , [theme])

  // .


  return (

    <Animated.View style = {{
    width: '100%',
    height: '100%',
    backgroundColor: viewBackgroundColorControl,
    ...style}}>

      <StatusBar
      animated = {true}
      translucent = {false}  // temporal
      backgroundColor = {styles.StatusBar.backgroundColor}
      barStyle = {styles.StatusBar.color}/>

      <Animated.Image  // cool animated background gradient image
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