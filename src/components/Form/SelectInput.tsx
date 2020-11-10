import React, { useEffect, useState, useMemo } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

import { useStyles } from './selectInputStyles';

const SelectInput = ({ label, mainSelectLabel, value, handleSelect, items }) => {
  const classes = useStyles();
  return (
    <FormControl fullWidth className={classes.selectFormControl}>
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
        onChange={handleSelect}
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
    </FormControl>
  );
};

export default SelectInput;
