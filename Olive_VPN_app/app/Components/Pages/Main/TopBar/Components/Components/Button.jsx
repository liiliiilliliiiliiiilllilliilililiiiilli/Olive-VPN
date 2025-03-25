import { useThemes } from '../../../../../../../Styles/Hooks/UseThemes'
import { View, TouchableOpacity, Image } from 'react-native'


const Button = ({pic, imageStyle, style, onPress}) => {

  const [styles] = useThemes (styles => styles.MainPage.Top.Button)


  return (

    <View style = {{
    justifyContent: 'center',
    alignItems: 'center',
    width: 38,
    height: 38,
    padding: 7,
    borderWidth: 3,
    borderRadius: 10,
    borderColor: styles.borderColor,
    backgroundColor: styles.backgroundColor,
    marginHorizontal: 6.25, 

    ...style}}>

      <TouchableOpacity  // touch field
      onPress = {onPress}
      style = {{
      zIndex: 1,
      position: 'absolute',
      width: 50,
      height: 50}}/>

      <Image
      source = {pic}
      style = {{
      width: 17,
      height: 17,

      ...imageStyle}}/>

    </View>

  )

}


export default Button