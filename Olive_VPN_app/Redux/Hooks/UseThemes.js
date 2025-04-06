import { useSelector, useDispatch } from 'react-redux'
import { SetTheme as SetThemeRedux } from '../ThemeSlice'
import { Themes } from '../../Styles/Themes/Themes'


const useThemes = (specific_styles_to_return_callback = e => e) => {  

  const theme = useSelector (state => state.theme.value)  // theme has already been declared to default or AsyncStorage value in Redux reducer scince initialization

  const dispatch = useDispatch ()
  const setTheme = theme => dispatch (SetThemeRedux (theme))

  let stylesObject = Themes?.[theme?.type]?.[theme?.palette] || {systemThemeLight: Themes.Light.MainTheme, systemThemeDark: Themes.Dark.MainTheme} [theme]
  stylesObject = specific_styles_to_return_callback (stylesObject)


  return [stylesObject, theme, setTheme]

}


export { useThemes }