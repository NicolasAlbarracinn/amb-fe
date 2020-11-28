import React, { useState, ReactNode, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { makeStyles, Theme } from '@material-ui/core';
import Face from '@material-ui/icons/Face';

import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import TextInput from 'components/Form/TextInput';
import Button from 'components/CustomButtons/Button';

import { actions as wizardActions } from 'containers/WizardContainer/slice';
import { selectAdress, selectFetchedRenaperData } from 'containers/Partners/selectors';
import { parseReceivedForm, parseSubmitForm } from 'utils/parseForm';

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
  streetAdress: {
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

const Adress = () => {
  const classes = useStyles();
  const [adress, setAdress] = useState(initialForm);
  const [loadError, setLoadError] = useState(false);

  const renaperData = useSelector(selectAdress);
  const fetchedRenaperData = useSelector(selectFetchedRenaperData);

  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchedRenaperData) {
      const parsedData = parseReceivedForm(renaperData);
      setAdress(prevState => ({ ...prevState, ...parsedData }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchedRenaperData, renaperData]);

  const handleNext = () => {
    const isFormInvalid = Object.entries(adress).some(key => key[1].isValid === false);
    if (isFormInvalid) {
      dispatch(wizardActions.setStep({ stepId: 'adress', data: parseSubmitForm(adress), isValid: false }));
      setLoadError(true);
    } else {
      dispatch(wizardActions.setStep({ stepId: 'adress', data: parseSubmitForm(adress), isValid: true, type: 'next' }));
    }
  };

  const handlePrevious = () => {
    dispatch(
      wizardActions.setStep({ stepId: 'adress', data: parseSubmitForm(adress), isValid: true, type: 'previous' }),
    );
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
            id="streetAdress"
            label="Calle y N"
            value={adress.streetAdress.value}
            onChange={onChangeHanlder}
            length={[2, 25]}
            isValid={adress.streetAdress.isValid}
            loadError={loadError}
            endAdornmentIcon={<Face className={classes.inputAdornmentIcon} />}
          />
        </GridItem>
        <GridItem xs={12} sm={3}>
          <TextInput
            id="floor"
            label="Piso"
            value={adress.floor.value}
            onChange={onChangeHanlder}
            length={[2, 25]}
            isValid={adress.floor.isValid}
            endAdornmentIcon={<Face className={classes.inputAdornmentIcon} />}
          />
        </GridItem>
        <GridItem xs={12} sm={3}>
          <TextInput
            id="aptNumber"
            label="Depto"
            value={adress.aptNumber.value}
            onChange={onChangeHanlder}
            length={[2, 25]}
            isValid={adress.aptNumber.isValid}
            endAdornmentIcon={<Face className={classes.inputAdornmentIcon} />}
          />
        </GridItem>
        <GridItem xs={12} sm={3}>
          <TextInput
            id="department"
            label="Departamento"
            value={adress.department.value}
            onChange={onChangeHanlder}
            length={[2, 25]}
            isValid={adress.department.isValid}
            endAdornmentIcon={<Face className={classes.inputAdornmentIcon} />}
          />
        </GridItem>
        <GridItem xs={12} sm={3}>
          <TextInput
            id="location"
            label="Localidad"
            value={adress.location.value}
            onChange={onChangeHanlder}
            length={[2, 25]}
            isValid={adress.location.isValid}
            endAdornmentIcon={<Face className={classes.inputAdornmentIcon} />}
          />
        </GridItem>
        <GridItem xs={12} sm={3}>
          <TextInput
            id="province"
            label="Provincia"
            value={adress.province.value}
            onChange={onChangeHanlder}
            length={[2, 25]}
            isValid={adress.location.isValid}
            endAdornmentIcon={<Face className={classes.inputAdornmentIcon} />}
          />
        </GridItem>
        <GridItem xs={12} sm={3}>
          <TextInput
            id="postalCode"
            label="Codigo Postal"
            value={adress.postalCode.value}
            onChange={onChangeHanlder}
            length={[2, 25]}
            isValid={adress.postalCode.isValid}
            endAdornmentIcon={<Face className={classes.inputAdornmentIcon} />}
          />
        </GridItem>
        <GridItem xs={12} sm={12}>
          <TextInput
            id="observations"
            label="Observaciones"
            value={adress.observations.value}
            onChange={onChangeHanlder}
            length={[2, 25]}
            isValid={adress.observations.isValid}
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

export default Adress;
