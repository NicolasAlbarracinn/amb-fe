import React from 'react';
import { makeStyles, Backdrop as MuiBackDrop, CircularProgress, Theme, createStyles } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }),
);

const BackDrop = props => {
  const classes = useStyles();
  return (
    <MuiBackDrop className={classes.backdrop} open={props.open}>
      <CircularProgress color="inherit" />
    </MuiBackDrop>
  );
};

export default BackDrop;
