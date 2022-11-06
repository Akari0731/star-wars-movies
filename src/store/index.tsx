import { configureStore } from '@reduxjs/toolkit';
import { filmPageReducer } from './reducers/filmPageReducer';

export default configureStore({
  reducer: {
    filmPage: filmPageReducer
  }
});
