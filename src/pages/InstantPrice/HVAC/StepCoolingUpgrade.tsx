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
              Would you like to upgrade your central AC system to a packaged
              system?
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
            for="upgradeToForcedAirYes"
            name="upgradeToForcedAir[]"
            id="upgradeToForcedAirYes"
            title="Yes"
            value="upgradeToForcedAirYes"
            checked={props.formik.values.upgradeToForcedAir === 'yes'}
            onClick={() => {
              props.formik.setFieldValue('upgradeToForcedAir', 'yes');
              goNext();
            }}
          />

          <CardRadioInput
            for="upgradeToForcedAirNo"
            name="upgradeToForcedAir[]"
            id="upgradeToForcedAirNo"
            title="No"
            value="upgradeToForcedAirNo"
            checked={props.formik.values.upgradeToForcedAir === 'no'}
            onClick={() => {
              props.formik.setFieldValue('upgradeToForcedAir', 'no');
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
