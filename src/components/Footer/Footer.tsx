import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Box, Container, Grid } from '@material-ui/core';

import RoomIcon from '@material-ui/icons/Room';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import CallIcon from '@material-ui/icons/Call';

import './Footer.scss';

export default withRouter((props: any) => {
  const handleNavigate = (url: string) => {
    props.history.push(url);
  };

  const getMapLink = (address: string) => {
    if (
      /* if we're on iOS, open in Apple Maps */
      navigator.platform.indexOf('iPhone') !== -1 ||
      navigator.platform.indexOf('iPad') !== -1 ||
      navigator.platform.indexOf('iPod') !== -1
    )
      return `maps://google.com/maps/place/50+Slack+Rd,+Nepean,+ON+K2G+0E2,+Canada/@45.32399,-75.7234533,17z/data=!3m1!4b1!4m5!3m4!1s0x4cce0731710d1a1f:0xd8048fac6214ef07!8m2!3d45.32399!4d-75.7212646`;
    /* else use Google */ else
      return `https://www.google.com/maps/place/50+Slack+Rd,+Nepean,+ON+K2G+0E2,+Canada/@45.32399,-75.7234533,17z/data=!3m1!4b1!4m5!3m4!1s0x4cce0731710d1a1f:0xd8048fac6214ef07!8m2!3d45.32399!4d-75.7212646`;
  };

  return (
    <footer>
      <Box pt={5} pb={5}>
        <Container>
          <Grid container>
            <Grid item xs={12} md={3}>
              <img
                style={{ display: 'block', marginBottom: '20px' }}
                src="/images/monarchy-brand-logo.svg"
                width="175px"
              />

              <p>
                Monarchy provides you with its local team of Royally-Certified™
                Contractors, and quality materials and construction for an
                all-in-one, build experience.
              </p>
            </Grid>

            <Grid item xs={12} md={3}>
              <div className="footer-link-area">
                <p className="footer-link-heading">Our service</p>

                <Link to="/how-we-work">Our Services</Link>
                <Link to="/instant-price">Book a consultation</Link>
                <Link to="/financing">Financing</Link>
              </div>
            </Grid>

            <Grid item xs={12} md={3}>
              <div className="footer-link-area">
                <p className="footer-link-heading">Company</p>

                <Link to="/about-us">About us</Link>
                <Link to="/privacy-policy">Privacy Policy</Link>
                {/* <Link to="/terms">Terms and Conditions</Link>
                <Link to="/privacy-policy">Privacy Policy</Link> */}
              </div>
            </Grid>

            <Grid item xs={12} md={3}>
              <div className="footer-link-area">
                <p>
                  <a
                    target="_blank"
                    style={{ textDecoration: 'none' }}
                    href={getMapLink(
                      'https://goo.gl/maps/mLJHv6jZfUis5ddSA'
                    )}
                  >
                    <RoomIcon /> 22D Antares Dr, Ottawa, ON K2E 7Z6
                  </a>
                </p>

                <p>
                  <a
                    style={{ textDecoration: 'none', marginRight: '8px' }}
                    href="tel:6135050552"
                  >
                    <CallIcon /> (613) 505-0552
                  </a>
                </p>

                <p>
                  <a
                    style={{ textDecoration: 'none' }}
                    href="mailto:hello@monarchy.build"
                  >
                    <AlternateEmailIcon />
                    hello@monarchy.build
                  </a>
                </p>
                <p className="color-secondary-2" style={{ marginTop: '48px' }}>
                  © Copyright 2021 Monarchy Build
                </p>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
});
