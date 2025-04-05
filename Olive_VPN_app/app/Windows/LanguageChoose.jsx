// This is language choose window.


import { useAppOpenedWindows } from '../../Redux/Hooks/OpenedWindows'

import { ScrollView, View } from 'react-native'

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
    title = 'Язык приложения'
    rightButton = {{
    text: 'Готово',
    onPress: () => handleDonePress()}}>

      <ScrollView
      showsVerticalScrollIndicator = {false}
      showsHorizontalScrollIndicator = {false}
      style = {{
      width: '100%',
      height: '100%',
      paddingHorizontal: 25}}>
  
        <View style = {{}}>
        </View>

      </ScrollView>

    </Window>

  )

}


export default LanguageChoose