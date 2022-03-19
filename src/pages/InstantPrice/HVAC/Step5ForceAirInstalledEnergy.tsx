import React, { useState } from 'react';
import { Box, Button, Container, Grid } from '@material-ui/core';
import { motion, AnimatePresence } from 'framer-motion';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import CardRadioInput from '../../../components/CardRadioInput/CardRadioInput';
import goBack from '../goBack';
import goNext from '../goNext';

export default (props: any) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box mt={16}>
        <Grid container spacing={4} justify="center">
          <Grid item xs={12}>
            <h1 className="title text-center">
              {props.formik.values.centralHeatingSystemInstalled === 'no' ||
              props.formik.values.heatingType == 'electricBaseboardHeating'
                ? 'How would you like to power your forced-air heating system?'
                : 'What type of energy does your forced-air heating system currently use?'}
            </h1>
          </Grid>
          <Grid item xs={12} md={8}>
            <p className="subtitle-sm fw-m text-center mb4">
              {/* Costs vary by the type of home, so this helps tailour our
              estimate. */}
            </p>
          </Grid>
        </Grid>

        <div className="fancy-input-container">
          <CardRadioInput
            imgSrc={require('../../../assets/images/monarchy-gas.svg')}
            imgSrcSelected={require('../../../assets/images/monarchy-gas-selected.svg')}
            forcedAirPowerImages
            fillFull
            for="naturalGas"
            name="forcedAirPowerType[]"
            id="naturalGas"
            title="Natural gas"
            subtitle="Uses energy from natural gas to heat your home"
            value="naturalGas"
            checked={props.formik.values.forcedAirPowerType === 'naturalGas'}
            onClick={() => {
              props.formik.setFieldValue('forcedAirPowerType', 'naturalGas');
              goNext();
            }}
          />

          <CardRadioInput
            imgSrc={require('../../../assets/images/monarchy-electricity.svg')}
            imgSrcSelected={require('../../../assets/images/monarchy-electricity-selected.svg')}
            forcedAirPowerImages
            fillFull
            for="electricPowered"
            name="forcedAirPowerType[]"
            id="electricPowered"
            title="Electric-powered"
            subtitle="Generally a more expensive heating option"
            value="electricPowered"
            checked={
              props.formik.values.forcedAirPowerType === 'electricPowered'
            }
            onClick={() => {
              props.formik.setFieldValue(
                'forcedAirPowerType',
                'electricPowered'
              );
              goNext();
            }}
          />

          <CardRadioInput
            fillFull
            imgSrc={require('../../../assets/images/monarchy-question-marks.svg')}
            imgSrcSelected={require('../../../assets/images/monarchy-question-marks-selected.svg')}
            forcedAirPowerImages
            forcedAirPowerImagesQuestionMark
            for="dontknow"
            name="forcedAirPowerType[]"
            id="dontknow"
            title="I don't know"
            value="dontknow"
            checked={props.formik.values.forcedAirPowerType === 'dontknow'}
            onClick={() => {
              props.formik.setFieldValue('forcedAirPowerType', 'dontknow');
              goNext();
            }}
          />
        </div>

        <a className="instant-quote__previous-link" onClick={() => goBack()}>
          <ArrowBackIcon /> Previous step
        </a>
      </Box>
    </motion.div>
  );
};
