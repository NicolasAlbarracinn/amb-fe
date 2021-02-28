import { FieldProps, getIn } from 'formik';
import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core';
import {
  dangerColor,
  defaultFont,
  grayColor,
  primaryColor,
  successColor,
  whiteColor,
  primaryBoxShadow,
} from 'utils/styles';

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
    margin: '7px 0 17px 0',
    '& > div': {
      '&:hover:not($disabled):before,&:before': {
        borderColor: grayColor[4] + '!important',
        borderWidth: '1px !important',
      },
      '&:before': {
        borderBottomWidth: '1px',
        borderBottomColor: grayColor[4],
      },
      '&:after': {
        borderBottomColor: primaryColor[0],
      },
    },
  },
  selectLabel: {
    ...defaultFont,
    color: grayColor[3] + ' !important',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '1.42857',
    letterSpacing: 'unset',
    '& + $underline': {
      marginTop: '0px',
    },
  },
  selectLabelError: {
    color: dangerColor[0] + ' !important',
  },
  selectLabelSuccess: {
    color: successColor[0] + ' !important',
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
  underlineError: {
    '& > div': {
      '&:after': {
        borderBottomColor: dangerColor[0],
      },
    },
  },
  underlineSuccess: {
    '& > div': {
      '&:after': {
        borderBottomColor: successColor[0],
      },
    },
  },
}));

const SelectFormField: React.FC<
  FieldProps & {
    label?: string;
    options: Array<{ label: string; value: string }>;
  }
> = ({ field, form, label, options, ...props }) => {
  const classes = useStyles();

  const errorText = getIn(form.touched, field.name) && getIn(form.errors, field.name);
  return (
    <FormControl fullWidth error={!!errorText} className={classes.selectFormControl}>
      {label && <InputLabel className={classes.selectLabel}>{label}</InputLabel>}
      <Select
        fullWidth
        {...field}
        {...props}
        MenuProps={{
          className: classes.selectMenu,
        }}
        classes={{
          select: classes.select,
        }}
      >
        {options.map(op => (
          <MenuItem
            key={op.value}
            value={op.value}
            classes={{
              root: classes.selectMenuItem,
            }}
          >
            {op.label}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{errorText}</FormHelperText>
    </FormControl>
  );
};

export default SelectFormField;
