import { configureStore } from '@reduxjs/toolkit'

import { themeReducer } from './ThemeSlice'
import { appLanguageReducer } from './AppLanguageSlice'
import { menuSliderReducer } from './MenuSliderSlice'
import { openedWindowsReducer } from './OpenedWindowsSlice'
import { mainPageStatusTextReducer } from './MainPageStatusTextSlice'
import { autoVpnOnReducer } from './AppAutoVpnToggleSlice'


const ReduxStore = configureStore ({

    reducer: {
        
        theme: themeReducer,
        appLanguage: appLanguageReducer,
        isMenuSliderOpened: menuSliderReducer,
        openedWindows: openedWindowsReducer,
        mainPageStatusText: mainPageStatusTextReducer,
        isAutoVpnOn: autoVpnOnReducer
    
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware ({serializableCheck: false})

})


export { ReduxStore }