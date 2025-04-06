// This is Main Page menu slider.


import { useThemes } from '../../Redux/Hooks/UseThemes'
import { useAppMenuSlider } from '../../Redux/Hooks/MenuSlider'
import { useAppOpenedWindows } from '../../Redux/Hooks/OpenedWindows'

import { View, TouchableOpacity, Image, Text } from 'react-native'


let styles


const Menu = () => {

  [styles] = useThemes (styles => styles.MenuSlider)

  const [isAppMenuSliderOpened, setIsAppMenuSliderOpened] = useAppMenuSlider ()


  const handleShadowPress = () => {

    setIsAppMenuSliderOpened (false)

  }


  return (

    <>
    
      {isAppMenuSliderOpened ?
      
        <View style = {{
        position: 'absolute',
        width: '100%',
        height: '100%'}}>

          <TouchableOpacity  // shadow touch
          activeOpacity = {1}
          onPress = {() => handleShadowPress()}
          style = {{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)'}}/>

          <SliderBlock/>

        </View>

      : null}

    </>

  )

}


const SliderBlock = () => {

  const [appOpenedWindows, setAppOpenedWindows] = useAppOpenedWindows ()
  const [isAppMenuSliderOpened, setIsAppMenuSliderOpened] = useAppMenuSlider ()


  const menu_txt = 'Меню'
  const language_txt = 'Язык'
  const language_value_txt = 'Русский'
  const feedback_txt = 'Обратная связь'
  const connection_to_vpn_on_app_launch_txt = 'Подключение к VPN при запуске приложения'
  // const _txt = ''


  const Skeleton = ({children}) => {

    return (

      <View style = {{
      position: 'absolute',
      width: '80%',
      maxWidth: 300,
      height: '100%',
      gap: 12,
      backgroundColor: '#0b0b0b'}}>
    
        <View style = {{
        paddingTop: 17.5,
        paddingLeft: 32,
        paddingBottom: 7.5,
        borderBottomWidth: 2,
        borderBottomColor: '#171717',
        backgroundColor: '#070707'}}>
  
          <Text style = {{
          fontFamily: 'Archivo-ExtraBold',
          color: '#f2f2f2',
          fontSize: 25}}>
  
            {menu_txt}
  
          </Text>
  
        </View>

        {children}
  
      </View>

    )

  }

  const Separator = () => {

    return (

      <View style = {{
      height: 2,
      marginHorizontal: 25,
      borderRadius: 8,
      backgroundColor: '#262626'}}/>

    )

  }

  const LanguageButton = () => {

    const handlePress = () => {

      setAppOpenedWindows (prev => [...prev, 'LanguageChoose'])
      setIsAppMenuSliderOpened (false)

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
          source = {styles.LanguageButton.Planet_PNG}
          style = {{
          width: 19,
          height: 19,
          bottom: 0.75,
          right: 0.25}}/>

          <Text style = {{
          fontFamily: 'Archivo-SemiBold',
          color: '#f2f2f2',
          fontSize: 18}}>

            {language_txt}

          </Text>

        </View>

        <Text style = {{
        fontFamily: 'Archivo-Regular',
        color: '#bfbfbf',
        fontSize: 18}}>

          {language_value_txt}

        </Text>

      </TouchableOpacity>

    )

  }

  const FeedbackButton = () => {

    const handlePress = () => {

      setAppOpenedWindows (prev => [...prev, 'Feedback'])
      setIsAppMenuSliderOpened (false)

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
          fontFamily: 'Archivo-SemiBold',
          color: '#f2f2f2',
          fontSize: 18}}>

            {feedback_txt}

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

    const useAppAutoVpnToggle = () => [1, () => {}]  //
    const [isChecked, setIsChecked] = useAppAutoVpnToggle ()


    const Toggler = () => {

      const [togglerBorderColor, togglerBackgroundColor] = isChecked

        ? [ styles.AutoVpnToggler.borderColor_Chosen,
            styles.AutoVpnToggler.backgroundColor_Chosen ]

        : [ styles.AutoVpnToggler.borderColor_Unchosen,
            styles.AutoVpnToggler.backgroundColor_Unchosen ]

      const togglerPicOpacity = isChecked


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
          source = {styles.AutoVpnToggler.Done_PNG}
          style = {{
          width: 16,
          height: 16,
          opacity: togglerPicOpacity}}/>

        </View>

      )

    }


    return (

      <TouchableOpacity
      activeOpacity = {1}
      onPress = {() => setIsChecked (prev => !prev)}
      style = {[{
      height: 75,
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 8,
      paddingHorizontal: 23,
      borderTopWidth: 2,
      borderTopColor: '#171717',
      backgroundColor: '#070707'},
      style]}>

        <View style = {{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10}}>

          <Text style = {{
          flex: 1,
          fontFamily: 'Archivo-SemiBold',
          color: '#f2f2f2',
          fontSize: 17}}>

            {connection_to_vpn_on_app_launch_txt}

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