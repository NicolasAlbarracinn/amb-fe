import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const styles = {
  clearfix: {
    '&:after,&:before': {
      display: 'table',
      content: '" "',
    },
    '&:after': {
      clear: 'both',
    },
  },
};

const useStyles = makeStyles(styles);

const Clearfix = () => {
  const classes = useStyles();
  return <div className={classes.clearfix} />;
};

export default Clearfix;
