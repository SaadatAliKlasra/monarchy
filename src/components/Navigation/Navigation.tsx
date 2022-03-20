import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Button, Container, FormControl, Grid, IconButton, InputLabel,Select, MenuItem } from '@material-ui/core';
// import Select, { SelectChangeEvent } from '@mui/material/Select';
import CallIcon from '@material-ui/icons/Call';
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import PersonIcon from '@material-ui/icons/Person';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
// import Dropdown from 'react-bootstrap/Dropdown';
import { withRouter, Link } from 'react-router-dom';

import GlobalBanner from '../../components/GlobalBanner/GlobalBanner';

import InstantPriceProgress from '../InstantPriceProgress/InstantPriceProgress';
import { ReactComponent as Logo } from '../../assets/images/monarchy-logo.svg';

import { logout } from '../../slices/authSlice';
import { RootState } from '../../rootReducer';

import './Navigation.scss';
import CTA from '../CTA/CTA';
import { Dropdown, DropdownButton } from 'react-bootstrap';

const Navigation = (props: any) => {
  const dispatch = useDispatch();
  const step = useSelector((state: RootState) => state.instantPrice.step);
  //dropdown prop
  const [dropdown, setDropdown] = React.useState(1);
  const progressBarVisible = useSelector(
    (state: RootState) => state.instantPrice.progressBarVisible
  );

  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  const user = useSelector((state: RootState) => state.auth.user);

  const [mobileNavOpen, setMobileNavOpen] = React.useState(false);

  useEffect(() => {
    let lastknownScrollPosition = 0;
    let ticking = false;
    const mainNavigationEl = document.querySelector('.main-navigation');

    window.addEventListener('scroll', () => {
      lastknownScrollPosition = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (lastknownScrollPosition > 0) {
            mainNavigationEl?.classList.add('scrolled');
          } else {
            mainNavigationEl?.classList.remove('scrolled');
          }

          ticking = false;
        });

        ticking = true;
      }
    });
  }, []);

  const renderSignInLink = () => {
    if (isAuthenticated) {
      return (
        <a
          style={{ marginLeft: '8px' }}
          onClick={() => {
            dispatch(logout());
            handleNavigate('/');
          }}
        >
          Sign out
        </a>
      );
    } else {
      return (
        <a
          onClick={() => {
            handleNavigate('/sign-in');
          }}
          className="sign-in-desktop"
        >
          <PersonIcon style={{ color: '#9b9b9b', marginRight: '8px' }} />
          <span className="text">Sign in</span>
        </a>
      );
    }
  };

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
    document.body.classList.toggle('mobile-nav-open');
  };

  const handleNavigate = (url: string) => {
    props.history.push(url);
    if (mobileNavOpen) {
      toggleMobileNav();
    }
  };

  // let classNames = '';

  // if (props.instantPrice) {
  // }
  const [values, setValues] = React.useState([
    "Roofing ", "Siding", "Insulation", "Hvac" 
  ]);
  const [selected, setSelected] = useState(1);

  function handleChange(event: any) {
    setSelected(event.target.value);
  }
  return (
    <>
      <GlobalBanner />

      <div style={{ position: 'relative' }}></div>

      <nav
        className={`main-navigation ${
          props.instantPrice
            ? 'main-navigation--instant-price'
            : props.landing
            ? 'main-navigation--landing'
            : ''
        }`}
      >
        <Container maxWidth="xl" className="container">
          <Grid
            container
            direction="row"
            alignItems="center"
            justify="space-between"
          >
            <div className="main-navigation__left">
              <div className="main-navigation__left__items" style={{display:'flex',whiteSpace:'nowrap'}}>
                <Link to="/about-us">About us</Link>
                {/* <Link to="/how-we-work">Our Services</Link> */}
                <Link to="/financing">Financing</Link>
                <Dropdown style={{marginLeft:'10px'}}>
                  <Dropdown.Toggle id="dropdown-autoclose-true" 
                    style={{border:'none',color:'#000',background:'transparent',fontWeight:'bold',fontSize:'16px'}}>
                    Our Services
                  </Dropdown.Toggle>

                  <Dropdown.Menu 
                    style={{display: 'flex', flexDirection: 'column', padding:'10px',marginTop:'30px',
                    background:'white',textAlign:'start', alignItems: 'flex-end'
                    }}>
                    <Dropdown.Item href="/roofing">Roofing</Dropdown.Item>
                    <Dropdown.Item href="/siding">Siding</Dropdown.Item>
                    <Dropdown.Item href="/insulation">Insulation</Dropdown.Item>
                    <Dropdown.Item href="/hvac">Hvac</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                {/* <DropdownButton id="" title="Our Services" 
                  style={{border:'none',color:'#000',background:'transparent',fontWeight:'bold'}}>
                  <Dropdown.Item href="/roofing">Roofing</Dropdown.Item>
                  <Dropdown.Item href="/siding">Siding</Dropdown.Item>
                  <Dropdown.Item href="/insulation">Insulation</Dropdown.Item>
                  <Dropdown.Item href="/hvac">Hvac</Dropdown.Item>
                </DropdownButton> */}
                {/* <FormControl style={{ overFlowY:'hidden'}}>
                  <InputLabel htmlFor="agent-simple">Agent</InputLabel>
                  <Select
                    value={selected}
                    onChange={handleChange}
                    style={{width:'150px',textDecoration:'none',fontWeight:'bold'}}
                    disableUnderline
                  >
                    <MenuItem style={{marginTop:'150px'}} >Our Services</MenuItem>
                    <MenuItem ><Link to="/roofing">Roofing</Link></MenuItem>
                    <MenuItem ><Link to="/siding">Siding</Link></MenuItem>
                    <MenuItem ><Link to="/insulation">Insulation</Link></MenuItem>
                    <MenuItem ><Link to="/hvac">Hvac</Link></MenuItem>
                  </Select>
                </FormControl> */}
              </div>
              <Logo
                className="mobile-logo"
                onClick={() => handleNavigate('/')}
              />
            </div>
            <div className="main-navigation__middle">
              <img
                width="150px"
                alt=''
                src="/images/monarchy-brand-logo.svg"
                onClick={() => handleNavigate('/')}
              />
            </div>
            <div className="main-navigation__right">
              <div className="main-navigation__right__items">
                <a
                  href="tel:6135050552"
                  className="mobile-navigation__phone-link"
                >
                  <CallIcon
                    style={{
                      marginRight: '8px',
                    }}
                  />
                  <span className="text" style={{whiteSpace:'nowrap'}}>(613) 505-0552</span>
                </a>

                <div className="mobile-navigation__signin-link-container no-margin-bottom desktop-nav">
                  {renderSignInLink()}
                </div>

                {props.landing && (
                  <Link
                    to="/instant-price"
                    className="btn-link btn-link--landing"
                  >
                    <Button className="btn btn-primary" variant="contained">
                      Get a free estimate
                      <ArrowForwardIcon
                        style={{ marginLeft: '8px', fontSize: '18px' }}
                      />
                    </Button>
                  </Link>
                )}

                {props.location.pathname !== '/instant-price' &&
                  props.location.pathname !== '/' && (
                    <Link to="/instant-price" className="btn-link">
                      <Button className="btn btn-primary" variant="contained">
                        Get a free estimate
                        <ArrowForwardIcon
                          style={{ marginLeft: '8px', fontSize: '18px' }}
                        />
                      </Button>
                    </Link>
                  )}
              </div>
              <Box className="main-navigation__burger">
                <IconButton onClick={toggleMobileNav} size="medium">
                  {mobileNavOpen ? <MenuOpenIcon /> : <MenuIcon />}
                </IconButton>
              </Box>
            </div>
          </Grid>
          {props.location.pathname === '/instant-price' &&
            progressBarVisible && <InstantPriceProgress step={step} />}
        </Container>
      </nav>
      <div className="mobile-navigation">
        <div></div>
        <nav>
          <a onClick={() => handleNavigate('/about-us')} className="nav-link">
            About us
          </a>

          <a
            onClick={() => handleNavigate('/how-we-work')}
            className="nav-link"
          >
            Our Services
          </a>
          <a onClick={() => handleNavigate('/financing')} className="nav-link">
            Financing
          </a>

          <CTA closeMenu />
        </nav>

        <div className="mobile-navigation__signin-link-container">
          {renderSignInLink()}
        </div>
      </div>
    </>
  );
};

export default withRouter(Navigation);
