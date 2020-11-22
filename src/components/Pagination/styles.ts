import { makeStyles } from '@material-ui/core';
import { primaryColor, primaryBoxShadow, whiteColor, blackColor, grayColor, hexToRgb } from 'utils/styles';

//For fontWhight we should use:
// Light: Lighter than the inherited font weight
// Normal: 400
// Bold: 700
// Bolder: Bolder than the inherited font weight

export const ArrowStyles = makeStyles(() => ({
  pagingArrowContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pagingValuesBox: {
    margin: '0 5px',
  },
}));

export const useStyles = makeStyles(() => ({
  formControlMargins: {
    margin: '3px 0 !important',
  },
  gridContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  select: {
    fontWeight: 'normal',
    padding: '12px 0 7px',
    fontSize: '.75rem',
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
    fontWeight: 'normal',
    fontSize: '13px',
    padding: '10px 20px',
    margin: '0 5px',
    borderRadius: '2px',
    transition: 'all 150ms linear',
    display: 'block',
    clear: 'both',
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
  selectMenuItemSelectedMultiple: {
    backgroundColor: 'transparent !important',
    '&:hover': {
      backgroundColor: primaryColor[0] + '!important',
      color: whiteColor,
      ...primaryBoxShadow,
      '&:after': {
        color: whiteColor,
      },
    },
    '&:after': {
      top: '16px',
      right: '12px',
      width: '12px',
      height: '5px',
      borderLeft: '2px solid currentColor',
      transform: 'rotate(-45deg)',
      opacity: '1',
      color: grayColor[2],
      position: 'absolute',
      content: "''",
      borderBottom: '2px solid currentColor',
      transition: 'opacity 90ms cubic-bezier(0,0,.2,.1)',
    },
  },
  selectPaper: {
    boxSizing: 'border-box',
    borderRadius: '4px',
    padding: '0',
    minWidth: '100%',
    display: 'block',
    border: '0',
    boxShadow: '0 2px 5px 0 rgba(' + hexToRgb(blackColor) + ', 0.26)',
    backgroundClip: 'padding-box',
    margin: '2px 0 0',
    fontSize: '14px',
    textAlign: 'left',
    listStyle: 'none',
    backgroundColor: 'transparent',
    maxHeight: '266px',
  },
  center: {
    flex: '1.5',
    textAlign: 'center',
    marginBottom: ' 0',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  arrowBox: {
    justifyContent: 'flex-end',
  },
  btn: {
    appearance: 'none',
    display: 'block',
    width: '100%',
    height: '100%',
    border: '0',
    borderRadius: '3px',
    padding: '6px',
    fontSize: '1em',
    color: ' rgba(0, 0, 0, 0.6)',
    background: 'rgba(0, 0, 0, 0.1)',
    transition: 'all 0.1s ease',
    cursor: 'pointer',
    outline: 'none',
    '&:hover': {
      background: ' rgba(0, 0, 0, 0.3)',
      color: '#fff',
    },
  },
  btnDisabled: {
    opacity: ' 0.5',
    cursor: 'not-allowed',
    '&:hover': {
      background: 'rgba(0, 0, 0, 0.1)',
      color: ' rgba(0, 0, 0, 0.6)',
    },
  },
}));
