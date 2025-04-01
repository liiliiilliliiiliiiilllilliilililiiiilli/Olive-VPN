// Component.


import { useThemes } from '../../../../../../../Styles/Hooks/UseThemes'
import { View, TouchableOpacity, Image } from 'react-native'

import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'


const Button = ({pic, style, imageStyle, onPress}) => {

  const [styles] = useThemes (styles => styles.MainPage.Top.Button)


  // animations:
  const scaleControl = useSharedValue (1)
  const opacityControl = useSharedValue (1)
  const marginControl = useSharedValue (0)

  const animationStyles = useAnimatedStyle (() => {

    return {

      transform: [{scale: scaleControl.value}],
      opacity: opacityControl.value,
      top: marginControl.value

    }

  })


  const animationDuration = 95

  const handlePressIn = () => {

    scaleControl.value = withTiming (0.975, {duration: animationDuration})
    opacityControl.value = withTiming (0.5, {duration: animationDuration})
    marginControl.value = withTiming (0.5, {duration: animationDuration})

  }

  const handlePressOut = () => {

    scaleControl.value = withTiming (1, {duration: animationDuration})
    opacityControl.value = withTiming (1, {duration: animationDuration})
    marginControl.value = withTiming (0, {duration: animationDuration})

  }
  // .


  const handlePress = () => {

    onPress ()

  }


  return (

    <Animated.View style = {[{
    justifyContent: 'center',
    alignItems: 'center',
    width: 38,
    height: 38,
    padding: 7,
    borderWidth: 3,
    borderRadius: 10,
    borderColor: styles.borderColor,
    backgroundColor: styles.backgroundColor,
    marginHorizontal: 6.25, 
    ...style},
    animationStyles]}>

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
      style = {[
      // imgOpacity,
      {width: 17,
      height: 17,
      ...imageStyle}]}/>

    </Animated.View>

  )

}


export default Button