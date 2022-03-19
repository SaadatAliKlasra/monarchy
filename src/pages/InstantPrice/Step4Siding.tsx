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

        <div className="fancy-input-container">
          <CardRadioInput
            imgSrc="images/Heading-Siding.jpg"
            for="vinyl"
            name="sidingMaterial"
            id="vinyl"
            title="Vinyl"
            subtitle="Most popular Siding material"
            value="vinyl"
            checked={props.formik.values.sidingMaterial === 'vinyl'}
            onClick={() => {
              props.formik.setFieldValue('sidingMaterial', 'vinyl');
              goNext();
            }}
          />
          <CardRadioInput
            imgSrc="images/Stucco.jpg"
            for="stucco"
            name="sidingMaterial"
            id="stucco"
            title="Stucco"
            subtitle="Lasting durability and low maintenance"
            value="stucco"
            checked={props.formik.values.sidingMaterial === 'stucco'}
            onClick={() => {
              props.formik.setFieldValue('sidingMaterial', 'stucco');
              goNext();
            }}
          />
          <CardRadioInput
            imgSrc="images/Engineered Wood Siding.jpg"
            for="engineeredWoodSiding"
            name="sidingMaterial"
            id="engineeredWoodSiding"
            title="Engineered wood siding"
            subtitle="Durability, versatility, and low maintenance"
            value="engineeredWoodSiding"
            checked={
              props.formik.values.sidingMaterial === 'engineeredWoodSiding'
            }
            onClick={() => {
              props.formik.setFieldValue(
                'sidingMaterial',
                'engineeredWoodSiding'
              );
              goNext();
            }}
          />
          <CardRadioInput
            imgSrc="images/Cedar Shake.jpg"
            for="cedarShake"
            name="sidingMaterial"
            id="cedarShake"
            title="Cedar shake"
            subtitle="Stylish, sustainable, and durable"
            value="cedarShake"
            checked={props.formik.values.sidingMaterial === 'cedarShake'}
            onClick={() => {
              props.formik.setFieldValue('sidingMaterial', 'cedarShake');
              goNext();
            }}
          />
          <CardRadioInput
            for="dontKnow"
            name="sidingMaterial"
            id="dontKnow"
            title="I don't know"
            value="dontKnow"
            checked={props.formik.values.sidingMaterial === 'dontKnow'}
            onClick={() => {
              props.formik.setFieldValue('sidingMaterial', 'dontKnow');
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
