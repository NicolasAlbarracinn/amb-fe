import React from 'react';
import Cookies from 'universal-cookie';

import { Redirect, useLocation } from 'react-router-dom';

import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Login from 'containers/Login/Login';

import { useStyles } from './styles';
const cookies = new Cookies();

const LoginPage = () => {
  const classes = useStyles();
  const token = cookies.get('token');
  const location = useLocation();
  const { pathname } = location?.state?.from || '/app/dasboard';

  return (
    <>
      {token ? (
        <Redirect to={pathname} />
      ) : (
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={6} md={4}>
              <Login />
            </GridItem>
          </GridContainer>
        </div>
      )}
    </>
  );
};

export default LoginPage;
