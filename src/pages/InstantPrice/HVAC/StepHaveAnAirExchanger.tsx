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
              Do you currently have an air exchanger in your home?
            </h1>
          </Grid>
          <Grid item xs={12} md={10}>
            <p className="subtitle-sm fw-m text-center mb4">
              {/* Costs vary by the type of home, so this helps tailour our
              estimate. */}
              {props.formik.values.centralHeatingSystemInstalled === 'yes' &&
                `Air exchangers work by circulating stale indoor air out of your home and circulating 
                in fresh air from outside. Exchangers use one fan and vent system to blow indoor air 
                outside, while another sucks fresh air in.`}
            </p>
          </Grid>
        </Grid>

        <div className="fancy-input-container">
          <CardRadioInput
            for="haveAnAirExchangerYes"
            name="installAirExchanger[]"
            id="haveAnAirExchangerYes"
            title="Yes"
            value="haveAnAirExchangerYes"
            checked={props.formik.values.haveAnAirExchanger === 'yes'}
            onClick={() => {
              props.formik.setFieldValue('haveAnAirExchanger', 'yes');
              goNext();
            }}
          />

          <CardRadioInput
            for="haveAnAirExchangerNo"
            name="haveAnAirExchanger[]"
            id="haveAnAirExchangerNo"
            title="No"
            value="haveAnAirExchangerNo"
            checked={props.formik.values.haveAnAirExchanger === 'no'}
            onClick={() => {
              props.formik.setFieldValue('haveAnAirExchanger', 'no');
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
