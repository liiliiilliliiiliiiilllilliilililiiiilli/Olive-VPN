import { useSelector, useDispatch } from 'react-redux'
import { setAppVpn as setAppVpnRedux } from '../AppVpnSlice'
import { appVpnsAsset } from '../../Styles/VPN/VPN'

import RNSimpleOpenvpn from 'react-native-simple-openvpn'


const useAppVpn = () => {

  const appVpn = useSelector (state => state.AppVpn.value)

  const dispatch = useDispatch ()
  const setAppVpn = server => dispatch (setAppVpnRedux (server))

  const getVpnState = async () => {

    return await RNSimpleOpenvpn.getCurrentState ()

  }

  const connectToVpn = async () => {

    try {
  
      await RNSimpleOpenvpn.connect ({

        ...appVpnsAsset[appVpn],

        compatMode: {

          MODERN_DEFAULTS: RNSimpleOpenvpn.CompatMode.MODERN_DEFAULTS,
          OVPN_TWO_FIVE_PEER: RNSimpleOpenvpn.CompatMode.OVPN_TWO_FIVE_PEER,
          OVPN_TWO_FOUR_PEER: RNSimpleOpenvpn.CompatMode.OVPN_TWO_FOUR_PEER,
          OVPN_TWO_THREE_PEER: RNSimpleOpenvpn.CompatMode.OVPN_TWO_THREE_PEER

        } [appVpnsAsset[appVpn]]

      })

    }

    catch (error) {

      console.info (`connectVPN: error while connecting to VPN server:\n\n${error}`)

    }

  }
  
  const disconnectFromVpn = async () => {

    try {
        
      await RNSimpleOpenvpn.disconnect ()

    }
    
    catch (error) {

      console.info (`disconnectVPN: error while disconnecting from VPN server:\n\n${error}`)

    }

  }


  return [appVpn, setAppVpn, getVpnState, connectToVpn, disconnectFromVpn]

}


export { useAppVpn }