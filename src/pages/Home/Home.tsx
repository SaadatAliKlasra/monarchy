import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  Collapse,
  IconButton,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import StarIcon from '@material-ui/icons/Star';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';
import { motion } from 'framer-motion';
import Slider from 'react-slick';

import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import CTA from '../../components/CTA/CTA';

import BenefitListDesktop from './BenefitListDesktop';
import BenefitListMobile from './BenefitListMobile';

import { ReactComponent as CertainTeedCertification } from '../../assets/images/monarchy-certifications-certainteed.svg';
import { ReactComponent as BBBCertification } from '../../assets/images/monarchy-certifications-bbb.svg';
import { ReactComponent as HomestarsCertification } from '../../assets/images/monarchy-certifications-homestars.svg';
import { ReactComponent as Logo } from '../../assets/images/monarchy-logo.svg';

import 'slick-carousel/slick/slick.css';
import './Home.scss';

let sliderSettings = {
  speed: 8500,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: 'linear',
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  infinite: true,
  initialSlide: 1,
  arrows: false,
  buttons: false,
  draggable: true,
};

const headerImageRoofing = '/images/Heading-Roofing.jpg';
const headerImageSiding = '/images/Heading-Siding.jpg';
const headerImageHVAC = '/images/HVAC.jpg';

