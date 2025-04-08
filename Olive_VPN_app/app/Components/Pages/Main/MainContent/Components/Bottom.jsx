// Component.


import NetInfo from '@react-native-community/netinfo'

import { useState, useEffect } from 'react'
import { useThemes } from '../../../../../../Redux/Hooks/UseThemes'
import { useAppLanguage } from '../../../../../../Redux/Hooks/AppLanguage'

import { View } from 'react-native'

import Animated, { useSharedValue, withSequence, withTiming, Easing } from 'react-native-reanimated'


const Bottom = () => {

  const [styles, theme] = useThemes (styles => styles.MainPage.Main.Bottom)
  const [texts, appLanguage] = useAppLanguage (texts => texts.MainPage.Main.Bottom)


  const access_to_internet_TXT = texts.access_to_internet
  const no_access_to_internet_TXT = texts.no_access_to_internet
  const no_connection_TXT = texts.no_connection


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


  const subscribeNet = (texts) => {

    NetInfo.fetch().then(state => {

      if (state?.type == 'cellular' && state?.details?.cellularGeneration && state?.details?.carrier) {

        let cellularGeneration = {'5g': '5G', '4g': '4G', '3g': '3G', '2g': '2G'} [state.details.cellularGeneration]
        let carrier = state.details.carrier
        let richability = state.isInternetReachable ? access_to_internet_TXT : no_access_to_internet_TXT

        setNetInfoText (`${cellularGeneration},  ${carrier},  ${richability}`)

      }

      else if (state?.type == 'wifi') {
      
        let richability = state?.isInternetReachable ? access_to_internet_TXT : no_access_to_internet_TXT

        setNetInfoText (`WiFi,  ${richability}`)
      
      }

      else setNetInfoText (no_connection_TXT)

    })


    return NetInfo.addEventListener (change => {

      if (change?.type == 'cellular' && change?.details?.cellularGeneration && change?.details?.carrier) {

        let cellularGeneration = {'5g': '5G', '4g': '4G', '3g': '3G', '2g': '2G'} [change.details.cellularGeneration]
        let carrier = change.details.carrier
        let richability = change.isInternetReachable ? access_to_internet_TXT : no_access_to_internet_TXT

        setNetInfoText (`${cellularGeneration},  ${carrier},  ${richability}`)

      }

      else if (change?.type == 'wifi') {

        let richability = change?.isInternetReachable ? access_to_internet_TXT : no_access_to_internet_TXT

        setNetInfoText (`WiFi,  ${richability}`)
      
      }

      else setNetInfoText (no_connection_TXT)

    })

  }

  // .


  useEffect (() => {

    const unsubscribe = subscribeNet (texts)

    return () => {

      unsubscribe ()
      setNetInfoTextState ('')

    }

  }, [appLanguage])


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