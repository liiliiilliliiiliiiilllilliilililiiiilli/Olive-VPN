// This is Main Page menu slider.


import { Text, TouchableOpacity, View } from 'react-native'
import { useAppMainSlider } from '../../Redux/Hooks/MainSlider'


const Main = () => {

  const [isAppMainSliderOpened, setIsAppMainSliderOpened] = useAppMainSlider ()


  const handleShadowPress = () => {

    setIsAppMainSliderOpened (false)

  }


  return (

    <>
    
      {isAppMainSliderOpened ?
      
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

  const Separator = () => {

    return (

      <View style = {{

        // width: '100%',
        height: 2,

        marginHorizontal: 21,
        backgroundColor: '#262626',
        borderRadius: 8,

      }}/>

    )

  }

  const LanguageButton = () => {

    return (

      <View style = {{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      // backgroundColor: 'blue',
      }}>

        <Text style = {{
        fontFamily: 'Archivo-ExtraBold',
        color: '#f2f2f2',
        fontSize: 19}}>

          Язык

        </Text>

        <Text style = {{
        fontFamily: 'Archivo-ExtraBold',
        color: '#bfbfbf',
        fontSize: 19}}>

          Русский

        </Text>

      </View>

    )

  }

  const FeedbackButton = () => {

    return (

      <View style = {{
      // backgroundColor: 'yellow',
      }}>

        <Text style = {{
        fontFamily: 'Archivo-ExtraBold',
        color: '#f2f2f2',
        fontSize: 19}}>

          Обратная связь  

        </Text>

      </View>

    )

  }

  const AutoVpnSwitcher = ({style}) => {

    return (

      <View style = {[{
      // backgroundColor: 'green',
      },
      style]}>

        <Text style = {{
        fontFamily: 'Archivo-ExtraBold',
        color: '#f2f2f2',
        fontSize: 19}}>

          Подключение к VPN при запуске приложения

        </Text>

      </View>

    )

  }

  const Skeleton = ({children}) => {

    return (

      <View style = {{
      position: 'absolute',
      width: '80%',
      maxWidth: 281,
      height: '100%',
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
  
            Меню
  
          </Text>
  
        </View>

        {children}
  
      </View>

    )

  }


  return (

    <Skeleton>

      <LanguageButton/>
      <Separator/>
      <FeedbackButton/>
      <AutoVpnSwitcher
      style = {{marginTop: 'auto'}}/>

    </Skeleton>

  )

}


export default Main