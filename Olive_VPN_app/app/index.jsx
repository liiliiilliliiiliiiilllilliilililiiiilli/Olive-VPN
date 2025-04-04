// Here additional buisness providers, contexts and so on are added.


import { Provider } from 'react-redux'
import { ReduxStore } from '../Redux/Store.js'

import App from './App'


const index = () => {

  return (

    <Provider store = {ReduxStore}>
      <App/>
    </Provider>

  )

}


export default index