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
            <div>
                <div>
                  <h1 className="title">Privacy Policy</h1>
                  <p className="subtitle fw-m">
                  This privacy notice discloses the privacy practices for www.monarchy.build. This privacy notice applies solely to information collected by this web site. It will notify you of the following:
                  </p>
                  <p className="subtitle fw-m">
                  What personally identifiable information is collected from you through the web site, how it is used and with whom it may be shared.
                  What choices are available to you regarding the use of your data.
                  The security procedures in place to protect the misuse of your information
                  How you can correct any inaccuracies in the information.
                  Information Collection, Use, and Sharing
                  We are the sole owners of the information collected on this site. We only have access to/collect information that you voluntarily give us via email or other direct contact from you. We will not sell or rent this information to anyone.
                  </p>

                  <p className="subtitle fw-m">
                  We will use your information to respond to you, regarding the reason you contacted us. We will not share your information with any third party outside of our organization, other than as necessary to fulfill your request, e.g. to ship an order.
                  </p>
                  <p className="subtitle fw-m">
                  Unless you ask us not to, we may contact you via email in the future to tell you about specials, new products or services, or changes to this privacy policy.
                  </p>
                  <p className="subtitle fw-m">
                  Your Access to and Control Over Information
You may opt out of any future contacts from us at any time. You can do the following at any time by contacting us via the email address or phone number given on our website:
                  </p>
                  <p className="subtitle fw-m">
                  See what data we have about you, if any.
Change/correct any data we have about you.
Have us delete any data we have about you.
Express any concern you have about our use of your data.
Security
We take precautions to protect your information. When you submit sensitive information via the website, your information is protected both online and offline.
                  </p>
                  <p className="subtitle fw-m">
                  Wherever we collect sensitive information (such as credit card data), that information is encrypted and transmitted to us in a secure way. You can verify this by looking for a closed lock icon at the bottom of your web browser, or looking for “https” at the beginning of the address of the web page.
                  </p>
                  <p className="subtitle fw-m">
                  While we use encryption to protect sensitive information transmitted online, we also protect your information offline. Only employees who need the information to perform a specific job (for example, billing or customer service) are granted access to personally identifiable information. The computers/servers in which we store personally identifiable information are kept in a secure environment.
                  </p>
                  <p className="subtitle fw-m">
                  If you feel that we are not abiding by this privacy policy, you should contact us immediately via telephone at (613) 505-0552 or via email."
                  </p>
                </div>

            </div>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};
