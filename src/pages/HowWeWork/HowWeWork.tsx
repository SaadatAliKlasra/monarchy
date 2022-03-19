import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  Collapse,
  IconButton,
} from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import StarIcon from '@material-ui/icons/Star';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';

import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import CTA from '../../components/CTA/CTA';

import { ReactComponent as BBBCertification } from '../../assets/images/monarchy-certifications-bbb.svg';
import { ReactComponent as HomestarsCertification } from '../../assets/images/monarchy-certifications-homestars.svg';

import './Home.scss';
import { Link } from 'react-router-dom';

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
    <div>
      <Container>
        <Navigation />

        <Grid container spacing={4} className="home-intro" alignItems="center">
          <Grid item xs={12} md={6}>
            <div className="home-intro__text">
              <h1 className="title">
                Roofing, Siding, Insulation and HVAC installations done with ease.
              </h1>
              <p className="subtitle fw-m">
                Monarchy provides you with its local team of Royally-Certified™
                Contractors, and quality materials and construction for an
                all-in-one, build experience.
              </p>

              <Link to="/instant-price" className="btn-link">
                <Button className="btn btn-primary" variant="contained">
                  Get a free estimate
                  <ArrowForwardIcon
                    style={{ marginLeft: '8px', fontSize: '18px' }}
                  />
                </Button>
              </Link>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid item style={{ position: 'relative' }}>
              <img src={headerImageHVAC} alt="HVAC" />
            </Grid>

            <Box
              mb={5}
              mt={5}
              textAlign="center"
              fontSize="14px"
              fontWeight="normal"
            >
              <Grid container>
                <Grid item xs={6} md={6}>
                  <HomestarsCertification
                    width="113px"
                    style={{ marginBottom: '16px' }}
                  />
                  <p style={{ marginTop: '11px' }}>
                    Highly rated and strongly recommended
                  </p>
                </Grid>
                <Grid item xs={6} md={6}>
                  <BBBCertification
                    width="40px"
                    style={{ marginBottom: '16px' }}
                  />
                  <p>Accredited roofing, siding, and HVAC contractor</p>
                </Grid>
              </Grid>
            </Box>

            <Box>
              {/* <Grid item xs={12}>
                <h2 className="text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h2>
              </Grid> */}

              <Grid item xs={12}>
                <ul className="benefit-list">
                  <div className="benefit-list__item">
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      flexDirection="row"
                      style={{ width: '100%' }}
                      onClick={() => setActiveListItem(1)}
                    >
                      <h2
                        className={`benefit-list__item__heading ${
                          activeListItem === 1 && 'active'
                        }`}
                      >
                        All-in-one build experience
                      </h2>

                      {renderArrowIconBasedOnState(1)}
                    </Box>

                    <Collapse in={activeListItem === 1}>
                      <p className="subtitle-sm fw-m">
                        You deserve the very best — we deliver lasting work
                        completed by Ottawa's top roofers and siding craftsmen.
                        The work we perform and the experience we provide our
                        customers exceeds expectations for a superior,
                        all-in-one build experience. Our team provides
                        comprehensive roofing, siding, and HVAC services by
                        providing you with a Royally-Certified™ Contractor as
                        your one point of communication for the entirety of your
                        project. We are dedicated to providing the quality
                        craftsmanship our clients expect, from the planning and
                        design phases, to completing the job.
                      </p>
                    </Collapse>
                  </div>
                  <div className="benefit-list__item">
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      flexDirection="row"
                      style={{ width: '100%' }}
                      onClick={() => setActiveListItem(2)}
                    >
                      <h2
                        className={`benefit-list__item__heading ${
                          activeListItem === 2 && 'active'
                        }`}
                      >
                        Royally-Certified™
                      </h2>
                      {renderArrowIconBasedOnState(2)}
                    </Box>

                    <Collapse in={activeListItem === 2}>
                      <p className="subtitle-sm fw-m">
                        We cut subcontractors out of the building process,
                        completing all of our roofing, siding, and HVAC projects
                        entirely in-house. Every detail of your project from
                        material selection to construction is completed by our
                        experienced and fully licensed Royally-Certified™
                        Contractors. With all aspects of a project completed
                        under our roof, we can assure our clients quality
                        building services where our competition can’t. Our royal
                        touch ensures that even the smallest detail is up to our
                        highest standards.
                      </p>
                    </Collapse>
                  </div>
                  <div className="benefit-list__item">
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      flexDirection="row"
                      style={{ width: '100%' }}
                      onClick={() => setActiveListItem(3)}
                    >
                      <h2
                        className={`benefit-list__item__heading ${
                          activeListItem === 3 && 'active'
                        }`}
                      >
                        Quality materials
                      </h2>
                      {renderArrowIconBasedOnState(3)}
                    </Box>

                    <Collapse in={activeListItem === 3}>
                      <p className="subtitle-sm fw-m">
                        Whether it's asphalt shingles, vinyl siding and
                        engineered wood siding, or metal roofing, Monarchy
                        provides you with the highest-quality materials
                        available from Canadian companies you know and trust
                        like CertainTeed, Bakor, IKO, Ideal Roofing, London
                        Eco-Metal, Gentek, KWP Engineered Wood Products, and
                        James Hardie.
                      </p>
                    </Collapse>
                  </div>
                  <div className="benefit-list__item">
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      flexDirection="row"
                      style={{ width: '100%' }}
                      onClick={() => setActiveListItem(4)}
                    >
                      <h2
                        className={`benefit-list__item__heading ${
                          activeListItem === 4 && 'active'
                        }`}
                      >
                        Comprehensive warranty
                      </h2>
                      {renderArrowIconBasedOnState(4)}
                    </Box>

                    <Collapse in={activeListItem === 4}>
                      <p className="subtitle-sm fw-m">
                        We back our work with up to 10 years through a
                        comprehensive workmanship warranty — longer than any
                        other roofing, siding, and HVAC company in Ottawa.
                        Included on every build we complete, rest assured if
                        warranty problems do arise, we’ll work with you and the
                        manufacturer to fix any issues quickly at no cost to
                        you.
                      </p>
                    </Collapse>
                  </div>
                  <div className="benefit-list__item">
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      flexDirection="row"
                      style={{ width: '100%' }}
                      onClick={() => setActiveListItem(5)}
                    >
                      <h2
                        className={`benefit-list__item__heading ${
                          activeListItem === 5 && 'active'
                        }`}
                      >
                        Transparent pricing
                      </h2>
                      {renderArrowIconBasedOnState(5)}
                    </Box>

                    <Collapse in={activeListItem === 5}>
                      <p className="subtitle-sm fw-m">
                        Unlike our competitors, we guarantee our pricing upfront
                        and do not profit from change orders or hidden fees.
                        Start by getting an instant price by answering a few
                        questions about your roofing, siding, or HVAC project.
                        You will immediately receive a free, all-inclusive
                        estimate with a breakdown of our costs. Our fully
                        licensed Royally-Certified Contractor will then meet
                        with you to confirm your price and walk you through our
                        process.
                      </p>
                    </Collapse>
                  </div>
                  <div className="benefit-list__item">
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      flexDirection="row"
                      style={{ width: '100%' }}
                      onClick={() => setActiveListItem(6)}
                    >
                      <h2
                        className={`benefit-list__item__heading ${
                          activeListItem === 6 && 'active'
                        }`}
                      >
                        Price-match guarantee
                      </h2>
                      {renderArrowIconBasedOnState(6)}
                    </Box>
                    <Collapse in={activeListItem === 6}>
                      <p className="subtitle-sm fw-m">
                        We stand by our pricing and won't be beat by our
                        competitors. If you find a better estimate by a
                        reputable roofing, siding, or HVAC company in Ottawa,
                        we'll pass along the savings to you.
                      </p>
                    </Collapse>
                  </div>
                </ul>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Box className="section section-how-we-work" pt={5} pb={5}>
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
              <Grid item xs={12} md={12}>
                <div className="step__circle">1</div>
                <h2 style={{ marginBottom: '16px' }}>Get a free estimate</h2>
                <p className="subtitle-sm fw-m">
                  Answer a few questions about your roofing, siding, or HVAC
                  project and immediately receive a free, all-inclusive estimate
                  with a breakdown of our costs.
                </p>
              </Grid>
            </Grid>

            <CTA greyBackground alignLeft />

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
              <Grid item xs={12} md={12}>
                <div className="step__circle">2</div>
                <h2 style={{ marginBottom: '16px' }}>
                  Meet your Royally-Certified™ Contractor to confirm your price
                </h2>
                <p className="subtitle-sm fw-m">
                  Our fully licensed Royally-Certified™ Contractor will meet
                  with you to learn more about your project and walk you through
                  our process.
                </p>
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
                <Grid item xs={12}>
                  <img
                    className="home-intro__image"
                    src="https://placehold.it/384x480"
                  />
                </Grid>
              </Grid>
            </Box> */}
          </Box>

          <Box className="step3 step" mt={5}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={12}>
                <div className="step__circle">3</div>
                <h2 style={{ marginBottom: '16px' }}>
                  From material selection and installation to completion
                </h2>
                <p className="subtitle-sm fw-m">
                  We handle everything — from site preparation and site cleanup,
                  to material selection, and construction.
                </p>
              </Grid>

              <Grid item xs={12}>
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

      <Box className="section section-white section-why-monarchy" pt={5} pb={5}>
        <Container>
          <Grid container justify="center" spacing={4}>
            <Grid item xs={12}>
              <h1 className="title">Why Monarchy?</h1>
            </Grid>
          </Grid>

          <Box className="why-monarchy-comparison-area" mt={5}>
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
                <Box display="flex" pt={2} pb={2} alignItems="center">
                  <div style={{ marginRight: '12px' }}>
                    <DoneIcon fontSize="small" />
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: '12px',
                        lineHeight: '19px',
                        marginBottom: 0,
                      }}
                      className="fw-n"
                    >
                      Process
                    </p>
                    <p style={{ fontSize: '14px' }} className="fw-n">
                      All-in-one experience
                    </p>
                  </div>
                </Box>
              </Grid>
              <Grid item xs={6} md={6}>
                <Box display="flex" pt={2} pb={2} alignItems="center">
                  <div style={{ marginRight: '12px' }}>
                    <CloseIcon fontSize="small" style={{ color: '#9b9b9b' }} />
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: '12px',
                        lineHeight: '19px',
                        marginBottom: 0,
                      }}
                      className="color-secondary-2 fw-n"
                    >
                      Process
                    </p>
                    <p
                      style={{ fontSize: '14px' }}
                      className="color-secondary-2 fw-n"
                    >
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
                <Box display="flex" pt={2} pb={2} alignItems="center">
                  <div style={{ marginRight: '12px' }}>
                    <DoneIcon fontSize="small" />
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: '12px',
                        lineHeight: '19px',
                        marginBottom: 0,
                      }}
                      className="fw-n"
                    >
                      Materials
                    </p>
                    <p style={{ fontSize: '14px' }} className="fw-n">
                      Quality suppliers
                    </p>
                  </div>
                </Box>
              </Grid>
              <Grid item xs={6} md={6}>
                <Box display="flex" pt={2} pb={2} alignItems="center">
                  <div style={{ marginRight: '12px' }}>
                    <CloseIcon fontSize="small" style={{ color: '#9b9b9b' }} />
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: '12px',
                        lineHeight: '19px',
                        marginBottom: 0,
                      }}
                      className="color-secondary-2 fw-n"
                    >
                      Materials
                    </p>
                    <p
                      style={{ fontSize: '14px' }}
                      className="color-secondary-2 fw-n"
                    >
                      Order yourself
                    </p>
                  </div>
                </Box>
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs={6} md={6}>
                <Box display="flex" pt={2} pb={2} alignItems="center">
                  <div style={{ marginRight: '12px' }}>
                    <DoneIcon fontSize="small" />
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: '12px',
                        lineHeight: '19px',
                        marginBottom: 0,
                      }}
                      className="fw-n"
                    >
                      Construction
                    </p>
                    <p style={{ fontSize: '14px' }} className="fw-n">
                      Royally-Certified™
                    </p>
                  </div>
                </Box>
              </Grid>
              <Grid item xs={6} md={6}>
                <Box display="flex" pt={2} pb={2} alignItems="center">
                  <div style={{ marginRight: '12px' }}>
                    <CloseIcon fontSize="small" style={{ color: '#9b9b9b' }} />
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: '12px',
                        lineHeight: '19px',
                        marginBottom: 0,
                      }}
                      className="color-secondary-2 fw-n"
                    >
                      Construction
                    </p>
                    <p
                      style={{ fontSize: '14px' }}
                      className="color-secondary-2 fw-n"
                    >
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

          <Grid container spacing={5}>
            <Grid item xs={12}>
              <Box className="review-item">
                <div className="reivew-item__rating">
                  <StarIcon style={{ fill: '#DFC14A' }} />
                  <StarIcon style={{ fill: '#DFC14A' }} />
                  <StarIcon style={{ fill: '#DFC14A' }} />
                  <StarIcon style={{ fill: '#DFC14A' }} />
                  <StarIcon style={{ fill: '#DFC14A' }} />
                </div>

                <div>
                  <p className="review-item__text">
                    “Joey was very fast to contact me despite knowing it was a
                    small job. He was in the area so showed up the same day to
                    look at the work and returned the following to get it done.
                    It was perfect timing as rain followed that evening. Thank
                    you Joey for helping to protect my home. Highly recommended
                    if you like professional, personable service. Very happy
                    with the work, the price and the overall experience.”
                  </p>
                </div>

                <div>
                  <p className="review-item__by">Patricia</p>
                  <p className="review-item__by__site">Roof Repair, Ottawa</p>
                </div>
              </Box>
            </Grid>
          </Grid>

          <CTA />
        </Container>
      </Box>

      <Footer />
    </div>
  );
};
