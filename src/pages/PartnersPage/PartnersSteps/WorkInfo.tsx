import React, { useState, ReactNode } from 'react';
import { useDispatch } from 'react-redux';

import { makeStyles, Theme } from '@material-ui/core';
import Face from '@material-ui/icons/Face';

import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import TextInput from 'components/Form/TextInput';
import Button from 'components/CustomButtons/Button';

import { actions as wizardActions } from 'containers/WizardContainer/slice';
import SelectInput from 'components/Form/SelectInput';

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
  repartition: {
    value: '',
    isValid: false,
  },
  fileNumber: {
    value: '',
    isValid: false,
  },
  fileItem: {
    value: '',
    isValid: false,
  },
  bank: {
    value: '',
    isValid: false,
  },
  cbu: {
    value: '',
    isValid: false,
  },
  branch: {
    value: '',
    isValid: false,
  },
  banking: {
    value: '',
    isValid: false,
  },
  accountNumber: {
    value: '',
    isValid: false,
  },
  observations: {
    value: '',
    isValid: false,
  },
};

const WorkInfo = () => {
  const classes = useStyles();
  const [workInfo, setWorkInfo] = useState(initialForm);

  const dispatch = useDispatch();

  const handleNext = () => {
    const isFormInvalid = Object.entries(workInfo).some(key => key[1].isValid === false);
    if (isFormInvalid) {
      dispatch(wizardActions.setStep({ stepId: 'workInfo', data: workInfo, isValid: false }));
    } else {
      dispatch(wizardActions.setStep({ stepId: 'workInfo', data: workInfo, isValid: true, type: 'complete' }));
    }
  };

  const handlePrevious = () => {
    dispatch(wizardActions.setStep({ stepId: 'workInfo', data: workInfo, isValid: true, type: 'previous' }));
  };

  const onChangeHanlder = ({ id, value, isValid }) => {
    setWorkInfo(prevState => ({
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
        <GridItem xs={12} sm={4}>
          <SelectInput
            id="repartition"
            label="Reparticion"
            mainSelectLabel="Selecione su Reparticion"
            value={workInfo.repartition.value}
            handleSelect={onChangeHanlder}
            items={[
              { value: 'm', label: 'Masculino' },
              { value: 'F', label: 'Femenino' },
            ]}
          />
        </GridItem>
        <GridItem xs={12} sm={4}>
          <TextInput
            id="fileNumber"
            label="Legajo"
            isRequired={true}
            onChange={onChangeHanlder}
            value={workInfo.fileNumber.value}
            length={[2, 25]}
            endAdornmentIcon={<Face className={classes.inputAdornmentIcon} />}
          />
        </GridItem>
        <GridItem xs={12} sm={4}>
          <TextInput
            id="fileItem"
            label="Item Legajo"
            isRequired={true}
            onChange={onChangeHanlder}
            value={workInfo.fileItem.value}
            length={[2, 25]}
            endAdornmentIcon={<Face className={classes.inputAdornmentIcon} />}
          />
        </GridItem>
        <GridItem xs={12} sm={3}>
          <TextInput
            id="bank"
            label="Banco"
            isRequired={true}
            onChange={onChangeHanlder}
            value={workInfo.bank.value}
            length={[2, 25]}
            endAdornmentIcon={<Face className={classes.inputAdornmentIcon} />}
          />
        </GridItem>
        <GridItem xs={12} sm={3}>
          <TextInput
            id="cbu"
            label="CBU"
            isRequired={true}
            onChange={onChangeHanlder}
            value={workInfo.cbu.value}
            length={[2, 25]}
            endAdornmentIcon={<Face className={classes.inputAdornmentIcon} />}
          />
        </GridItem>
        <GridItem xs={12} sm={1}>
          <TextInput
            id="branch"
            label="Sucursal"
            isRequired={true}
            onChange={onChangeHanlder}
            value={workInfo.branch.value}
            length={[2, 25]}
            endAdornmentIcon={<Face className={classes.inputAdornmentIcon} />}
          />
        </GridItem>
        <GridItem xs={12} sm={3}>
          <TextInput
            id="banking"
            label="Bancaria"
            isRequired={true}
            onChange={onChangeHanlder}
            value={workInfo.banking.value}
            length={[2, 25]}
            endAdornmentIcon={<Face className={classes.inputAdornmentIcon} />}
          />
        </GridItem>
        <GridItem xs={12} sm={2}>
          <TextInput
            id="accountNumber"
            label="N de Cuenta"
            isRequired={true}
            onChange={onChangeHanlder}
            value={workInfo.accountNumber.value}
            length={[2, 25]}
            endAdornmentIcon={<Face className={classes.inputAdornmentIcon} />}
          />
        </GridItem>
        <GridItem xs={12} sm={12}>
          <TextInput
            id="observations"
            label="Observaciones"
            isRequired={true}
            onChange={onChangeHanlder}
            value={workInfo.observations.value}
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
              Finalizar
            </Button>
          ) : null}
        </div>
        <div className={classes.clearfix} />
      </div>
    </>
  );
};

export default WorkInfo;
