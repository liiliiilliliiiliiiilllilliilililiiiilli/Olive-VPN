// Here additional buisness providers, contexts and so on are added.


import { Provider } from 'react-redux'
import { ReduxStore } from '../Redux/Store'

import { useState } from 'react'

import { View } from 'react-native'

import App from './App'


const index = () => {

  const [backgroundColor, setBackgroundColor] = useState ('')


  return (

    <View style = {{
    flex: 1,
    backgroundColor: backgroundColor}}>

      <Provider store = {ReduxStore}>

        <App setBackgroundColor = {setBackgroundColor}/>

      </Provider>

    </View>

  )

}


export default index