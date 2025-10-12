// This is app language choose window.


import { useEffect } from 'react'
import { useThemes } from '../../Redux/Hooks/UseThemes'
import { useAppLanguage } from '../../Redux/Hooks/AppLanguage'
import { useAppOpenedWindows } from '../../Redux/Hooks/OpenedWindows'

import { View, TouchableOpacity, Text } from 'react-native'

import Animated, { useSharedValue, withSequence, withTiming, Easing } from 'react-native-reanimated'

import Window from '../Components/Common/Window/Window'


const LanguageChoose = () => {

  const [texts] = useAppLanguage (texts => texts.LanguageChooseWindow)

  const app_language_TXT = texts.Top.app_language
  const done_TXT = texts.Bottom.done


  const [appOpenedWindows, setAppOpenedWindows] = useAppOpenedWindows ()


  const isOpened = appOpenedWindows.includes ('LanguageChoose')

  const setIsSelfOpened = bool => {

    bool

      ? setAppOpenedWindows (prev => [...prev, 'LanguageChoose'])
      : setAppOpenedWindows (prev => prev.filter (el => el != 'LanguageChoose'))

  }


  const handleDonePress = () => {

    setIsSelfOpened (false)

  }


  return (

    <Window
    isOpened = {isOpened}
    closeSelf = {() => handleDonePress()}
    title = {app_language_TXT}
    rightButton = {{
      text: done_TXT,
      onPress: () => handleDonePress()}}
    style = {{
      width: 320}}>

      <Content/>

    </Window>

  )

}


const Content = () => {

  const [styles] = useThemes (styles => styles.LanguageChooseWindow.Content)
  const [texts, appLanguage, setAppLanguage] = useAppLanguage (texts => texts.LanguageChooseWindow)


  const ChooseRadioButton = ({isChosen}) => {

    const outerColorControl = useSharedValue (styles.ChooseRadioButton.outerColor_Unchosen)
    const innerColorControl = useSharedValue (styles.ChooseRadioButton.innerColor_Unchosen)


    const commonEasing = comEsng = Easing.inOut (Easing.quad)
    const animationDuration = AnDu = 95


    useEffect (() => {

      if (isChosen) {

        outerColorControl.value = withTiming (styles.ChooseRadioButton.outerColor_Chosen, {duration: AnDu, easing: comEsng})
        innerColorControl.value = withTiming (styles.ChooseRadioButton.innerColor_Chosen, {duration: AnDu, easing: comEsng})

      }

      else {

        outerColorControl.value = withTiming (styles.ChooseRadioButton.outerColor_Unchosen, {duration: AnDu, easing: comEsng})
        innerColorControl.value = withTiming (styles.ChooseRadioButton.innerColor_Unchosen, {duration: AnDu, easing: comEsng})

      }

    }, [appLanguage])


    return (
      
      <Animated.View style = {{
      justifyContent: 'center',
      alignItems: 'center',
      width: 25,
      height: 25,
      borderRadius: 1000,
      borderWidth: 2,
      borderColor: outerColorControl}}>

        <Animated.View style = {{
        width: isChosen ? 14 : 21,
        height: isChosen ? 14 : 21,
        borderRadius: 1000,
        backgroundColor: innerColorControl}}/>

      </Animated.View>
      
    )

  }

  const ChooseVariant = ({language, language_native, isChosen, onPress}) => {

    const scaleControl = useSharedValue (1)
    const opacityControl = useSharedValue (1)


    const commonEasing = comEsng = Easing.inOut (Easing.quad)
    const animationDuration = AnDu = 95


    // press animations:
  
    const handlePressIn = () => {
  
      scaleControl.value = withTiming (0.975, {duration: AnDu, easing: comEsng})
      opacityControl.value = withTiming (0.5, {duration: AnDu, easing: comEsng})
  
    }
  
    const handlePressOut = () => {
  
      scaleControl.value = withTiming (1, {duration: AnDu, easing: comEsng})
      opacityControl.value = withTiming (1, {duration: AnDu, easing: comEsng})
  
    }
  
    const handlePress = () => {
  
      scaleControl.value = withSequence (withTiming (0.975, {duration: AnDu, easing: comEsng}), withTiming (1, {duration: AnDu, easing: comEsng}))
      opacityControl.value = withSequence (withTiming (0.5, {duration: AnDu, easing: comEsng}), withTiming (1, {duration: AnDu, easing: comEsng}))

      setTimeout (() => onPress (), AnDu)
  
    }
  
    // .


    return (

      <TouchableOpacity
      activeOpacity = {1}
      onPressIn = {() => handlePressIn()}
      onPressOut = {() => handlePressOut()}
      onPress = {() => handlePress()}
      style = {{
      paddingVertical: 8,
      paddingHorizontal: 23}}>

        <Animated.View style = {{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 23,
        transform: [{scale: scaleControl}],
        opacity: opacityControl}}>

          <ChooseRadioButton isChosen = {isChosen}/>

          <View>

            <Text style = {{
            marginBottom: -2.5,
            marginRight: 'auto',
            fontFamily: styles.ChooseVariant.fontFamily_Language,
            color: styles.ChooseVariant.color_Language,
            fontSize: 17}}>

              {language}

            </Text>

            <Text style = {{
            fontFamily: styles.ChooseVariant.fontFamily_LanguageNative,
            color: styles.ChooseVariant.color_LanguageNative,
            fontSize: 15.5}}>

              {language_native}

            </Text>

          </View>

        </Animated.View>

      </TouchableOpacity>

    )

  }


  const russian_TXT = texts.Main.russian
  const engish_TXT = texts.Main.engish
  const chinese_TXT = texts.Main.chinese

  const russian_native_TXT = texts.Main.russian_native
  const engish_native_TXT = texts.Main.engish_native
  const chinese_native_TXT = texts.Main.chinese_native


  return (

    <View style = {{gap: 5}}>

      <ChooseVariant
      language = {russian_TXT}
      language_native = {russian_native_TXT}
      isChosen = {appLanguage == 'Russian'}
      onPress = {() => setAppLanguage ('Russian')}/>

      <ChooseVariant
      language = {engish_TXT}
      language_native = {engish_native_TXT}
      isChosen = {appLanguage == 'English'}
      onPress = {() => setAppLanguage ('English')}/>

      <ChooseVariant
      language = {chinese_TXT}
      language_native = {chinese_native_TXT}
      isChosen = {appLanguage == 'Chinese'}
      onPress = {() => setAppLanguage ('Chinese')}/>

    </View>

  )

}


export default LanguageChoose