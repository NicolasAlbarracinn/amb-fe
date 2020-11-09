import React, { useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core';
// @material-ui/icons
import Face from '@material-ui/icons/Face';
import RecordVoiceOver from '@material-ui/icons/RecordVoiceOver';

// core components
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import TextInput from 'components/Form/TextInput';

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
}));

const Step1 = () => {
  const classes = useStyles();
  const [inputValues, setInputValues] = useState({ address: '', phone: '' });

  const onChangeHanlder = ({ id, value }) => {
    setInputValues(prevState => ({
      ...prevState,
      [id]: value,
    }));
  };

  return (
    <GridContainer justify="center">
      <GridItem xs={12} sm={12}>
        <h4>Let{"'"}s start with the basic information (with validation)</h4>
      </GridItem>
      <GridItem xs={12} sm={12} md={12} lg={10}>
        <TextInput
          id="firstName"
          label="nombre"
          isRequired={true}
          onChange={onChangeHanlder}
          value={inputValues.address}
          length={[0, 25]}
          endAdornmentIcon={<Face className={classes.inputAdornmentIcon} />}
        />
        <TextInput
          id="lastName"
          label="apellido"
          isRequired={true}
          onChange={onChangeHanlder}
          value={inputValues.phone}
          length={[0, 25]}
          endAdornmentIcon={<RecordVoiceOver className={classes.inputAdornmentIcon} />}
        />
      </GridItem>
    </GridContainer>
  );
};

export default Step1;
