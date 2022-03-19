import { createSlice } from '@reduxjs/toolkit';
import { AppThunk, AppDispatch } from '../store';
import UserService from '../api/user';
import { login } from './authSlice';

// declare const fbq: any;
const contractorImages = ['/images/toni.png', '/images/joey.png'];

const initialState = {
  createdUser: null,
  createUserFailed: false,
  createUserError: null,
  createUserLoading: false,

  contractorImage:
    contractorImages[Math.floor(Math.random() * contractorImages.length)],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    createUserLoading: (state, action) => {
      state.createUserLoading = action.payload;
    },

    createUserFailed: (state, action) => {
      state.createUserFailed = true;
      state.createUserError = action.payload;
    },

    createUserSuccess: (state, action) => {
      state.createdUser = action.payload;
      state.createUserFailed = false;
    },

    setContractorImage: (state, action) => {
      state.contractorImage = action.payload;
    },
  },
});

export default userSlice.reducer;

export const {
  createUserLoading,
  createUserFailed,
  createUserSuccess,
  setContractorImage,
} = userSlice.actions;

export const createUserFromInstantPriceId =
  (data: any, history: any, setSubmitting: Function): AppThunk =>
  async (dispatch: AppDispatch) => {
    try {
      console.log(data);
      //start Instna
      dispatch(createUserLoading(true));
      const user = await UserService.createUserFromInstantPriceId(data);
      console.log(user);

      const loggedIn = await dispatch(
        login({ email: user.email, password: data.password })
      );

      console.log(loggedIn);

      // fbq('track', 'CompleteRegistration');
      if (setSubmitting) setSubmitting(false);
      history.push('/instant-price/' + data.instantPriceId);

      createUserSuccess(user);
    } catch (error) {
      if (setSubmitting) setSubmitting(false);
      console.log('Failed create user');
      console.log(error);
      createUserFailed(error);
    } finally {
      dispatch(createUserLoading(false));
    }
  };
