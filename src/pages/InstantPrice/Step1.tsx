import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { Box, Container, Grid } from '@material-ui/core';

import CardRadioInput from '../../components/CardRadioInput/CardRadioInput';
import { setRenovationType } from '../../slices/instantPriceSlice';
import goNext from './goNext';

export default (props: any) => {
  const dispatch = useDispatch();

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
            <h1 className="title text-center text-center">
              Get a free roofing, siding, or HVAC estimate.
            </h1>
          </Grid>
          <Grid item xs={12} md={10}>
            <p className="subtitle-sm fw-m text-center mb4">
              Answer a few questions about your roofing, siding or HVAC project
              and receive a free consultation, which includes a free,
              all-inclusive estimate with a breakdown of our costs.
            </p>
          </Grid>
        </Grid>

        <div className="fancy-input-container">
          <CardRadioInput
            for="roofing"
            value="roofing"
            name="renovationType"
            id="roofing"
            title="Roofing"
            subtitle="Asphalt roof, metal roof, and flat roofs"
            imgSrc={'/images/Roofing.jpg'}
            checked={props.formik.values.renovationType === 'roofing'}
            onClick={() => {
              props.formik.setFieldValue('renovationType', 'roofing');
              dispatch(setRenovationType('roofing'));
              goNext();
            }}
          />

          <CardRadioInput
            for="siding"
            value="siding"
            name="renovationType"
            id="siding"
            title="Siding"
            subtitle="Vinyl and wood siding, stucco, and cedar shakes"
            imgSrc={'/images/Heading-Siding.jpg'}
            checked={props.formik.values.renovationType === 'siding'}
            onClick={() => {
              props.formik.setFieldValue('renovationType', 'siding');
              dispatch(setRenovationType('siding'));
              goNext();
            }}
          />

          <CardRadioInput
            for="hvac"
            value="hvac"
            name="renovationType"
            id="hvac"
            title="HVAC"
            subtitle="Heating, ventilation, and air conditioning"
            imgSrc={'/images/HVAC.jpg'}
            checked={props.formik.values.renovationType === 'hvac'}
            onClick={() => {
              props.formik.setFieldValue('renovationType', 'hvac');
              dispatch(setRenovationType('hvac'));
              goNext();
            }}
          />

          <CardRadioInput
            for="atticInsulation"
            value="atticInsulation"
            name="renovationType"
            id="atticInsulation"
            title="Insulation"
            subtitle="Significantly decrease your heating and cooling bills"
            imgSrc={'/images/monarchy-attic-insulation.png'}
            checked={props.formik.values.renovationType === 'atticInsulation'}
            onClick={() => {
              props.formik.setFieldValue('renovationType', 'atticInsulation');
              dispatch(setRenovationType('atticInsulation'));
              goNext();
            }}
          />
        </div>
      </Box>
    </motion.div>
  );
};
