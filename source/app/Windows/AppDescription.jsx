// This is app description window.


import { useThemes } from '../../Redux/Hooks/UseThemes'
import { useAppLanguage } from '../../Redux/Hooks/AppLanguage'
import { useAppOpenedWindows } from '../../Redux/Hooks/OpenedWindows'

import { ScrollView, Text } from 'react-native'

import Window from '../Components/Common/Window/Window'


const AppDescription = () => {

  const [texts] = useAppLanguage (texts => texts.AppDescriptionWindow)
  const [appOpenedWindows, setAppOpenedWindows] = useAppOpenedWindows ()


  const for_waht_does_this_app_is_made_for_TXT = texts.Top.for_waht_does_this_app_is_made_for
  const okay_TXT = texts.Bottom.okay


  const isOpened = appOpenedWindows.includes ('AppDescription')

  const setIsSelfOpened = bool => {

    bool

      ? setAppOpenedWindows (prev => [...prev, 'AppDescription'])
      : setAppOpenedWindows (prev => prev.filter (el => el != 'AppDescription'))

  }


  const handleOkayPress = () => {

    setIsSelfOpened (false)

  }


  return (

    <Window
    isOpened = {isOpened}
    closeSelf = {() => handleOkayPress()}
    title = {for_waht_does_this_app_is_made_for_TXT}
    rightButton = {{
      text: okay_TXT,
      onPress: () => handleOkayPress()}}>

      <Content/>

    </Window>

  )

}


const Content = () => {

  const [styles] = useThemes (styles => styles.AppDescriptionWindow.Content)
  const [texts] = useAppLanguage (texts => texts.AppDescriptionWindow)


  const description_text_TXT = texts.Main.description_text


  return (

    <ScrollView
    showsVerticalScrollIndicator = {false}
    showsHorizontalScrollIndicator = {false}
    style = {{
    width: '100%',
    height: '100%',
    paddingHorizontal: 25}}>

      <Text style = {{
      width: '100%',
      marginVertical: 8,
      fontFamily: styles.fontFamily,
      color: styles.color,
      fontSize: 17.5}}>

        {description_text_TXT}

      </Text>

    </ScrollView>

  )

}

 
export default AppDescription