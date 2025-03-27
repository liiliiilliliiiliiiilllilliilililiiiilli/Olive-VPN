// Component.


import { useThemes } from '../../../../../../Styles/Hooks/UseThemes'
import Button from './Components/Button'


const MenuButton = ({onPress, style}) => {

	const [styles] = useThemes (styles => styles.MainPage.Top.Button.MenuButton)


	return (

		<Button
		onPress = {() => onPress()}
		pic = {styles.Menu_PNG}
		style = {{...style}}/>

	)

}


export default MenuButton