import { useSelector, useDispatch } from 'react-redux'
import { SetTheme as SetThemeRedux } from '../../Redux/ThemeSlice'
import { Themes } from '../Themes/Themes'


export const useThemes = (callback__object_to_return = e => e) => {
    
    const dispatch = useDispatch ()


    const theme = JSON.parse (useSelector (state => state.theme.value))  // theme has already been declared to default or AsyncStorage value in Redux reducer scince initialization

    const setTheme = theme => dispatch (SetThemeRedux (theme))

    let stylesObject = Themes?.[theme?.type]?.[theme?.palette]
    stylesObject = callback__object_to_return (stylesObject)


    return [stylesObject, theme, setTheme]

}