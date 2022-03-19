import React, { useState } from 'react';
import { Box, Button, Container, Grid } from '@material-ui/core';
import { motion, AnimatePresence } from 'framer-motion';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import CardRadioInput from '../../components/CardRadioInput/CardRadioInput';
import goBack from './goBack';
import goNext from './goNext';

export default (props: any) => {
  console.log(props);
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
              What type of material do you want?
            </h1>
          </Grid>
          <Grid item xs={12} md={10}>
            <p className="subtitle-sm fw-m text-center mb4">
              Prices vary based on the quality of material you want. You will be
              able to choose colours later.
            </p>
          </Grid>
        </Grid>

        {props.formik.values.roofPitchType === 'under2Inch' ? (
          <div className="fancy-input-container">
            <CardRadioInput
              for="coldFlat"
              name="roofMaterial"
              id="coldFlat"
              title="Cold flat roof"
              subtitle="Insulation is between and below the roof joists"
              value="coldFlat"
              checked={props.formik.values.roofMaterial === 'coldFlat'}
              onClick={() => {
                props.formik.setFieldValue('roofMaterial', 'coldFlat');
                goNext();
              }}
            />
            <CardRadioInput
              for="singlePly"
              name="roofMaterial"
              id="singlePly"
              title="Single Ply"
              subtitle="Created from strong and flexible membranes"
              value="singlePly"
              checked={props.formik.values.roofMaterial === 'singlePly'}
              onClick={() => {
                props.formik.setFieldValue('roofMaterial', 'singlePly');
                goNext();
              }}
            />
            <CardRadioInput
              for="twoPly"
              name="roofMaterial"
              id="twoPly"
              title="Two-ply"
              subtitle="Most popular flat roofing system"
              value="twoPly"
              checked={props.formik.values.roofMaterial === 'twoPly'}
              onClick={() => {
                props.formik.setFieldValue('roofMaterial', 'twoPly');
                goNext();
              }}
            />

            <CardRadioInput
              for="dontKnow"
              name="roofMaterial"
              id="dontKnow"
              title="I don't know"
              value="dontKnow"
              checked={props.formik.values.roofMaterial === 'dontKnow'}
              onClick={() => {
                props.formik.setFieldValue('roofMaterial', 'dontKnow');
                goNext();
              }}
            />
          </div>
        ) : (
          <div className="fancy-input-container">
            <CardRadioInput
              imgSrc="/images/Landmark Asphalt Shingles.jpeg"
              for="asphalt"
              name="roofMaterial"
              id="asphalt"
              title="Asphalt shingles"
              subtitle="Most popular roofing material"
              value="asphalt"
              checked={props.formik.values.roofMaterial === 'asphalt'}
              onClick={() => {
                props.formik.setFieldValue('roofMaterial', 'asphalt');
                goNext();
              }}
            />
            <CardRadioInput
              imgSrc="/images/Northgate SBS Asphalt Shingles.jpg"
              for="SBS"
              name="roofMaterial"
              id="SBS"
              title="SBS modified shingles"
              subtitle="Differentiated appearance and functionality"
              value="SBS"
              checked={props.formik.values.roofMaterial === 'SBS'}
              onClick={() => {
                props.formik.setFieldValue('roofMaterial', 'SBS');
                goNext();
              }}
            />
            <CardRadioInput
              imgSrc="images/Matterhorn Metal Roof.jpg"
              for="metal"
              name="roofMaterial"
              id="metal"
              title="Metal"
              subtitle="Durable and energy-efficient"
              value="metal"
              checked={props.formik.values.roofMaterial === 'metal'}
              onClick={() => {
                props.formik.setFieldValue('roofMaterial', 'metal');
                goNext();
              }}
            />
            <CardRadioInput
              for="dontKnow"
              name="roofMaterial"
              id="dontKnow"
              title="I don't know"
              value="dontKnow"
              checked={props.formik.values.roofMaterial === 'dontKnow'}
              onClick={() => {
                props.formik.setFieldValue('roofMaterial', 'dontKnow');
                goNext();
              }}
            />
          </div>
        )}

        <a className="instant-quote__previous-link" onClick={() => goBack()}>
          <ArrowBackIcon /> Previous step
        </a>
      </Box>
    </motion.div>
  );
};
