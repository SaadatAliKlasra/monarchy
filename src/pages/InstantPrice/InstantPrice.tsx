import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Container, Grid } from '@material-ui/core';
import { motion, AnimatePresence } from 'framer-motion';
import { useFormik, FieldArray } from 'formik';
import * as Yup from 'yup';
import { Helmet } from 'react-helmet';

import Navigation from '../../components/Navigation/Navigation';

import Step1 from './Step1';
import Step2 from './Step2';
import Step21 from './Step21';
import Step22 from './Step22';

import Step3Roofing from './Step3Roofing';
import Step4Roofing from './Step4Roofing';
import Step4Siding from './Step4Siding';

import Step3HVACNew from './HVAC/Step3HVACNew';

// import Step3HVAC from './HVAC/Step3';
// import Step4HVAC from './HVAC/Step4';
// import StepUpgradeToForcedAir from './HVAC/StepUpgradeToForcedAir';
// import Step5ForceAirInstalledEnergy from './HVAC/Step5ForceAirInstalledEnergy';
// import Step6ForceAirInstalledAge from './HVAC/Step6ForceAirInstalledAge';
// import StepCoolingAge from './HVAC/StepCoolingAge';
// import StepInstallAirExchanger from './HVAC/StepInstallAirExchanger';
// import StepAirExchangerAge from './HVAC/StepAirExchangerAge';

// import StepInstallHotWaterTank from './HVAC/StepInstallHotWaterTank';
// import StepTankAge from './HVAC/StepTankAge';
// import StepTankOrTankless from './HVAC/StepTankOrTankless';
// import StepUpgradeTank from './HVAC/StepUpgradeTank';
// import StepHotWaterTankRented from './HVAC/StepHotWaterTankRented';

// import StepHowCool from './HVAC/StepHowCool';
// import StepHowWouldCool from './HVAC/StepHowWouldCool';

// import StepHaveAnAirExchanger from './HVAC/StepHaveAnAirExchanger';
// import StepUpgradeACToPackaged from './HVAC/StepUpgradeACToPackaged';

import Step5 from './Step5';
import Step6 from './Step6';

import { RootState } from '../../rootReducer';
import {
  hideProgressBar,
  createInstantPrice,
  setRenovationType,
} from '../../slices/instantPriceSlice';

import './InstantPrice.scss';

