// This is app language choose window.


import { useThemes } from '../../Redux/Hooks/UseThemes'
import { useAppLanguage } from '../../Redux/Hooks/AppLanguage'
import { useAppOpenedWindows } from '../../Redux/Hooks/OpenedWindows'

import { View, TouchableOpacity, Text } from 'react-native'

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

    return (
      
      <View style = {{
      justifyContent: 'center',
      alignItems: 'center',
      width: 25,
      height: 25,
      borderRadius: 1000,
      borderWidth: 2,
      borderColor: !isChosen ? styles.ChooseRadioButton.outerColor_unchosen : styles.ChooseRadioButton.outerColor_chosen}}>

        <View style = {{
        width: isChosen ? 14 : 21,
        height: isChosen ? 14 : 21,
        borderRadius: 1000,
        backgroundColor: !isChosen ? styles.ChooseRadioButton.innerColor_unchosen : styles.ChooseRadioButton.innerColor_chosen}}/>

      </View>
      
    )

  }

  const ChooseVariant = ({language, language_native, isChosen, onPress}) => {

    return (

      <TouchableOpacity
      onPress = {() => onPress()}
      style = {{
      flexDirection: 'row',
      alignItems: 'center',
      gap: 23,
      paddingVertical: 8,
      paddingHorizontal: 23}}>

        <ChooseRadioButton isChosen = {isChosen}/>

        <View>
          <Text style = {{
          marginBottom: -2.5,
          marginRight: 'auto',
          fontFamily: styles.ChooseVariant.fontFamily_language,
          color: styles.ChooseVariant.color_language,
          fontSize: 17}}>

            {language}

          </Text>

          <Text style = {{
          fontFamily: styles.ChooseVariant.fontFamily_language_native,
          color: styles.ChooseVariant.color_language_native,
          fontSize: 15.5}}>

            {language_native}

          </Text>
        </View>

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