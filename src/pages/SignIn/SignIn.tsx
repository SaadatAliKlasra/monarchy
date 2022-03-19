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
import { login } from '../../slices/authSlice';

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
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);

      dispatch(
        login(
          {
            email: values.email,
            password: values.password,
          },
          setSubmitting,
          props.history
        )
      );
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
              <h1 className="title text-center">Sign in</h1>
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
          <form className="sign-in-form" onSubmit={formik.handleSubmit}>
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
            <TextField
              name="password"
              fullWidth
              className="field"
              placeholder="Password"
              type={showPassword ? 'text' : 'password'}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={Boolean(formik.errors.password && formik.touched.password)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              <Button
                variant="contained"
                className="btn btn-primary"
                style={{ marginTop: '40px', width: '200px' }}
                type="submit"
                disabled={formik.isSubmitting}
              >
                <CircularProgress
                  style={{ opacity: formik.isSubmitting ? 1 : 0 }}
                  size="20px"
                />
                <span style={{ opacity: formik.isSubmitting ? 0 : 1 }}>
                  Sign in
                </span>
              </Button>
              <Link
                to="/forgot-password"
                className="instant-quote__previous-link instant-quote__previous-link--fixed-bottom no-text-decoration-default color-secondary-2"
              >
                Forgot password
              </Link>
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
