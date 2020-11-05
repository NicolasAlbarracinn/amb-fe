import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Route, Redirect, RouteProps, useHistory } from 'react-router-dom';
import Cookies from 'universal-cookie';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';

import { authSaga } from './saga';
import { selectIsAuthentificating, selectIsAuthenticated, selectAccount } from './selectors';
import { reducer, actions, sliceKey } from './slice';
import BackDrop from 'components/BackDrop/BackDrop';

const cookies = new Cookies();

interface Props extends RouteProps {}

const PrivateRoutes = ({ children, ...rest }: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: authSaga });
  const dispatch = useDispatch();
  const history = useHistory();

  const isAuthentificating = useSelector(selectIsAuthentificating);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const accountData = useSelector(selectAccount);
  const token: string = cookies.get('token') || '';

  useEffect(() => {
    dispatch(actions.getAccountRequest({ token }));
    return () => {
      dispatch(actions.reset());
    };
  }, [dispatch, token]);

  return isAuthentificating ? (
    <BackDrop />
  ) : !!isAuthenticated ? (
    <>
      {!accountData.completed && <Redirect to="/app/profile" />}
      <Route {...rest} render={() => children} />
    </>
  ) : (
    <Redirect
      to={{
        pathname: '/login',
        state: { from: history.location },
      }}
    />
  );
};

export default PrivateRoutes;
