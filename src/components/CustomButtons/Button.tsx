import React, { forwardRef } from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// nodejs library to set properties for components

// material-ui components
import Button from '@material-ui/core/Button';

import { useStyles } from './styles';

export type ColorType =
  | 'primary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'rose'
  | 'white'
  | 'twitter'
  | 'facebook'
  | 'google'
  | 'linkedin'
  | 'pinterest'
  | 'youtube'
  | 'tumblr'
  | 'github'
  | 'behance'
  | 'dribbble'
  | 'reddit'
  | 'transparent';

export type SizeType = 'sm' | 'lg';

export interface IRegularButtonProps {
  color?: ColorType;
  size?: SizeType;
  simple?: boolean;
  round?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  block?: boolean;
  link?: boolean;
  justIcon?: boolean;
  className?: boolean;
  muiClasses?: object;
}

const RegularButton = forwardRef((props: any, ref) => {
  const classes = useStyles();
  const {
    color,
    round,
    children,
    fullWidth,
    disabled,
    simple,
    size,
    block,
    link,
    justIcon,
    className,
    muiClasses,
    ...rest
  } = props;
  const btnClasses = classNames({
    [classes.button]: true,
    [classes[size]]: size,
    [classes[color]]: color,
    [classes.round]: round,
    [classes.fullWidth]: fullWidth,
    [classes.disabled]: disabled,
    [classes.simple]: simple,
    [classes.block]: block,
    [classes.link]: link,
    [classes.justIcon]: justIcon,
    [className]: className,
  });
  return (
    <Button {...rest} ref={ref} classes={muiClasses} className={btnClasses}>
      {children}
    </Button>
  );
});

export default RegularButton;
