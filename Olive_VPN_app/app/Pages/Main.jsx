// This is Main page.


import { useState, useEffect } from 'react'
import { Dimensions } from 'react-native'
import { AdRequest, AdTheme, BannerAdSize, BannerView, Gender, Location } from 'yandex-mobile-ads'

import { View } from 'react-native'

import MainField from '../Components/Common/MainField/MainField'

import TopBar from '../Components/Pages/Main/TopBar/TopBar'
import MainContent from '../Components/Pages/Main/MainContent/MainContent'
import BottomBar from '../Components/Pages/Main/BottomBar/BottomBar'

import { default as MenuSlider } from '../Sliders/Menu'

import { default as AppDescriptionWindow } from '../Windows/AppDescription'
import { default as LanguageChooseWindow } from '../Windows/LanguageChoose'
import { default as FeedbackWindow } from '../Windows/Feedback'


const Main = () => {

  const [addSize, setAddSize] = useState ()
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

  }


  return (

    <MainField style = {{
    alignItems: 'center',
    flex: 1}}>

      <TopBar/>

      <MainContent/>
      
      {addSize && randomExistence ?

        <View style = {{
        justifyContent: 'center',
        alignItems: 'flex-end',
        width: '100%',
        height: addExists ? 75 + 14 : 14,
        opacity: addExists ? 1 : 1,
        backgroundColor: 'blue'}}>

          <BannerView
          size = {addSize}
          adUnitId = {'R-M-15161745-1'}
          onAdLoaded = {() => handleAddLoading()}
          onAdFailedToLoad = {() => handleAddFailedLoading()}
          onAdClose = {() => handleAddClose()}/>

        </View>

      : null}

      <BottomBar/>


      <MenuSlider/>


      <AppDescriptionWindow/>
      <LanguageChooseWindow/>
      <FeedbackWindow/>

    </MainField>

  )

}


export default Main