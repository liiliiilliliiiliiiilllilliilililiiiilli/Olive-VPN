import { useSelector, useDispatch } from 'react-redux'
import { SetTheme as SetThemeRedux } from '../../Redux/ThemeSlice'
import { Themes } from '../Themes/Themes'


const useThemes = (style_object_to_return_callback = e => e) => {
    
    const dispatch = useDispatch ()


    const theme = JSON.parse (useSelector (state => state.theme.value))  // theme has already been declared to default or AsyncStorage value in Redux reducer scince initialization

    const setTheme = theme => dispatch (SetThemeRedux (theme))

    let stylesObject = Themes?.[theme?.type]?.[theme?.palette]
    stylesObject = style_object_to_return_callback (stylesObject)


    return [stylesObject, theme, setTheme]

}


export { useThemes }