// Component.


import { useThemes } from '../../../../../../Redux/Hooks/UseThemes'

import Button from './Components/Button'


const MenuButton = ({onPress}) => {

	const [styles] = useThemes (styles => styles.MainPage.Top.Button.MenuButton)


	return (

		<Button
		onPress = {() => onPress()}
		pic = {styles.Menu_PNG}
		style = {{
			transform: [{scale: 0.5}]
		}}/>

	)

}


export default MenuButton