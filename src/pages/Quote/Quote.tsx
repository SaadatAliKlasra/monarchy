import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Avatar,
  Box,
  Button,
  Collapse,
  Container,
  Grid,
  CircularProgress,
  Chip,
} from '@material-ui/core';

import CTA from '../../components/CTA/CTA';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import { RootState } from '../../rootReducer';

import './Quote.scss';
import {
  fetchInstantPrice,
  fetchInstantPriceCalculation,
} from '../../slices/instantPriceSlice';
import InstantPrice from '../InstantPrice/InstantPrice';

declare const fbq: any;

export default (props: any) => {
  const dispatch = useDispatch();

  const id = props.match.params.id;

  const instantPrice = useSelector(
    (state: RootState) => state.instantPrice.instantPrice
  );

  const instantPriceLoading = useSelector(
    (state: RootState) => state.instantPrice.getInstantPriceLoading
  );

  const instantPriceCalculationLoading = useSelector(
    (state: RootState) => state.instantPrice.getInstantPriceCalculationLoading
  );

  const instantPriceCalculation = useSelector(
    (state: RootState) => state.instantPrice.instantPriceCalculation
  );

  useEffect(() => {
    dispatch(fetchInstantPrice(id));
    dispatch(fetchInstantPriceCalculation(id));
    // fbq('track', 'ViewContent');
  }, []);

  const [breakdownCollapseOpen, setBreakdownCollapse] = React.useState(false);
  const [paymentMethod, setPaymentMethod] = React.useState('cash');

  if (instantPriceLoading) {
    return (
      <>
        <Container>
          <Box mt={16}>
            <CircularProgress size="large" />
          </Box>
        </Container>
      </>
    );
  }

  const renderCost = (costCategory: string) => {
    //@ts-ignore
    if (instantPrice?.renovationType === 'siding') {
      if (costCategory === 'construction') {
        //@ts-ignore
        return `$${instantPriceCalculation?.sidingMaterialInstallation.toLocaleString()}`;
      }

      //@ts-ignore
      return `$${instantPriceCalculation.sidingMaterialPerSqFt.toLocaleString()}`;
    }

    //roofing
    if (costCategory === 'construction') {
      //@ts-ignore
      const constructionTotal =
        //@ts-ignore
        instantPriceCalculation?.homeStoreys +
        //@ts-ignore
        instantPriceCalculation?.roofPitchType;

      //@ts-ignore
      return `$${constructionTotal.toLocaleString()}`;
    }

    //@ts-ignore
    return `$${instantPriceCalculation?.roofMaterial.toLocaleString()}`;
  };

  const renderSubTotalEstimate = (inMonths = false, complete = false) => {
    if (instantPrice?.renovationType === 'siding') {
      if ((paymentMethod === 'cash' && !inMonths) || complete) {
        const total =
          //@ts-ignore
          instantPriceCalculation.sidingMaterialPerSqFt +
          //@ts-ignore
          instantPriceCalculation.sidingMaterialInstallation;

        return `$${total.toLocaleString()}`;
      } else {
        const total =
          //@ts-ignore
          (instantPriceCalculation.sidingMaterialPerSqFt +
            //@ts-ignore
            instantPriceCalculation.sidingMaterialInstallation) /
          60;

        return `$${total.toLocaleString()}/month`;
      }
    } else {
      if ((paymentMethod === 'cash' && !inMonths) || complete) {
        const total =
          //@ts-ignore
          instantPriceCalculation?.homeStoreys +
          //@ts-ignore
          instantPriceCalculation?.roofPitchType +
          //@ts-ignore
          instantPriceCalculation?.roofMaterial;
        //@ts-ignore

        return `$${total.toLocaleString()}`;
      } else {
        const total =
          //@ts-ignore
          (instantPriceCalculation?.homeStoreys +
            //@ts-ignore
            instantPriceCalculation?.roofPitchType +
            //@ts-ignore
            instantPriceCalculation?.roofMaterial) /
          60;

        return `$${total.toLocaleString()}/month`;
      }
    }
  };

  if (!instantPriceLoading && instantPrice !== null) {
    return (
      <>
        <Container>
          <Box mt={16}>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <h1 className="title text-center">
                  Welcome, {instantPrice.firstName}!
                </h1>
              </Grid>
              <Grid item xs={12}>
                <p
                  className="subtitle-sm fw-m text-center mb4"
                  style={{ marginBottom: '24px' }}
                >
                  Thank you for submitting your project details, we’re excited
                  to work with you.
                </p>
              </Grid>
            </Grid>

            <Grid container spacing={4}>
              <Grid item xs={12}>
                <Box textAlign="center" mb={5}>
                  <Avatar
                    style={{
                      width: '144px',
                      height: '144px',
                      margin: '0 auto 16px',
                    }}
                    src={
                      // props.contractor === 'Joey'?
                      `/images/joey-720.png`
                      // : props.contractor === 'Toni'
                      // ? '/images/toni-720.png'
                      // : '/images/toni-720.png'
                    }
                  />
                  <p style={{ fontSize: '18px', marginBottom: '5px' }}>
                    {instantPrice.renovationType === 'roofing'
                      ? 'Joey Dwaydar'
                      : 'Joey Dwaydar'}
                  </p>
                  <p
                    style={{
                      fontSize: '14px',
                      lineHeight: '19px',
                      fontWeight: 'normal',
                      color: '#9B9B9B',
                    }}
                  >
                    Your Royally-Certified™{' '}
                    <span style={{ textTransform: 'capitalize' }}>
                      {instantPrice.renovationType}
                    </span>{' '}
                    Contractor
                  </p>
                </Box>
              </Grid>
            </Grid>

            <Grid container spacing={4}>
              <Grid item xs={12}>
                <h2 className="title text-center">
                  Your estimate is {renderSubTotalEstimate(false, true)}
                </h2>
                <p
                  className="text-center color-secondary-2"
                  style={{ marginTop: '8px' }}
                >
                  Or {renderSubTotalEstimate(true)} at 2.45% APR* for 60 months
                </p>
              </Grid>
              <Grid item xs={12}>
                <p className="subtitle-sm fw-m text-center mb4">
                  In order to provide you with this estimate, we just need to
                  confirm a few details about your home, like the square footage
                  of your roof.
                </p>
              </Grid>
            </Grid>

            <Grid container spacing={2} alignItems="center" justify="center">
              <Grid item xs={12} md={6}>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  flexDirection="column"
                  mt={3}
                >
                  <a
                    href={`mailto:${
                      instantPrice.renovationType === 'roofing'
                        ? 'joey@monarchy.build'
                        : 'joey@monarchy.build'
                    }`}
                    className="btn-link"
                  >
                    <Button className="btn btn-primary" variant="contained">
                      Schedule Site Visit
                    </Button>
                  </a>

                  <CTA
                    contractor={
                      //@ts-ignore
                      InstantPrice.renovationType === 'roofing'
                        ? 'Joey'
                        : 'Joey'
                    }
                    noMarginTop
                    hideButton
                  />
                </Box>
              </Grid>
            </Grid>

            <Grid container spacing={4}>
              {instantPriceCalculationLoading && <CircularProgress />}

              {!instantPriceCalculationLoading && (
                <Grid item xs={12}>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    onClick={() => setBreakdownCollapse(!breakdownCollapseOpen)}
                    mt={6}
                    style={{ cursor: 'pointer' }}
                  >
                    <p>See breakdown</p>
                    {breakdownCollapseOpen ? <ExpandLess /> : <ExpandMore />}
                  </Box>
                  <Collapse
                    in={breakdownCollapseOpen}
                    timeout="auto"
                    unmountOnExit
                  >
                    <Box
                      mt={2}
                      mb={2}
                      className="breakdown-payment-method-switch"
                    >
                      <Chip
                        className={`${
                          paymentMethod === 'cash' ? 'selected' : ''
                        }`}
                        label="Cash"
                        onClick={() => setPaymentMethod('cash')}
                        style={{ marginRight: '10px' }}
                      />
                      <Chip
                        className={`${
                          paymentMethod === 'financing' ? 'selected' : ''
                        }`}
                        label="Financing"
                        onClick={() => setPaymentMethod('financing')}
                      />
                    </Box>

                    <ul className="quote-breakdown__list">
                      <li className="quote-breakdown__list__item">
                        <span>Project management</span>
                        <span>$0</span>
                      </li>
                      <li className="quote-breakdown__list__item">
                        <span>Materials</span>
                        <span>{renderCost('materials')}</span>
                      </li>
                      <li className="quote-breakdown__list__item">
                        <span>Construction</span>
                        <span>{renderCost('construction')}</span>
                      </li>
                      <li className="quote-breakdown__list__item">
                        <span>
                          {paymentMethod === 'cash'
                            ? 'Subtotal estimate'
                            : 'Monthly financing estimate'}
                        </span>
                        <span>{renderSubTotalEstimate()}</span>
                      </li>
                    </ul>
                  </Collapse>
                </Grid>
              )}

              <Grid item xs={12}>
                <p
                  className="text-align-left"
                  style={{
                    fontSize: '12px',
                    lineHeight: '17px',
                    color: '#9b9b9b',
                    fontWeight: 'normal',
                  }}
                >
                  This estimate do not include applicable taxes. The information
                  presented on this website is based on data available at the
                  time. This estimate is not guaranteed nor considered your
                  final price and does not account for unpredicted conditions.
                  Although we are able to supply you with an instant price so
                  quickly, a Royally-Certified Contractor from Monarchy Build
                  must conduct a site visit to confirm a few details about your
                  home. At which point, you will receive a free, all-inclusive
                  estimate with a breakdown of our costs.
                </p>
              </Grid>
            </Grid>
          </Box>
        </Container>
        <div className="section-what-next">
          <Container>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <h1
                  className="title text-center"
                  style={{ marginBottom: '8px' }}
                >
                  What’s next?
                </h1>
              </Grid>
              <Grid item xs={12}>
                <h2>
                  Meet your Royally-Certified™ Contractor to confirm your price
                </h2>
                <p
                  className="subtitle-sm fw-m mb4"
                  style={{ marginBottom: '48px', marginTop: '24px' }}
                >
                  Our fully licensed Royally-Certified™ Contractor will meet
                  with you to learn more about your project and walk you through
                  our process.
                </p>
              </Grid>
            </Grid>
            {/* <Grid container spacing={2}>
              <Grid item xs={12}>
                <img src="https://placehold.it/450x550" alt="What next" />
              </Grid>
              <Grid item xs={12}>
                <img src="https://placehold.it/450x550" alt="What next" />
              </Grid>
            </Grid> */}

            <Grid container spacing={2} alignItems="center" justify="center">
              <Grid item xs={12} md={6}>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  flexDirection="column"
                >
                  <a
                    href={`mailto:${
                      instantPrice.renovationType === 'roofing'
                        ? 'joey@monarchy.build'
                        : 'joey@monarchy.build'
                    }`}
                    className="btn-link"
                  >
                    <Button className="btn btn-primary" variant="contained">
                      Schedule Site Visit
                    </Button>
                  </a>
                  <CTA
                    contractor={
                      //@ts-ignore
                      InstantPrice.renovationType === 'roofing'
                        ? 'Joey'
                        : 'Joey'
                    }
                    noMarginTop
                    greyBackground
                    hideButton
                  />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </div>
      </>
    );
  }
};
