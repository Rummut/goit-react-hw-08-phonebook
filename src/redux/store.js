import { contactReducer, contactsInitialState } from './contacts/contactSlice';
import { filterInitialState, filterReducer } from './contacts/filterSlice';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { authInitialState, authReducer } from './auth/authSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  contacts: persistReducer(
    { key: 'contacts', storage, blacklist: ['filter'] },
    contactReducer
  ),
  filter: filterReducer,
  auth: persistReducer(
    { key: 'auth', storage, whitelist: ['token'] },
    authReducer
  ),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
  preloadedState: {
    contacts: contactsInitialState,
    auth: authInitialState,
    filter: filterInitialState,
  },
});

export const persistor = persistStore(store);
