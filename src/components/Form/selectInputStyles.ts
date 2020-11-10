import { makeStyles, Theme } from '@material-ui/core';
import { grayColor, primaryBoxShadow, primaryColor, whiteColor } from 'utils/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  select: {
    padding: '12px 0 7px',
    fontSize: '.75rem',
    fontWeight: 400,
    lineHeight: '1.42857',
    textDecoration: 'none',
    textTransform: 'uppercase',
    color: grayColor[2],
    letterSpacing: '0',
    '&:focus': {
      backgroundColor: 'transparent',
    },
    '&[aria-owns] + input + svg': {
      transform: 'rotate(180deg)',
    },
    '& + input + svg': {
      transition: 'all 300ms linear',
    },
  },
  selectFormControl: {
    margin: '7px 0 17px 0 !important',
    '& > div': {
      '&:before': {
        borderBottomWidth: '1px !important',
        borderBottomColor: grayColor[4] + '!important',
      },
      '&:after': {
        borderBottomColor: primaryColor[0] + '!important',
      },
    },
  },
  selectLabel: {
    fontSize: '12px',
    textTransform: 'uppercase',
    color: grayColor[2] + ' !important',
    top: '8px',
  },
  selectMenu: {
    '& > div > ul': {
      border: '0',
      padding: '5px 0',
      margin: '0',
      boxShadow: 'none',
      minWidth: '100%',
      borderRadius: '4px',
      boxSizing: 'border-box',
      display: 'block',
      fontSize: '14px',
      textAlign: 'left',
      listStyle: 'none',
      backgroundColor: whiteColor,
      backgroundClip: 'padding-box',
    },
    '& $selectPaper $selectMenuItemSelectedMultiple': {
      backgroundColor: 'inherit',
    },
    '& > div + div': {
      maxHeight: '266px !important',
    },
  },
  selectMenuItem: {
    fontSize: '13px',
    padding: '10px 20px',
    margin: '0 5px',
    borderRadius: '2px',
    transition: 'all 150ms linear',
    display: 'block',
    clear: 'both',
    fontWeight: 400,
    lineHeight: '2',
    whiteSpace: 'nowrap',
    color: grayColor[7],
    paddingRight: '30px',
    '&:hover': {
      backgroundColor: primaryColor[0],
      color: whiteColor,
      ...primaryBoxShadow,
    },
  },
  selectMenuItemSelected: {
    backgroundColor: primaryColor[0] + '!important',
    color: whiteColor,
  },
}));
