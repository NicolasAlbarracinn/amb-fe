import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import GridContainer from 'components/Grid/GridContainer';
import Button from 'components/CustomButtons/Button';

import { useInputChange } from 'containers/WizardContainer/hooks';

import { useStyles } from 'components/Wizard/stepsStyles';

import { actions as wizardActions } from 'containers/WizardContainer/slice';

import { parseSubmitForm } from 'utils/parseForm';

import FormInputs from 'components/Form/Inputs';
import InputSelect from 'components/Form/Inputs/Select';

import { portfolioDetailsConfig } from './portfolioDetailsConfig';
import { portfolioState } from './PortfoliosDeafultValues';
import { selectLenderNameList } from 'containers/Portfolio/selectors';
import GridItem from 'components/Grid/GridItem';

const PortfolioDetails = () => {
  const classes = useStyles();
  const { inputs, updateInputs } = useInputChange(portfolioState);

  const namesList = useSelector(selectLenderNameList);

  //TODO: move this to the wizard custom hook
  const dispatch = useDispatch();
  const [formHasBeenSubmited, setFormHasBeenSubmited] = useState(false);

  const handleNext = () => {
    const isFormInvalid = Object.entries(inputs).some(key => key[1].isValid === false);
    if (isFormInvalid) {
      dispatch(wizardActions.setStep({ stepId: 'portfolioDetails', data: parseSubmitForm(inputs), isValid: true }));
      setFormHasBeenSubmited(true);
    } else {
      dispatch(
        wizardActions.setStep({
          stepId: 'portfolioDetails',
          data: parseSubmitForm(inputs),
          isValid: true,
          type: 'next',
        }),
      );
    }
  };

  const config = portfolioDetailsConfig(inputs, updateInputs, formHasBeenSubmited);

  return (
    <>
      <GridContainer>
        {FormInputs(config)}

        <GridItem xs={12} sm={6}>
          <InputSelect
            id="lender"
            label="fondista"
            handleSelect={updateInputs}
            isValid={inputs['lender'].isValid}
            items={namesList.map(n => ({ value: n._id, label: n.lenderName }))}
          />
        </GridItem>
      </GridContainer>
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

export default PortfolioDetails;
