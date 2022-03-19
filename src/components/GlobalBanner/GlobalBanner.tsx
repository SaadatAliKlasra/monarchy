import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import CloseIcon from '@material-ui/icons/Close';

import './GlobalBanner.scss';
import { IconButton } from '@material-ui/core';

export default () => {
  const location = useLocation();
  useEffect(() => {
    if (window.localStorage.getItem('hideFinancingBanner') != 'yes') {
      document.querySelector('.main-navigation')?.classList.add('has-banner');
      document.body?.classList.add('has-banner');
    }
  }, []);

  const handleClose = () => {
    document.querySelector('.main-navigation')?.classList.remove('has-banner');
    document.body?.classList.remove('has-banner');
    document.querySelector('.global-banner')?.remove();
    window.localStorage.setItem('hideFinancingBanner', 'yes');
  };

  return window.localStorage.getItem('hideFinancingBanner') == 'yes' ? null : (
    <div className="global-banner">
      <p>
        {/* Start your roofing or siding project today with $0 down, 0% interest,
        and equal monthly payments. <Link to="/financing">Learn more</Link> */}
        Your insulation work could be covered up to $5,000 through the
        Canada Greener Homes Grant.{' '}
        {location.pathname !== '/instant-price' && (
          <>
            <Link to="/instant-price">Learn more</Link> by booking a free
            consultation.
          </>
        )}{' '}
      </p>
      <IconButton onClick={() => handleClose()}>
        <CloseIcon />
      </IconButton>
    </div>
  );
};
