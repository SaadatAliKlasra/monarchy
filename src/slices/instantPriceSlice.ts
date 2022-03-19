import { createSlice } from '@reduxjs/toolkit';
import { AppThunk, AppDispatch } from '../store';
import InstantPriceService from '../api/instant-price';

// declare const fbq: any;
declare function gtag_report_conversion(url?: string): any;

const initialState: {
  renovationType: string;
  step: number;
  subStep: number;
  progressBarVisible: boolean;

  createInstantPriceLoading: boolean;
  createInstantPriceFailed: boolean;
  createInstantPriceError: null | object;
  createdInstantPrice: null | object;

  getInstantPriceLoading: boolean;
  instantPrice: null | {
    firstName: string;
    renovationType: string;
  };
  getInstantPriceError: null | object;

  getInstantPriceCalculationLoading: boolean;
  instantPriceCalculation: null | {
    homeType: number;
    homeStoreys: number;
    roofPitchType?: number;
    roofMaterial?: number;

    sidingMaterialPerSqFt?: number;
    sidingMaterialInstallation?: number;
  };
  getInstantPriceCalculationError: null | object;
} = {
  renovationType: '',
  step: 1,
  subStep: 0,
  progressBarVisible: true,

  createInstantPriceLoading: false,
  createInstantPriceFailed: true,
  createInstantPriceError: null,
  createdInstantPrice: null,

  getInstantPriceLoading: true,
  instantPrice: null,
  getInstantPriceError: null,

  getInstantPriceCalculationLoading: true,
  instantPriceCalculation: {
    homeType: 0,
    homeStoreys: 0,
    roofPitchType: 0,
    roofMaterial: 0,

    sidingMaterialPerSqFt: 0,
    sidingMaterialInstallation: 0,
  },
  getInstantPriceCalculationError: null,
};

const instantPriceSlice = createSlice({
  name: 'instantPrice',
  initialState,
  reducers: {
    goNext: (state) => {
      //common steps

      if (state.renovationType === 'hvac') {
        console.log('HVAC');

        if (state.step === 1) {
          state.step = 2;
          state.subStep = 0;
        } else if (state.step === 2 && state.subStep === 0) {
          state.step = 2;
          state.subStep = 1;
        } else if (state.step === 2 && state.subStep === 1) {
          state.step = 2;
          state.subStep = 2;
        } else if (state.step === 4) {
          state.step = 7;
          state.subStep = 0;
        } else {
          state.step = state.step + 1;
          state.subStep = 0;
        }
      } else {
        console.log('Roofing Siding');
        if (state.step === 1) {
          state.step = 2;
          state.subStep = 0;
        } else if (state.step === 2 && state.subStep === 0) {
          state.step = 2;
          state.subStep = 1;
        } else if (state.step === 2 && state.subStep === 1) {
          state.step = 2;
          state.subStep = 2;
        } else if (state.step === 2 && state.subStep === 2) {
          // if (state.renovationType === 'roofing') {
          //   state.step = 3;
          // } else {
          //   state.step = 4;
          // }
          state.step = 5;
          state.subStep = 0;
        } else if (state.step === 5) {
          state.step = 7;
          state.subStep = 0;
        } else {
          state.step = state.step + 1;
          state.subStep = 0;
        }
      }
    },

    goBack: (state) => {
      if (state.step === 1) {
        return;
      } else if (state.step === 2 && state.subStep === 0) {
        state.step = 1;
        state.subStep = 0;
      } else if (state.step === 2 && state.subStep === 1) {
        state.step = 2;
        state.subStep = 0;
      } else if (state.step === 2 && state.subStep === 2) {
        state.step = 2;
        state.subStep = 1;
      } else if (
        // state.step === 3 ||
        state.step === 5 ||
        (state.step === 4 && state.renovationType === 'siding')
      ) {
        state.step = 2;
        state.subStep = 2;
      } else {
        state.step = state.step - 1;
        state.subStep = 0;
      }
    },

    setRenovationType: (state, action) => {
      state.renovationType = action.payload;
    },

    hideProgressBar: (state) => {
      state.progressBarVisible = false;
    },

    createInstantPriceLoading: (state, action) => {
      state.createInstantPriceLoading = action.payload;
    },

    createInstantPriceFailed: (state, action) => {
      state.createInstantPriceFailed = true;
      state.createInstantPriceError = action.payload;
    },

    createInstantPriceSuccess: (state, action) => {
      state.createdInstantPrice = action.payload;
      state.createInstantPriceFailed = false;
    },

    setInstantPriceLoading: (state, action) => {
      state.getInstantPriceLoading = action.payload;
    },

    getInstantPriceFailed: (state, action) => {
      state.getInstantPriceError = action.payload;
      state.instantPrice = null;
    },

    getInstantPriceSuccess: (state, action) => {
      state.instantPrice = action.payload;
      state.getInstantPriceError = null;
    },

    setInstantPriceCalculationLoading: (state, action) => {
      state.getInstantPriceCalculationLoading = action.payload;
    },

    getInstantPriceCalculationFailed: (state, action) => {
      state.getInstantPriceCalculationError = action.payload;
      state.instantPriceCalculation = null;
    },

    getInstantPriceCalculationSuccess: (state, action) => {
      state.instantPriceCalculation = action.payload;
      state.getInstantPriceCalculationError = null;
    },
  },
});

export default instantPriceSlice.reducer;

export const {
  setRenovationType,
  goNext,
  goBack,
  hideProgressBar,
  createInstantPriceLoading,
  createInstantPriceFailed,
  createInstantPriceSuccess,

  setInstantPriceLoading,
  getInstantPriceFailed,
  getInstantPriceSuccess,

  setInstantPriceCalculationLoading,
  getInstantPriceCalculationFailed,
  getInstantPriceCalculationSuccess,
} = instantPriceSlice.actions;

export const createInstantPrice =
  (data: any, setSubmitting: any = null): AppThunk =>
  async (dispatch: AppDispatch) => {
    try {
      console.log(data);
      //start Instna
      dispatch(createInstantPriceLoading(true));
      const instantPrice = await InstantPriceService.create(data);
      console.log(instantPrice);

      if (setSubmitting) setSubmitting(false);

      gtag_report_conversion();

      dispatch(goNext());

      dispatch(createInstantPriceSuccess(instantPrice));
    } catch (error) {
      console.log('Failed create instant price');
      console.log(error);
    } finally {
      dispatch(createInstantPriceLoading(false));
    }
  };

export const fetchInstantPrice =
  (id: string): AppThunk =>
  async (dispatch: AppDispatch) => {
    try {
      console.log(id);
      dispatch(setInstantPriceLoading(true));
      const instantPrice = await InstantPriceService.get(id);
      console.log(instantPrice);

      dispatch(getInstantPriceSuccess(instantPrice));
    } catch (error) {
      console.log('Failed fetching instant price');
      console.log(error);
      dispatch(getInstantPriceFailed(error));
    } finally {
      dispatch(setInstantPriceLoading(false));
    }
  };

export const fetchInstantPriceCalculation =
  (id: string): AppThunk =>
  async (dispatch: AppDispatch) => {
    try {
      console.log(id);
      dispatch(setInstantPriceCalculationLoading(true));
      const instantPriceCalculation = await InstantPriceService.pricing(id);
      console.log(instantPriceCalculation);

      dispatch(getInstantPriceCalculationSuccess(instantPriceCalculation));
    } catch (error) {
      console.log('Failed fetching instant price');
      console.log(error);
      dispatch(getInstantPriceCalculationFailed(error));
    } finally {
      dispatch(setInstantPriceCalculationLoading(false));
    }
  };
