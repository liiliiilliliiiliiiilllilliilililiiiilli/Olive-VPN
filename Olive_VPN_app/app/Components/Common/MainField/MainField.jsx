// Component.


import { useThemes } from '../../../../Styles/Hooks/UseThemes'
import { View, Image } from 'react-native'
import { StatusBar } from 'react-native'


const MainField = ({style, children}) => {

  const [styles] = useThemes ()


  return (

    <View style = {{
    width: '100%',
    height: '100%',
    backgroundColor: styles.MainField.backgroundColor,

    ...style}}>

      <StatusBar
      animated = {true}
      backgroundColor = {styles.StatusBar.backgroundColor}/>

      <Image
      source = {styles._General_.ColorfulBackgroundImage_PNG}
      style = {{
      zIndex: 0,
      position: 'absolute',
      opacity: 0.5}}/>

      {children}

    </View>

  )

}


export default MainField