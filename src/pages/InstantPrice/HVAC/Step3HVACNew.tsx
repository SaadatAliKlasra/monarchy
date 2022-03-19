import React, { useState } from 'react';
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
} from '@material-ui/core';
import { motion, AnimatePresence } from 'framer-motion';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import CardRadioInput from '../../../components/CardRadioInput/CardRadioInput';
import goBack from '../goBack';
import goNext from '../goNext';

export default (props: any) => {
  const handleCheckbox = (fieldValue: string, fieldName: string) => {
    const arrayField = props.formik.values[fieldName].slice();
    console.log(arrayField);
    if (arrayField.indexOf(fieldValue) >= 0) {
      arrayField.splice(arrayField.indexOf(fieldValue), 1);

      props.formik.setFieldValue(fieldName, arrayField);
    } else {
      arrayField.push(fieldValue);
      props.formik.setFieldValue(fieldName, arrayField);
    }
    console.log(arrayField);
  };

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
              Tell us which HVAC products and services you’d like a free quote
              for.
            </h1>
          </Grid>
          <Grid item xs={12} md={10}>
            <p className="subtitle-sm fw-m text-center mb4">
              Select any options that apply and continue.
            </p>
          </Grid>
        </Grid>

        <div className="fancy-input-container">
          <CardRadioInput
            checkbox
            for="hvacServiceType1"
            name="heatingServices[]"
            id="hvacServiceType1"
            title="Heating"
            value="heating"
            checked={props.formik.values.hvacServices.indexOf('heating') !== -1}
            onClick={() => {
              handleCheckbox('heating', 'hvacServices');
            }}
          />

          <CardRadioInput
            checkbox
            for="hvacServiceType2"
            name="hvacServiceType[]"
            id="hvacServiceType2"
            title="Ventilation"
            value="ventilation"
            checked={
              props.formik.values.hvacServices.indexOf('ventilation') !== -1
            }
            onClick={() => {
              handleCheckbox('ventilation', 'hvacServices');
            }}
          />

          <CardRadioInput
            checkbox
            for="hvacServiceType3"
            name="hvacServiceType[]"
            id="hvacServiceType3"
            title="Air Conditioning"
            value="airConditioning"
            checked={
              props.formik.values.hvacServices.indexOf('airConditioning') !== -1
            }
            onClick={() => {
              handleCheckbox('airConditioning', 'hvacServices');
            }}
          />

          <CardRadioInput
            checkbox
            for="hvacServiceType4"
            name="hvacServiceType[]"
            id="hvacServiceType4"
            title="Hot Water Systems"
            value="hotWaterSystems"
            checked={
              props.formik.values.hvacServices.indexOf('hotWaterSystems') !== -1
            }
            onClick={() => {
              handleCheckbox('hotWaterSystems', 'hvacServices');
            }}
          />
        </div>

        <Grid container spacing={4} justify="center">
          <Grid item xs={12} md={10}>
            <Box display="flex" mt={4} justifyContent="center" width="100%">
              <Button
                className="btn btn-primary"
                variant="contained"
                type="submit"
                onClick={() => goNext()}
              >
                Continue
              </Button>
            </Box>
          </Grid>
        </Grid>

        <a className="instant-quote__previous-link" onClick={() => goBack()}>
          <ArrowBackIcon /> Previous step
        </a>
      </Box>
    </motion.div>
  );
};
