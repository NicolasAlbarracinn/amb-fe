import { makeStyles, Theme } from '@material-ui/core';
import { grayColor, defaultFont, hexToRgb, blackColor } from 'utils/styles';

export const modalStyle = (theme: Theme) => ({
  modalRoot: {
    overflow: 'auto',
    alignItems: 'unset',
    justifyContent: 'unset',
  },
  modal: {
    [theme.breakpoints.up('sm')]: {
      maxWidth: '500px',
      margin: 'auto',
    },
    borderRadius: '6px',
    marginTop: '100px !important',
    overflow: 'visible',
    maxHeight: 'unset',
    position: 'relative',
    height: 'fit-content',
  },
  modalHeader: {
    borderBottom: 'none',
    paddingTop: '24px',
    paddingRight: '24px',
    paddingBottom: '0',
    paddingLeft: '24px',
    minHeight: '16.43px',
  },
  modalTitle: {
    margin: '0',
    lineHeight: '1.42857143',
  },
  modalCloseButton: {
    color: grayColor[0],
    marginTop: '-12px',
    WebkitAppearance: 'none',
    padding: '0',
    cursor: 'pointer',
    background: '0 0',
    border: '0',
    fontSize: 'inherit',
    opacity: '.9',
    textShadow: 'none',
    fontWeight: 700,
    lineHeight: '1',
    float: 'right',
  },
  modalClose: {
    width: '16px',
    height: '16px',
  },
  modalBody: {
    paddingTop: '24px',
    paddingRight: '24px',
    paddingBottom: '16px',
    paddingLeft: '24px',
    position: 'relative',
    overflow: 'visible',
  },
  modalFooter: {
    padding: '15px',
    textAlign: 'right',
    paddingTop: '0',
    margin: '0',
  },
  modalFooterCenter: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  instructionNoticeModal: {
    marginBottom: '25px',
  },
  imageNoticeModal: {
    maxWidth: '150px',
  },
  modalSmall: {
    width: '300px',
  },
  modalSmallBody: {
    paddingTop: '0',
  },
  modalSmallFooterFirstButton: {
    margin: '0',
    paddingLeft: '16px',
    paddingRight: '16px',
    width: 'auto',
  },
  modalSmallFooterSecondButton: {
    marginBottom: '0',
    marginLeft: '5px',
  },
});

export const useNotificationStyles = makeStyles((theme: Theme) => ({
  cardTitle: {
    marginTop: '0',
    marginBottom: '3px',
    color: grayColor[2],
    fontSize: '18px',
  },
  cardHeader: {
    zIndex: 3,
  },
  cardSubtitle: {
    ...defaultFont,
    color: grayColor[0],
    fontSize: '14px',
    margin: '0 0 10px',
  },
  center: {
    textAlign: 'center',
  },
  right: {
    textAlign: 'right',
  },
  left: {
    textAlign: 'left',
  },
  marginRight: {
    marginRight: '5px',
  },
  modalRoot: {
    overflow: 'auto',
    alignItems: 'unset',
    justifyContent: 'unset',
  },
  modal: {
    [theme.breakpoints.up('sm')]: {
      maxWidth: '500px',
      margin: 'auto',
    },
    borderRadius: '6px',
    marginTop: '100px !important',
    overflow: 'visible',
    maxHeight: 'unset',
    position: 'relative',
    height: 'fit-content',
  },
  modalHeader: {
    boxShadow: '0 1px 4px 0 rgba(' + hexToRgb(blackColor) + ', 0.14)',
    borderBottom: '1px solid ',
    padding: '20px',
    minHeight: '16.43px',
    backgroundColor: grayColor[2],
    color: grayColor[12],
    textTransform: 'uppercase',
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalCloseButton: {
    color: grayColor[0],
    marginTop: '-12px',
    WebkitAppearance: 'none',
    padding: '0',
    cursor: 'pointer',
    background: '0 0',
    border: '0',
    fontSize: 'inherit',
    opacity: '.9',
    textShadow: 'none',
    fontWeight: 700,
    lineHeight: '1',
    float: 'right',
  },
  modalClose: {
    width: '16px',
    height: '16px',
  },
  modalBody: {
    paddingTop: '24px',
    paddingRight: '24px',
    paddingBottom: '16px',
    paddingLeft: '24px',
    position: 'relative',
    overflow: 'visible',
    textAlign: 'left',
  },
  modalTitle: {
    margin: '0',
    lineHeight: '1.42857143',
  },
  modalSmall: {
    width: '300px',
  },
  modalMedium: {
    maxWidth: '700px',
    width: '600px',
  },
  modalLarge: {
    maxWidth: '900px',
    width: '900px',
  },
  modalFooter: {
    padding: '15px',
    textAlign: 'right',
    paddingTop: '0',
    margin: '0',
  },
  modalFooterCenter: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  closeIcon: {
    width: '16px',
    height: '16px',
  },
}));
