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
              Would you like a hot water tank or a tankless heating system?
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
            for="tankOrTanklessSystem1"
            name="tankOrTanklessSystem[]"
            id="tankOrTanklessSystem1"
            title="Hot water tank"
            subtitle="Stores heated water in a tank until it's needed"
            value="hotWaterTank"
            checked={
              props.formik.values.tankOrTanklessSystem === 'hotWaterTank'
            }
            onClick={() => {
              props.formik.setFieldValue(
                'tankOrTanklessSystem',
                'hotWaterTank'
              );
              goNext();
            }}
          />

          <CardRadioInput
            for="tankOrTanklessSystem2"
            name="tankOrTanklessSystem[]"
            id="tankOrTanklessSystem2"
            title="Tankless water heater"
            subtitle="Only heats water as it's needed"
            value="tanklessWaterHeater"
            checked={
              props.formik.values.tankOrTanklessSystem === 'tanklessWaterHeater'
            }
            onClick={() => {
              props.formik.setFieldValue(
                'tankOrTanklessSystem',
                'tanklessWaterHeater'
              );
              goNext();
            }}
          />

          <CardRadioInput
            for="tankOrTanklessSystemDontKnow"
            name="tankOrTanklessSystem[]"
            id="tankOrTanklessSystemDontKnow"
            title="I don't know"
            value="dontknow"
            checked={props.formik.values.tankOrTanklessSystem === 'dontknow'}
            onClick={() => {
              props.formik.setFieldValue('tankOrTanklessSystem', 'dontknow');
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
