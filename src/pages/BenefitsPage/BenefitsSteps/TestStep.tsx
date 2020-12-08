import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Face from '@material-ui/icons/Face';
import Email from '@material-ui/icons/Email';

import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import TextInput from 'components/Form/TextInput';
import SelectInput from 'components/Form/SelectInput';
import EmailInput from 'components/Form/EmailInput';
import DateInput from 'components/Form/DateInput';
import Button from 'components/CustomButtons/Button';

import { useInputChange, useWizardStep } from 'containers/WizardContainer/hooks';
import { documentTypeList, civilStateList, statusList } from 'utils/constants';
import { defaultPartner } from './defaultStates';

import { useStyles } from 'components/Wizard/stepsStyles';

import { selectBenefitsData, selectIsDataFetched } from 'containers/Benefits/selectors';
import { actions as benefitActions } from 'containers/Benefits/slice';

import { parseResponseData } from './parseResponseData';

import InputText from 'components/Form/InputText';

import { actions as wizardActions } from 'containers/WizardContainer/slice';

import { parseSubmitForm } from 'utils/parseForm';

const PartnerDetail = () => {
  const classes = useStyles();
  const { inputs, onChangeHanlder, updateInputs } = useInputChange({ testValue: { isValid: false, value: '' } });

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

  return (
    <>
      <GridContainer>
        <GridItem sm={12}>
          <InputText
            id="testValue"
            labelText="test"
            updateValueOnBlur={updateInputs}
            formHasBeenSubmited={formHasBeenSubmited}
            isValidInput={inputs.testValue.isValid}
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

export default PartnerDetail;
