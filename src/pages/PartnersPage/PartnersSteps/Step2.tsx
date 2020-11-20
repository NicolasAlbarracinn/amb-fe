import React, { useState, ReactNode } from 'react';
import { useDispatch } from 'react-redux';

import { makeStyles, Theme } from '@material-ui/core';
import Face from '@material-ui/icons/Face';

import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import TextInput from 'components/Form/TextInput';
import Button from 'components/CustomButtons/Button';

import { actions as wizardActions } from 'containers/WizardContainer/slice';

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
}));

type SubmitFunction = (arg: any) => void;

interface IStep1 {
  handleSubmit: SubmitFunction;
  formValues: typeof initialForm;
  compone: ReactNode;
}

const initialForm = {
  streetAddress: {
    value: '',
    isValid: false,
  },
  floor: {
    value: '',
    isValid: false,
  },
  aptNumber: {
    value: '',
    isValid: false,
  },
  department: {
    value: '',
    isValid: false,
  },
  location: {
    value: '',
    isValid: false,
  },
  province: {
    value: '',
    isValid: false,
  },
  postalCode: {
    value: '',
    isValid: false,
  },
  observations: {
    value: '',
    isValid: false,
  },
};

const Step2 = () => {
  const classes = useStyles();
  const [adress, setAdress] = useState(initialForm);
  const [hasErrors, setHasErrors] = useState(false);

  const dispatch = useDispatch();

  const handleNext = () => {
    const isFormInvalid = Object.entries(adress).some(key => key[1].isValid === false);
    if (isFormInvalid) {
      setHasErrors(true);
      dispatch(wizardActions.setStep({ stepId: 'adress', data: adress, isValid: false }));
    } else {
      dispatch(wizardActions.setStep({ stepId: 'adress', data: adress, isValid: true, type: 'next' }));
    }
  };

  const handlePrevious = () => {
    dispatch(wizardActions.setStep({ stepId: 'adress', data: adress, isValid: true, type: 'previous' }));
  };

  const onChangeHanlder = ({ id, value, isValid }) => {
    setAdress(prevState => ({
      ...prevState,
      [id]: {
        value: value,
        isValid,
      },
    }));
  };

  return (
    <>
      <GridContainer>
        <GridItem xs={12} sm={6}>
          <TextInput
            id="streetAddress"
            label="Calle y N"
            isRequired={true}
            onChange={onChangeHanlder}
            value={adress.streetAddress.value}
            length={[2, 25]}
            endAdornmentIcon={<Face className={classes.inputAdornmentIcon} />}
          />
        </GridItem>
        <GridItem xs={12} sm={3}>
          <TextInput
            id="floor"
            label="Piso"
            isRequired={true}
            onChange={onChangeHanlder}
            value={adress.floor.value}
            length={[2, 25]}
            endAdornmentIcon={<Face className={classes.inputAdornmentIcon} />}
          />
        </GridItem>
        <GridItem xs={12} sm={3}>
          <TextInput
            id="aptNumber"
            label="Depto"
            isRequired={true}
            onChange={onChangeHanlder}
            value={adress.aptNumber.value}
            length={[2, 25]}
            endAdornmentIcon={<Face className={classes.inputAdornmentIcon} />}
          />
        </GridItem>
        <GridItem xs={12} sm={3}>
          <TextInput
            id="department"
            label="Departamento"
            isRequired={true}
            onChange={onChangeHanlder}
            value={adress.department.value}
            length={[2, 25]}
            endAdornmentIcon={<Face className={classes.inputAdornmentIcon} />}
          />
        </GridItem>
        <GridItem xs={12} sm={3}>
          <TextInput
            id="location"
            label="Localidad"
            isRequired={true}
            onChange={onChangeHanlder}
            value={adress.location.value}
            length={[2, 25]}
            endAdornmentIcon={<Face className={classes.inputAdornmentIcon} />}
          />
        </GridItem>
        <GridItem xs={12} sm={3}>
          <TextInput
            id="province"
            label="Provincia"
            isRequired={true}
            onChange={onChangeHanlder}
            value={adress.province.value}
            length={[2, 25]}
            endAdornmentIcon={<Face className={classes.inputAdornmentIcon} />}
          />
        </GridItem>
        <GridItem xs={12} sm={3}>
          <TextInput
            id="postalCode"
            label="Codigo Postal"
            isRequired={true}
            onChange={onChangeHanlder}
            value={adress.postalCode.value}
            length={[2, 25]}
            endAdornmentIcon={<Face className={classes.inputAdornmentIcon} />}
          />
        </GridItem>
        <GridItem xs={12} sm={12}>
          <TextInput
            id="observations"
            label="Telefono"
            isRequired={true}
            onChange={onChangeHanlder}
            value={adress.observations.value}
            length={[2, 25]}
            endAdornmentIcon={<Face className={classes.inputAdornmentIcon} />}
          />
        </GridItem>
      </GridContainer>
      <div className={classes.footer}>
        <div className={classes.left}>
          <Button color="rose" onClick={handlePrevious}>
            Anterior
          </Button>
        </div>
        <div className={classes.right}>
          {true ? (
            <Button color="rose" onClick={handleNext}>
              Proximo
            </Button>
          ) : null}
        </div>
        <div className={classes.clearfix} />
      </div>
    </>
  );
};

export default Step2;
