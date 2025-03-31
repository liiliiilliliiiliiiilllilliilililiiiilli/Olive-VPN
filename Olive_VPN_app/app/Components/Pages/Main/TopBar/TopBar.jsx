// Component.


import { useThemes } from '../../../../../Styles/Hooks/UseThemes'
import { View } from 'react-native'

import MenuButton from './Components/MenuButton'
import OliveVpnTitle from './Components/OliveVpnTitle'
import ThemeSwitcher from './Components/ThemeSwitcher'


const TopBar = () => {

  const [styles, theme, setTheme] = useThemes (styles => styles.MainPage.Top)


  const HandleMenuButtonPressed = () => {

    console.info ('MenuButton pressed')

  }

  const HandleThemeSwitcherPressed = () => {

    setTheme ('next')

  }


  return (

    <View style = {{
    flexDirection: 'row',
    alignItems: 'center',
    height: 65.5,
    marginBottom: 28,
    paddingHorizontal: 18.5,
    borderBottomWidth: 2,
    borderColor: styles.borderColor,
    backgroundColor: styles.backgroundColor}}>
            
      <MenuButton
      style = {{opacity: 0}}  // temporal, this feature is for futher development
      onPress = {() => HandleMenuButtonPressed()}/>

      <OliveVpnTitle/>

      <ThemeSwitcher
      onPress = {() => HandleThemeSwitcherPressed()}/>

    </View>

  )

}


export default TopBar