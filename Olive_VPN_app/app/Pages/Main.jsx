// This is Main page.


import MainField from '../Components/Common/MainField/MainField'

import TopBar from '../Components/Pages/Main/TopBar/TopBar'
import MainContent from '../Components/Pages/Main/MainContent/MainContent'
import BottomBar from '../Components/Pages/Main/BottomBar/BottomBar'

import { default as MainSlider } from '../Sliders/Main'

import { default as LanguageChooseWindow } from '../Windows/LanguageChoose'
import { default as AppDescriptionWindow } from '../Windows/AppDescription'


const Main = () => {

  return (

    <MainField style = {{
    display: 'flex',
    alignItems: 'center',
    flex: 1}}>

      <TopBar/>
      <MainContent/>
      <BottomBar/>

      <MainSlider/>

      <LanguageChooseWindow/>
      <AppDescriptionWindow/>

    </MainField>

  )

}


export default Main