// This is language choose window.


import { useAppOpenedWindows } from '../../Redux/Hooks/OpenedWindows'
import { View } from 'react-native'
import Window from '../Components/Common/Window/Window'


const LanguageChoose = () => {

  // const [appLanguage, setAppLanguage] = useAppLanguage ()
  const [openedAppWindows, setAppOpenedWindows] = useAppOpenedWindows ()


  // this window existence code:

  const isOpened = openedAppWindows.includes ('LanguageChoose')

  const setReduxIsOpened = bool => {

    bool

      ? setAppOpenedWindows (prev => [...prev, 'LanguageChoose'])
      : setAppOpenedWindows (prev => prev.filter (el => el != 'LanguageChoose'))

  }

  // .


  const handleDonePress = () => {

    setReduxIsOpened (false)

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