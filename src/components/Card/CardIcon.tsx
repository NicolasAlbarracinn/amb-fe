import React from 'react';
import classNames from 'classnames';

import { useStyles } from './cardIconStyles';

const CardIcon = props => {
  const classes = useStyles();
  const { className, children, color, ...rest } = props;
  const cardIconClasses = classNames({
    [classes.cardIcon]: true,
    [classes[color + 'CardHeader']]: color,
    [className]: className !== undefined,
  });
  return (
    <div className={cardIconClasses} {...rest}>
      {children}
    </div>
  );
};

export default CardIcon;