export default (props: any) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      address: '',
      emailAddress: '',
      firstName: '',
      phoneNumber: '',

      renovationType: '',

      homeType: '',
      homeStoreys: '',
      homeSize: '',

      roofPitchType: '',
      roofMaterial: '',

      sidingMaterial: '',

      //heating services

      hvacServices: [],

      // centralHeatingSystemInstalled: '',

      // heatingType: '',
      // coolingType: '',
      // howWouldCoolingType: '',
      // upgradeToPackaged: '',
      // upgradeToForcedAir: '',

      // forcedAirAge: '',
      // coolingAge: '',

      // haveAnAirExchanger: '',
      // installAirExchanger: '',
      // airExchangerAge: '',

      // upgradeHotWaterTank: '',
      // isHotWaterTankRented: '',
      // hotWaterTankAge: '',
      // tankOrTanklessSystem: '',
      // hotWaterTankRented: '',

      // installHotWaterTank: '',
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string().required(),
      emailAddress: Yup.string().email().required(),
      phoneNumber: Yup.string()
        .matches(/^[(][0-9]{3}[)][ ][0-9]{3}-[0-9]{4}$/)
        .required(),
      address: Yup.string().required(),
      timeline: Yup.string(),
      renovationType: Yup.string()
        .oneOf(['siding', 'roofing', 'hvac', 'atticInsulation'])
        .required(),
      homeType: Yup.string().required(),
      homeStoreys: Yup.string().required(),
      homeSize: Yup.string().required(),
      roofPitchType: Yup.string().when('renovationType', {
        is: (val) => val === 'roofing',
        // then: Yup.string().required(),
        then: Yup.string(),
        otherwise: Yup.string(),
      }),
      roofMaterial: Yup.string().when('renovationType', {
        is: (val) => val === 'roofing',
        // then: Yup.string().required(),
        then: Yup.string(),
        otherwise: Yup.string(),
      }),
      sidingMaterial: Yup.string().when('renovationType', {
        is: (val) => val === 'siding',
        // then: Yup.string().required(),
        then: Yup.string(),
        otherwise: Yup.string(),
      }),

      //HVAC
      //hvac services
      hvacServices: Yup.array().when('renovationType', {
        is: (val) => val === 'hvac',
        then: Yup.array().required(),
        otherwise: Yup.array(),
      }),
      // centralHeatingSystemInstalled: Yup.string(),
      // heatingType: Yup.string(),
      // coolingType: Yup.string(),
      // howWouldCoolingType: Yup.string(),
      // upgradeToPackaged: Yup.string(),

      // upgradeToForcedAir: Yup.string(),
      // forcedAirAge: Yup.string(),
      // coolingAge: Yup.string(),

      // haveAnAirExchanger: Yup.string(),
      // installAirExchanger: Yup.string(),
      // airExchangerAge: Yup.string(),

      // upgradeHotWaterTank: Yup.string(),
      // isHotWaterTankRented: Yup.string(),
      // hotWaterTankAge: Yup.string(),
      // tankOrTanklessSystem: Yup.string(),
      // hotWaterTankRented: Yup.string(),

      // installHotWaterTank: Yup.string(),
    }),

    onSubmit: (values, { setSubmitting }) => {
      // alert(JSON.stringify(values, null, 2));
      setSubmitting(true);
      console.log(values);

      try {
        dispatch(createInstantPrice(values, setSubmitting));
      } catch (err) {
        console.log(err);
      } finally {
      }
    },
  });

  const step = useSelector((state: RootState) => state.instantPrice.step);
  const subStep = useSelector((state: RootState) => state.instantPrice.subStep);

  useEffect(() => {
    if (formik.values.renovationType !== 'hvac') {
      if (step === 7) {
        setTimeout(() => {
          dispatch(hideProgressBar());
        }, 500);
      }
    }
  }, [step]);

  const renderStepContent = () => {
    console.log(step);
    console.log(subStep);

    if (step === 1) {
      return <Step1 formik={formik} />;
    }

    if (step === 2 && subStep === 0) {
      return <Step2 formik={formik} />;
    }

    if (step === 2 && subStep === 1) {
      return <Step21 formik={formik} />;
    }

    if (step === 2 && subStep === 2) {
      return <Step22 formik={formik} />;
    }

    if (formik.values.renovationType === 'hvac') {
      if (step === 3) {
        return <Step3HVACNew formik={formik} />;
      }

      if (step === 4) {
        return <Step5 formik={formik} />;
      }

      if (step === 7) {
        return <Step6 formik={formik} />;
      }
    }

    // if (formik.values.renovationType === 'hvac') {
    //   if (step === 3) {
    //     return <Step3HVAC formik={formik} />;
    //   }

    //   if (formik.values.centralHeatingSystemInstalled === 'yes') {
    //     console.log('Heating sys installed');
    //     if (step === 4) {
    //       return <Step4HVAC formik={formik} />;
    //     }

    //     if (formik.values.heatingType === 'forcedAirCentralHeating') {
    //       if (step === 5) {
    //         return <Step5ForceAirInstalledEnergy formik={formik} />;
    //       }

    //       if (step === 6) {
    //         return <Step6ForceAirInstalledAge formik={formik} />;
    //       }

    //       if (step === 7) {
    //         return <StepHowCool formik={formik} />;
    //       }

    //       if (formik.values.coolingType === 'nothing') {
    //         if (step === 8) {
    //           return <StepHowWouldCool formik={formik} />;
    //         }

    //         if (step === 9) {
    //           return <StepHaveAnAirExchanger formik={formik} />;
    //         }

    //         if (step === 10) {
    //           if (formik.values.haveAnAirExchanger === 'yes') {
    //             return <StepAirExchangerAge formik={formik} />;
    //           } else {
    //             return <StepInstallAirExchanger formik={formik} />;
    //           }
    //         }

    //         if (step === 11) {
    //           return <StepUpgradeTank formik={formik} />;
    //         }

    //         if (formik.values.upgradeHotWaterTank === 'yes') {
    //           if (step === 12) {
    //             return <StepHotWaterTankRented formik={formik} />;
    //           }

    //           if (step === 13) {
    //             return <StepTankAge formik={formik} />;
    //           }

    //           if (step === 14) {
    //             return <StepTankOrTankless formik={formik} />;
    //           }

    //           if (step === 15) {
    //             return <Step5 formik={formik} />;
    //           }
    //         } else {
    //           if (step === 12) {
    //             return <Step5 formik={formik} />;
    //           }
    //         }
    //       }

    //       if (
    //         formik.values.coolingType === 'split' ||
    //         formik.values.coolingType === 'packaged'
    //       ) {
    //         if (step === 8) {
    //           return <StepCoolingAge formik={formik} />;
    //         }

    //         if (step === 9) {
    //           return <StepHaveAnAirExchanger formik={formik} />;
    //         }

    //         if (step === 10) {
    //           if (formik.values.haveAnAirExchanger === 'yes') {
    //             return <StepAirExchangerAge formik={formik} />;
    //           } else {
    //             return <StepInstallAirExchanger formik={formik} />;
    //           }
    //         }

    //         if (step === 11) {
    //           return <StepUpgradeTank formik={formik} />;
    //         }

    //         if (formik.values.upgradeHotWaterTank === 'yes') {
    //           if (step === 12) {
    //             return <StepHotWaterTankRented formik={formik} />;
    //           }

    //           if (step === 13) {
    //             return <StepTankAge formik={formik} />;
    //           }

    //           if (step === 14) {
    //             return <StepTankOrTankless formik={formik} />;
    //           }

    //           if (step === 15) {
    //             return <Step5 formik={formik} />;
    //           }
    //         } else {
    //           if (step === 12) {
    //             return <Step5 formik={formik} />;
    //           }
    //         }
    //       }

    //       if (formik.values.coolingType === 'split') {
    //         if (step === 9) {
    //           return <StepUpgradeACToPackaged formik={formik} />;
    //         }

    //         if (step === 10) {
    //           return <StepHaveAnAirExchanger formik={formik} />;
    //         }

    //         if (step === 11) {
    //           if (formik.values.haveAnAirExchanger === 'yes') {
    //             return <StepAirExchangerAge formik={formik} />;
    //           } else {
    //             return <StepInstallAirExchanger formik={formik} />;
    //           }
    //         }

    //         if (step === 12) {
    //           return <StepUpgradeTank formik={formik} />;
    //         }

    //         if (formik.values.upgradeHotWaterTank === 'yes') {
    //           if (step === 13) {
    //             return <StepHotWaterTankRented formik={formik} />;
    //           }

    //           if (step === 14) {
    //             return <StepTankAge formik={formik} />;
    //           }

    //           if (step === 15) {
    //             return <StepTankOrTankless formik={formik} />;
    //           }

    //           if (step === 15) {
    //             return <Step5 formik={formik} />;
    //           }
    //         } else {
    //           if (step === 13) {
    //             return <Step5 formik={formik} />;
    //           }
    //         }
    //       }

    //       if (formik.values.coolingType === 'packaged') {
    //         if (step === 9) {
    //           return <StepHaveAnAirExchanger formik={formik} />;
    //         }

    //         if (step === 10) {
    //           if (formik.values.haveAnAirExchanger === 'yes') {
    //             return <StepAirExchangerAge formik={formik} />;
    //           } else {
    //             return <StepInstallAirExchanger formik={formik} />;
    //           }
    //         }

    //         if (step === 11) {
    //           return <StepUpgradeTank formik={formik} />;
    //         }

    //         if (formik.values.upgradeHotWaterTank === 'yes') {
    //           if (step === 12) {
    //             return <StepHotWaterTankRented formik={formik} />;
    //           }

    //           if (step === 13) {
    //             return <StepTankAge formik={formik} />;
    //           }

    //           if (step === 14) {
    //             return <StepTankOrTankless formik={formik} />;
    //           }

    //           if (step === 15) {
    //             return <Step5 formik={formik} />;
    //           }
    //         } else {
    //           if (step === 12) {
    //             return <Step5 formik={formik} />;
    //           }
    //         }
    //       }
    //     }

    //     if (formik.values.heatingType === 'electricBaseboardHeating') {
    //       if (step === 5) {
    //         return <StepUpgradeToForcedAir formik={formik} />;
    //       }

    //       if (formik.values.upgradeToForcedAir === 'yes') {
    //         if (step === 6) {
    //           return <Step5ForceAirInstalledEnergy formik={formik} />;
    //         }

    //         if (step === 7) {
    //           return <StepHowCool formik={formik} />;
    //         }

    //         if (formik.values.coolingType === 'nothing') {
    //           if (step === 8) {
    //             return <StepHowWouldCool formik={formik} />;
    //           }

    //           if (step === 9) {
    //             return <StepHaveAnAirExchanger formik={formik} />;
    //           }

    //           if (step === 10) {
    //             if (formik.values.haveAnAirExchanger === 'yes') {
    //               return <StepAirExchangerAge formik={formik} />;
    //             } else {
    //               return <StepInstallAirExchanger formik={formik} />;
    //             }
    //           }

    //           if (step === 11) {
    //             return <StepUpgradeTank formik={formik} />;
    //           }

    //           if (formik.values.upgradeHotWaterTank === 'yes') {
    //             if (step === 12) {
    //               return <StepHotWaterTankRented formik={formik} />;
    //             }

    //             if (step === 13) {
    //               return <StepTankAge formik={formik} />;
    //             }

    //             if (step === 14) {
    //               return <StepTankOrTankless formik={formik} />;
    //             }

    //             if (step === 15) {
    //               return <Step5 formik={formik} />;
    //             }
    //           } else {
    //             if (step === 12) {
    //               return <Step5 formik={formik} />;
    //             }
    //           }
    //         }

    //         if (
    //           formik.values.coolingType === 'split' ||
    //           formik.values.coolingType === 'packaged'
    //         ) {
    //           if (step === 8) {
    //             return <StepCoolingAge formik={formik} />;
    //           }
    //         }

    //         if (formik.values.coolingType === 'split') {
    //           if (step === 9) {
    //             return <StepUpgradeACToPackaged formik={formik} />;
    //           }

    //           if (step === 10) {
    //             return <StepHaveAnAirExchanger formik={formik} />;
    //           }

    //           if (step === 11) {
    //             if (formik.values.haveAnAirExchanger === 'yes') {
    //               return <StepAirExchangerAge formik={formik} />;
    //             } else {
    //               return <StepInstallAirExchanger formik={formik} />;
    //             }
    //           }

    //           if (step === 12) {
    //             return <StepUpgradeTank formik={formik} />;
    //           }

    //           if (formik.values.upgradeHotWaterTank === 'yes') {
    //             if (step === 13) {
    //               return <StepHotWaterTankRented formik={formik} />;
    //             }

    //             if (step === 14) {
    //               return <StepTankAge formik={formik} />;
    //             }

    //             if (step === 15) {
    //               return <StepTankOrTankless formik={formik} />;
    //             }

    //             if (step === 16) {
    //               return <Step5 formik={formik} />;
    //             }
    //           } else {
    //             if (step === 13) {
    //               return <Step5 formik={formik} />;
    //             }
    //           }
    //         }

    //         if (formik.values.coolingType === 'packaged') {
    //           if (step === 9) {
    //             return <StepHaveAnAirExchanger formik={formik} />;
    //           }

    //           if (step === 10) {
    //             if (formik.values.haveAnAirExchanger === 'yes') {
    //               return <StepAirExchangerAge formik={formik} />;
    //             } else {
    //               return <StepInstallAirExchanger formik={formik} />;
    //             }
    //           }

    //           if (step === 11) {
    //             return <Step5 formik={formik} />;
    //           }

    //           if (step === 12) {
    //             return <StepUpgradeTank formik={formik} />;
    //           }

    //           if (formik.values.upgradeHotWaterTank === 'yes') {
    //             if (step === 13) {
    //               return <StepHotWaterTankRented formik={formik} />;
    //             }

    //             if (step === 14) {
    //               return <StepTankAge formik={formik} />;
    //             }

    //             if (step === 15) {
    //               return <StepTankOrTankless formik={formik} />;
    //             }

    //             if (step === 16) {
    //               return <Step5 formik={formik} />;
    //             }
    //           } else {
    //             if (step === 13) {
    //               return <Step5 formik={formik} />;
    //             }
    //           }
    //         }
    //       }

    //       if (formik.values.upgradeToForcedAir === 'no') {
    //         if (step === 6) {
    //           return <StepHowCool formik={formik} />;
    //         }

    //         if (formik.values.coolingType === 'nothing') {
    //           if (step === 7) {
    //             return <StepHowWouldCool formik={formik} />;
    //           }

    //           if (step === 8) {
    //             return <StepHaveAnAirExchanger formik={formik} />;
    //           }

    //           if (step === 9) {
    //             if (formik.values.haveAnAirExchanger === 'yes') {
    //               return <StepAirExchangerAge formik={formik} />;
    //             } else {
    //               return <StepInstallAirExchanger formik={formik} />;
    //             }
    //           }

    //           if (step === 10) {
    //             return <StepUpgradeTank formik={formik} />;
    //           }

    //           if (formik.values.upgradeHotWaterTank === 'yes') {
    //             if (step === 11) {
    //               return <StepHotWaterTankRented formik={formik} />;
    //             }

    //             if (step === 12) {
    //               return <StepTankAge formik={formik} />;
    //             }

    //             if (step === 13) {
    //               return <StepTankOrTankless formik={formik} />;
    //             }

    //             if (step === 14) {
    //               return <Step5 formik={formik} />;
    //             }
    //           } else {
    //             if (step === 11) {
    //               return <Step5 formik={formik} />;
    //             }
    //           }
    //         }

    //         if (
    //           formik.values.coolingType === 'split' ||
    //           formik.values.coolingType === 'packaged'
    //         ) {
    //           if (step === 7) {
    //             return <StepCoolingAge formik={formik} />;
    //           }
    //         }

    //         if (formik.values.coolingType === 'split') {
    //           if (step === 8) {
    //             return <StepHaveAnAirExchanger formik={formik} />;
    //           }

    //           if (step === 9) {
    //             if (formik.values.haveAnAirExchanger === 'yes') {
    //               return <StepAirExchangerAge formik={formik} />;
    //             } else {
    //               return <StepInstallAirExchanger formik={formik} />;
    //             }
    //           }

    //           if (step === 10) {
    //             return <StepUpgradeTank formik={formik} />;
    //           }

    //           if (formik.values.upgradeHotWaterTank === 'yes') {
    //             if (step === 11) {
    //               return <StepHotWaterTankRented formik={formik} />;
    //             }

    //             if (step === 12) {
    //               return <StepTankAge formik={formik} />;
    //             }

    //             if (step === 13) {
    //               return <StepTankOrTankless formik={formik} />;
    //             }

    //             if (step === 14) {
    //               return <Step5 formik={formik} />;
    //             }
    //           } else {
    //             if (step === 11) {
    //               return <Step5 formik={formik} />;
    //             }
    //           }
    //         }
    //       }
    //     }
    //   } else {
    //     console.log('No heating sys installed');
    //     if (step === 4) {
    //       return <Step5ForceAirInstalledEnergy formik={formik} />;
    //     }

    //     if (step === 5) {
    //       return <StepHowWouldCool formik={formik} />;
    //     }

    //     if (step === 6) {
    //       return <StepInstallAirExchanger formik={formik} />;
    //     }

    //     if (step === 7) {
    //       return <StepInstallHotWaterTank formik={formik} />;
    //     }

    //     if (step === 8) {
    //       if (formik.values.installHotWaterTank === 'yes') {
    //         return <StepTankOrTankless formik={formik} />;
    //       } else {
    //         return <Step5 formik={formik} />;
    //       }
    //     }

    //     if (step === 9) {
    //       return <Step5 formik={formik} />;
    //     }
    //   }
    // }

    if (formik.values.renovationType === 'roofing') {
      // if (step === 3) {
      //   return <Step3Roofing formik={formik} />;
      // }

      // if (step === 4) {
      //   return <Step4Roofing formik={formik} />;
      // }

      if (step === 5) {
        return <Step5 formik={formik} />;
      }

      if (step === 7) {
        return <Step6 formik={formik} />;
      }
    }

    if (
      formik.values.renovationType === 'siding' ||
      formik.values.renovationType === 'atticInsulation'
    ) {
      console.log('in siding');
      // if (step === 4) {
      //   return <Step4Siding formik={formik} />;
      // }

      if (step === 5) {
        return <Step5 formik={formik} />;
      }

      if (step === 7) {
        return <Step6 formik={formik} />;
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>
          Instant Price – Monarchy Build Roofing, Siding & HVAC in Ottawa
        </title>
      </Helmet>

      {console.log(formik.errors)}

      <Navigation instantPrice />

      <Container maxWidth="md" style={{ paddingBottom: '32px' }}>
        <form
          className="instant-price-form"
          onSubmit={formik.handleSubmit}
          autoComplete="off"
        >
          <AnimatePresence>{renderStepContent()}</AnimatePresence>
        </form>
      </Container>
    </>
  );
};
