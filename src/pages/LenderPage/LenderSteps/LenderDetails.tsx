import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useStyles } from 'components/Wizard/stepsStyles';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Button from 'components/CustomButtons/Button';
import FormInputs from 'components/Form/Inputs';
import SearchBar from 'components/SearchBar/SearchBar';
import { selectParameterWasSubmited, selectSearchParameter } from 'components/SearchBar/selectors';

import { actions as wizardActions } from 'containers/WizardContainer/slice';
import { selectLenderData } from 'containers/Lender/selectors';
import { actions as lenderActions } from 'containers/Lender/slice';

import { parseSubmitForm } from 'utils/parseForm';

import { lenderConfig } from './lenderConfig';
import { lenderDefaultState } from './lenderDefaultValues';

import { useLenderState } from '../hooks';

const LenderDetails = () => {
  const classes = useStyles();
  //TODO: move this to the wizard custom hook
  const dispatch = useDispatch();

  const lenderData = useSelector(selectLenderData);
  const wasSubmited = useSelector(selectParameterWasSubmited);
  const searchParam = useSelector(selectSearchParameter);

  const { setFormHasBeenSubmited, inputs, inputsConfig } = useLenderState(lenderData, lenderDefaultState, lenderConfig);

  const handleNext = () => {
    const isFormInvalid = Object.entries(inputs).some(key => key[1].isValid === false);
    if (isFormInvalid) {
      dispatch(wizardActions.setStep({ stepId: 'lenderDetails', data: parseSubmitForm(inputs), isValid: true }));
      setFormHasBeenSubmited(true);
    } else {
      dispatch(
        wizardActions.setStep({
          stepId: 'lenderDetails',
          data: parseSubmitForm(inputs),
          isValid: true,
          type: 'next',
        }),
      );
    }
  };

  useEffect(() => {
    if (wasSubmited) dispatch(lenderActions.getLenderRequest(searchParam));
  }, [wasSubmited]);

  return (
    <>
      <GridContainer>
        <GridItem xs={12} sm={6}>
          <SearchBar placeholder="Cuil" />
        </GridItem>
      </GridContainer>
      <GridContainer>{FormInputs(inputsConfig)}</GridContainer>
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

export default LenderDetails;
