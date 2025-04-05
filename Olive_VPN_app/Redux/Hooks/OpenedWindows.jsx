import { useSelector, useDispatch } from 'react-redux'
import { setOpenedWindows } from '../../Redux/OpenedWindowsSlice'


const useAppOpenedWindows = () => {

  const openedWindows = useSelector (state => state.openedWindows.value)

  const dispatch = useDispatch ()
  const setReduxOpenedWindows = callback => dispatch (setOpenedWindows (callback (openedWindows)))


  return [openedWindows, setReduxOpenedWindows]

}


export { useAppOpenedWindows }