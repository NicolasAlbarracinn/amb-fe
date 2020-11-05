import React, { useEffect, createRef } from 'react';

import AuthNavbar from 'components/AuthNavbar/AuthNavbar';
import Footer from 'components/Footer/Footer';

import register from 'assets/img/register.jpeg';
import login from 'assets/img/login.jpg';
import lock from 'assets/img/lock.jpeg';
import error from 'assets/img/clint-mckoy.jpg';
import pricing from 'assets/img/bg-pricing.jpeg';

import { useStyles } from './homeLayoutStyles';

const HomeLayout = props => {
  const { ...rest } = props;
  const wrapper = createRef<HTMLDivElement>();
  const classes = useStyles();

  useEffect(() => {
    document.body.style.overflow = 'unset';
    return function cleanup() {};
  });

  const getBgImage = () => {
    if (window.location.pathname.indexOf('/auth/register-page') !== -1) {
      return register;
    } else if (window.location.pathname.indexOf('/login') !== -1) {
      return login;
    } else if (window.location.pathname.indexOf('/auth/pricing-page') !== -1) {
      return pricing;
    } else if (window.location.pathname.indexOf('/auth/lock-screen-page') !== -1) {
      return lock;
    } else if (window.location.pathname.indexOf('/auth/error-page') !== -1) {
      return error;
    }
    return login;
  };

  return (
    <div>
      <AuthNavbar {...rest} />
      <div className={classes.wrapper} ref={wrapper}>
        <div className={classes.fullPage} style={{ backgroundImage: 'url(' + getBgImage() + ')' }}>
          {props.children}
          <Footer white />
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
