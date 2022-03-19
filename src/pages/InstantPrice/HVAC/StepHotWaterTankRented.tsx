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
          <Grid item xs={12} md={10}>
            <h1 className="title text-center">
              Is your hot water tank rented?
            </h1>
          </Grid>
          <Grid item xs={12} md={10}>
            <p className="subtitle-sm fw-m text-center mb4">
              {/* Costs vary by the type of home, so this helps tailour our
              estimate. */}
            </p>
          </Grid>
        </Grid>

        <div className="fancy-input-container">
          <CardRadioInput
            for="hotWaterTankRentedYes"
            name="hotWaterTankRented[]"
            id="hotWaterTankRentedYes"
            title="Yes"
            value="hotWaterTankRentedYes"
            checked={props.formik.values.hotWaterTankRented === 'yes'}
            onClick={() => {
              props.formik.setFieldValue('hotWaterTankRented', 'yes');
              goNext();
            }}
          />

          <CardRadioInput
            for="hotWaterTankRentedNo"
            name="hotWaterTankRented[]"
            id="hotWaterTankRentedNo"
            title="No"
            value="hotWaterTankRentedNo"
            checked={props.formik.values.hotWaterTankRented === 'no'}
            onClick={() => {
              props.formik.setFieldValue('hotWaterTankRented', 'no');
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
