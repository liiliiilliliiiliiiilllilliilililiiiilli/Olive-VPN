import { configureStore } from '@reduxjs/toolkit'

import { ThemeReducer } from './ThemeSlice'
import { MainPageStatusTextReducer } from './MainPageStatusTextSlice'


const ReduxStore = configureStore ({

    reducer: {
        
        theme: ThemeReducer,
        MainPageStatusText: MainPageStatusTextReducer
    
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware ({serializableCheck: false})

})


export { ReduxStore }