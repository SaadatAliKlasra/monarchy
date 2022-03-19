import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  Collapse,
  IconButton,
} from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Link } from 'react-router-dom';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import StarIcon from '@material-ui/icons/Star';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';
import { motion } from 'framer-motion';

import Footer from '../../components/Footer/Footer';
import CTA from '../../components/CTA/CTA';

import { ReactComponent as BBBCertification } from '../../assets/images/monarchy-certifications-bbb.svg';
import { ReactComponent as CertainteedCertification } from '../../assets/images/monarchy-certifications-certainteed.svg';
import { ReactComponent as HomestarsCertification } from '../../assets/images/monarchy-certifications-homestars.svg';

import Navigation from '../../components/Navigation/Navigation';

import './AboutUs.scss';

const headerImageRoofing = '/images/Heading-Roofing.jpg';
const headerImageSiding = '/images/Heading-Siding.jpg';

export default (props: any) => {
  useEffect(() => {
    window?.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Container>
        <Navigation />

        <Grid container spacing={4} className="home-intro" alignItems="center">
          <Grid item xs={12} md={12}>
            <div className="home-intro__container">
              <motion.div
                className="home-intro__text"
                initial={{
                  x: '-100%',
                }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
              >
                <div className="home-intro__text__grey-overflow" />
                <div className="home-intro__text__inner">
                  <h1 className="title">About us</h1>
                  <p className="subtitle fw-m">
                    Monarchy offers roofing, siding, insulation, and HVAC
                    installations throughout Ottawa.
                  </p>
                  <p className="subtitle fw-m">
                  We are Monarchy Build:
                  Locally Owned and Operated
                  A+ BBB Accredited
                  5 Stars Google Rating
                  Credited Federal Contractor
                  For more than a decade, Joey and his team of Royally-Certified™ Contractors have served the nation's capital, installing and repairing roofs, and siding, insulation, as well as HVAC solutions.
                  </p>

                  <p className="subtitle fw-m">
                    We provide you with a local team of Royally-Certified™
                    Contractors, and quality materials and construction for an
                    all-in-one, build experience.
                  </p>
                </div>
              </motion.div>

              <motion.img
                initial={{
                  x: '100%',
                  opacity: 0,
                }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 1,
                  duration: 1,
                  ease: 'easeInOut',
                  type: 'tween',
                }}
                className="home-intro__image"
                src={headerImageRoofing}
                alt="Roofing"
              />
            </div>
          </Grid>
        </Grid>
      </Container>

      <Box className=" section-how-we-work" pt={5} pb={5}>
        <Container>
          <Grid container justify="center" spacing={4}>
            <Box mt={3}></Box>

            <Grid item xs={12}>
              <h1 className="title text-center" style={{ marginTop: '50px' }}>
                Who we are
              </h1>
              <p
                className="subtitle text-center"
                style={{ marginTop: '1em', marginBottom: '50px' }}
              >
                Your local team of Royally-Certified™ Contractors.
              </p>
            </Grid>
          </Grid>

          <Grid container spacing={3} alignItems="center" justify="center">
            <Grid item xs={12} md={5} sm={6}>
              <img src="/720 - Profile Picture - Joey.png" />
            </Grid>

            <Grid item xs={12} md={5} sm={6}>
              <h1 className="mb1">Joey Dwaydar</h1>
              <p className="subtitle">Owner</p>
              <p className="subtitle mt-1" style={{ marginTop: '30px' }}>
                For more than a decade, Joey and his team of Royally-Certified™
                Contractors have served the nation's capital, installing and
                repairing roofs, and siding, as well as HVAC solutions.
                <br /> <br />
              </p>
              <p className="subtitle mt-1">
                Joey took on the challenge of starting his own business, back in
                2009, which later expanded to become Monarchy Build in 2020.
                Through his years of experience, Joey saw an opportunity to
                provide a superior building all-in-one build experience.
              </p>
            </Grid>
          </Grid>

          <Box mt={2}></Box>

          <Box className="step1 step">
            <Grid container justify="center" spacing={5}>
              <Grid item xs={12}>
                <h1 className="title text-center" style={{ marginTop: '75px' }}>
                  What we do
                </h1>
                <p
                  className="subtitle text-center"
                  style={{ marginTop: '1em', marginBottom: '50px' }}
                >
                  We’ve reimagined the remodel process through our superior
                  all-in-one build experience.
                </p>
              </Grid>
            </Grid>

            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={4}>
                <img
                  style={{ marginBottom: '1em' }}
                  src="/images/Heading-Roofing.jpg"
                />
                <h1 className="mb1" style={{ marginTop: '50px;' }}>
                  Roofing
                </h1>
                <p className="subtitle mt-1" style={{ marginTop: '1em' }}>
                  From roof repairs to new construction. We install asphalt
                  shingles, flat roofs, and metal roofs.
                </p>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <img
                  style={{ marginBottom: '1em' }}
                  src="/images/Heading-Siding.jpg"
                />
                <h1 className="mb1" style={{ marginTop: '50px;' }}>
                  Siding
                </h1>
                <p className="subtitle mt-1" style={{ marginTop: '1em' }}>
                  We repair old homes and work with new construction using vinyl
                  siding or cedar shakes and many more quality material options.
                </p>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <img style={{ marginBottom: '1em' }} src="/images/HVAC.jpg" />
                <h1 className="mb1" style={{ marginTop: '50px;' }}>
                  HVAC
                </h1>
                <p className="subtitle mt-1" style={{ marginTop: '1em' }}>
                  From new air conditioning and natural gas furnace
                  installations.
                </p>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <img
                  style={{ marginBottom: '1em' }}
                  src="/images/monarchy-attic-insulation.png"
                />
                <h1 className="mb1" style={{ marginTop: '50px;' }}>
                  Insulation
                </h1>
                <p className="subtitle mt-1" style={{ marginTop: '1em' }}>
                  Adding insulation to your home is a way to significantly
                  decrease your heating and cooling bills.
                </p>
              </Grid>
            </Grid>

            <Grid
              container
              justify="center"
              alignItems="center"
              spacing={4}
              className="locally-owned-container"
            >
              <Grid item xs={12} md={4}>
                <h1 className="locally-owned-heading">
                  Locally-owned and family-operated in Ottawa
                </h1>
              </Grid>
              <Grid item xs={12} md={8}>
                <Box className="certifications-container certifications-container--around-desktop">
                  <Grid item xs={6} md={4}>
                    <HomestarsCertification
                      width="113px"
                      style={{ marginBottom: '16px' }}
                    />
                    <p style={{ marginTop: '11px' }}>
                      Highly rated and strongly recommended
                    </p>
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <BBBCertification
                      width="40px"
                      style={{ marginBottom: '16px' }}
                    />
                    <p>Accredited roofing, siding, and HVAC contractor</p>
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <CertainteedCertification
                      width="125px"
                      style={{ marginBottom: '16px' }}
                    />
                    <p>
                      Certainteed ShingleMaster™
                      <br /> shingle roofers
                    </p>
                  </Grid>
                </Box>
              </Grid>
            </Grid>

            {/* <Box mt={5}>
              <Grid container spacing={5}>
                <Grid item xs={12}>
                  <img
                    className="home-intro__image"
                    src="https://placehold.it/384x480"
                  />
                </Grid>
              </Grid>
            </Box> */}
          </Box>
        </Container>
      </Box>

      <Footer />
    </div>
  );
};
