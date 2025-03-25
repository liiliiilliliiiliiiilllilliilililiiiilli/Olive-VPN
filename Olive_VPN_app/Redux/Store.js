import { configureStore } from '@reduxjs/toolkit'

import { ThemeReducer } from './ThemeSlice'


export const ReduxStore = configureStore ({

    reducer: {
        
        theme: ThemeReducer
    
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware ({serializableCheck: false})

})