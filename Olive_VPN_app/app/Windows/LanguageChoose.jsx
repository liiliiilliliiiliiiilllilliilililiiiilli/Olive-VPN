// This is app language choose window.


import { useAppOpenedWindows } from '../../Redux/Hooks/OpenedWindows'
import { View } from 'react-native'
import Window from '../Components/Common/Window/Window'


const LanguageChoose = () => {

  // const [appLanguage, setAppLanguage] = useAppLanguage ()
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
    title = 'Язык приложения'
    rightButton = {{
      text: 'Готово',
      onPress: () => handleDonePress()}}>

      <Content/>

    </Window>

  )

}


const Content = () => {

  return (

    <View style = {{
    width: 100,
    height: 100,
    backgroundColor: 'blue'}}/>

  )

}


export default LanguageChoose