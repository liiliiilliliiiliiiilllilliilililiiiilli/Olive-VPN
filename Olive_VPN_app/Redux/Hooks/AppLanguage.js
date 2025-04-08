import { useSelector, useDispatch } from 'react-redux'
import { setAppLanguage as setLanguageAppRedux } from '../AppLanguageSlice'
import { appLanguagesAsset } from '../../Styles/Languages/Languages'


const useAppLanguage = (specific_styles_to_return_callback = e => e) => {

  const appLanguage = useSelector (state => state.appLanguage.value)

  const dispatch = useDispatch ()
  const setAppLanguage = appLanguage => dispatch (setLanguageAppRedux (appLanguage))

  let textsObject = appLanguagesAsset[appLanguage]
  textsObject = specific_styles_to_return_callback (textsObject)


  return [textsObject, appLanguage, setAppLanguage]

}


export { useAppLanguage }