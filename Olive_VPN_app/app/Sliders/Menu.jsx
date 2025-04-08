// This is Main Page menu slider.


import { useState, useEffect } from 'react'
import { useThemes } from '../../Redux/Hooks/UseThemes'
import { useAppLanguage } from '../../Redux/Hooks/AppLanguage'
import { useAppMenuSlider } from '../../Redux/Hooks/MenuSlider'
import { useAppOpenedWindows } from '../../Redux/Hooks/OpenedWindows'
import { useAppAutoVpnToggle } from '../../Redux/Hooks/AppAutoVpnToggle'

import { View, TouchableOpacity, Image, Text } from 'react-native'

import Animated, { useSharedValue, withTiming } from 'react-native-reanimated'

const AnimatedTouchableOpacity = Animated.createAnimatedComponent (TouchableOpacity)


const Menu = () => {

  const [isAppMenuSliderOpened, setIsAppMenuSliderOpened] = useAppMenuSlider ()


  const [doesAppears, setDoesAppears] = useState (false)

  const opacityControl = useSharedValue (0)
  const marginControl = useSharedValue (-350)


  const performOpening = () => {

    setDoesAppears (true)

    opacityControl.value = withTiming (1, {duration: 120})
    marginControl.value = withTiming (-50, {duration: 120})

  }

  const performClosing = () => {

    opacityControl.value = withTiming (0, {duration: 120})
    marginControl.value = withTiming (-350, {duration: 120})

    setTimeout (() => {setDoesAppears (false); setIsAppMenuSliderOpened (false)}, 120)

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
          height: '400%',
          opacity: opacityControl}}/>

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
      boxShadow: '15px 0px 25px rgba(3, 10, 1, 0.5)'}}>
    
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

    const handlePress = () => {

      setAppOpenedWindows (prev => [...prev, 'LanguageChoose'])
      performClosing ()

    }


    return (

      <TouchableOpacity
      onPress = {() => handlePress()}
      style = {{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 8,
      paddingHorizontal: 23}}>

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

      </TouchableOpacity>

    )

  }

  const FeedbackButton = () => {

    const handlePress = () => {

      setAppOpenedWindows (prev => [...prev, 'Feedback'])
      performClosing ()

    }


    return (

      <TouchableOpacity
      onPress = {() => handlePress()}
      style = {{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 8,
      paddingHorizontal: 23}}>

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

      </TouchableOpacity>

    )

  }

  const AutoVpnToggler = ({style}) => {

    const [isAutoVpnOn, setIsAutoVpnOn] = useAppAutoVpnToggle ()


    const Toggler = () => {

      const [togglerBorderColor, togglerBackgroundColor] = isAutoVpnOn

        ? [ styles.AutoVpnToggler.Toggler.borderColor_Chosen,
            styles.AutoVpnToggler.Toggler.backgroundColor_Chosen ]

        : [ styles.AutoVpnToggler.Toggler.borderColor_Unchosen,
            styles.AutoVpnToggler.Toggler.backgroundColor_Unchosen ]

      const togglerPicOpacity = isAutoVpnOn ? 1 : 0


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

          <Image
          source = {styles.AutoVpnToggler.Toggler.Done_PNG}
          style = {{
          width: 16,
          height: 16,
          opacity: togglerPicOpacity}}/>

        </View>

      )

    }


    return (

      <TouchableOpacity
      onPress = {() => setIsAutoVpnOn (!isAutoVpnOn)}
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

        <View style = {{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10}}>

          <Text style = {{
          flex: 1,
          fontFamily: styles.AutoVpnToggler.fontFamily,
          color: styles.AutoVpnToggler.color,
          fontSize: 17}}>

            {connection_to_vpn_on_app_launch_TXT}

          </Text>

          <Toggler/>

        </View>

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