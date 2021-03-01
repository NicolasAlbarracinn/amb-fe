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

import { useLoginForm } from './LoginFormStyles';

interface ILoginFormProps {
  submit: (args: { email: string; password: string }) => void;
}

const LoginForm = ({ submit }: ILoginFormProps) => {
  const classes = useLoginForm();

  const [cardAnimaton, setCardAnimation] = useState('cardHidden');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    let id = setTimeout(function () {
      setCardAnimation('');
    }, 700);
    return function cleanup() {
      window.clearTimeout(id);
    };
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submit({ email, password });
  };

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
            value={email}
            onChange={setEmail}
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
            }}
          />
          <CustomInput
            value={password}
            onChange={setPassword}
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

export default LoginForm;