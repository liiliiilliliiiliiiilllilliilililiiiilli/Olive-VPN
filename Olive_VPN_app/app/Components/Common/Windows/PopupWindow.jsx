import { View } from 'react-native'


const PopupWindow = ({title, leftButton, rightButton, children}) => {

  return (

    <View>

      {children}

    </View>

  )

}


export default PopupWindow