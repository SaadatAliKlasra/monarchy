import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import {
  ThemeProvider,
  createTheme,
  CircularProgress,
} from '@material-ui/core';

import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home/Home';
import InstantPrice from './pages/InstantPrice/InstantPrice';
import SignIn from './pages/SignIn/SignIn';
import CreateAccount from './pages/CreateAccount/CreateAccount';
import Price from './pages/Quote/Quote';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';

import { signInSuccess } from './slices/authSlice';
import store from './store';
import feathers from './feathers';

import Financing from './pages/Financing/Financing';
import AboutUs from './pages/AboutUs/AboutUs';
import PrivacyPolicy from './pages/PrivacyPolicy/AboutUs';
import Roofing from './pages/Roofing/AboutUs';
import Hvac from './pages/Hvac/AboutUs';
import Siding from './pages/Siding/AboutUs';
import Insulation from './pages/Insulation/AboutUs';
import HowWeWork2 from './pages/HowWeWork/HowWeWork2';

import './styles/global.scss';

let theme = createTheme();

const PrivateRoute = ({ component, ...options }: any) => {
  const [reAuthenticateWorking, setReAuthenticateWorking] =
    React.useState(true);

  const [loggedIn, setLoggedIn] = React.useState(false);

  useEffect(() => {
    feathers
      .reAuthenticate()
      .then((res) => {
        setLoggedIn(true);
      })
      .catch((err) => {
        console.log('Err');
        console.log(err);
        if (err.name === 'NotAuthenticated') {
          setLoggedIn(false);
        }
      })
      .finally(() => {
        setReAuthenticateWorking(false);
      });
  }, []);

  if (reAuthenticateWorking) {
    return <CircularProgress size="large" />;
  }

  if (!reAuthenticateWorking && loggedIn) {
    return <Route {...options} component={component} />;
  }

  if (!reAuthenticateWorking && !loggedIn) {
    return <Redirect to="/sign-in" />;
  }

  return null;
};

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    feathers
      .reAuthenticate()
      .then((res) => {
        dispatch(signInSuccess(res));
      })
      .catch((e) => { });
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <main className="mainContent">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/financing" exact component={Financing} />
              <Route path="/about-us" exact component={AboutUs} />
              <Route path="/privacy-policy" exact component={PrivacyPolicy} />
              <Route path="/roofing" exact component={Roofing} />
              <Route path="/siding" exact component={Siding} />
              <Route path="/insulation" exact component={Insulation} />
              <Route path="/hvac" exact component={Hvac} />
              <Route path="/how-we-work" exact component={HowWeWork2} />

              <Route path="/instant-price" exact component={InstantPrice} />
              <Route
                path="/create-account/:id"
                exact
                component={CreateAccount}
              />
              <Route path="/sign-in" exact component={SignIn} />
              <Route path="/forgot-password" exact component={ForgotPassword} />

              <PrivateRoute path="/instant-price/:id" exact component={Price} />
            </Switch>
          </main>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
