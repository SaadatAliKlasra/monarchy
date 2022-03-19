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

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import Navigation from '../../components/Navigation/Navigation';

import { useSelector, useDispatch } from 'react-redux';
// import { ReactComponent as FacebookLogo } from '../../assets/images/facebook-icon.svg';
import { createUserFromInstantPriceId } from '../../slices/userSlice';

export default (props: any) => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = React.useState(false);
  const instantPriceId = props.match.params.id;
  useEffect(() => {}, []);

  const formik = useFormik({
    initialValues: {
      password: '',
    },
    validationSchema: Yup.object().shape({
      password: Yup.string().required(),
    }),
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      dispatch(
        createUserFromInstantPriceId(
          {
            instantPriceId,
            password: values.password,
          },
          props.history,
          setSubmitting
        )
      );
    },
  });

  return (
    <>
      <Navigation />
      <Container maxWidth="sm" style={{ paddingBottom: '32px' }}>
        <Box mt={16}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <h1 className="title text-center">
                Create an account to save your estimate.
              </h1>
            </Grid>
            <Grid item xs={12}>
              <p
                className="subtitle-sm fw-m text-center mb4"
                style={{ marginBottom: '48px' }}
              >
                Add a password so we can save your estimate.
              </p>
            </Grid>
          </Grid>
        </Box>

        <form onSubmit={formik.handleSubmit}>
          <Box
            display="flex"
            flexDirection="column"
            width="100%"
            justifyContent="center"
            mb={4}
          >
            <div>
              <TextField
                fullWidth
                name="password"
                className="field"
                placeholder="Password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type={showPassword ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Button
                variant="outlined"
                className="btn"
                style={{ marginTop: '40px', width: '200px' }}
                type="submit"
                disabled={formik.isSubmitting}
              >
                Continue
              </Button>
            </div>
          </Box>
        </form>

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
