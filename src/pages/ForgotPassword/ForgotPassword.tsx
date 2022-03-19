import React, { useEffect } from 'react';

import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  CircularProgress,
  InputAdornment,
  IconButton,
} from '@material-ui/core';

import { Link } from 'react-router-dom';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import { motion, AnimatePresence } from 'framer-motion';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { useSelector, useDispatch } from 'react-redux';
import { ReactComponent as FacebookLogo } from '../../assets/images/facebook-icon.svg';
import { RootState } from '../../rootReducer';

import Navigation from '../../components/Navigation/Navigation';

export default (props: any) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <>
      <Navigation />
      <Container maxWidth="sm" style={{ paddingBottom: '32px' }}>
        <Box mt={16} mb={5}>
          <Grid container spacing={4} justify="center">
            <Grid item xs={12}>
              <h1 className="title text-center">Forgot password</h1>
            </Grid>
          </Grid>
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          width="100%"
          justifyContent="center"
          mb={4}
        >
          <form onSubmit={formik.handleSubmit}>
            <TextField
              name="email"
              fullWidth
              className="field"
              placeholder="Email"
              style={{ marginBottom: '16px' }}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={Boolean(formik.errors.email && formik.touched.email)}
            />
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Button
                variant="contained"
                className="btn btn-primary"
                style={{ marginTop: '40px', width: '200px' }}
                type="submit"
              >
                Submit
              </Button>
            </div>
          </form>
        </Box>

        {/* <Grid container>
          <Grid item xs={12} md={6}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
              mt={4}
            >
              <p
                style={{
                  fontWeight: 'normal',
                  fontSize: '14px',
                  lineHeight: '19px',
                  color: '#9b9b9b',
                  marginBottom: '8px',
                }}
              >
                Or continue with Facebook
              </p>

              <Button
                className="btn btn-primary btn-facebook"
                variant="contained"
                type="submit"
              >
                <FacebookLogo /> Continue with Facebook
              </Button>
            </Box>
          </Grid>
        </Grid> */}
      </Container>
    </>
  );
};
