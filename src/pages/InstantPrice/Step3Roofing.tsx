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
        <Grid container justify="center" spacing={4}>
          <Grid item xs={12} md={10}>
            <h1 className="title text-center">
              What is the pitch of your roof?
            </h1>
          </Grid>
          <Grid item xs={12} md={10}>
            <p className="subtitle-sm fw-m text-center mb4">
              The pitch of your roof helps us determine if special ladders and
              scaffolding are required.
            </p>
          </Grid>
        </Grid>

        <div className="fancy-input-container">
          <CardRadioInput
            imgSrc={require('../../assets/images/monarchy-flat-roof.svg')}
            imgSrcSelected={require('../../assets/images/monarchy-flat-roof-selected.svg')}
            fillFull
            for="under2Inch"
            name="roofPitchType"
            id="under2Inch"
            title="Flat"
            subtitle={`Under 2${'\u00B0'}`}
            value="under2Inch"
            roofingImage
            checked={props.formik.values.roofPitchType === 'under2Inch'}
            onClick={() => {
              props.formik.setFieldValue('roofPitchType', 'under2Inch');
              goNext();
            }}
          />

          <CardRadioInput
            fillFull
            imgSrc={require('../../assets/images/monarchy-standard-roof.svg')}
            imgSrcSelected={require('../../assets/images/monarchy-standard-roof-selected.svg')}
            for="between4To8"
            name="roofPitchType"
            id="between4To8"
            title="Standard"
            subtitle={`Between 4${'\u00B0'} to 8${'\u00B0'}`}
            value="between4To8"
            roofingImage
            checked={props.formik.values.roofPitchType === 'between4To8'}
            onClick={() => {
              props.formik.setFieldValue('roofPitchType', 'between4To8');
              goNext();
            }}
          />

          <CardRadioInput
            fillFull
            imgSrc={require('../../assets/images/monarchy-steep-roof.svg')}
            imgSrcSelected={require('../../assets/images/monarchy-steep-roof-selected.svg')}
            for="between9To14"
            name="roofPitchType"
            id="between9To14"
            title="Steep"
            subtitle={`Between 9${'\u00B0'} to 14${'\u00B0'}`}
            value="between9To14"
            roofingImage
            checked={props.formik.values.roofPitchType === 'between9To14'}
            onClick={() => {
              props.formik.setFieldValue('roofPitchType', 'between9To14');
              goNext();
            }}
          />

          <CardRadioInput
            fillFull
            roofingImage
            imgSrc={require('../../assets/images/monarchy-question-marks.svg')}
            imgSrcSelected={require('../../assets/images/monarchy-question-marks-selected.svg')}
            for="dontKnow"
            name="roofPitchType"
            id="dontKnow"
            title="I don't know"
            subtitle={' '}
            value="dontKnow"
            roofingImageQuestionMark
            checked={props.formik.values.roofPitchType === 'dontKnow'}
            onClick={() => {
              props.formik.setFieldValue('roofPitchType', 'dontKnow');
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
