// Component.


import { useThemes } from '../../../../../../Redux/Hooks/UseThemes'
import { useAppLanguage } from '../../../../../../Redux/Hooks/AppLanguage'

import { View, TouchableOpacity, Image, Text } from 'react-native'

import Animated, { useSharedValue, withSequence, withTiming, Easing } from 'react-native-reanimated'


const ServerInstance = ({pic, title, availability, isChosen, style}) => {

  const [styles] = useThemes (styles => styles.ServersListPage.Main.ServerInstance)


  const [texts] = useAppLanguage (texts => texts.ServersListPage.Main.ServerInstance)

  const chosen_TXT = texts.chosen


  const scaleControl = useSharedValue (1)
  const opacityControl = useSharedValue (1)
  const marginControl = useSharedValue (0)


  const commonEasing = comEsng = Easing.inOut (Easing.quad)
  const animationDuration = AnDu = 95


  const pinColor = {  

    3: styles.Block.PinStatus.green,
    2: styles.Block.PinStatus.orange,
    1: styles.Block.PinStatus.red,
    0: styles.Block.PinStatus.transparent

  } [availability]


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

  const handlePress = () => {

    scaleControl.value = withSequence (withTiming (0.975, {duration: AnDu, easing: comEsng}), withTiming (1, {duration: AnDu, easing: comEsng}))
    opacityControl.value = withSequence (withTiming (0.5, {duration: AnDu, easing: comEsng}), withTiming (1, {duration: AnDu, easing: comEsng}))
    marginControl.value = withSequence (withTiming (-0.5, {duration: AnDu, easing: comEsng}), withTiming (0, {duration: AnDu, easing: comEsng}))

  }

  // .


  return (

    <View style = {[{  // items container
    width: '100%',
    marginBottom: 8,
    paddingVertical: 2.5,
    paddingHorizontal: 5,
    backgroundColor: styles.backgroundColor,
    opacity: availability ? 1 : 0.5,
    pointerEvents: availability != 0 && !isChosen ? 'auto' : 'none'},
    style]}>

      <TouchableOpacity
      activeOpacity = {1}
      onPressIn = {() => handlePressIn()}
      onPressOut = {() => handlePressOut()}
      onPress = {() => handlePress()}>

        <Animated.View style = {{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 75,
        width: 'auto',
        gap: 21,
        paddingHorizontal: 21,
        borderRadius: 16,
        borderWidth: 2,
        borderColor: isChosen ? styles.Block.borderColor_Chosen : styles.Block.borderColor_Unchosen,
        backgroundColor: styles.Block.backgroundColor,
        opacity: opacityControl,
        transform: [{scale: scaleControl}]}}>

          <View style = {{
          justifyContent: 'flex-start',
          alignItems: 'center',
          width: 42,
          height: 42,
          borderWidth: 2,
          borderColor: styles.Block.Pic.borderColor_Out,
          borderRadius: 1000}}>

            <Image
            source = {pic}
            style = {{
            width: 38,
            height: 38,
            borderWidth: 2,
            borderColor: styles.Block.Pic.borderColor_In,
            borderRadius: 1000}}/>

          </View>

          <Text style = {{
          fontFamily: styles.Block.fontFamily,
          color: styles.Block.color,
          fontSize: 17,
          marginRight: 17}}>

            {title}

          </Text>

          {isChosen ?

            <Text style = {{
            fontFamily: styles.Block.fontFamily,
            color: styles.Block.color_IsChosen,
            fontSize: 17,
            marginHorizontal: 'auto'}}>

              {chosen_TXT}

            </Text>

          : null}

          <View style = {{
          width: 8,
          height: 8,
          marginLeft: 'auto',
          marginRight: 16,
          borderRadius: 1000,
          backgroundColor: pinColor}}/>

        </Animated.View>

      </TouchableOpacity>

    </View>


  )

}


export default ServerInstance