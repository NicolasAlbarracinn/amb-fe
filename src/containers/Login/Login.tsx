import React, { useEffect, useState } from 'react';

import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from '@material-ui/core/Icon';

import Email from '@material-ui/icons/Email';

import CustomInput from 'components/CustomInput/CustomInput';
import Button from 'components/CustomButtons/Button';
import Card from 'components/Card/Card';
import CardBody from 'components/Card/CardBody';
import CardHeader from 'components/Card/CardHeader';
import CardFooter from 'components/Card/CardFooter';

import { useStyles } from './styles';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { useDispatch, useSelector } from 'react-redux';
import { loginSaga } from './saga';
import { actions, sliceKey, reducer } from './slice';
import { Redirect } from 'react-router-dom';
import { selectIsLoggedIn } from './selectors';

const Login = () => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: loginSaga });
  const [cardAnimaton, setCardAnimation] = useState('cardHidden');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const classes = useStyles();
  const dispatch = useDispatch();

  const isLogged = useSelector(selectIsLoggedIn);

  useEffect(() => {
    let id = setTimeout(function () {
      setCardAnimation('');
    }, 700);
    return function cleanup() {
      window.clearTimeout(id);
    };
  });

  const handleSubmit = e => {
    dispatch(actions.getLoginRequest({ email, password }));
    e.preventDefault();
  };
  if (isLogged) {
    return <Redirect to="/app/dashboard" />;
  }
  return (
    <form onSubmit={handleSubmit}>
      <Card login className={classes[cardAnimaton]}>
        <CardHeader className={`${classes.cardHeader} ${classes.textCenter}`} color="rose">
          <h4 className={classes.cardTitle}>Log in</h4>
          <div className={classes.socialLine}>
            {['fab fa-facebook-square', 'fab fa-twitter', 'fab fa-google-plus'].map((prop, key) => {
              return (
                <Button type="submit" color="transparent" justIcon key={key} className={classes.customButtonClass}>
                  <i className={prop} />
                </Button>
              );
            })}
          </div>
        </CardHeader>
        <CardBody>
          <CustomInput
            labelText="Email"
            id="email"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Email className={classes.inputAdornmentIcon} />
                </InputAdornment>
              ),
              value: email,
              onChange: (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value),
            }}
          />
          <CustomInput
            labelText="Password"
            id="password"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Icon className={classes.inputAdornmentIcon}>lock_outline</Icon>
                </InputAdornment>
              ),
              type: 'password',
              autoComplete: 'off',
              value: password,
              onChange: (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value),
            }}
          />
        </CardBody>
        <CardFooter className={classes.justifyContentCenter}>
          <Button type="submit" color="rose" simple size="lg" block>
            Ingresar
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
};

export default Login;
