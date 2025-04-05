// This is language choose window.


import TextLink from 'react-native-text-link'
import { View, Linking } from 'react-native'
import { useAppOpenedWindows } from '../../Redux/Hooks/OpenedWindows'
import Window from '../Components/Common/Window/Window'


const Feedback = () => {

  const [openedAppWindows, setAppOpenedWindows] = useAppOpenedWindows ()


  // this window existence code:

  const isOpened = openedAppWindows.includes ('Feedback')

  const setReduxIsOpened = bool => {

    bool

      ? setAppOpenedWindows (prev => [...prev, 'Feedback'])
      : setAppOpenedWindows (prev => prev.filter (el => el != 'Feedback'))

  }

  // .


  const handleDonePress = () => {

    setReduxIsOpened (false)

  }


  return (

    <Window
    isOpened = {isOpened}
    closeSelf = {() => handleDonePress()}
    title = 'Обратная связь'
    rightButton = {{
      text: 'Ок',
      onPress: () => handleDonePress()}}
    style = {{height: 'auto'}}>

      <Content/>

    </Window>

  )

}

const Content = () => {

  const urlTelegramChannel = 'https://t.me/OliveVPN'
  const urlGooglePlay = 'https://google.com'
  const urlAppStore = 'https://yandex.ru'

  const feedbackText = 'Следите за новостями сервиса в нашем Телеграм-канале.\n\nОцените наш сервис на Google Play или App Store.'

  const link_Telegram = 'нашем Телеграм-канале'
  const link_Googlelay = 'Google Play'
  const link_AppStore = 'App Store'


  return (

    <View style = {{
    width: '100%',
    paddingHorizontal: 25,
    paddingVertical: 8}}>

      <TextLink
      textStyle = {{
        fontFamily: 'Archivo-Regular',
        color: '#f2f2f2',
        fontSize: 17.5}}
      textLinkStyle = {{
        fontFamily: 'Archivo-Regular',
        color: 'rgb(157, 166, 217)',
        fontSize: 17.5}}
      pressingLinkStyle = {{
        fontFamily: 'Archivo-Regular',
        color: 'rgb(108, 116, 153)',
        fontSize: 17.5}}

      links = {[

        { text: link_Telegram,
          onPress: () => Linking.openURL (urlTelegramChannel) },

        { text: link_Googlelay,
          onPress: () => Linking.openURL (urlGooglePlay) },

        { text: link_AppStore,
          onPress: () => Linking.openURL (urlAppStore) }

      ]}>

       {feedbackText}

      </TextLink>

    </View>

  )

}


export default Feedback