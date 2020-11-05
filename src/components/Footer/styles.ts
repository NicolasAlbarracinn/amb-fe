import { makeStyles, Theme } from '@material-ui/core';
import { container, containerFluid, defaultFont, grayColor, primaryColor, whiteColor } from 'utils/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  block: {},
  left: {
    float: 'left!important' as 'left',
    display: 'block',
  },
  right: {
    margin: '0',
    fontSize: '14px',
    float: 'right!important' as 'right',
    padding: '15px',
  },
  footer: {
    bottom: '0',
    borderTop: '1px solid ' + grayColor[15],
    padding: '15px 0',
    ...defaultFont,
    zIndex: 4,
  },
  container: {
    zIndex: 3,
    ...container,
    position: 'relative',
  },
  containerFluid: {
    zIndex: 3,
    ...containerFluid,
    position: 'relative',
  },
  a: {
    color: primaryColor[0],
    textDecoration: 'none',
    backgroundColor: 'transparent',
  },
  list: {
    marginBottom: '0',
    padding: '0',
    marginTop: '0',
  },
  inlineBlock: {
    display: 'inline-block',
    padding: '0',
    width: 'auto',
  },
  whiteColor: {
    '&,&:hover,&:focus': {
      color: whiteColor,
    },
  },
}));
