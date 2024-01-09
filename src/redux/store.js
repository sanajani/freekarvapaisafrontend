import {combineReducers,configureStore} from '@reduxjs/toolkit'
import loadingReducer from './features/loadingSlice'
import userReducer from './features/userDataSlice'
import phoneNumberReducer from './features/userPhoneNumber'
import tokenReducer from './features/token'
import adminUserReducer from './features/adminDataSlicer'
import adminTokenReducer from './features/adminToken'

import {persistReducer, persistStore, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
    loading: loadingReducer,
    user: userReducer,
    phoneNumber: phoneNumberReducer,
    token: tokenReducer,
    admin: adminUserReducer,
    adminToken: adminTokenReducer
})

const persistConfig = {
    key: 'root',
    version: 1,
    storage
}

const persistedReducer = persistReducer(persistConfig,rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})


export const persistor = persistStore(store)
