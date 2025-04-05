import { useSelector, useDispatch } from 'react-redux'
import { setIsMenuSliderOpened } from '../IsMenuSliderOpenedSclice'


const useAppMenuSlider = () => {

  const isMenuSliderOpened = useSelector (state => state.isMenuSliderOpened.value)

  const dispatch = useDispatch ()
  const setReduxIsMenuSliderOpened = state => dispatch (setIsMenuSliderOpened (state))


  return [isMenuSliderOpened, setReduxIsMenuSliderOpened]

}


export { useAppMenuSlider }