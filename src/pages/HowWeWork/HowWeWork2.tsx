import React, { useEffect, useState } from 'react';
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
import { ReactComponent as HomestarsCertification } from '../../assets/images/monarchy-certifications-homestars.svg';
import { ReactComponent as Logo } from '../../assets/images/monarchy-logo.svg';

import './Home.scss';
import Navigation from '../../components/Navigation/Navigation';

const headerImageRoofing = '/images/Heading-Roofing.jpg';
const headerImageSiding = '/images/Heading-Siding.jpg';
const headerImageHVAC = '/images/HVAC.jpg';

export default (props: any) => {
  const [activeListItem, setActiveListItem] = useState(1);

  useEffect(() => {
    window?.scrollTo(0, 0);
  }, []);

  const renderArrowIconBasedOnState = (listItemNumber: number) => {
    if (listItemNumber === activeListItem) {
      return (
        <IconButton
          style={{
            marginRight: '-8px',
          }}
        >
          <ExpandLess />
        </IconButton>
      );
    }

    return (
      <IconButton
        style={{
          marginRight: '-8px',
        }}
      >
        <ExpandMore />
      </IconButton>
    );
  };

  return (
    <>
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
                  <h1 className="title">Our Services</h1>
                  <p className="subtitle fw-m">
                    Our unique and proprietary all-in-one build experience gives
                    you peace of mind from start to finish.
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

                  <CTA alignLeft noMarginTop hideButton />
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
                src={headerImageSiding}
                alt="Roofing"
              />
            </div>
          </Grid>
        </Grid>
      </Container>

      <Box className="section section-how-we-work">
        <Container>
          <Grid container justify="center" spacing={4}>
            <Grid item xs={12}>
              <h1 className="title text-center">Getting Started</h1>
            </Grid>
            <Grid item xs={10}>
              <p
                className="subtitle-sm fw-m text-center mb4"
                style={{ marginBottom: '32px' }}
              >
                We’ve reimagined the remodel process through our superior
                all-in-one build experience.
              </p>
            </Grid>
          </Grid>

          <Box className="step1 step">
            <Grid container>
              <Grid item xs={12} md={6}>
                <div className="step__content">
                  <div className="step__circle">1</div>

                  <div className="step__content__text">
                    <h2 style={{ marginBottom: '16px' }}>
                      Book a free consultation for a free estimate
                    </h2>
                    <p className="subtitle-sm fw-m">
                      Answer a few questions about your roofing, siding or HVAC
                      project and receive a free consultation, which includes a
                      free, all-inclusive estimate with a breakdown of our
                      costs.
                    </p>
                  </div>
                </div>
              </Grid>

              <Grid item xs={12}>
                <Box position="relative">
                  <img src="/step-1-how-we-work.jpg" />

                  <div className="estimate-box">
                    <h2>
                      Your estimate is:<span>$6,000</span>
                    </h2>

                    <ul>
                      <li>
                        <span>Project management</span> <span>$0</span>
                      </li>
                      <li>
                        <span>Materials</span> <span>$5,000</span>
                      </li>
                      <li>
                        <span>Labour</span> <span>$1,000</span>
                      </li>
                      <li>
                        <span>Subtotal estimate</span> <span>$6,000</span>
                      </li>
                    </ul>

                    <Logo />
                  </div>
                </Box>
              </Grid>
            </Grid>

            <CTA greyBackground />

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

          <Box className="step2 step" mt={5}>
            <Grid container>
              <Grid item xs={12} md={6}>
                <div className="step__content">
                  <div className="step__circle">2</div>

                  <div className="step__content__text">
                    <h2 style={{ marginBottom: '16px' }}>
                      Meet your Royally-Certified™ Contractor to confirm your
                      price
                    </h2>
                    <p className="subtitle-sm fw-m">
                      Our fully licensed Royally-Certified™ Contractor will meet
                      with you to learn more about your project and walk you
                      through our process.
                    </p>
                  </div>
                </div>
              </Grid>
            </Grid>

            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <img src="/step-2-1-how-we-work.jpg" />
              </Grid>
              <Grid item xs={12} md={6}>
                <img src="/step-2-2-how-we-work.jpg" />
              </Grid>
            </Grid>
          </Box>

          <Box className="step3 step" mt={5}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={12}>
                <Grid item xs={12} md={6}>
                  <div className="step__content">
                    <div className="step__circle">3</div>

                    <div className="step__content__text">
                      <h2 style={{ marginBottom: '16px' }}>
                        From material selection and installation to completion
                      </h2>
                      <p className="subtitle-sm fw-m">
                        We handle everything — from site preparation and site
                        cleanup, to material selection, and construction.
                      </p>
                    </div>
                  </div>
                </Grid>
              </Grid>

              <Grid item xs={12} container>
                <ul className="inner-steps">
                  <li className="inner-steps__item">
                    <div className="inner-steps__item__left-area">
                      <div className="step__circle step__circle--small">
                        <DoneIcon />
                      </div>
                      <div className="inner-steps__item__left-area__line"></div>
                    </div>
                    <div className="inner-steps__item__content">
                      <h3 className="inner-steps__item__title">
                        Material selection
                      </h3>
                      {/* <p className="inner-steps__item__para">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Duis et ante mauris. Aenean eleifend dui in libero
                        fermentum, vel vulputate massa rutrum.
                      </p>

                      <Grid item xs={12}>
                        <img
                          className="home-intro__image"
                          src="https://placehold.it/384x480"
                        />
                      </Grid> */}
                    </div>
                  </li>
                  <li className="inner-steps__item">
                    <div className="inner-steps__item__left-area">
                      <div className="step__circle step__circle--small circle--not-in-view">
                        <DoneIcon />
                      </div>
                      <div className="inner-steps__item__left-area__line line--not-in-view"></div>
                    </div>
                    <div className="inner-steps__item__content">
                      <h3 className="inner-steps__item__title">
                        Site preparation
                      </h3>
                      {/* <p className="inner-steps__item__para">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Duis et ante mauris. Aenean eleifend dui in libero
                        fermentum, vel vulputate massa rutrum.
                      </p> */}
                    </div>
                  </li>
                  <li className="inner-steps__item">
                    <div className="inner-steps__item__left-area">
                      <div className="step__circle step__circle--small circle--not-in-view ">
                        <DoneIcon />
                      </div>
                      <div className="inner-steps__item__left-area__line line--not-in-view"></div>
                    </div>
                    <div className="inner-steps__item__content">
                      <h3 className="inner-steps__item__title">Construction</h3>
                      {/* <p className="inner-steps__item__para">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Duis et ante mauris. Aenean eleifend dui in libero
                        fermentum, vel vulputate massa rutrum.
                      </p> */}
                    </div>
                  </li>
                </ul>
              </Grid>

              <Grid item xs={12}>
                <Box mt={2}>
                  <h2 className="text-center mb0" style={{ marginBottom: '0' }}>
                    Get a free all-inclusive estimate
                  </h2>
                  <CTA greyBackground boxMarginTop={2} />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      <Footer />
    </>
  );
};
