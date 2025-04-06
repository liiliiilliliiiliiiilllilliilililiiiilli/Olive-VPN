// Component.


import { View, TouchableOpacity, Text } from 'react-native'


const Window = ({isOpened, closeSelf, title, leftButton, rightButton, centerButton, style, children}) => {

  const handleShadowPress = () => {

    closeSelf ()

  }


  return (

    <>

      {isOpened ?

        <View style = {{
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'}}>

          <TouchableOpacity
          activeOpacity = {1}
          onPress = {() => handleShadowPress()}
          style = {{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)'}}/>

          <WindowBlock
          title = {title}
          leftButton = {leftButton}
          rightButton = {rightButton}
          centerButton = {centerButton}
          style = {style}>

            {children}

          </WindowBlock>

        </View>

      : null}

    </>

  )

}


const WindowBlock = ({title, leftButton, rightButton, centerButton, style, children}) => {

  const TopBar = ({title: title}) => {

    return (

      <View style = {{
      zIndex: 1,
      justifyContent: 'center',
      height: 53,
      paddingVertical: 11,
      paddingLeft: 26,
      borderBottomWidth: 2.5,
      borderColor: '#0f0f0f',
      backgroundColor: '#1a1a1a',
      boxShadow: '0px 2.5px 10px #141414'}}>

        <Text style = {{
        fontFamily: 'Archivo-SemiBold',
        color: '#f2f2f2',
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
      width: '100%'}}>

        {children}

      </View>

    )

  }

  const BottomBar = ({centerButton, rightButton, leftButton}) => {

    return (

      <View style = {{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: 53 + 5,
      boxShadow: '0px -2.5px 10px #141414'}}>

        { centerButton ?

          <TouchableOpacity
          onPress = {() => centerButton.onPress()}
          style = {{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          height: '100%',
          paddingBottom: 2.5}}>

            <Text style = {{
            fontFamily: 'Archivo-SemiBold',
            color: '#8b9e80',
            fontSize: 18}}>

              {centerButton.text}

            </Text>

          </TouchableOpacity>

        :

          [ leftButton &&

            <TouchableOpacity
            key = {1}
            onPress = {() => leftButton.onPress()}
            style = {{
            justifyContent: 'center',
            alignItems: 'flex-start',
            flex: 1,
            height: '100%',
            marginRight: 'auto',
            paddingLeft: 35,
            paddingBottom: 2.5}}>

              <Text style = {{
              fontFamily: 'Archivo-Regular',
              color: '#8b9e80',
              fontSize: 18}}>

                {leftButton.text}

              </Text>

            </TouchableOpacity>

          , rightButton &&

            <TouchableOpacity
            key = {2}
            onPress = {() => rightButton.onPress()}
            style = {{
            justifyContent: 'center',
            alignItems: 'flex-end',
            flex: 1,
            height: '100%',
            marginLeft: 'auto',
            paddingRight: 35,
            paddingBottom: 2.5}}>

              <Text style = {{
              fontFamily: 'Archivo-Regular',
              color: '#8b9e80',
              fontSize: 18}}>

                {rightButton.text}

              </Text>

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
    backgroundColor: '#141414',
    boxShadow: '0px 2.5px 25px rgb(3, 10, 1)',
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