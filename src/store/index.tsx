import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';
import { filmPageReducer } from './reducers/filmPageReducer';

const rootReducer = combineReducers({
  filmPage: filmPageReducer
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
