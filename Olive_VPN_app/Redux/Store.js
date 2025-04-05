import { configureStore } from '@reduxjs/toolkit'

import { ThemeReducer } from './ThemeSlice'
import { MainPageStatusTextReducer } from './MainPageStatusTextSlice'
import { OpenedWindowsReducer } from './OpenedWindowsSlice'
import { IsMenuSliderOpenedReducer } from './IsMenuSliderOpenedSclice'


const ReduxStore = configureStore ({

    reducer: {
        
        theme: ThemeReducer,
        MainPageStatusText: MainPageStatusTextReducer,
        openedWindows: OpenedWindowsReducer,
        isMenuSliderOpened: IsMenuSliderOpenedReducer
    
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware ({serializableCheck: false})

})


export { ReduxStore }