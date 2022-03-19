import { createSlice } from '@reduxjs/toolkit';
import { AppThunk, AppDispatch } from '../store';
import AuthService from '../api/auth';

const initialState = {
  isAuthenticated: false,
  user: null,
  signInFailed: false,
  signInError: null,
  signingIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signingIn: (state, action) => {
      state.signingIn = action.payload;
    },

    signInFailed: (state, action) => {
      state.signInFailed = true;
      state.signInError = action.payload.error;
      state.isAuthenticated = false;
    },

    signOutSuccess: (state) => {
      state.signInFailed = false;
      state.signInError = null;
      state.isAuthenticated = false;
      state.user = null;
      state.signingIn = false;
    },

    signInSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.signInFailed = false;
      state.signInError = null;
    },
  },
});

export default authSlice.reducer;

export const {
  signingIn,
  signInFailed,
  signInSuccess,
  signOutSuccess,
} = authSlice.actions;

export const login = (
  data: {
    email: string;
    password: string;
  },
  setSubmitting: any = null,
  history: any = null
): AppThunk => async (dispatch: AppDispatch) => {
  let user;
  try {
    console.log(data);
    //start Instna
    dispatch(signingIn(true));
    user = await AuthService.login(data);
    console.log(user);

    dispatch(signInSuccess(user));

    if (setSubmitting) setSubmitting(false);
    //@ts-ignore
    if (history) history.push('/instant-price/' + user.user.instantPriceId);
  } catch (error) {
    console.log('Failed to login user');
    console.log(error);
    dispatch(signInFailed({ error: error.message }));
    if (setSubmitting) setSubmitting(false);
  } finally {
    dispatch(signingIn(false));
  }
};

export const logout = (): AppThunk => async (dispatch: AppDispatch) => {
  try {
    await AuthService.logout();
    dispatch(signOutSuccess());
  } catch (error) {
    console.log(error);
  }
};
