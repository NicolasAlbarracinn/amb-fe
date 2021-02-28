import { makeStyles, Theme } from '@material-ui/core';
import { defaultFont, primaryColor, infoBoxShadow } from 'utils/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  infoText: {
    fontWeight: 300,
    margin: '10px 0 30px',
    textAlign: 'center',
  },
  inputAdornmentIcon: {
    color: '#555',
  },
  inputAdornment: {
    position: 'relative',
  },
  footer: {
    padding: '0 15px',
  },
  left: {
    float: 'left!important' as 'left',
  },
  right: {
    float: 'right!important' as 'right',
  },
  clearfix: {
    '&:after,&:before': {
      display: 'table',
      content: '" "',
    },
    clear: 'both',
  },
  tagContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    ...infoBoxShadow,
    ...defaultFont,
    fontSize: '12px',
    backgroundColor: primaryColor[1],
    padding: '5px 15px',
    color: '#fbf3f3',
    borderRadius: 5,
    marginTop: '10px',
  },
  icons: {
    width: '16px',
    height: '16px',
    marginLeft: '5px',
    cursor: 'pointer',
  },
  cardPadding: {
    padding: '20px 60px',
  },
}));
