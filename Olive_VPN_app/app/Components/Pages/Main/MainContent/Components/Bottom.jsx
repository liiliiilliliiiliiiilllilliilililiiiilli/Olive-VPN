// Component.


import NetInfo from '@react-native-community/netinfo'

import { useEffect, useState } from 'react'
import { useThemes } from '../../../../../../Redux/Hooks/UseThemes'
import { View } from 'react-native'
import Animated, { useSharedValue, withSequence, withTiming, Easing } from 'react-native-reanimated'


const Bottom = () => {

  const [styles, theme] = useThemes (styles => styles.MainPage.Main.Bottom)

  const [netInfoTextState, setNetInfoTextState] = useState ('')  // to redux later

  const colorControl = useSharedValue (styles.NetInfo.color)
  const opacityControl = useSharedValue (1)

  const commonEasing = comEsng = Easing.inOut (Easing.quad)
  const themeAnimationDuration = thAnDu = 250
  const switchAnimationDuration = swAnDu = 350


  // theme animations:

  useEffect (() =>

    colorControl.value = withTiming (styles.NetInfo.color, {duration: thAnDu, easing: comEsng})

  , [theme])

  // .


  // + switch animations:

  const setNetInfoText = text => {

    if (text != '') {

      if (netInfoTextState == '') {

        opacityControl.value = withSequence (withTiming (0, {duration: swAnDu}), withTiming (1, {duration: swAnDu}))
        setTimeout (() => setNetInfoTextState (text), swAnDu)

      }

      else {

        opacityControl.value = withSequence (withTiming (0, {duration: swAnDu}), withTiming (1, {duration: swAnDu}))
        setTimeout (() => setNetInfoTextState (text), swAnDu)

      }

    }

    else {

      opacityControl.value = withTiming (0, {duration: swAnDu})
      setTimeout (() => setNetInfoTextState (''), swAnDu)

    }

  }

  const subscribeNet = () => {

    return NetInfo.addEventListener (change => {

      if (change?.type == 'cellular' && change?.details?.cellularGeneration && change?.details?.carrier) {

        const cellularGeneration = {'5g': '5G', '4g': '4G', '3g': '3G', '2g': '2G'} [change.details.cellularGeneration]
        const carrier = change.details.carrier
        const richability = change.isInternetReachable ? 'Доступ в Интернет' : 'Без Интернета'

        setNetInfoText (`${cellularGeneration},  ${carrier},  ${richability}`)

      }

      else if (change?.type == 'wifi') {
      
        const richability = change?.isInternetReachable ? 'Доступ в Интернет' : 'Без Интернета'

        setNetInfoText (`WiFi,  ${richability}`)
      
      }

      else setNetInfoText ('Нет подключения')

    })

  }

  // .


  useEffect (() => {

    const unsubscribe = subscribeNet ()

    return () => {

      unsubscribe ()
      setNetInfoTextState ('')

    }

  }, [])


  return (

    <View style = {{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 18}}>

      <Animated.Text style = {{
      fontFamily: styles.NetInfo.fontFamily,
      color: colorControl,
      fontSize: 16,
      opacity: opacityControl}}>

        {netInfoTextState}

      </Animated.Text>

    </View>

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