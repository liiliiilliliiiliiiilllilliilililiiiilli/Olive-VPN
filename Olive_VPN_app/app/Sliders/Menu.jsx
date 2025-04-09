// This is Main Page menu slider.


import { useState, useEffect } from 'react'
import { useThemes } from '../../Redux/Hooks/UseThemes'
import { useAppLanguage } from '../../Redux/Hooks/AppLanguage'
import { useAppMenuSlider } from '../../Redux/Hooks/MenuSlider'
import { useAppOpenedWindows } from '../../Redux/Hooks/OpenedWindows'
import { useAppAutoVpnToggle } from '../../Redux/Hooks/AppAutoVpnToggle'

import { View, TouchableOpacity, Image, Text } from 'react-native'

import Animated, { Easing, useSharedValue, withDelay, withSequence, withTiming } from 'react-native-reanimated'

const AnimatedTouchableOpacity = Animated.createAnimatedComponent (TouchableOpacity)


const Menu = () => {

  const [isAppMenuSliderOpened, setIsAppMenuSliderOpened] = useAppMenuSlider ()


  const [doesAppears, setDoesAppears] = useState (false)

  const marginControl = useSharedValue (-350)


  const performOpening = () => {

    setDoesAppears (true)

    marginControl.value = withTiming (-50, {duration: 120})

  }

  const performClosing = () => {

    marginControl.value = withTiming (-350, {duration: 150})

    setTimeout (() => {setDoesAppears (false); setIsAppMenuSliderOpened (false)}, 150 + 25)

  }


  const handleShadowPress = () => {

    setIsAppMenuSliderOpened (false)

  }


  useEffect (() =>

    isAppMenuSliderOpened

      ? performOpening ()
      : performClosing ()

  , [isAppMenuSliderOpened])


  return (

    <>
    
      {doesAppears ?
      
        <View style = {{
        position: 'absolute',
        width: '100%',
        height: '100%'}}>

          <AnimatedTouchableOpacity  // shadow touch
          activeOpacity = {1}
          onPress = {() => handleShadowPress()}
          style = {{
          position: 'absolute',
          width: '400%',
          height: '400%'}}/>

          <SliderBlock
          margin = {marginControl}
          performClosing = {handleShadowPress}/>

        </View>

      : null}

    </>

  )

}


