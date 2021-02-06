import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import GridContainer from 'components/Grid/GridContainer';
import Button from 'components/CustomButtons/Button';
import FormInputs from 'components/Form/Inputs';
import { useStyles } from 'components/Wizard/stepsStyles';

import { parseSubmitForm } from 'utils/parseForm';

import { selectLenderData } from 'containers/Lender/selectors';
import { actions as wizardActions } from 'containers/WizardContainer/slice';

import { useLenderState } from '../hooks';
import { addressConfig } from './lenderConfig';
import { addressDefaultState } from './lenderDefaultValues';

const Address = () => {
  const classes = useStyles();

  //TODO: move this to the wizard custom hook
  const dispatch = useDispatch();
  const { address: addressData } = useSelector(selectLenderData);

  const { inputs, inputsConfig, setFormHasBeenSubmited } = useLenderState(
    addressData,
    addressDefaultState,
    addressConfig,
  );

  const handleNext = () => {
    const isFormInvalid = Object.entries(inputs).some(key => key[1].isValid === false);
    if (isFormInvalid) {
      dispatch(wizardActions.setStep({ stepId: 'address', data: parseSubmitForm(inputs), isValid: true }));
      setFormHasBeenSubmited(true);
    } else {
      dispatch(
        wizardActions.setStep({
          stepId: 'address',
          data: parseSubmitForm(inputs),
          isValid: true,
          type: 'next',
        }),
      );
    }
  };

  const handlePrevious = () => {
    dispatch(
      wizardActions.setStep({
        stepId: 'economicActivity',
        data: parseSubmitForm(inputs),
        isValid: true,
        type: 'previous',
      }),
    );
  };

  return (
    <>
      <GridContainer>{FormInputs(inputsConfig)}</GridContainer>
      <div className={classes.footer}>
        <div className={classes.left}>
          <Button color="rose" onClick={handlePrevious}>
            Anterior
          </Button>
        </div>
        <div className={classes.right}>
          <Button color="rose" onClick={handleNext}>
            Proximo
          </Button>
        </div>
        <div className={classes.clearfix} />
      </div>
    </>
  );
};

export default Address;
