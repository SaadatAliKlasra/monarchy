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
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import StarIcon from '@material-ui/icons/Star';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';
import { motion } from 'framer-motion';

import Footer from '../../components/Footer/Footer';
import CTA from '../../components/CTA/CTA';

import '../Home/Home.scss';
import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation/Navigation';

const headerImageRoofing = '/images/Heading-Roofing.jpg';
const headerImageSiding = '/images/Heading-Siding.jpg';

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
                  <h1 className="title">
                    You have a budget and we have financing options to match it.
                  </h1>
                  <p className="subtitle fw-m">
                    Increase your home’s value without decreasing your savings.
                    Starting at 0%* interest and no money down, Monarchy allows
                    you to break down your investment with low installments.
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
                src={headerImageSiding}
                alt="Roofing"
              />
            </div>
          </Grid>
        </Grid>

        <Grid container justify="center">
          <Grid item xs={12} md={6}>
            <Box
              justifyContent="center"
              mt={8}
              style={{ marginTop: '100px', marginBottom: '100px' }}
            >
              {/* <Grid item style={{ position: 'relative' }}>
                  <img src={headerImageRoofing} alt="Roofing" />
                </Grid> */}

              <Box>
                <Grid item xs={12}>
                  <h1 className="text-center" style={{ margin: '2em 0' }}>
                    Fixed interest rates as low as 0%* with no money down.
                  </h1>
                </Grid>

                <Grid item xs={12}>
                  <Box display="flex" alignItems="center" marginBottom={3}>
                    <DoneIcon
                      fontSize="small"
                      style={{ marginRight: '.8em' }}
                    />

                    <h2 className={`benefit-list__item__heading active`}>
                      Credit limits up to $35,000
                    </h2>
                  </Box>
                </Grid>

                <Grid item xs={12}>
                  <Box display="flex" alignItems="center" marginBottom={3}>
                    <DoneIcon
                      fontSize="small"
                      style={{ marginRight: '.8em' }}
                    />

                    <h2 className={`benefit-list__item__heading active`}>
                      Loan terms from 1 to 20 years
                    </h2>
                  </Box>
                </Grid>

                <Grid item xs={12}>
                  <Box display="flex" alignItems="center" marginBottom={3}>
                    <DoneIcon
                      fontSize="small"
                      style={{ marginRight: '.8em' }}
                    />

                    <h2 className={`benefit-list__item__heading active`}>
                      Pay off anytime without penalty
                    </h2>
                  </Box>
                </Grid>

                <Grid item xs={12}>
                  <Box display="flex" alignItems="center" marginBottom={6}>
                    <DoneIcon
                      fontSize="small"
                      style={{ marginRight: '.8em' }}
                    />

                    <h2 className={`benefit-list__item__heading active`}>
                      Equal monthly payments
                    </h2>
                  </Box>
                </Grid>

                <Grid container justify="center">
                  <Grid item xs={12} md={12}>
                    <p
                      style={{
                        fontSize: '12px',
                        lineHeight: '17px',
                        color: '#9b9b9b',
                        fontWeight: 'normal',
                        textAlign: 'center',
                      }}
                    >
                      *Subject to credit approval. Minimum monthly payments
                      required. Financing is provided by SNAP Home Finance. Ask
                      for details and conditions.
                    </p>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <CTA greyBackground noMarginTop />
      </Container>

      <Box mt={4}></Box>
      <Footer />
    </div>
  );
};
