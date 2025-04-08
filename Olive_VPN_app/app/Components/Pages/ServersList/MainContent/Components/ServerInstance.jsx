// Component.


import { useThemes } from '../../../../../../Redux/Hooks/UseThemes'

import { View, TouchableOpacity, Image, Text } from 'react-native'


const ServerInstance = ({pic, title, availability, isChosen, style}) => {

  const [styles] = useThemes (styles => styles.ServersListPage.Main.ServerInstance)


  return (

    <View style = {[{  // items container
    width: '100%',
    marginBottom: 8,
    paddingVertical: 2.5,
    paddingHorizontal: 5,
    backgroundColor: styles.backgroundColor,
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
      borderColor: isChosen ? styles.Block.borderColor_Chosen : styles.Block.borderColor_Unchosen,
      backgroundColor: styles.Block.backgroundColor}}>

        <View style = {{
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: 42,
        height: 42,
        borderWidth: 2,
        borderColor: styles.Block.Pic.borderColor,
        borderRadius: 1000}}>

          <Image
          source = {pic}
          style = {{
          width: 38,
          height: 38,
          borderWidth: 2,
          borderRadius: 1000}}/>

        </View>


        <Text style = {{
        fontFamily: styles.Block.fontFamily,
        color: styles.Block.color,
        fontSize: 17}}>

          {title}

        </Text>

        <View style = {{
        width: 8,
        height: 8,
        marginLeft: 'auto',
        marginRight: 14,
        borderRadius: 1000,
        backgroundColor: {1: styles.Block.PilStatus.color_1, 0.5: styles.Block.PilStatus.color_2, 0: styles.Block.PilStatus.color_3} [availability]}}/>

      </TouchableOpacity>

    </View>


  )

}


export default ServerInstance