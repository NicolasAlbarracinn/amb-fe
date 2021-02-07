import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useTable, useSortBy } from 'react-table';
import classnames from 'classnames';
import { isEmpty } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';

import GridContainer from 'components/Grid/GridContainer';
import Button from 'components/CustomButtons/Button';

import { DefaultState, useInputChange } from 'containers/WizardContainer/hooks';

import { useStyles } from 'components/Wizard/stepsStyles';

import { actions as wizardActions } from 'containers/WizardContainer/slice';

import { parseSubmitForm } from 'utils/parseForm';

import InputSelect from 'components/Form/Inputs/Select';
import InputText from 'components/Form/Inputs/Text';
import InputNumber from 'components/Form/Inputs/Numeric';
import RegularButton from 'components/CustomButtons/Button';
import Table from 'components/Table/Table';

import { portfolioState } from './PortfoliosDeafultValues';
import { selectLenderNameList } from 'containers/Portfolio/selectors';
import GridItem from 'components/Grid/GridItem';
import { UpdateInput } from 'components/Form/types';
import Add from '@material-ui/icons/Add';
import Clear from '@material-ui/icons/Clear';

import Card from 'components/Card/Card';
import { Close, Dvr } from '@material-ui/icons';

interface IPlanState {
  plan: DefaultState;
  amountGranted: DefaultState;
  signatureAmount: DefaultState;
}

interface IDuesState {
  duesQuantity: DefaultState;
  duesAmount: DefaultState;
}

const planDefaultState = {
  plan: {
    value: '',
    isValid: true,
  },
  amountGranted: {
    value: '',
    isValid: true,
  },
  signatureAmount: {
    value: '',
    isValid: true,
  },
};

const duesDefaultState = {
  duesQuantity: {
    value: '0',
    isValid: true,
  },
  duesAmount: {
    value: '',
    isValid: true,
  },
};

interface IPlan {
  plan: string;
  amountGranted: string;
  signatureAmount: string;
}

type IDues = Array<{ duesQuantity: string; duesAmount: string }>;

interface IplanList extends IPlan {
  dues: IDues;
}

const ShareInfoStep = () => {
  const classes = useStyles();
  const [planInput, setPlanInputs] = useState(planDefaultState);
  const [duesInput, setDuesInput] = useState(duesDefaultState);
  const [duesList, setDuesList] = useState<Array<IDuesState>>([]);
  const [planList, setPlanList] = useState<Array<IplanList>>([]);

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

    setPlanList(prevState => [...prevState, { ...newPlan }]);
    setDuesInput(duesDefaultState);
    setPlanInputs(planDefaultState);
    setDuesList([]);
  };

  const handleDeletePlan = (name: string) => {
    console.log(name);
    setPlanList(ps => ps.filter(i => i.plan !== name));
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
      <PlanList plan={planList} deleteRow={handleDeletePlan} />
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

const headers = (deleteRow: (arg: string) => void, showDues: () => void) => [
  {
    Header: 'Plan',
    accessor: 'plan',
  },
  {
    Header: 'Monto Otorgado',
    accessor: 'amountGranted',
  },
  {
    Header: 'Monto Firma',
    accessor: 'signatureAmount',
  },
  {
    Header: 'Acciones',
    accessor: 'actions',
    alignItems: 'center',
    Cell: props => {
      console.log(props.row.values.plan);
      return (
        <div className="actions-right">
          <Button justIcon round simple onClick={() => showDues()} color="warning" className="edit">
            <Dvr />
          </Button>
          {/* use this button to remove the data row */}
          <Button
            justIcon
            round
            simple
            onClick={() => deleteRow(props.row.values.plan)}
            color="danger"
            className="remove"
          >
            <Close />
          </Button>
        </div>
      );
    },
  },
];

interface IPlanListProps {
  plan: IplanList[];
  deleteRow: (arg: string) => void;
}

const PlanList = ({ plan, deleteRow }: IPlanListProps) => {
  const columns = React.useMemo(
    () =>
      headers(deleteRow, () => {
        console.log('showInfo');
      }),
    [],
  );

  const tableInstance = useTable({ columns, data: plan });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

  // const data = React.useMemo(() => partnersList.map(item => ({ ...item })), [partnersList]);

  return (
    <div className="ReactTable -striped -highlight">
      <table {...getTableProps()} className="ReactTable -striped -highlight">
        <thead className="rt-thead -header">
          {headerGroups.map((headerGroup, i) => (
            <tr key={`${new Date()}-${Math.random() * i}`} {...headerGroup.getHeaderGroupProps()} className="rt-tr">
              {headerGroup.headers.map((column, key) => (
                <th key={`${new Date()}-${Math.random() * key}`} className={classnames('rt-th rt-resizable-header')}>
                  <div className="rt-resizable-header-content">{column.render('Header')}</div>
                  {/* Render the columns filter UI */}
                  <div>
                    {headerGroup.headers.length - 1 === key ? null : column.canFilter ? column.render('Filter') : null}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="rt-tbody">
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr
                key={`${new Date()}-${Math.random() * i}`}
                {...row.getRowProps()}
                className={classnames('rt-tr', { ' -odd': i % 2 === 0 }, { ' -even': i % 2 === 1 })}
              >
                {row.cells.map((cell, key) => {
                  return (
                    <td key={`${new Date()}-${Math.random() * key}`} {...cell.getCellProps()} className="rt-td">
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
