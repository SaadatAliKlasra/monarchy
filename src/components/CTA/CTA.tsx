import React from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Avatar, Box, Button, Grid } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import CallIcon from '@material-ui/icons/Call';

import { RootState } from '../../rootReducer';

export default withRouter((props: any) => {
  const contractorImage = useSelector(
    (state: RootState) => state.user.contractorImage
  );

  const handleNavigate = (url: string) => {
    props.history.push(url);

    if (props.closeMenu) {
      if (document.body.classList.contains('mobile-nav-open')) {
        document.body.classList.remove('mobile-nav-open');
      }
    }
  };

  const between7amAnd7pm =
    new Date().getHours() >= 7 && new Date().getHours() < 19;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          display="flex"
          alignItems={props.alignLeft ? 'flex-start' : 'center'}
          justifyContent={'center'}
          flexDirection="column"
          mt={
            props.boxMarginTop ? props.boxMarginTop : props.noMarginTop ? 0 : 5
          }
        >
          {!props.hideButton && (
            <Button
              className="btn btn-lg btn-primary"
              variant="contained"
              onClick={() => handleNavigate('/instant-price')}
            >
              {/* Get an Instant Price */}
              Get a free estimate
              <ArrowForwardIcon
                style={{ marginLeft: '8px', fontSize: '18px' }}
              />
            </Button>
          )}

          <Box
            display="flex"
            alignItems="center"
            mt={props.noMarginTopImageArea ? 0 : 2}
          >
            <div style={{ position: 'relative' }}>
              <Avatar
                style={{
                  width: '48px',
                  height: '48px',
                  marginRight: '8px',
                }}
                src={
                  // props.contractor === 'Joey'?
                  `/images/joey.png`
                  // : props.contractor === 'Toni'
                  // ? '/images/toni.png'
                  // : contractorImage
                }
              />
              <span
                style={{
                  display: between7amAnd7pm ? 'block' : 'none',
                  position: 'absolute',
                  top: '-2px',
                  right: '5px',
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  backgroundColor: 'rgb(126, 211, 33)',
                  borderWidth: '4px',
                  borderStyle: 'solid',
                  borderColor: props.greyBackground ? '#eee' : '#fff',
                }}
              ></span>
            </div>
            <div>
              <p
                style={{
                  marginTop: '3px',
                  marginBottom: 0,
                  fontSize: '14px',
                  lineHeight: '17px',
                  color: '#9b9b9b',
                  fontWeight: 'normal',
                }}
              >
                {props.contractor
                  ? `Talk with ${props.contractor} to discuss your project`
                  : 'Talk with a Royally-Certified™ Contractor'}
              </p>
              <a
                href={`tel:${
                  props.contractor === 'Joey'
                    ? '3433061566'
                    : props.contractor === 'Toni'
                    ? '3433061566'
                    : '6135050552'
                }`}
                className="mobile-navigation__phone-link"
                style={{
                  color: 'rgb(197, 150, 34)',
                }}
              >
                <CallIcon
                  style={{
                    width: '16px',
                    height: '16px',
                    marginRight: '8px',
                    fill: 'rgb(197, 150, 34)',
                  }}
                />
                {props.contractor === 'Joey'
                  ? '(343) 306-1566'
                  : props.contractor === 'Toni'
                  ? '(343) 306-1566'
                  : '(613) 505-0552'}
              </a>
            </div>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
});
