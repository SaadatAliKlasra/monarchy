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
              What is the size of your home?
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
            for="below1500"
            name="homeSize"
            id="below1500"
            title="Below 1,500 sq. ft."
            value="below1500"
            checked={props.formik.values.homeSize === 'below1500'}
            onClick={() => {
              props.formik.setFieldValue('homeSize', 'below1500');
              goNext();
            }}
          />
          <CardRadioInput
            for="btw1500&2000"
            name="homeSize"
            id="btw1500&2000"
            title="Between 1,500 and 2,000 sq. ft."
            value="btw1500&2000"
            checked={props.formik.values.homeSize === 'btw1500&2000'}
            onClick={() => {
              props.formik.setFieldValue('homeSize', 'btw1500&2000');
              goNext();
            }}
          />
          <CardRadioInput
            for="over2000"
            name="homeSize"
            id="over2000"
            value="over2000"
            title="Over 2,000 sq. ft."
            checked={props.formik.values.homeSize === 'over2000'}
            onClick={() => {
              props.formik.setFieldValue('homeSize', 'over2000');
              goNext();
            }}
          />
          <CardRadioInput
            for="dontKnow"
            name="homeSize"
            id="dontKnow"
            title="I don't know"
            value="dontKnow"
            checked={props.formik.values.homeSize === 'dontKnow'}
            onClick={() => {
              props.formik.setFieldValue('homeSize', 'dontKnow');
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
