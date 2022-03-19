import React from 'react';
import {
  Avatar,
  Box,
  Button,
  Grid,
  TextField,
  CircularProgress,
} from '@material-ui/core';
import MaskedInput from 'react-text-mask';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CallIcon from '@material-ui/icons/Call';

import CTA from '../../components/CTA/CTA';

import goBack from './goBack';

interface TextMaskCustomProps {
  inputRef: (ref: HTMLInputElement | null) => void;
}

function TextMaskCustom(props: TextMaskCustomProps) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref: any) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[
        '(',
        /[1-9]/,
        /\d/,
        /\d/,
        ')',
        ' ',
        /\d/,
        /\d/,
        /\d/,
        '-',
        /\d/,
        /\d/,
        /\d/,
        /\d/,
      ]}
    />
  );
}

export default (props: any) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box mt={16}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <h1 className="title text-center">Just a few more details.</h1>
          </Grid>
          <Grid item xs={12}>
            <p
              className="subtitle-sm fw-m text-center mb4"
              style={{ marginBottom: '24px' }}
            >
              Tell us where we can get in touch with you to discuss your project
              and provide you with a free, all-inclusive estimate.
            </p>
          </Grid>
        </Grid>

        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Box mb={5}>
              <CTA
                hideButton
                noMarginTop
                noMarginTopImageArea
                contractor={
                  props.formik.renovationType === 'roofing' ? 'Joey' : 'Joey'
                }
              />
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={2} alignItems="center" justify="center">
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              placeholder="First name"
              name="firstName"
              className="field"
              onBlur={props.formik.handleBlur}
              onChange={props.formik.handleChange}
              error={
                props.formik.errors.firstName && props.formik.touched.firstName
              }
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              placeholder="Email address"
              name="emailAddress"
              className="field"
              onChange={props.formik.handleChange}
              onBlur={props.formik.handleBlur}
              error={
                props.formik.errors.emailAddress &&
                props.formik.touched.emailAddress
              }
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              placeholder="Phone number"
              name="phoneNumber"
              className="field"
              onBlur={props.formik.handleBlur}
              onChange={props.formik.handleChange}
              error={
                props.formik.errors.phoneNumber &&
                props.formik.touched.phoneNumber
              }
              InputProps={{
                inputComponent: TextMaskCustom as any,
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              placeholder="Address"
              name="address"
              className="field"
              onBlur={props.formik.handleBlur}
              onChange={props.formik.handleChange}
              error={
                props.formik.errors.address && props.formik.touched.address
              }
            />
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              style={{ marginTop: '8px' }}
              fullWidth
              placeholder="Timeline"
              name="timeline"
              className="field"
              onChange={props.formik.handleChange}
              onBlur={props.formik.handleBlur}
              error={
                props.formik.errors.timeline && props.formik.touched.timeline
              }
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} alignItems="center" justify="center">
          <Grid item xs={12} md={10}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
              mt={5}
            >
              <Button
                className="btn btn-primary"
                variant="contained"
                type="submit"
                disabled={props.formik.isSubmitting}
              >
                <CircularProgress
                  style={{ opacity: props.formik.isSubmitting ? 1 : 0 }}
                  size="20px"
                />
                <span style={{ opacity: props.formik.isSubmitting ? 0 : 1 }}>
                  {/* {props.formik.values.renovationType === 'hvac'
                    ? 'Request a free quote'
                    : 'See my Instant Price'} */}
                  Request a free quote
                </span>
              </Button>
              <a
                className="instant-quote__previous-link"
                style={{
                  position: 'relative',
                  bottom: 0,
                  marginTop: '16px',
                  marginBottom: '48px',
                }}
                onClick={() => goBack()}
              >
                <ArrowBackIcon /> Previous step
              </a>
              <p
                className="text-align-left"
                style={{
                  fontSize: '12px',
                  lineHeight: '17px',
                  color: '#9b9b9b',
                  fontWeight: 'normal',
                }}
              >
                Your contact information is protected by our{' '}
                <Link to="/privacy-policy">Privacy Policy</Link> aand is not
                shared with any third parties. By pressing “Request a free
                quote”, you consent to receive marketing emails, calls, and
                texts from Monarchy Build, including by automated means. You may
                opt-out at any time and consent is not a condition of a sale.
              </p>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </motion.div>
  );
};
