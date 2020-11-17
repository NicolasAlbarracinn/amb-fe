import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@material-ui/core';

import { useStyles } from './selectInputStyles';
interface IInputProps {
  id: string;
  label: string;
  mainSelectLabel: string;
  value: string;
  items: { value: string; label: string }[];
  handleSelect: Function;
  loadError?: boolean;
  isValid?: boolean;
}

const SelectInput = ({ label, mainSelectLabel, value, handleSelect, items, id, loadError, isValid }: IInputProps) => {
  const classes = useStyles();
  const handleOnChange = e => {
    handleSelect({ id, value: e.target.value, isValid: true });
  };

  return (
    <FormControl error={!isValid && loadError} fullWidth className={classes.selectFormControl}>
      {label && (
        <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
          {label}
        </InputLabel>
      )}
      <Select
        MenuProps={{
          className: classes.selectMenu,
        }}
        classes={{
          select: classes.select,
        }}
        value={value}
        onChange={handleOnChange}
        inputProps={{
          name: 'simpleSelect',
          id: 'simple-select',
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
      {isValid && <FormHelperText>Campo Requerido</FormHelperText>}
    </FormControl>
  );
};

export default SelectInput;
