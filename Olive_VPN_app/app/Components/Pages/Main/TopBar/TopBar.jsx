import { useThemes } from '../../../../../Styles/Hooks/UseThemes'
import { View } from 'react-native'

import MenuButton from './Components/MenuButton'
import OliveVPN_Title from './Components/OliveVPN_Title'
import ThemeSwitcher from './Components/ThemeSwitcher'


const TopBar = () => {

    const [styles] = useThemes (styles => styles.MainPage.Top)


    return (

        <View style = {{
        flexDirection: 'row',
        alignItems: 'center',
        height: 65.5,
        marginBottom: 28,
        paddingHorizontal: 18.5,
        borderBottomWidth: 2,
        borderColor: styles.borderColor,
        backgroundColor: styles.backgroundColor}}>
                
          <MenuButton/>
          <OliveVPN_Title/>
          <ThemeSwitcher/>

        </View>

    )

}


export default TopBar