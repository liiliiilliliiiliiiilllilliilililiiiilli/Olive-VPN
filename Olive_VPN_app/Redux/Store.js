import { configureStore } from '@reduxjs/toolkit'

import { themeReducer } from './ThemeSlice'
import { mainPageStatusTextReducer } from './MainPageStatusTextSlice'
import { openedWindowsReducer } from './OpenedWindowsSlice'
import { menuSliderReducer } from './MenuSliderSlice'


const ReduxStore = configureStore ({

    reducer: {
        
        theme: themeReducer,
        mainPageStatusText: mainPageStatusTextReducer,
        openedWindows: openedWindowsReducer,
        isMenuSliderOpened: menuSliderReducer
    
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware ({serializableCheck: false})

})


export { ReduxStore }