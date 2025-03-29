// Component.


import { useThemes } from '../../../../Styles/Hooks/UseThemes'
import { StatusBar, View, Image } from 'react-native'
import { Dimensions } from 'react-native'


const MainField = ({style, children}) => {

  const [styles] = useThemes ()


  const windowWidth = Dimensions.get('window').width  // should it be under triggering ?
  const windowHeight = Dimensions.get('window').height  // should it be under triggering ?


  return (

    <View style = {{
    width: '100%',
    height: '100%',
    backgroundColor: styles.MainField.backgroundColor,
    ...style}}>

      <StatusBar
      animated = {true}
      translucent = {false}  // temporal
      backgroundColor = {styles.StatusBar.backgroundColor}
      barStyle = {styles.StatusBar.color}/>

      <Image
      source = {styles._Other_.ColorfulBackground_PNG}
      style = {{
      zIndex: 0,
      position: 'absolute',
      width: windowWidth,
      height: windowHeight,
      resizeMode: 'stretch',
      transform: styles._Other_.backgroundTransform,
      opacity: 0.5}}/>

      {children}

    </View>

  )

}


export default MainField