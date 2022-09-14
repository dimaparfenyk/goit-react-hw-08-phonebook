import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import contactsReducer from './contacts/contacts-slice';
import authReducer from './auth/auth-slice'
import filterSlice from './features/filterSlice';

const authPersistConfig = {
   key: 'auth',
   storage,
  whitelist: ['token'],
};

const contactsPersistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['token'],   
};

export const store = configureStore({
  reducer: {
   contacts:persistReducer(contactsPersistConfig, contactsReducer),
    filter: filterSlice,
    auth:persistReducer(authPersistConfig, authReducer)
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })],
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);