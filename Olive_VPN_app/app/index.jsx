// Here additional buisness providers, contexts and so on are added.


import { Provider } from 'react-redux'
import { ReduxStore } from '../Redux/Store'

import { View } from 'react-native'

import App from './App'


const index = () => {


  return (

    <View style = {{
    flex: 1,
    backgroundColor: '#8b9e80'}}>

      <Provider store = {ReduxStore}>

        <App/>

      </Provider>

    </View>

  )

}


export default index