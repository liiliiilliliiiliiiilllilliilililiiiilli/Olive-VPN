// Component.


import { useThemes } from '../../../../../../Styles/Hooks/UseThemes'
import Button from './Components/Button'


const ThemeSwitcher = ({onPress}) => {

  const [styles] = useThemes (styles => styles.MainPage.Top.Button.ThemeSwitcher)


  return (

    <Button
    onPress = {() => onPress()}
    pic = {styles.ThemeIcon_PNG}  // Light_PNG
    style = {{borderRadius: 1000}}/>

  )

}


export default ThemeSwitcher