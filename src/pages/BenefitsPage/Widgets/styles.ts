import { makeStyles, Theme } from '@material-ui/core';

export const useModalStyles = makeStyles((theme: Theme) => ({
  dataContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '18px',
  },

  title: {
    fontSize: '16px',
  },
}));
