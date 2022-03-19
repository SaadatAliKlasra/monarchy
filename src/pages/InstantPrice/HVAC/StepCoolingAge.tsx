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
              How old is your central AC system?
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
            for="coolingAge"
            name="coolingAge[]"
            id="coolingAge"
            title="25 years or more"
            value="25YearsOrMore"
            checked={props.formik.values.coolingAge === '25YearsOrMore'}
            onClick={() => {
              props.formik.setFieldValue('coolingAge', '25YearsOrMore');
              goNext();
            }}
          />

          <CardRadioInput
            for="forcedAriAge15To15Years"
            name="coolingAge[]"
            id="forcedAriAge15To15Years"
            title="10-15 years"
            value="10To15Years"
            checked={props.formik.values.coolingAge === '10To15Years'}
            onClick={() => {
              props.formik.setFieldValue('coolingAge', '10To15Years');
              goNext();
            }}
          />

          <CardRadioInput
            for="forcedAriAgeDontKnow"
            name="coolingAge[]"
            id="forcedAriAgeDontKnow"
            title="I don't know"
            value="dontknow"
            checked={props.formik.values.coolingAge === 'dontknow'}
            onClick={() => {
              props.formik.setFieldValue('coolingAge', 'dontknow');
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
