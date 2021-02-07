import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { isEmpty } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';

import Add from '@material-ui/icons/Add';
import Clear from '@material-ui/icons/Clear';

import { parseSubmitForm } from 'utils/parseForm';

import InputSelect from 'components/Form/Inputs/Select';
import InputText from 'components/Form/Inputs/Text';
import InputNumber from 'components/Form/Inputs/Numeric';
import RegularButton from 'components/CustomButtons/Button';
import GridItem from 'components/Grid/GridItem';
import GridContainer from 'components/Grid/GridContainer';
import Card from 'components/Card/Card';

import { DefaultState } from 'containers/WizardContainer/hooks';
import { useStyles } from 'components/Wizard/stepsStyles';
import { actions as wizardActions } from 'containers/WizardContainer/slice';

import { actions as portfolioActions } from 'containers/Portfolio/slice';
import { IPlan, IDues, IplanList } from 'containers/Portfolio/types';
import { selectPlanList } from 'containers/Portfolio/selectors';

import { planDefaultState, duesDefaultState } from './PortfoliosDeafultValues';

import PlanList from './ShareInfoTable';
import Button from 'components/CustomButtons/Button';

interface IPlanState {
  plan: DefaultState;
  amountGranted: DefaultState;
  signatureAmount: DefaultState;
}

interface IDuesState {
  duesQuantity: DefaultState;
  duesAmount: DefaultState;
}

const ShareInfoStep = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const planList: IplanList[] = useSelector(selectPlanList);
  const [planInput, setPlanInputs] = useState(planDefaultState);
  const [duesInput, setDuesInput] = useState(duesDefaultState);
  const [duesList, setDuesList] = useState<Array<IDuesState>>([]);

  const handlePlanInputChange = (updatedValues: { [key: string]: DefaultState }) => {
    setPlanInputs(prevState => ({ ...prevState, ...updatedValues }));
  };

  const handleDuesInputChange = (updatedValues: { [key: string]: DefaultState }) => {
    setDuesInput(prevState => ({ ...prevState, ...updatedValues }));
  };

  const handleAddDues = () => {
    if (duesList.some(dl => dl.duesQuantity.value === duesInput.duesQuantity.value)) {
      toast.error('La cuota ya fue cargada', {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
    setDuesList(prevState => [...prevState, duesInput]);
    setDuesInput(duesDefaultState);
  };

  const handleRemoveTag = (hash: string) => {
    setDuesList(prevState => prevState.filter(dl => dl.duesQuantity.value !== hash));
  };

  const handleSavePlan = () => {
    const parsedPlans: IPlan = parseSubmitForm(planInput) as IPlan;
    const parsedDues: IDues = duesList.map(d => parseSubmitForm(d)) as IDues;

    const newPlan: IplanList = {
      plan: parsedPlans.plan,
      amountGranted: parsedPlans.amountGranted,
      signatureAmount: parsedPlans.signatureAmount,
      dues: parsedDues,
    };

    dispatch(portfolioActions.setPlanToList(newPlan));
    setDuesInput(duesDefaultState);
    setPlanInputs(planDefaultState);
    setDuesList([]);
  };

  const handleSubmit = () => {
    dispatch(
      wizardActions.setStep({
        stepId: 'ShareInfoStep',
        data: planList,
        isValid: true,
        type: 'submit',
      }),
    );
  };
  const handlePrevious = () => {
    dispatch(
      wizardActions.setStep({
        stepId: 'ShareInfoStep',
        data: planList,
        isValid: true,
        type: 'previous',
      }),
    );
  };

  return (
    <div>
      <Card className={classes.cardPadding}>
        <GridContainer>
          <GridItem xs={12} sm={4}>
            <InputText
              {...{
                id: 'plan',
                label: 'Plan',
                updateValueOnBlur: handlePlanInputChange,
                formHasBeenSubmited: true,
                isValidInput: true,
                value: planInput.plan.value,
                lenghtRange: [0, 80],
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={4}>
            <InputNumber
              {...{
                id: 'amountGranted',
                label: 'Monto Otorgado',
                updateValueOnBlur: handlePlanInputChange,
                formHasBeenSubmited: true,
                isValidInput: true,
                value: planInput.amountGranted.value,
                isDecimal: true,
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={4}>
            <InputNumber
              {...{
                id: 'signatureAmount',
                label: 'Monto Firma',
                updateValueOnBlur: handlePlanInputChange,
                formHasBeenSubmited: true,
                isValidInput: true,
                value: planInput.signatureAmount.value,
                isDecimal: true,
              }}
            />
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={3}>
            <InputSelect
              {...{
                id: 'duesQuantity',
                label: 'Cantidad de cuotas',
                handleSelect: handleDuesInputChange,
                isValid: true,
                items: getDuesOptions(60),
                value: duesInput.duesQuantity.value,
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={3}>
            <InputNumber
              {...{
                id: 'duesAmount',
                label: 'Monto de la cuota',
                updateValueOnBlur: handleDuesInputChange,
                formHasBeenSubmited: true,
                isValidInput: true,
                value: duesInput.duesAmount.value,
                isDecimal: true,
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={3}>
            <RegularButton
              disabled={duesInput.duesAmount.value.length === 0 || duesInput.duesQuantity.value === '0'}
              size="sm"
              color="primary"
              onClick={() => handleAddDues()}
            >
              <Add /> agregar
            </RegularButton>
          </GridItem>
        </GridContainer>
        <GridContainer>
          {duesList.map(dl => (
            <GridItem>
              <div className={classes.tagContainer}>
                <span>{`${dl.duesQuantity.value} cuotas de $${dl.duesAmount.value}`}</span>
                <Clear className={classes.icons} onClick={() => handleRemoveTag(dl.duesQuantity.value)} />
              </div>
            </GridItem>
          ))}
        </GridContainer>
        <div className={classes.footer}>
          <div className={classes.right}>
            <RegularButton size="sm" color="success" onClick={() => handleSavePlan()}>
              Guardar plan
            </RegularButton>
          </div>
          <div className={classes.clearfix} />
        </div>
      </Card>
      <Card className={classes.cardPadding}>
        <PlanList />
      </Card>
      <div className={classes.footer}>
        <div className={classes.left}>
          <Button color="rose" onClick={handlePrevious}>
            Anterior
          </Button>
        </div>
        <div className={classes.right}>
          <Button disabled={isEmpty(planList)} color="rose" onClick={handleSubmit}>
            Agregar cartera
          </Button>
        </div>
        <div className={classes.clearfix} />
      </div>
    </div>
  );
};

export default ShareInfoStep;

const getDuesOptions = (maxAmount: number) => {
  const options: Array<{ value: string; label: string }> = [{ value: '0', label: 'selectione una cuota' }];
  for (let i = 1; i <= maxAmount; i++) {
    options.push({ value: i.toString(), label: i.toString() });
  }
  return options;
};
