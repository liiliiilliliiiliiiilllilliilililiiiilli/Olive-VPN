// Component.


import { useEffect, useState } from 'react'
import { useThemes } from '../../../../../../Styles/Hooks/UseThemes'

import Button from './Components/Button'


const ThemeSwitcher = ({onPress}) => {

  const [styles, theme] = useThemes (styles => styles.MainPage.Top.Button.ThemeSwitcher)
  const [themePic, setThemePic] = useState ()


  useEffect (() =>

    setThemePic (

      ['systemThemeLight', 'systemThemeDark'].includes(theme)
      
        ? styles.AutomaticThemeIcon_PNG
        : styles.ThemeIcon_PNG

    )

  , [theme])


  return (

    <Button
    onPress = {() => onPress()}
    pic = {themePic}
    style = {{borderRadius: 1000}}/>

  )

}


export default ThemeSwitcher