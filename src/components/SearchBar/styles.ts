import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  search: {
    margin: '0',
    paddingTop: '7px',
    paddingBottom: '7px',
    [theme.breakpoints.down('sm')]: {
      margin: '10px 15px',
      float: 'none !important',
      paddingTop: '1px',
      paddingBottom: '1px',
      padding: '10px 15px',
      width: 'auto',
    },
  },
  searchInput: {
    paddingTop: '2px',
  },
  searchButton: {
    [theme.breakpoints.down('sm')]: {
      top: '-50px !important',
      marginRight: '38px',
      float: 'right',
    },
  },
  searchRTL: {
    [theme.breakpoints.down('sm')]: {
      marginRight: '18px !important',
    },
    [theme.breakpoints.up('md')]: {
      marginLeft: '12px',
    },
  },
  top: {
    zIndex: 4,
  },
  headerLinksSvg: {
    width: '20px !important',
    height: '20px !important',
  },
  searchIcon: {
    width: '17px',
    zIndex: 4,
  },
}));
