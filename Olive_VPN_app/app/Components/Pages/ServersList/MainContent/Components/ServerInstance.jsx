// Component.


import { useThemes } from '../../../../../../Redux/Hooks/UseThemes'

import { View, TouchableOpacity, Image, Text } from 'react-native'


const ServerInstance = ({pic, title, availability, isChosen, style}) => {

  const [styles, theme] = useThemes (styles => styles.ServersListPage.Main.ServerInstance)


  return (

    <View style = {[{  // items container
    width: '100%',
    marginBottom: 8,
    paddingVertical: 5,
    paddingHorizontal: 5,
    backgroundColor: '#000000',
    opacity: availability ? 1 : 0.5,
    pointerEvents: availability != 0 && !isChosen ? 'auto' : 'none'},
    style]}>

      <TouchableOpacity
      onPress = {() => {}}
      style = {{
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      height: 75,
      width: 'auto',
      gap: 21,
      paddingHorizontal: 21,
      borderRadius: 16,
      borderWidth: 2,
      borderColor: isChosen ? 'darkgreen' : '',
      backgroundColor: '#101010'}}>

        <Image
        source = {pic}
        style = {{
        width: 42,
        height: 42,
        borderColor: '#606060',
        borderWidth: 2,
        borderRadius: 1000}}/>

        <Text style = {{
        fontFamily: 'Arimo-SemiBold',
        color: '#f2f2f2',
        fontSize: 17}}>

          {title}

        </Text>

        <View style = {{
        width: 8,
        height: 8,
        marginLeft: 'auto',
        marginRight: 14,
        borderRadius: 1000,
        backgroundColor: {1: 'lightgreen', 0.5: 'yellow', 0: 'darkred'} [availability]}}/>

      </TouchableOpacity>

    </View>


  )

}


export default ServerInstance





{/* <Text style = {{
zIndex: 1,
fontSize: 27,
fontFamily: 'Archivo-SemiBold',
color: '#f2f2f2',
height: '100%',
left: 36,
paddingHorizontal: 8,
backgroundColor: 'black'}}>

  3 онлайн

</Text>

<View style = {{  // crossline
position: 'absolute',
width: '100%',
height: 1,
bottom: 20,
backgroundColor: 'rgba(44, 44, 44, 1)'}}/> */}