// Component.


import { useState, useEffect } from 'react'
import { useThemes } from '../../../../Redux/Hooks/UseThemes'

import { View, TouchableOpacity, Text } from 'react-native'

import Animated, { useSharedValue, withSequence, withTiming, Easing } from 'react-native-reanimated'


const Window = ({isOpened, closeSelf, title, leftButton, rightButton, centerButton, style, children}) => {

  const [styles] = useThemes (styles => styles.Shadow)
  
  const [doesAppears, setDdoesAppears] = useState (isOpened)

  const opacityControl = useSharedValue (0)
  const scaleControl = useSharedValue (0.975)


  const commonEasing = comEsng = Easing.inOut (Easing.quad)


  const handleShadowPress = () => {

    closeSelf ()

  }


  const performOpening = () => {

    setDdoesAppears (true)

    opacityControl.value = withTiming (1, {duration: 120, easing: comEsng})
    scaleControl.value = withTiming (1, {duration: 120, easing: comEsng})

  }

  const performClosing = () => {

    opacityControl.value = withTiming (0, {duration: 120, easing: comEsng})
    scaleControl.value = withTiming (0.975, {duration: 120, easing: comEsng})

    setTimeout (() => setDdoesAppears (false), 120)

  }


  useEffect (() =>

    isOpened

      ? performOpening ()
      : performClosing ()

  , [isOpened])


  return (

    <>

      {doesAppears ?

        <Animated.View style = {{
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        opacity: opacityControl,
        transform: [{scale: scaleControl}]}}>

          <TouchableOpacity
          activeOpacity = {1}
          onPress = {() => handleShadowPress()}
          style = {{
          position: 'absolute',
          width: '150%',
          height: '150%',
          backgroundColor: styles.backgroundColor}}/>

          <WindowBlock
          title = {title}
          leftButton = {leftButton}
          rightButton = {rightButton}
          centerButton = {centerButton}
          style = {style}>

            {children}

          </WindowBlock>

        </Animated.View>

      : null}

    </>

  )

}


const WindowBlock = ({title, leftButton, rightButton, centerButton, style, children}) => {

  const [styles] = useThemes (styles => styles.Window)


  const TopBar = ({title: title}) => {

    return (

      <View style = {{
      zIndex: 1,
      justifyContent: 'center',
      height: 53,
      paddingVertical: 11,
      paddingLeft: 26,
      borderBottomWidth: 2.5,
      borderColor: styles.TopBar.borderColor,
      backgroundColor: styles.TopBar.backgroundColor,
      boxShadow: styles.TopBar.boxShadow}}>

        <Text style = {{
        fontFamily: styles.TopBar.fontFamily,
        color: styles.TopBar.color,
        fontSize: 18}}>

          {title}

        </Text>

      </View>

    )

  }

  const MainContent = ({children}) => {

    return (

      <View style = {{
      flex: 1,
      width: '100%',
      paddingTop: 2.5}}>

        {children}

      </View>

    )

  }

  const BottomBar = ({centerButton, rightButton, leftButton}) => {

    const scaleControl = useSharedValue (1)
    const opacityControl = useSharedValue (1)


    const commonEasing = comEsng = Easing.inOut (Easing.quad)
    const animationDuration = AnDu = 95


    const handlePressIn = () => {

      scaleControl.value = withTiming (0.975, {duration: AnDu, easing: comEsng})
      opacityControl.value = withTiming (0.5, {duration: AnDu, easing: comEsng})

    }

    const handlePressOut = () => {

      scaleControl.value = withTiming (1, {duration: AnDu, easing: comEsng})
      opacityControl.value = withTiming (1, {duration: AnDu, easing: comEsng})

    }

    const handlePress = () => {

      scaleControl.value = withSequence (withTiming (0.975, {duration: AnDu, easing: comEsng}), withTiming (1, {duration: AnDu, easing: comEsng}))
      opacityControl.value = withSequence (withTiming (0.5, {duration: AnDu, easing: comEsng}), withTiming (1, {duration: AnDu, easing: comEsng}))

    }


    return (

      <View style = {{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: 53 + 5,
      boxShadow: styles.BottomBar.boxShadow}}>

        { centerButton ?

          <TouchableOpacity
          activeOpacity = {1}
          onPressIn = {() => handlePressIn()}
          onPressOut = {() => handlePressOut()}
          onPress = {() => {handlePress(); setTimeout (() => centerButton.onPress(), AnDu / 1.5)}}
          style = {{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          height: '100%',
          paddingBottom: 2.5}}>

            <Animated.Text style = {{
            fontFamily: styles.BottomBar.fontFamily,
            color: styles.BottomBar.color,
            fontSize: 18,
            opacity: opacityControl,
            transform: [{scale: scaleControl}]}}>

              {centerButton.text}

            </Animated.Text>

          </TouchableOpacity>

        :

          [ leftButton &&

            <TouchableOpacity
            key = {1}
            activeOpacity = {1}
            onPressIn = {() => handlePressIn()}
            onPressOut = {() => handlePressOut()}
            onPress = {() => {handlePress(); setTimeout (() => leftButton.onPress(), AnDu / 1.5)}}
            style = {{
            justifyContent: 'center',
            alignItems: 'flex-start',
            flex: 1,
            height: '100%',
            marginRight: 'auto',
            paddingLeft: 35,
            paddingBottom: 2.5}}>

              <Animated.Text style = {{
              fontFamily: styles.BottomBar.fontFamily,
              color: styles.BottomBar.color,
              fontSize: 18,
              opacity: opacityControl,
              transform: [{scale: scaleControl}]}}>

                {leftButton.text}

              </Animated.Text>

            </TouchableOpacity>

          , rightButton &&

            <TouchableOpacity
            key = {2}
            activeOpacity = {1}
            onPressIn = {() => handlePressIn()}
            onPressOut = {() => handlePressOut()}
            onPress = {() => {handlePress(); setTimeout (() => rightButton.onPress(), AnDu / 1.5)}}
            style = {{
            justifyContent: 'center',
            alignItems: 'flex-end',
            flex: 1,
            height: '100%',
            marginLeft: 'auto',
            paddingRight: 35,
            paddingBottom: 2.5}}>

              <Animated.Text style = {{
              fontFamily: styles.BottomBar.fontFamily,
              color: styles.BottomBar.color,
              fontSize: 18,
              opacity: opacityControl,
              transform: [{scale: scaleControl}]}}>

                {rightButton.text}

              </Animated.Text>

            </TouchableOpacity>

          ]

        }

      </View>

    )

  }


  return (

    <View style = {[{
    position: 'absolute',
    width: '90%',
    maxWidth: 500,
    height: 500,
    borderRadius: 8,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    backgroundColor: styles.backgroundColor,
    boxShadow: styles.boxShadow,
    overflow: 'hidden'},
    style]}>

      <TopBar
      title = {title}/>

      <MainContent>

        {children}

      </MainContent>
      
      <BottomBar
      leftButton = {leftButton}
      rightButton = {rightButton}
      centerButton = {centerButton}/>

    </View>

  )

}


export default Window