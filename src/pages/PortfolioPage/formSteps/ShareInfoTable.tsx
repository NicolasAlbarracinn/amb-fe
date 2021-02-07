import React, { useState } from 'react';
import classnames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { useTable } from 'react-table';

import Close from '@material-ui/icons/Close';
import Dvr from '@material-ui/icons/Dvr';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';

import Button from 'components/CustomButtons/Button';
import GridItem from 'components/Grid/GridItem';
import GridContainer from 'components/Grid/GridContainer';

import { selectPlanList } from 'containers/Portfolio/selectors';
import { actions as portfolioActions } from 'containers/Portfolio/slice';
import { IplanList, IDues } from 'containers/Portfolio/types';
import { useNotificationStyles } from '../styles';

//TODO: move the table component to it own module/file
const headers = (deleteRow: (arg: string) => void, showDues: (arg: IDues) => void, list: IplanList[]) => [
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
      const duesList = list.find(p => p.plan === props.row.values.plan)?.dues || [];
      return (
        <div className="actions-right">
          <Button justIcon round simple onClick={() => showDues(duesList)} color="warning" className="edit">
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

const PlanList = () => {
  const dispatch = useDispatch();
  const planList: IplanList[] = useSelector(selectPlanList);
  const [isVisible, setIsVisible] = useState(false);
  const [duesList, setduesList] = useState<IDues>([]);

  const handleOpenModal = (duesList: IDues) => {
    setduesList(duesList);
    setIsVisible(true);
  };

  const handleCloseModal = () => {
    setIsVisible(false);
    setduesList([]);
  };

  const handleDeleteRow = (planName: string) => {
    dispatch(portfolioActions.removePlanFromList(planName));
  };

  const columns = React.useMemo(() => headers(handleDeleteRow, handleOpenModal, planList), [planList]);

  const tableInstance = useTable({ columns, data: planList });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

  return (
    <>
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
                      {headerGroup.headers.length - 1 === key
                        ? null
                        : column.canFilter
                        ? column.render('Filter')
                        : null}
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
      <DuesListModal closeModal={handleCloseModal} isVisible={isVisible} deusList={duesList} />
    </>
  );
};

export default PlanList;

interface IDuesListModal {
  isVisible: boolean;
  closeModal: () => void;
  deusList: IDues;
}

const DuesListModal = ({ isVisible, closeModal, deusList }: IDuesListModal) => {
  const classes = useNotificationStyles();
  return (
    <GridContainer justify="center">
      <GridItem xs={12} sm={12} md={12} className={classes.center}>
        <Dialog
          classes={{
            root: classes.center + ' ' + classes.modalRoot,
            paper: classes.modal + ' ' + classes.modalSmall,
          }}
          open={isVisible}
          onClose={() => closeModal()}
        >
          <DialogTitle id="classic-modal-slide-title" disableTypography className={classes.modalHeader}>
            <Button
              className={classes.modalCloseButton}
              justIcon
              key="close"
              aria-label="Close"
              color="transparent"
              onClick={() => closeModal()}
            >
              <Close />
            </Button>
            <h4 className={classes.modalTitle}>List de cuotas</h4>
          </DialogTitle>
          <DialogContent id="classic-modal-slide-description" className={classes.modalBody}>
            {deusList.map(dl => (
              <p>{`${dl.duesQuantity} cuotas de $${dl.duesAmount}`}</p>
            ))}
          </DialogContent>
        </Dialog>
      </GridItem>
    </GridContainer>
  );
};
