import { combineReducers } from '@reduxjs/toolkit';

import instantPrice from './slices/instantPriceSlice';
import user from './slices/userSlice';
import auth from './slices/authSlice';

const rootReducer = combineReducers({
  instantPrice,
  user,
  auth,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
