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
              How do you currently heat your home?
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
            imgSrc={'/images/Vent.jpg'}
            for="forcedAirCentralHeating"
            name="heatingType[]"
            id="forcedAirCentralHeating"
            title="Forced-air central heating"
            value="forcedAirCentralHeating"
            checked={
              props.formik.values.heatingType === 'forcedAirCentralHeating'
            }
            onClick={() => {
              props.formik.setFieldValue(
                'heatingType',
                'forcedAirCentralHeating'
              );
              goNext();
            }}
          />

          <CardRadioInput
            imgSrc={'/images/Baseboard.jpg'}
            for="electricBaseboardHeating"
            name="heatingType[]"
            id="electricBaseboardHeating"
            title="Electric baseboard heating"
            value="electricBaseboardHeating"
            checked={
              props.formik.values.heatingType === 'electricBaseboardHeating'
            }
            onClick={() => {
              props.formik.setFieldValue(
                'heatingType',
                'electricBaseboardHeating'
              );
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
