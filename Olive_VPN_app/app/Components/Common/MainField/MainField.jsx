// Component.


import { useThemes } from '../../../../Styles/Hooks/UseThemes'
import { StatusBar, View, Image } from 'react-native'
import { Dimensions } from 'react-native'
import Animated, { useSharedValue, withDelay, withRepeat, withSequence, withTiming } from 'react-native-reanimated'
import { useEffect } from 'react'


const MainField = ({style, children}) => {

  const [styles] = useThemes ()


  const windowWidth = Dimensions.get('window').width  // should it be under triggering ?
  const windowHeight = Dimensions.get('window').height  // should it be under triggering ?


  const getRandom = (min, max) => {

    return Math.random() * (max - min) + min

  }


  const backgroundRotateControl = useSharedValue (`-${getRandom(25, 0)}deg`)
  const backgroundScaleControl = useSharedValue (getRandom(1, 1.1))
  const backgroundOpacityControl = useSharedValue (getRandom(0.45, 0.55))


  const slow_mo_index = 1

  useEffect (() => {

    // init
    backgroundRotateControl.value = withTiming (`${getRandom(-45, 75)}deg`, {duration: 3200 * slow_mo_index})
    backgroundScaleControl.value = withTiming (getRandom(1, 1.4), {duration: 2500 * slow_mo_index})
    backgroundOpacityControl.value = withTiming (getRandom(0.35, 0.625), {duration: 1500 * slow_mo_index})

    // trigger
    setInterval (() => {
      
      backgroundRotateControl.value = withTiming (`${getRandom(-45, 75)}deg`, {duration: 3200 * slow_mo_index})

    }, 3800 * slow_mo_index)

    setInterval (() => {

      backgroundScaleControl.value = withTiming (getRandom(1, 1.4), {duration: 2500 * slow_mo_index})

    }, 2600 * slow_mo_index)

    setInterval (() => {

      backgroundOpacityControl.value = withTiming (getRandom(0.35, 0.625), {duration: 1500 * slow_mo_index})

    }, 1600 * slow_mo_index)

  }, [])


  return (

    <View style = {{
    width: '100%',
    height: '100%',
    backgroundColor: styles.MainField.backgroundColor,
    ...style}}>

      <StatusBar
      animated = {true}
      translucent = {false}  // temporal
      backgroundColor = {styles.StatusBar.backgroundColor}
      barStyle = {styles.StatusBar.color}/>

      <Animated.Image
      source = {styles._Other_.ColorfulBackground_PNG}
      style = {{
      top: - backgroundScaleControl.value * windowHeight * 0.7 / 2.5,
      zIndex: 0,
      position: 'absolute',
      width: windowHeight * 1.4,
      height: windowHeight * 1.4,
      resizeMode: 'stretch',
      transform: [{rotate: backgroundRotateControl}, {scale: backgroundScaleControl}],
      opacity: backgroundOpacityControl}}/>

      {children}

    </View>

  )

}


export default MainField