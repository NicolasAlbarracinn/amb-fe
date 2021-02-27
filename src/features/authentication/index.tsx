import React from 'react';
import Cookies from 'universal-cookie';
import { useSelector } from 'react-redux';
import { Redirect, useLocation } from 'react-router-dom';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';

import { loginSaga } from './saga';
import { sliceKey, reducer } from './store/slice';
import { selectIsLoggedIn } from './store/selectors';

import LoginContainer from './containers/LoginContainer';

const cookies = new Cookies();

const Login = () => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: loginSaga });

  const token = cookies.get('token');
  const location = useLocation();
  const { pathname } = location?.state?.from || '/app/dasboard';

  const isLogged = useSelector(selectIsLoggedIn);

  if (isLogged || token) {
    return <Redirect to={pathname} />;
  }

  return <LoginContainer />;
};

export default Login;
