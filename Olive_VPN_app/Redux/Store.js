import { configureStore } from '@reduxjs/toolkit'

import { ThemeReducer } from './ThemeSlice'
import { MainPageStatusTextReducer } from './MainPageStatusTextSlice'
import { OpenedWindowsReducer } from './OpenedWindowsSlice'
import { IsMainSliderOpenedReducer } from './IsMainSliderOpenedSclice'


const ReduxStore = configureStore ({

    reducer: {
        
        theme: ThemeReducer,
        MainPageStatusText: MainPageStatusTextReducer,
        openedWindows: OpenedWindowsReducer,
        isMainSliderOpened: IsMainSliderOpenedReducer
    
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware ({serializableCheck: false})

})


export { ReduxStore }