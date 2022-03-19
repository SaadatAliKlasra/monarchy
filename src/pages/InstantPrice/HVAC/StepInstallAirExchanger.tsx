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
              Do you want to install an air exchanger?
            </h1>
          </Grid>
          <Grid item xs={12} md={10}>
            <p className="subtitle-sm fw-m text-center mb4">
              {props.formik.values.centralHeatingSystemInstalled === 'no' &&
                `Air exchangers work by circulating stale indoor air out of your
              home and circulating in fresh air from outside. Exchangers use one
              fan and vent system to blow indoor air outside, while another
              sucks fresh air in.`}
            </p>
          </Grid>
        </Grid>

        <div className="fancy-input-container">
          <CardRadioInput
            for="installAirExchangerYes"
            name="installAirExchanger[]"
            id="installAirExchangerYes"
            title="Yes"
            value="installAirExchangerYes"
            checked={props.formik.values.installAirExchanger === 'yes'}
            onClick={() => {
              props.formik.setFieldValue('installAirExchanger', 'yes');
              goNext();
            }}
          />

          <CardRadioInput
            for="installAirExchangerNo"
            name="installAirExchanger[]"
            id="installAirExchangerNo"
            title="No"
            value="installAirExchangerNo"
            checked={props.formik.values.installAirExchanger === 'no'}
            onClick={() => {
              props.formik.setFieldValue('installAirExchanger', 'no');
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
