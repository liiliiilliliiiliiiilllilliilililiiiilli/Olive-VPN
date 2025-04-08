// This is app feedback window.


import TextLink from 'react-native-text-link'

import { useThemes } from '../../Redux/Hooks/UseThemes'
import { useAppLanguage } from '../../Redux/Hooks/AppLanguage'
import { useAppOpenedWindows } from '../../Redux/Hooks/OpenedWindows'

import { View, Linking } from 'react-native'

import Window from '../Components/Common/Window/Window'


const Feedback = () => {

  const [texts] = useAppLanguage (texts => texts.FeedbackWindow)

  const feedback_TXT = texts.Top.feedback
  const okay_TXT = texts.Bottom.okay


  const [appOpenedWindows, setAppOpenedWindows] = useAppOpenedWindows ()


  const isOpened = appOpenedWindows.includes ('Feedback')


  const setIsSelfOpened = bool => {

    bool

      ? setAppOpenedWindows (prev => [...prev, 'Feedback'])
      : setAppOpenedWindows (prev => prev.filter (el => el != 'Feedback'))

  }


  const handleOkayPress = () => {

    setIsSelfOpened (false)

  }


  return (

    <Window
    isOpened = {isOpened}
    closeSelf = {() => handleOkayPress()}
    title = {feedback_TXT}
    rightButton = {{
      text: okay_TXT,
      onPress: () => handleOkayPress()}}
    style = {{height: 'auto'}}>

      <Content/>

    </Window>

  )

}


const Content = () => {

  const [styles] = useThemes (styles => styles.FeedbackWindow.Content)
  const [texts] = useAppLanguage (texts => texts.FeedbackWindow)


  const urlTelegramChannel_TXT = texts.Main.urlTelegramChannel
  const urlGooglePlay_TXT = texts.Main.urlGooglePlay
  const urlAppStore_TXT = texts.Main.urlAppStore

  const feedbackText_TXT = texts.Main.feedbackText

  const link_Telegram_TXT = texts.Main.link_Telegram
  const link_Googlelay_TXT = texts.Main.link_Googlelay
  const link_AppStore_TXT = texts.Main.link_AppStore


  return (

    <View style = {{
    width: '100%',
    paddingHorizontal: 25,
    paddingVertical: 8}}>

      <TextLink
      textStyle = {{
        fontFamily: styles.fontFamily,
        color: styles.color,
        fontSize: 17.5}}
      textLinkStyle = {{
        fontFamily: styles.fontFamily,
        color: styles.color_link,
        fontSize: 17.5}}
      pressingLinkStyle = {{
        fontFamily: styles.fontFamily,
        color: styles.color_link_pressed,
        fontSize: 17.5}}

      links = {[

        { text: link_Telegram_TXT,
          onPress: () => Linking.openURL (urlTelegramChannel_TXT) },

        { text: link_Googlelay_TXT,
          onPress: () => Linking.openURL (urlGooglePlay_TXT) },

        { text: link_AppStore_TXT,
          onPress: () => Linking.openURL (urlAppStore_TXT) }

      ]}>

       {feedbackText_TXT}

      </TextLink>

    </View>

  )

}


export default Feedback