// This is Main page.


/* import { useState, useEffect } from 'react'
import { Dimensions } from 'react-native'
import { AdRequest, AdTheme, BannerAdSize, BannerView, Gender, Location } from 'yandex-mobile-ads'

import { View } from 'react-native' */

import { Dimensions, PixelRatio } from 'react-native'

import { useState, useEffect } from 'react'

import MainField from '../Components/Common/MainField/MainField'

import TopBar from '../Components/Pages/Main/TopBar/TopBar'
import MainContent from '../Components/Pages/Main/MainContent/MainContent'
import BottomBar from '../Components/Pages/Main/BottomBar/BottomBar'

import { default as MenuSlider } from '../Sliders/Menu'

import { default as AppDescriptionWindow } from '../Windows/AppDescription'
import { default as LanguageChooseWindow } from '../Windows/LanguageChoose'
import { default as FeedbackWindow } from '../Windows/Feedback'


const Main = () => {

  // Configuring app scales for different devices:

  useEffect (() => {

  let ini_height = 2400
  let ini_width = 1080
  let ini_scale = 2.63125 / PixelRatio.get ()

  console.info ('ini_scale:', ini_scale)

  let height = Dimensions.get('screen').height * PixelRatio.get ()
  let width = Dimensions.get('screen').width * PixelRatio.get ()

  console.info ('q:', height, width)

  if ((ini_height * ini_scale > height) || (ini_width * ini_scale > width)) {

    if ((ini_height * ini_scale > height) && (ini_width * ini_scale > width)) {

      if ((height / width) <= (ini_height / ini_width)) {

        ini_scale /= ((ini_height * ini_scale) / height)
        ini_width += (width - ini_width * ((ini_height * ini_scale) / height))

      }

      else {

        ini_scale /= ((ini_width * ini_scale) / width)
        ini_height += (height - ini_height * ((ini_width * ini_scale) / width))

      }

    }

    else if ((ini_height * ini_scale) > height) {

      ini_scale /= ((ini_height * ini_scale) / height)
      ini_width += (width - ini_width * ((ini_height * ini_scale) / height))

    }

    else if ((ini_width * ini_scale) > width) {

      ini_scale /= ((ini_width * ini_scale) / width)
      ini_height += (height - ini_height * ((ini_width * ini_scale) / width))

    }

  }


  else {

    ini_height += (height - ini_height * ini_scale) / ini_scale
    ini_width += (width - ini_width * ini_scale) / ini_scale

  }


  set_height_adaptive (ini_height)
  set_width_adaptive (ini_width)
  set_scale_adaptive (ini_scale)

  }, [])


  const [height_adaptive, set_height_adaptive] = useState (2400)
  const [width_adaptive, set_width_adaptive] = useState (1080)
  const [scale_adaptive, set_scale_adaptive] = useState (1)

  //

  console.info ('qq:', height_adaptive, width_adaptive, scale_adaptive)





  /* const [addSize, setAddSize] = useState ()
  const [addExists, setAddExists] = useState (false)
  const [randomExistence, setRandomExistense] = useState (true)
  
  useEffect (() => {(async () => {

    const banerWidth = await BannerAdSize.inlineSize (Dimensions.get('window').width, 75)
    setAddSize (banerWidth)
  
  })()})


  const getRandomInt = (min, max) => {

    const minCeiled = Math.ceil (min)
    const maxFloored = Math.floor (max + 1)

    return Math.floor (Math.random() * (maxFloored - minCeiled) + minCeiled)

  }

  useEffect (() => setRandomExistense (getRandomInt (1, 100) <= 75), [])


  const handleAddLoading = () => {

    setAddExists (true)

  }

  const handleAddFailedLoading = () => {

    setAddExists (false)

  }

  const handleAddClose = () => {

    setAddExists (false)

  } */


  return (

    <MainField style = {{
    width: width_adaptive,
    height: height_adaptive,
    transform: [{scale: scale_adaptive}],
    alignItems: 'center',
    flex: 1}}>

      <TopBar/>

      <MainContent/>
      
      { /* addSize && randomExistence ?

        <View style = {{
        justifyContent: 'center',
        alignItems: 'flex-end',
        width: '100%',
        height: addExists ? 75 : 0,
        paddingTop: 14,
        opacity: addExists ? 1 : 0}}>

          <BannerView
          size = {addSize}
          adUnitId = {'R-M-15161745-1'}
          onAdLoaded = {() => handleAddLoading()}
          onAdFailedToLoad = {() => handleAddFailedLoading()}
          onAdClose = {() => handleAddClose()}/>

        </View>

      : null */ }

      <BottomBar/>


      <MenuSlider/>


      <AppDescriptionWindow/>
      <LanguageChooseWindow/>
      <FeedbackWindow/>

    </MainField>

  )

}


export default Main