import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import GridContainer from 'components/Grid/GridContainer';
import Button from 'components/CustomButtons/Button';

import { DefaultState, useInputChange, useWizardStep } from 'containers/WizardContainer/hooks';
import { documentTypeList, civilStateList, statusList } from 'utils/constants';
import { defaultPartner } from './defaultStates';

import { useStyles } from 'components/Wizard/stepsStyles';

import { selectBenefitsData, selectIsDataFetched } from 'containers/Benefits/selectors';
import { actions as benefitActions } from 'containers/Benefits/slice';

import { parseResponseData } from './parseResponseData';

import { actions as wizardActions } from 'containers/WizardContainer/slice';

import { parseSubmitForm } from 'utils/parseForm';

import { UpdateInput } from 'components/Form/types';

import FormInputs, { InputOptions } from 'components/Form/Inputs';

const inputsConfig = (
  inputValue: {
    [key: string]: DefaultState;
  },
  updateValueOnBlur: UpdateInput,
  formHasBeenSubmited,
) => {
  return [
    {
      type: InputOptions.TEXT,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'testValue',
        label: 'test input',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['testValue'].isValid,
      },
    },
    {
      type: InputOptions.TEXT,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'testValue3',
        label: 'test input',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['testValue'].isValid,
      },
    },
    {
      type: InputOptions.TEXT,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'testValue2',
        label: 'test input',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['testValue'].isValid,
      },
    },
    {
      type: InputOptions.TEXT,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'testValue4',
        label: 'test input',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['testValue'].isValid,
      },
    },
    {
      type: InputOptions.TEXT,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'testValue5',
        label: 'test input',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['testValue'].isValid,
      },
    },
    {
      type: InputOptions.EMAIL,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'email',
        label: 'test email',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['email'].isValid,
      },
    },
  ];
};

const PartnerDetail = () => {
  const classes = useStyles();
  const { inputs, onChangeHanlder, updateInputs } = useInputChange({
    testValue: { isValid: false, value: '' },
    email: { isValid: false, value: '' },
  });

  //TODO: move this to the wizard custom hook
  const dispatch = useDispatch();
  const [formHasBeenSubmited, setFormHasBeenSubmited] = useState(false);

  const handleNext = () => {
    const isFormInvalid = Object.entries(inputs).some(key => key[1].isValid === false);
    if (isFormInvalid) {
      dispatch(wizardActions.setStep({ stepId: 'test', data: parseSubmitForm(inputs), isValid: false }));
      setFormHasBeenSubmited(true);
    } else {
      dispatch(wizardActions.setStep({ stepId: 'test', data: parseSubmitForm(inputs), isValid: true, type: 'next' }));
    }
  };

  const config = inputsConfig(inputs, updateInputs, formHasBeenSubmited);

  return (
    <>
      <GridContainer>{FormInputs(config)}</GridContainer>
      <div className={classes.footer}>
        <div className={classes.right}>
          <Button type="submit" color="rose" onClick={handleNext}>
            Proximo
          </Button>
        </div>
        <div className={classes.clearfix} />
      </div>
    </>
  );
};

export default PartnerDetail;
