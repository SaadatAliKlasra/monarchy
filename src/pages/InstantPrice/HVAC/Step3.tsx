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
              Do you currently have a central heating system installed?
            </h1>
          </Grid>
          <Grid item xs={12} md={10}>
            <p className="subtitle-sm fw-m text-center mb4">
              You may have electric baseboard heat in your home, a natural gas
              furnace, air conditioning or a hot water tank that needs to be
              replaced or installed.
            </p>
          </Grid>
        </Grid>

        <div className="fancy-input-container">
          <CardRadioInput
            for="centralHeatingSystemInstalledYes"
            name="centralHeatingSystemInstalled[]"
            id="centralHeatingSystemInstalledYes"
            title="Yes"
            subtitle="Existing equipment that may need to be replaced"
            value="centralHeatingSystemInstalledYes"
            checked={
              props.formik.values.centralHeatingSystemInstalled === 'yes'
            }
            onClick={() => {
              props.formik.setFieldValue(
                'centralHeatingSystemInstalled',
                'yes'
              );
              goNext();
            }}
          />

          <CardRadioInput
            for="centralHeatingSystemInstalledNo"
            name="centralHeatingSystemInstalled[]"
            id="centralHeatingSystemInstalledNo"
            title="No"
            subtitle="For new builds that require an HVAC solution"
            value="centralHeatingSystemInstalledNo"
            checked={props.formik.values.centralHeatingSystemInstalled === 'no'}
            onClick={() => {
              props.formik.setFieldValue('centralHeatingSystemInstalled', 'no');
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
