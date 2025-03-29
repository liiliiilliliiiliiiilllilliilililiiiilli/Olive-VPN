import { useThemes } from '../../../../../Styles/Hooks/UseThemes'
import { View, Text, Touchable, TouchableOpacity } from 'react-native'


let styles


const BottomBar = () => {

  [styles] = useThemes (styles => styles.MainPage.Bottom)


  const HandleTipPress = () => {
    
    console.info ('Metalink pressed!')

  }


  return (

    <View style = {{
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingTop: 28}}>

      <Tip onPress = {() => HandleTipPress()}/>

    </View>

  )

}


const Tip = ({onPress}) => {

  return (

    <TouchableOpacity
    onPress = {() => onPress()}
    style = {{
    justifyContent: 'center',
    width: '100%',
    height: 75,
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderTopWidth: 2,
    borderColor: styles.borderColor,
    backgroundColor: styles.backgroundColor}}>

      <Text style = {{
      fontFamily: styles.fontFamily,
      color: styles.color,
      fontSize: 17}}>

        <MetaLink>Подробнее</MetaLink> о приложении, которое созданно для обхода ограничений.

      </Text>

    </TouchableOpacity>

  )

}

const MetaLink = ({children}) => {

  return (

    <Text style = {{color: styles.metalinkColor}}>

      {children}

    </Text>

  )

}


export default BottomBar