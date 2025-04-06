import { useSelector, useDispatch } from 'react-redux'
import { SetMainPageStatusText } from '../MainPageStatusTextSlice'


const useMainPageStatusText = () => {

  const statusText = useSelector (state => state.mainPageStatusText.value)

  const dispatch = useDispatch ()
  const setStatusText = text => dispatch (SetMainPageStatusText (text))


  return [statusText, setStatusText]

}


export { useMainPageStatusText }