const SliderBlock = ({margin, performClosing}) => {

  const [styles] = useThemes (styles => styles.MenuSlider)
  const [texts] = useAppLanguage (texts => texts.MenuSlider)


  const [appOpenedWindows, setAppOpenedWindows] = useAppOpenedWindows ()
  const [isAppMenuSliderOpened, setIsAppMenuSliderOpened] = useAppMenuSlider ()


  const menu_TXT = texts.Skeleton.menu
  const language_TXT = texts.LanguageButton.language
  const language_value_TXT = texts.LanguageButton.language_value
  const feedback_TXT = texts.FeedbackButton.feedback
  const connection_to_vpn_on_app_launch_TXT = texts.AutoVpnToggler.connection_to_vpn_on_app_launch
  // const _TXT = ''


  const Skeleton = ({children}) => {

    return (

      <Animated.View style = {{
      position: 'absolute',
      width: 300,
      height: '100%',
      left: margin,  // animation
      gap: 12,
      backgroundColor: styles.Skeleton.backgroundColor,
      boxShadow: '15px 0px 25px rgba(3, 10, 1, 0.33)',
      }}>
    
        <View style = {{
        marginBottom: 1,
        paddingTop: 17.5,
        paddingLeft: 32,
        paddingBottom: 7.5,
        borderBottomWidth: 2,
        borderBottomColor: styles.Skeleton.Top.borderBottomColor,
        backgroundColor: styles.Skeleton.Top.backgroundColor}}>
  
          <Text style = {{
          fontFamily: styles.Skeleton.Top.fontFamily,
          color: styles.Skeleton.Top.color,
          fontSize: 25}}>
  
            {menu_TXT}
  
          </Text>
  
        </View>

        {children}
  
      </Animated.View>

    )

  }

  const Separator = () => {

    return (

      <View style = {{
      height: 2,
      marginHorizontal: 23,
      borderRadius: 8,
      backgroundColor: styles.Separator.backgroundColor}}/>

    )

  }

  const LanguageButton = () => {

    const scaleControl = useSharedValue (1)
    const marginControl = useSharedValue (0)
    const opacityControl = useSharedValue (1)


    const commonEasing = comEsng = Easing.inOut (Easing.quad)
    const animationDuration = AnDu = 95


    const handlePressIn = () => {

      scaleControl.value = withTiming (0.975, {duration: AnDu, easing: comEsng})
      marginControl.value = withTiming (0.5, {duration: AnDu, easing: comEsng})
      opacityControl.value = withTiming (0.5, {duration: AnDu, easing: comEsng})

    }

    const handlePressOut = () => {

      scaleControl.value = withTiming (1, {duration: AnDu, easing: comEsng})
      marginControl.value = withTiming (0, {duration: AnDu, easing: comEsng})
      opacityControl.value = withTiming (1, {duration: AnDu, easing: comEsng})

    }

    const handlePress = () => {

      scaleControl.value = withSequence (withTiming (0.975, {duration: AnDu, easing: comEsng}), withTiming (1, {duration: AnDu, easing: comEsng}))
      marginControl.value = withSequence (withTiming (0.5, {duration: AnDu, easing: comEsng}), withTiming (0, {duration: AnDu, easing: comEsng}))
      opacityControl.value = withSequence (withTiming (0.5, {duration: AnDu, easing: comEsng}), withTiming (1, {duration: AnDu, easing: comEsng}))

      setTimeout (() => {

        setAppOpenedWindows (prev => [...prev, 'LanguageChoose'])
        performClosing ()  

      }, AnDu / 1.5)

    }


    return (

      <TouchableOpacity
      activeOpacity = {1}
      onPressIn = {() => handlePressIn()}
      onPressOut = {() => handlePressOut()}
      onPress = {() => handlePress()}
      style = {{
      paddingVertical: 8,
      paddingHorizontal: 23}}>

        <Animated.View style = {{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        bottom: marginControl,
        opacity: opacityControl,
        transform: [{scale: scaleControl}]}}>

          <Image
          source = {styles.LanguageButton.Planet_PNG}
          style = {{
          width: 19,
          height: 19,
          bottom: 0.75,
          right: 0.25,
          marginRight: 14,}}/>

          <Text style = {{
          marginRight: 'auto',
          fontFamily: styles.LanguageButton.fontFamily_language,
          color: styles.LanguageButton.color_language,
          fontSize: 18}}>

            {language_TXT}

          </Text>

          <Text style = {{
          fontFamily: styles.LanguageButton.fontFamily_language_value,
          color: styles.LanguageButton.color_language_value,
          fontSize: 18}}>

            {language_value_TXT}

          </Text>

        </Animated.View>

      </TouchableOpacity>

    )

  }

  const FeedbackButton = () => {

    const scaleControl = useSharedValue (1)
    const marginControl = useSharedValue (0)
    const opacityControl = useSharedValue (1)


    const commonEasing = comEsng = Easing.inOut (Easing.quad)
    const animationDuration = AnDu = 95


    const handlePressIn = () => {

      scaleControl.value = withTiming (0.975, {duration: AnDu, easing: comEsng})
      marginControl.value = withTiming (0.5, {duration: AnDu, easing: comEsng})
      opacityControl.value = withTiming (0.5, {duration: AnDu, easing: comEsng})

    }

    const handlePressOut = () => {

      scaleControl.value = withTiming (1, {duration: AnDu, easing: comEsng})
      marginControl.value = withTiming (0, {duration: AnDu, easing: comEsng})
      opacityControl.value = withTiming (1, {duration: AnDu, easing: comEsng})

    }

    const handlePress = () => {

      scaleControl.value = withSequence (withTiming (0.975, {duration: AnDu, easing: comEsng}), withTiming (1, {duration: AnDu, easing: comEsng}))
      marginControl.value = withSequence (withTiming (0.5, {duration: AnDu, easing: comEsng}), withTiming (0, {duration: AnDu, easing: comEsng}))
      opacityControl.value = withSequence (withTiming (0.5, {duration: AnDu, easing: comEsng}), withTiming (1, {duration: AnDu, easing: comEsng}))

      setTimeout (() => {

        setAppOpenedWindows (prev => [...prev, 'Feedback'])
        performClosing ()      

      }, AnDu / 1.5)

    }


    return (

      <TouchableOpacity
      activeOpacity = {1}
      onPressIn = {() => handlePressIn()}
      onPressOut = {() => handlePressOut()}
      onPress = {() => handlePress()}
      style = {{
      paddingVertical: 8,
      paddingHorizontal: 23}}>

        <Animated.View style = {{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        bottom: marginControl,
        opacity: opacityControl,
        transform: [{scale: scaleControl}]}}>

          <View style = {{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 14}}>

            <Image
            source = {styles.FeedbackButton.Info_PNG}
            style = {{
            width: 19,
            height: 19,
            bottom: 0.75,
            right: 0.25}}/>

            <Text style = {{
            fontFamily: styles.FeedbackButton.fontFamily,
            color: styles.FeedbackButton.color,
            fontSize: 18}}>

              {feedback_TXT}

            </Text>

          </View>

          <Image
          source = {styles.FeedbackButton.Arrow_PNG}
          style = {{
          width: 14,
          height: 14,
          top: 0.25,
          right: 0.25}}/>

        </Animated.View>

      </TouchableOpacity>

    )

  }

  const AutoVpnToggler = ({style}) => {

    const [isAutoVpnOn, setIsAutoVpnOn] = useAppAutoVpnToggle ()

    const scaleControl = useSharedValue (1)
    const marginControl = useSharedValue (0)
    const opacityControl = useSharedValue (1)

    const picOpacityControl = useSharedValue (isAutoVpnOn ? 1 : 0)


    const commonEasing = comEsng = Easing.inOut (Easing.quad)
    const animationDuration = AnDu = 95


    const Toggler = () => {

      const [togglerBorderColor, togglerBackgroundColor] = isAutoVpnOn

        ? [ styles.AutoVpnToggler.Toggler.borderColor_Chosen,
            styles.AutoVpnToggler.Toggler.backgroundColor_Chosen ]

        : [ styles.AutoVpnToggler.Toggler.borderColor_Unchosen,
            styles.AutoVpnToggler.Toggler.backgroundColor_Unchosen ]


      return (

        <View style = {{
        justifyContent: 'center',
        alignItems: 'center',
        width: 25,
        height: 25,
        borderWidth: 2,
        borderRadius: 4,
        borderColor: togglerBorderColor,
        backgroundColor: togglerBackgroundColor}}>

          <Animated.Image
          source = {styles.AutoVpnToggler.Toggler.Done_PNG}
          style = {{
          width: 13,
          height: 13,
          opacity: picOpacityControl}}/>

        </View>

      )

    }


    const handlePressIn = () => {

      scaleControl.value = withTiming (0.975, {duration: AnDu, easing: comEsng})
      marginControl.value = withTiming (0.5, {duration: AnDu, easing: comEsng})
      opacityControl.value = withTiming (0.5, {duration: AnDu, easing: comEsng})

    }

    const handlePressOut = () => {

      scaleControl.value = withTiming (1, {duration: AnDu, easing: comEsng})
      marginControl.value = withTiming (0, {duration: AnDu, easing: comEsng})
      opacityControl.value = withTiming (1, {duration: AnDu, easing: comEsng})

    }

    const handlePress = () => {

      scaleControl.value = withSequence (withTiming (0.975, {duration: AnDu, easing: comEsng}), withTiming (1, {duration: AnDu, easing: comEsng}))
      marginControl.value = withSequence (withTiming (0.5, {duration: AnDu, easing: comEsng}), withTiming (0, {duration: AnDu, easing: comEsng}))
      opacityControl.value = withSequence (withTiming (0.5, {duration: AnDu, easing: comEsng}), withTiming (1, {duration: AnDu, easing: comEsng}))

      setTimeout (() => picOpacityControl.value = withTiming (isAutoVpnOn ? 0 : 1, {duration: AnDu / 4, easing: comEsng}), AnDu / 1.5)

      setTimeout (() => setIsAutoVpnOn (!isAutoVpnOn), AnDu / 1.5)

    }


    return (

      <TouchableOpacity
      activeOpacity = {1}
      onPressIn = {() => handlePressIn()}
      onPressOut = {() => handlePressOut()}
      onPress = {() => handlePress()}
      style = {[{
      height: 75,
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 8,
      paddingHorizontal: 23,
      borderTopWidth: 2,
      borderTopColor: styles.AutoVpnToggler.borderTopColor,
      backgroundColor: styles.AutoVpnToggler.backgroundColor},
      style]}>

        <Animated.View style = {{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
        bottom: marginControl,
        opacity: opacityControl,
        transform: [{scale: scaleControl}]}}>

          <Text style = {{
          flex: 1,
          fontFamily: styles.AutoVpnToggler.fontFamily,
          color: styles.AutoVpnToggler.color,
          fontSize: 17}}>

            {connection_to_vpn_on_app_launch_TXT}

          </Text>

          <Toggler/>

        </Animated.View>

      </TouchableOpacity>

    )

  }


  return (

    <Skeleton>

      <LanguageButton/>
      <Separator/>
      <FeedbackButton/>
      <AutoVpnToggler style = {{marginTop: 'auto'}}/>

    </Skeleton>

  )

}


export default Menu