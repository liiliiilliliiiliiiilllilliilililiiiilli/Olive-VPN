// Component.


import { useThemes } from '../../../../../../Styles/Hooks/UseThemes'
import Button from './Components/Button'


const BackButton = ({onPress}) => {

	const [styles] = useThemes (styles => styles.ServersListPage.Top.BackButton)


	return (

		<Button
		onPress = {() => onPress()}
		pic = {styles.Arrow_PNG}
		style = {{borderRadius: 1000}}
		imageStyle = {{transform: [{rotate: '-180deg'}], right: 1.25}}/>

	)

}


export default BackButton