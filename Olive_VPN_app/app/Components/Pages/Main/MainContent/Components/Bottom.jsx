// Component.


import NetInfo from '@react-native-community/netinfo'

import { useEffect, useState } from 'react'
import { useThemes } from '../../../../../../Styles/Hooks/UseThemes'
import { View } from 'react-native'

import Animated, { Easing, useSharedValue, withSequence, withTiming } from 'react-native-reanimated'

// const AnimatedTouchableOpacity = Animated.createAnimatedComponent (TouchableOpacity)


let styles, theme


const Bottom = () => {

  [styles, theme] = useThemes (styles => styles.MainPage.Main.Bottom)
  
  // const [manageNetButtonText, setManageNetButtonText] = useState ('Расширить сеть')  // to redux later
  

  // const HandleNetButtonPress = () => {

  //   console.info ('Expand the network')

  // }


  return (

    <View style = {{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 18}}>

      {/* <ManageNetButton
      text = {manageNetButtonText}
      onPress = {() => HandleNetButtonPress()}/> */}

      <NetInfoComponent/>

    </View>

  )

}


// const ManageNetButton = ({text, onPress}) => {

//   // animations:
  
//   const scaleControl = useSharedValue (1)
//   const opacityControl = useSharedValue (1)

//   const animationStyles = useAnimatedStyle (() => {

//     return {

//       transform: [{scale: scaleControl.value}],
//       opacity: opacityControl.value

//     }

//   })


//   const animationDuration = 95

//   const handlePressIn = () => {

//     scaleControl.value = withTiming (0.9575, {duration: animationDuration})
//     opacityControl.value = withTiming (0.5, {duration: animationDuration})

//   }

//   const handlePressOut = () => {

//     scaleControl.value = withTiming (1, {duration: animationDuration})
//     opacityControl.value = withTiming (1, {duration: animationDuration})

//   }

//   // .


//   const handlePress = () => {

//     onPress ()

//   }


//   return (

//     <AnimatedTouchableOpacity
//     activeOpacity = {1}
//     onPressIn = {() => handlePressIn()}
//     onPressOut = {() => handlePressOut()}
//     onPress = {() => handlePress()}
//     style = {[{
//     padding: 5,
//     margin: -5,
//     borderRadius: 1000},
//     animationStyles]}>

//       <View style = {{
//       flexDirection: 'row',
//       alignItems: 'center',
//       gap: 10,
//       paddingTop: 7.5,
//       paddingBottom: 7,
//       paddingHorizontal: 15,
//       borderWidth: 2,
//       borderRadius: 1000,
//       borderColor: styles.ManageNetButton.borderColor,
//       backgroundColor: styles.ManageNetButton.backgroundColor}}>

//         <Text style = {{
//         fontFamily: styles.ManageNetButton.fontFamily,
//         color: styles.ManageNetButton.color,
//         fontSize: 16}}>

//           {text}

//         </Text>

//         <Image
//         source = {styles.ManageNetButton.MagicWand_PNG}
//         style = {{
//         width: 17,
//         height: 17}}/>

//       </View>

//     </AnimatedTouchableOpacity>

//   )

// }

const NetInfoComponent = () => {

  const [netInfoTextState, setNetInfoTextState] = useState ('')  // to redux later


  const colorControl = useSharedValue (styles.NetInfo.color)

  const opacityControl = useSharedValue (1)


  useEffect (() => {

    colorControl.value = withTiming (styles.NetInfo.color, {duration: 250, easing: Easing.inOut(Easing.quad)})

  }, [theme])


  const setNetInfoText = text => {

    if (text != '') {

      if (netInfoTextState == '') {

        setTimeout (() => setNetInfoTextState (text), 350)
        opacityControl.value = withSequence (withTiming (0, {duration: 350}), withTiming (1, {duration: 350}))

      }

      else {

        setTimeout (() => setNetInfoTextState (text), 350)
        opacityControl.value = withSequence (withTiming (0, {duration: 350}), withTiming (1, {duration: 350}))

      }

    }

    else {

      opacityControl.value = withTiming (0, {duration: 350})
      setTimeout (() => setNetInfoTextState (''), 350)

    }

  }

  const subscribeNet = () => {

    return NetInfo.addEventListener (async change => {

      if (change.type == 'cellular' && change?.details?.cellularGeneration && change?.details?.carrier) {

        const cellularGeneration = {'5g': '5G', '4g': '4G', '3g': '3G', '2g': '2G'} [change?.details?.cellularGeneration]
        const carrier = change.details.carrier
        const richability = change.isInternetReachable ? 'Доступ в Интернет' : 'Без Интернета'

        setNetInfoText (`${cellularGeneration},  ${carrier},  ${richability}`)

      }

      else if (change.type == 'wifi') {
      
        const richability = change.isInternetReachable ? 'Доступ в Интернет' : 'Без Интернета'
        setNetInfoText (`WiFi,  ${richability}`)
      
      }

      else setNetInfoText ('Нет подключения')

    })

  }


  useEffect (() => {

    const unsubscribe = subscribeNet ()

    return () => {

      unsubscribe ()
      setNetInfoTextState ('')

    }

  }, [])
  

  return (

    <Animated.Text style = {{
    fontFamily: styles.NetInfo.fontFamily,
    color: colorControl,
    fontSize: 16,
    opacity: opacityControl}}>

      {netInfoTextState}

    </Animated.Text>

  )

}


export default Bottom





// {
//   "details": null,
//   "isConnected": null,
//   "isInternetReachable": null,
//   "type": "unknown"
// }

// {
//   "details": {
//     "bssid": "02:00:00:00:00:00",
//     "frequency": 5240,
//     "ipAddress": "192.168.0.198",
//     "isConnectionExpensive": false,
//     "linkSpeed": 351,
//     "rxLinkSpeed": 390,
//     "strength": 94,
//     "subnet": "255.255.255.0",
//     "txLinkSpeed": 351
//   },
//   "isConnected": true,
//   "isInternetReachable": true,
//   "isWifiEnabled": true,
//   "type": "wifi"
// }

// {
//   "details": {
//     "carrier": "MegaFon",
//     "cellularGeneration": "4g",
//     "isConnectionExpensive": true
//   },
//   "isConnected": true,
//   "isInternetReachable": true,
//   "isWifiEnabled": false,
//   "type": "cellular"
// }