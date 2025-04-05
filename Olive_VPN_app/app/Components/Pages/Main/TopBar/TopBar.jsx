// Component.


import { useEffect } from 'react'
import { useThemes } from '../../../../../Styles/Hooks/UseThemes'
import { useAppMainSlider } from '../../../../../Redux/Hooks/MainSlider'

import Animated, { useSharedValue, withTiming, Easing } from 'react-native-reanimated'

import MenuButton from './Components/MenuButton'
import OliveVpnTitle from './Components/OliveVpnTitle'
import ThemeSwitcher from './Components/ThemeSwitcher'


const TopBar = () => {

  const [styles, theme, setTheme] = useThemes (styles => styles.MainPage.Top)
  const [isAppMainSliderOpened, setAppIsMainSliderOpened] = useAppMainSlider ()

  const borderColorControl = useSharedValue (styles.borderColor)
  const backgroundColorControl = useSharedValue (styles.backgroundColor)

  const commonEasing = comEsng = Easing.inOut (Easing.quad)
  const themeAnimationDuration = thAnDu = 250


  const handleMenuButtonPressed = () => {

    setAppIsMainSliderOpened (true)

  }

  const handleThemeSwitcherPressed = () => {

    setTheme ('next')

  }


  useEffect (() => {

    borderColorControl.value = withTiming (styles.borderColor, {duration: thAnDu, easing: comEsng})
    backgroundColorControl.value = withTiming (styles.backgroundColor, {duration: thAnDu, easing: comEsng})

  }, [theme])


  return (

    <Animated.View style = {{
    flexDirection: 'row',
    alignItems: 'center',
    height: 65.5,
    marginBottom: 28,
    paddingHorizontal: 18.5,
    borderBottomWidth: 2,
    borderColor: borderColorControl,
    backgroundColor: backgroundColorControl}}>
            
      <MenuButton
      onPress = {() => handleMenuButtonPressed()}/>

      <OliveVpnTitle/>

      <ThemeSwitcher
      onPress = {() => handleThemeSwitcherPressed()}/>

    </Animated.View>

  )

}


export default TopBar