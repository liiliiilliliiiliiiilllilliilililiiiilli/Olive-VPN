// Component.


import { useThemes } from '../../../../../../Styles/Hooks/UseThemes'
import Button from './Components/Button'


const ThemeSwitcher = ({onPress}) => {

  const [styles, theme] = useThemes (styles => styles.MainPage.Top.Button.ThemeSwitcher)

  
  const isSystemTheme = ['systemThemeLight', 'systemThemeDark'].includes(theme)

  const themePic = isSystemTheme ? styles.AutomaticThemeIcon_PNG : styles.ThemeIcon_PNG
  const picMargin = isSystemTheme && 7.75


  return (

    <Button
    onPress = {() => onPress()}
    pic = {themePic}
    style = {{
    paddingBottom: picMargin,
    borderRadius: 1000}}/>

  )

}


export default ThemeSwitcher