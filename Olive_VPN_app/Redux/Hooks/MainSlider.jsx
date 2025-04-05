import { useSelector, useDispatch } from 'react-redux'
import { setIsMainSliderOpened } from '../../Redux/IsMainSliderOpenedSclice'


const useAppMainSlider = () => {

  const isMainSliderOpened = useSelector (state => state.isMainSliderOpened.value)

  const dispatch = useDispatch ()
  const setReduxIsMainSliderOpened = state => dispatch (setIsMainSliderOpened (state))


  return [isMainSliderOpened, setReduxIsMainSliderOpened]

}


export { useAppMainSlider }