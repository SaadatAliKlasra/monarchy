import React, { useState } from 'react';
import { Box, Button, Container, Grid } from '@material-ui/core';
import { motion, AnimatePresence } from 'framer-motion';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import CardRadioInput from '../../components/CardRadioInput/CardRadioInput';
import goBack from './goBack';
import goNext from './goNext';

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
          <Grid item xs={12} md={10}>
            <h1 className="title text-center">
              How many storeys are in your home?
            </h1>
          </Grid>
          <Grid item xs={12} md={10}>
            <p className="subtitle-sm fw-m text-center mb4">
              Costs vary by the type of home, so this helps tailour our
              estimate.
            </p>
          </Grid>
        </Grid>

        <div className="fancy-input-container">
          <CardRadioInput
            for="bungalow"
            name="homeStoreys"
            id="bungalow"
            title="Bungalow"
            value="bungalow"
            checked={props.formik.values.homeStoreys === 'bungalow'}
            onClick={() => {
              props.formik.setFieldValue('homeStoreys', 'bungalow');
              goNext();
            }}
          />

          <CardRadioInput
            for="twoStorey"
            name="homeStoreys"
            id="twoStorey"
            title="Two storey or more"
            value="twoStoreyOrMore"
            checked={props.formik.values.homeStoreys === 'twoStoreyOrMore'}
            onClick={() => {
              props.formik.setFieldValue('homeStoreys', 'twoStoreyOrMore');
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
