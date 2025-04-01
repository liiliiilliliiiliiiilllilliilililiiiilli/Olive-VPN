// Component.


import { useThemes } from '../../../../../Styles/Hooks/UseThemes'
import { View, TouchableOpacity, Text } from 'react-native'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'


let styles


const BottomBar = () => {

  [styles] = useThemes (styles => styles.MainPage.Bottom)


  const tipText = [

    'Подробнее',
    ' о приложении, которое созданно для обхода ограничений.'

  ]


  const HandleTipPress = () => {
    
    console.info ('Metalink pressed!')

  }


  return (

    <View style = {{
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingTop: 28}}>

      <Tip
      tipText = {tipText}
      onPress = {() => HandleTipPress()}/>

    </View>

  )

}


const Tip = ({tipText, onPress}) => {

  const [metalinkText, mainText] = [tipText[0], tipText[1]]

  
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
    marginControl.value = withTiming (-0.5, {duration: animationDuration})

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

    <TouchableOpacity
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
    borderColor: styles.borderColor,
    backgroundColor: styles.backgroundColor}}>

      <Animated.Text style = {[
      {fontFamily: styles.fontFamily,
      color: styles.color,
      fontSize: 17},
      animationStyles]}>

        <MetaLink>{metalinkText}</MetaLink>{mainText}

      </Animated.Text>

    </TouchableOpacity>

  )

}

const MetaLink = ({children: text}) => {

  return (

    <Text style = {{color: styles.metalinkColor}}>

      {text}

    </Text>

  )

}


export default BottomBar