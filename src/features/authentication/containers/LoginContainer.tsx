import React from 'react';
import { useDispatch } from 'react-redux';

import { actions } from '../store/slice';

import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import LoginForm from '../components/LoginForm';

import { useStyles } from '../styles';
import { GetLoginRequest } from '../types';

const LoginContainer = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const handleSubmit = (args: GetLoginRequest) => {
    dispatch(actions.getLoginRequest(args));
  };

  return (
    <div className={classes.container}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={6} md={4}>
          <LoginForm submit={handleSubmit} />
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default LoginContainer;
