// Component.


import { useThemes } from '../../../../Styles/Hooks/UseThemes'
import { View, Image, Dimensions } from 'react-native'
import { StatusBar } from 'react-native'


const MainField = ({style, children}) => {

  const [styles] = useThemes ()

  let windowWidth = Dimensions.get('window').width
  let windowHeight = Dimensions.get('window').height


  return (

    <View style = {{
    width: '100%',
    height: '100%',
    backgroundColor: styles.MainField.backgroundColor,

    ...style}}>

      <StatusBar
      animated = {true}
      backgroundColor = {styles.StatusBar.backgroundColor}
      barStyle = {styles.StatusBar.color}/>

      <Image
      source = {styles._General_.ColorfulBackgroundImage_PNG}
      style = {{
      zIndex: 0,
      position: 'absolute',
      width: windowWidth,
      height: windowHeight,
      resizeMode: 'stretch',
      transform: styles._General_.backgroundTransform,
      opacity: 0.5}}/>

      {children}

    </View>

  )

}


export default MainField