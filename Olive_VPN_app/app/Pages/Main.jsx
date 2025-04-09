// This is Main page.


import MainField from '../Components/Common/MainField/MainField'

import TopBar from '../Components/Pages/Main/TopBar/TopBar'
import MainContent from '../Components/Pages/Main/MainContent/MainContent'
import BottomBar from '../Components/Pages/Main/BottomBar/BottomBar'

import { default as MenuSlider } from '../Sliders/Menu'

import { default as AppDescriptionWindow } from '../Windows/AppDescription'
import { default as LanguageChooseWindow } from '../Windows/LanguageChoose'
import { default as FeedbackWindow } from '../Windows/Feedback'


const Main = () => {

  return (

    <MainField style = {{
    alignItems: 'center',
    flex: 1}}>

      <TopBar/>
      <MainContent/>
      <BottomBar/>

      <MenuSlider/>

      <AppDescriptionWindow/>
      <LanguageChooseWindow/>
      <FeedbackWindow/>

    </MainField>

  )

}


export default Main