export default (props: any) => {
  const [activeListItem, setActiveListItem] = useState(1);

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
      <Container maxWidth="xl" className="container">
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
                  <h1 className="title">
                  Roofing, Siding, Insulation and HVAC installations done with ease.
                  </h1>
                  <p className="subtitle fw-m" style={{ marginBottom: '1em' }}>
                    Monarchy provides you with its local team of
                    Royally-Certified™ Contractors, and quality materials and
                    construction for an all-in-one, build experience.
                  </p>
                  <p className="subtitle fw-m">
                    Start your roofing or siding project today with $0 down, 0%
                    interest, and equal monthly payments.
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
                src={headerImageRoofing}
                alt="Roofing"
              />
            </div>
          </Grid>
        </Grid>

        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Box className="certifications-container">
              <Grid item xs={6} md={2}>
                <HomestarsCertification
                  width="113px"
                  style={{ marginBottom: '16px' }}
                />
                <p style={{ marginTop: '11px' }}>
                  Highly rated and strongly recommended
                </p>
              </Grid>
              <Grid item xs={6} md={2}>
                <BBBCertification
                  width="40px"
                  style={{ marginBottom: '16px' }}
                />
                <p>Accredited roofing, siding, and HVAC contractor</p>
              </Grid>
              <Grid item xs={6} md={2}>
                <CertainTeedCertification
                  width="125px"
                  style={{ marginBottom: '16px' }}
                />
                <p>Certainteed ShingleMaster™ shingle roofers</p>
              </Grid>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={4} justify="center">
          <Grid item xs={12}>
            <motion.h1
              initial={{
                y: 100,
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                ease: 'easeIn',
              }}
              className="text-center title mt-4x"
            >
              Choose a local roofing, siding, and HVAC
              <br /> company one that works with you.
            </motion.h1>
          </Grid>
        </Grid>

        <Grid container spacing={4}>
          <div className="benefit-list-mobile">
            <Grid item xs={12}>
              <BenefitListMobile />
            </Grid>
          </div>

          <div className="benefit-list-desktop">
            <BenefitListDesktop />
          </div>
        </Grid>
      </Container>

      <Box className="section section-how-we-work">
        <Container>
          <Grid container justify="center" spacing={4}>
            <Grid item xs={12}>
              <h1 className="title text-center">Our Services</h1>
            </Grid>
            <Grid item xs={10}>
              {/* <p
                className="subtitle-sm fw-m text-center mb4"
                style={{ marginBottom: '32px' }}
              >
                Integer elit erat, cursus id ullamcorper ac, scelerisque sit
                amet arcu.
              </p> */}
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

            <Box mt={4}></Box>
            <CTA greyBackground marginTop />

            <Box mt={4}></Box>

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
                  <div className="step__content" style={{ marginBottom: 0 }}>
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

      <Box className="section section-white section-why-monarchy" pt={0} pb={5}>
        <Container>
          <Grid container justify="center" spacing={4}>
            <Grid item xs={12}>
              <h1 className="title" style={{ marginBottom: '30px' }}>
                Why Monarchy?
              </h1>
            </Grid>
          </Grid>

          <Box className="why-monarchy-comparison-area" mt={5} pt={4}>
            <Grid container>
              <Grid item xs={6} md={6}>
                <p className="subtitle-sm fw-m">Monarchy Build</p>
              </Grid>
              <Grid item xs={6} md={6}>
                <p className="subtitle-sm fw-m color-secondary-2">
                  Typical contractor
                </p>
              </Grid>
            </Grid>

            <Grid
              container
              style={{ borderBottom: '1px solid rgba(155,155,155, .50)' }}
            >
              <Grid item xs={6} md={6}>
                <Box
                  display="flex"
                  pt={2}
                  pb={2}
                  className="point-area"
                  alignItems="center"
                >
                  <div style={{ marginRight: '12px' }}>
                    <DoneIcon fontSize="small" />
                  </div>
                  <div>
                    <p className="fw-n point">Process</p>
                    <p className="fw-n point__text">All-in-one experience</p>
                  </div>
                </Box>
              </Grid>
              <Grid item xs={6} md={6}>
                <Box
                  display="flex"
                  pt={2}
                  pb={2}
                  className="point-area"
                  alignItems="center"
                >
                  <div style={{ marginRight: '12px' }}>
                    <CloseIcon fontSize="small" style={{ color: '#9b9b9b' }} />
                  </div>
                  <div>
                    <p className="color-secondary-2 fw-n point">Process</p>
                    <p className="color-secondary-2 point__text fw-n">
                      Do it yourself
                    </p>
                  </div>
                </Box>
              </Grid>
            </Grid>

            <Grid
              container
              style={{ borderBottom: '1px solid rgba(155,155,155, .50)' }}
            >
              <Grid item xs={6} md={6}>
                <Box
                  display="flex"
                  pt={2}
                  pb={2}
                  className="point-area"
                  alignItems="center"
                >
                  <div style={{ marginRight: '12px' }}>
                    <DoneIcon fontSize="small" />
                  </div>
                  <div>
                    <p className="fw-n point">Materials</p>
                    <p className="fw-n point__text">Quality suppliers</p>
                  </div>
                </Box>
              </Grid>
              <Grid item xs={6} md={6}>
                <Box
                  display="flex"
                  pt={2}
                  pb={2}
                  className="point-area"
                  alignItems="center"
                >
                  <div style={{ marginRight: '12px' }}>
                    <CloseIcon fontSize="small" style={{ color: '#9b9b9b' }} />
                  </div>
                  <div>
                    <p className="color-secondary-2 fw-n point">Materials</p>
                    <p className="color-secondary-2 fw-n point__text">
                      Order yourself
                    </p>
                  </div>
                </Box>
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs={6} md={6}>
                <Box
                  display="flex"
                  pt={2}
                  pb={2}
                  className="point-area"
                  alignItems="center"
                >
                  <div style={{ marginRight: '12px' }}>
                    <DoneIcon fontSize="small" />
                  </div>
                  <div>
                    <p className="fw-n point">Construction</p>
                    <p className="fw-n point__text">Royally-Certified™</p>
                  </div>
                </Box>
              </Grid>
              <Grid item xs={6} md={6}>
                <Box
                  display="flex"
                  pt={2}
                  pb={2}
                  className="point-area"
                  alignItems="center"
                >
                  <div style={{ marginRight: '12px' }}>
                    <CloseIcon fontSize="small" style={{ color: '#9b9b9b' }} />
                  </div>
                  <div>
                    <p className="color-secondary-2 fw-n point">Construction</p>
                    <p className="color-secondary-2 fw-n point__text">
                      Unvetted
                    </p>
                  </div>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      <Box className="section section-white section-reviews" pb={5}>
        <Container>
          <Grid container justify="center" spacing={5}>
            <Grid item xs={12}>
              <h1 className="title" style={{ marginBottom: '16px' }}>
                Reviews
              </h1>
              <p className="subtitle-sm">
                Don’t take our word for it — hear what our customers are saying.
              </p>
            </Grid>
          </Grid>
        </Container>

        <Slider {...sliderSettings}>
          <div className="review-item">
            <div className="reivew-item__rating">
              <StarIcon style={{ fill: '#DFC14A' }} />
              <StarIcon style={{ fill: '#DFC14A' }} />
              <StarIcon style={{ fill: '#DFC14A' }} />
              <StarIcon style={{ fill: '#DFC14A' }} />
              <StarIcon style={{ fill: '#DFC14A' }} />
            </div>

            <div>
              <p className="review-item__text">
                “Joey was very fast to contact me despite knowing it was a small
                job. He was in the area so showed up the same day to look at the
                work and returned the following to get it done. It was perfect
                timing as rain followed that evening. Thank you Joey for helping
                to protect my home. Highly recommended if you like professional,
                personable service. Very happy with the work, the price and the
                overall experience.”
              </p>
            </div>

            <div>
              <p className="review-item__by">Patricia</p>
              <p className="review-item__by__site">Roof Repair, Ottawa</p>
            </div>
          </div>

          <div className="review-item">
            <div className="reivew-item__rating">
              <StarIcon style={{ fill: '#DFC14A' }} />
              <StarIcon style={{ fill: '#DFC14A' }} />
              <StarIcon style={{ fill: '#DFC14A' }} />
              <StarIcon style={{ fill: '#DFC14A' }} />
              <StarIcon style={{ fill: '#DFC14A' }} />
            </div>

            <div>
              <p className="review-item__text">
                “I needed my roof vent replaced, and Diamond Empire answered the
                call immediately. I asked if they could also remove an old
                satellite dish, and they did that, too. More than just a
                thorough job, Joe went above and beyond by offering a
                recommendation for possible future repairs because of a shoddy
                job done by the previous owner. I will certainly call them again
                if I need work done. Honest contractors exist, and Diamond
                Empire is proof of that. 100% recommended.”
              </p>
            </div>

            <div>
              <p className="review-item__by">Sachin</p>
              <p className="review-item__by__site">Roof Repair, Ottawa</p>
            </div>
          </div>

          <div className="review-item">
            <div className="reivew-item__rating">
              <StarIcon style={{ fill: '#DFC14A' }} />
              <StarIcon style={{ fill: '#DFC14A' }} />
              <StarIcon style={{ fill: '#DFC14A' }} />
              <StarIcon style={{ fill: '#DFC14A' }} />
              <StarIcon style={{ fill: '#DFC14A' }} />
            </div>

            <div>
              <p className="review-item__text">
                “Monarchy Build is a very professional company and they take
                pride in their work. We called Monarchy Build on a Saturday
                night requesting an urgent repair. They were able to come on the
                Monday to do the repair. The work was done to a very high
                standard and we are fully satisfied.”
              </p>
            </div>

            <div>
              <p className="review-item__by">Jennifer</p>
              <p className="review-item__by__site">Emergency Repair, Ottawa</p>
            </div>
          </div>

          <div className="review-item">
            <div className="reivew-item__rating">
              <StarIcon style={{ fill: '#DFC14A' }} />
              <StarIcon style={{ fill: '#DFC14A' }} />
              <StarIcon style={{ fill: '#DFC14A' }} />
              <StarIcon style={{ fill: '#DFC14A' }} />
              <StarIcon style={{ fill: '#DFC14A' }} />
            </div>

            <div>
              <p className="review-item__text">
                “Joey was quick to respond to our call for quotes. Once we
                decided to move forward with the install, him and his team were
                on-site the next day and did a remarkable job with the repairs.
                They ensured the siding matched the builder's installed; we
                cannot even tell any work was done. His team was accommodating
                during these social distancing times as well.”
              </p>
            </div>

            <div>
              <p className="review-item__by">John</p>
              <p className="review-item__by__site">Siding Repair, Ottawa</p>
            </div>
          </div>

          <div className="review-item">
            <div className="reivew-item__rating">
              <StarIcon style={{ fill: '#DFC14A' }} />
              <StarIcon style={{ fill: '#DFC14A' }} />
              <StarIcon style={{ fill: '#DFC14A' }} />
              <StarIcon style={{ fill: '#DFC14A' }} />
              <StarIcon style={{ fill: '#DFC14A' }} />
            </div>

            <div>
              <p className="review-item__text">
                “I had this gutter that was broken and everyone I got a quote
                from was either a waste of my time or money. I'm so grateful
                that I could rely on Monarchy for the quick responses, reliable
                work, and professionalism. Definitely highly recommend!!!”
              </p>
            </div>

            <div>
              <p className="review-item__by">Megan</p>
              <p className="review-item__by__site">Repair, Ottawa</p>
            </div>
          </div>
        </Slider>

        <CTA />
      </Box>

      <Footer />
    </>
  );
};
