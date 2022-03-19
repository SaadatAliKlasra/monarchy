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
              {props.formik.values.centralHeatingSystemInstalled === 'no' ||
              (props.formik.centralHeatingSystemInstalled === 'yes' &&
                props.formik.values.coolingType === 'nothing' &&
                props.formik.values.heatingType === 'electricBaseboardHeating')
                ? 'How would you like to cool your home?'
                : 'How do you currently cool your home?'}
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
            imgSrc={'/images/Split.jpg'}
            for="splitSystem"
            name="coolingType[]"
            id="splitSystem"
            title="Split system"
            subtitle="Usually mounted on a wall and commonly used to cool a single room"
            value="split"
            checked={props.formik.values.coolingType === 'split'}
            onClick={() => {
              props.formik.setFieldValue('coolingType', 'split');
              goNext();
            }}
          />

          {props.formik.values.heatingType === 'forcedAirCentralHeating' && (
            <CardRadioInput
              imgSrc={'/images/Packaged.jpg'}
              for="packagedSystem"
              name="coolingType[]"
              id="packagedSystem"
              title="Packaged system"
              subtitle="Usually mounted on a wall and commonly used to cool a single room"
              value="packaged"
              checked={props.formik.values.coolingType === 'packaged'}
              onClick={() => {
                props.formik.setFieldValue('coolingType', 'packaged');
                goNext();
              }}
            />
          )}

          <CardRadioInput
            for="nothing"
            name="coolingType[]"
            id="nothing"
            title="Nothing"
            value="nothing"
            checked={props.formik.values.coolingType === 'nothing'}
            onClick={() => {
              props.formik.setFieldValue('coolingType', 'nothing');
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
