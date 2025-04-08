// Component.


import { useThemes } from '../../../../../../Redux/Hooks/UseThemes'

import { View, Text } from 'react-native'


const Liner = ({text, style}) => {

  const [styles] = useThemes (styles => styles.ServersListPage.Main.Liner)


  return (

    <View style = {[{  // items container
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 42,
    marginTop: 28,
    gap: 17},
    style]}>

      <Text style = {{
      zIndex: 1,
      fontSize: 27,
      fontFamily: styles.fontFamily,
      color: styles.color,
      height: '100%',
      left: 36,
      paddingHorizontal: 8,
      backgroundColor: styles.backgroundColor}}>

        {text}

      </Text>

      <View style = {{  // crossline
      position: 'absolute',
      width: '100%',
      height: 1,
      bottom: 20,
      backgroundColor: styles.lineColor}}/>

    </View>


  )

}


export default Liner