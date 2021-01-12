import React from 'react';
import classNames from 'classnames';
import { FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@material-ui/core';

import { useStyles } from './selectInputStyles';
interface IInputProps {
  id: string;
  label?: string;
  mainSelectLabel?: string;
  value: string;
  items: { value: string; label: string }[];
  handleSelect: Function;
  isValid?: boolean;
  loadError?: boolean;
  disabled?: boolean;
}

const SelectInput = ({
  id,
  label,
  mainSelectLabel,
  value,
  items,
  handleSelect,
  isValid,
  loadError,
  disabled = false,
}: IInputProps) => {
  const classes = useStyles();
  const handleOnChange = e => {
    handleSelect({ id, value: e.target.value, isValid: true });
  };

  const error = !isValid && loadError;

  const labelClasses = classNames({
    [' ' + classes.selectLabelError]: error,
    [' ' + classes.selectLabelSuccess]: isValid && !error,
  });

  const underlineClasses = classNames({
    [classes.underlineError]: error,
    [classes.underlineSuccess]: isValid && !error,
  });

  return (
    <FormControl fullWidth className={classes.selectFormControl + ' ' + underlineClasses}>
      {label && (
        <InputLabel htmlFor="simple-select" className={classes.selectLabel + ' ' + labelClasses}>
          {label}
        </InputLabel>
      )}
      <Select
        disabled={disabled}
        MenuProps={{
          className: classes.selectMenu,
        }}
        value={value}
        onChange={handleOnChange}
        inputProps={{
          name: 'simpleSelect',
          id: 'simple-select',
          classes: {
            select: classes.select,
          },
        }}
      >
        {mainSelectLabel && (
          <MenuItem
            disabled
            classes={{
              root: classes.selectMenuItem,
            }}
          >
            {mainSelectLabel}
          </MenuItem>
        )}
        {items.map(item => (
          <MenuItem
            classes={{
              root: classes.selectMenuItem,
              selected: classes.selectMenuItemSelected,
            }}
            value={item.value}
          >
            {item.label}
          </MenuItem>
        ))}
      </Select>
      {/*!isValid && <FormHelperText>Campo Requerido</FormHelperText>*/}
    </FormControl>
  );
};

export default SelectInput;
