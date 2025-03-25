import { useThemes } from '../../../../../../Styles/Hooks/UseThemes'
import Button from './Components/Button'


const MenuButton = ({onPress}) => {

	const [styles] = useThemes (styles => styles.MainPage.Top.Button.MenuButton)


	return (

		<Button
		onPress = {() => onPress()}
		pic = {styles.pic}/>

	)

}


export default MenuButton