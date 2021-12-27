import { configureStore } from '@reduxjs/toolkit'
import homeScreenReducer from './homeScreen'
import globalStoreReducer from './globalStore'
import tabReducer from './tab'

export const store = configureStore({
    reducer: {
        homeScreen: homeScreenReducer,
        globalStore: globalStoreReducer,
        tab: tabReducer
    },
})
