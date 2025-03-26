// This is Main page.


import MainField from '../Components/Common/MainField/MainField'

import TopBar from '../Components/Pages/Main/TopBar/TopBar'
import { default as Center } from '../Components/Pages/Main/Main/Main'
import BottomBar from '../Components/Pages/Main/BottomBar/BottomBar'


const Main = () => {

  return (

    <MainField style = {{
    display: 'flex',
    alignItems: 'center',
    flex: 1}}>

      <TopBar/>
      <Center/>
      <BottomBar/>

    </MainField>

  )

}


export default Main