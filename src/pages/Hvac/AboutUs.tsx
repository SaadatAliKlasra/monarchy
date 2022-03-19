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
                  <h1 className="title">Hvac</h1>
                  <p className="subtitle fw-m">
                  Whether you are looking to replace an old furnace or install a brand new air conditioning unit, we can offer you a hassle free install. We offer the top heating and cooling, water heating and air quality products on the markets and can back them up with extended warranties.  Dealing with contractors doesn't need to be stressful.  Call us today for a no obligation quote.
                  </p>
                  <Link to="/instant-price" className="btn-link">
                    <Button
                      className="btn btn-primary"
                      size="large"
                      variant="contained"
                    >
                      Get a free estimate
                      <ArrowForwardIcon
                        style={{ marginLeft: '8px', fontSize: '18px' }}
                      />
                    </Button>
                  </Link>
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
      <Footer />
    </div>
  );
};
