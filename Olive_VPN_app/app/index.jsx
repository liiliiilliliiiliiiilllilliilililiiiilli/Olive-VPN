// Initial file + for additional providers and so on.


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