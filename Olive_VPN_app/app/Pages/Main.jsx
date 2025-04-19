// This is Main page.


import { useState, useEffect } from 'react'
import { Dimensions } from 'react-native'
import { AdRequest, AdTheme, BannerAdSize, BannerView, Gender, Location } from 'yandex-mobile-ads'

import MainField from '../Components/Common/MainField/MainField'

import TopBar from '../Components/Pages/Main/TopBar/TopBar'
import MainContent from '../Components/Pages/Main/MainContent/MainContent'
import BottomBar from '../Components/Pages/Main/BottomBar/BottomBar'

import { default as MenuSlider } from '../Sliders/Menu'

import { default as AppDescriptionWindow } from '../Windows/AppDescription'
import { default as LanguageChooseWindow } from '../Windows/LanguageChoose'
import { default as FeedbackWindow } from '../Windows/Feedback'


const Main = () => {

  const [adSize, setAdSize] = useState ()
  
  useEffect (() => {(async () => {

    const banerWidth = await BannerAdSize.stickySize (Dimensions.get('window').width)
    setAdSize (banerWidth)
  
  })()}, [])


  const adRequest = new AdRequest ({

    age: '14',
    contextQuery: 'context-query',
    contextTags: ['context-tag'],
    gender: Gender.Male,
    // location: new Location (55.734202, 37.588063),
    adTheme: AdTheme.Dark

  })


  return (

    <MainField style = {{
    alignItems: 'center',
    flex: 1}}>

      { /* <TopBar/> */ }
      <MainContent/>

      {adSize ?

        <BannerView
        size = {adSize}
        adUnitId = {'demo-banner-yandex'}
        adRequest = {adRequest}
        onAdLoaded = {() => console.info ('Did load.')}
        onAdFailedToLoad = {() => console.info ('Did fail to load with error.')}
        onAdClicked = {() => console.info ('Did click.')}
        onLeftApplication = {() => console.info ('Did leave application.')}
        onReturnToApplication = {() => console.info ('Did return to application.')}
        onAdImpression = {() => console.info ('Did track impression.')}
        onAdClose = {() => console.info ('Did close')}/>

      : null}
      
      { /* <BottomBar/> */ }

      <MenuSlider/>

      <AppDescriptionWindow/>
      <LanguageChooseWindow/>
      <FeedbackWindow/>

    </MainField>

  )

}


export default Main
