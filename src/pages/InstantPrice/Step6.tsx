import React from 'react';
import { Box, Grid, CircularProgress } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReplyIcon from '@material-ui/icons/Reply';

export default (props: any) => {
  const [resendEmailLoading, setResendEmailLoading] = React.useState(false);

  const handleResendEmail = () => {
    if (resendEmailLoading) {
      return;
    }

    setResendEmailLoading(true);

    setTimeout(() => {
      setResendEmailLoading(false);
    }, 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <Box mt={16}>
        <Grid container justify="center" spacing={4}>
          <Grid item xs={12} md={10}>
            <h1 className="title text-center">
              {/* {props.formik.values.renovationType === 'hvac' */}
              {/* ? ` */}
              Thanks, {props.formik.values.firstName}
              {/* ` */}
              {/* : `${props.formik.values.firstName}, check your inbox.`} */}
            </h1>
          </Grid>
          <Grid item xs={12} md={10}>
            {/* {props.formik.values.renovationType === 'hvac' ? ( */}
            <>
              <p
                style={{
                  marginBottom: '1em',
                  fontSize: '22px',
                  lineHeight: '32px',
                  fontWeight: 500,
                }}
              >
                A Royally-Certified™{' '}
                {props.formik.values.renovationType === 'hvac' ? (
                  'HVAC'
                ) : props.formik.values.renovationType === 'atticInsulation' ? (
                  'Insulation'
                ) : (
                  <span style={{ textTransform: 'capitalize' }}>
                    {props.formik.values.renovationType}
                  </span>
                )}{' '}
                Contractor will contact you to discuss the details of your
                project and schedule a time to see your space.
              </p>

              <p
                style={{
                  marginBottom: '1em',
                  fontSize: '22px',
                  lineHeight: '32px',
                  fontWeight: 500,
                }}
              >
                We want to remind you that there are no obligations tied to this
                consultation - this is an opportunity for us to meet and for you
                to ask questions. There are no up-front costs either and the
                quote is entirely free.
              </p>
              <p
                style={{
                  marginBottom: '1em',
                  fontSize: '22px',
                  lineHeight: '32px',
                  fontWeight: 500,
                }}
              >
                We look forward to working with you.
              </p>
            </>
            {/* ) : (
              <p className="subtitle-sm fw-m text-center mb4">
                We just sent you an email with a link to access your estimate by
                email.
              </p>
            )} */}
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12} md={6}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
              mt={4}
            >
              {/* <p
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
              </Button> */}

              {/* props.formik.values.renovationType !== 'hvac' && (
                <a
                  className="instant-quote__previous-link instant-quote__previous-link--fixed-bottom resend-email-link"
                  onClick={handleResendEmail}
                >
                  <span style={{ opacity: resendEmailLoading ? 0 : 1 }}>
                    Resend email
                    <ReplyIcon />
                  </span>
                  <CircularProgress
                    size="24"
                    style={{
                      position: 'absolute',
                      opacity: resendEmailLoading ? 1 : 0,
                      margin: 0,
                      padding: 0,
                    }}
                  />
                </a> 
              )*/}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </motion.div>
  );
};
