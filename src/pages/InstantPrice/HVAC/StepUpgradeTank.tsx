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
              Do you want to upgrade your hot water tank?
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
            for="updgradeHotWaterTankYes"
            name="updgradeHotWaterTank[]"
            id="updgradeHotWaterTankYes"
            title="Yes"
            value="updgradeHotWaterTankYes"
            checked={props.formik.values.upgradeHotWaterTank === 'yes'}
            onClick={() => {
              props.formik.setFieldValue('upgradeHotWaterTank', 'yes');
              goNext();
            }}
          />

          <CardRadioInput
            for="updgradeHotWaterTankNo"
            name="updgradeHotWaterTank[]"
            id="updgradeHotWaterTankNo"
            title="No"
            value="updgradeHotWaterTankNo"
            checked={props.formik.values.upgradeHotWaterTank === 'no'}
            onClick={() => {
              props.formik.setFieldValue('upgradeHotWaterTank', 'no');
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
