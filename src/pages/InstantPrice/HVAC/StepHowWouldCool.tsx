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
              How would you like to cool your home?
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
            imgSrc={'/images/Split.jpg'}
            for="splitSystem"
            name="howWouldCoolingType[]"
            id="splitSystem"
            title="Split system"
            subtitle="Usually mounted on a wall and commonly used to cool a single room"
            value="split"
            checked={props.formik.values.howWouldCoolingType === 'split'}
            onClick={() => {
              props.formik.setFieldValue('howWouldCoolingType', 'split');
              goNext();
            }}
          />

          {props.formik.values.upgradeToForcedAir === 'yes' ||
            (props.formik.values.upgradeToForcedAir === '' && (
              <CardRadioInput
                imgSrc={'/images/Packaged.jpg'}
                for="packageSystem"
                name="howWouldCoolingType[]"
                id="packageSystem"
                title="Packaged system"
                subtitle="Uses the vents commonly used for your furnace to cool your entire home"
                value="package"
                checked={props.formik.values.howWouldCoolingType === 'packaged'}
                onClick={() => {
                  props.formik.setFieldValue('howWouldCoolingType', 'packaged');
                  goNext();
                }}
              />
            ))}

          <CardRadioInput
            for="dontknow"
            name="howWouldCoolingType[]"
            id="dontknow"
            title="I don't know"
            value="dontknow"
            checked={props.formik.values.howWouldCoolingType === 'dontknow'}
            onClick={() => {
              props.formik.setFieldValue('howWouldCoolingType', 'dontknow');
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
