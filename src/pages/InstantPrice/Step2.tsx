import React, { useState } from 'react';
import { Box, Button, Container, Grid } from '@material-ui/core';
import { motion, AnimatePresence } from 'framer-motion';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import CardRadioInput from '../../components/CardRadioInput/CardRadioInput';
import goNext from './goNext';
import goBack from './goBack';

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
              What type of home do you have?
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
            for="detached"
            name="homeType[]"
            id="detached"
            title="Detached home"
            value="detachedHome"
            checked={props.formik.values.homeType === 'detachedHome'}
            onClick={() => {
              props.formik.setFieldValue('homeType', 'detachedHome');
              goNext();
            }}
          />

          <CardRadioInput
            for="semiDetachedHome"
            name="homeType[]"
            id="semiDetachedHome"
            title="Semi-detached home"
            value="semiDetachedHome"
            checked={props.formik.values.homeType === 'semiDetachedHome'}
            onClick={() => {
              props.formik.setFieldValue('homeType', 'semiDetachedHome');
              goNext();
            }}
          />

          <CardRadioInput
            for="Townhome"
            name="homeType[]"
            id="Townhome"
            title="Townhome"
            value="townHome"
            checked={props.formik.values.homeType === 'townHome'}
            onClick={() => {
              props.formik.setFieldValue('homeType', 'townHome');
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
