import { useSelector, useDispatch } from 'react-redux'
import { setMainPageStatusText } from '../MainPageStatusTextSlice'


const useMainPageStatusText = () => {

  const statusText = useSelector (state => state.mainPageStatusText.value)

  const dispatch = useDispatch ()
  const setStatusText = text => dispatch (setMainPageStatusText (text))


  return [statusText, setStatusText]

}


export { useMainPageStatusText }