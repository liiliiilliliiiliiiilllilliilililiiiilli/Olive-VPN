import { useSelector, useDispatch } from 'react-redux'
import { setIsAutoVpnOn as setIsAutoVpnOnRedux } from '../AppAutoVpnToggleSlice'


const useAppAutoVpnToggle = () => {

  const isAutoVpnOn = useSelector (state => state.isAutoVpnOn.value)

  const dispatch = useDispatch ()
  const setIsAutoVpnOn = bool => dispatch (setIsAutoVpnOnRedux (bool))


  return [isAutoVpnOn, setIsAutoVpnOn]

}


export { useAppAutoVpnToggle }