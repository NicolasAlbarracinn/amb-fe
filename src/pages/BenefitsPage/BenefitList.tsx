import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectPartnersList, selectPartnersListCount } from 'containers/Partners/selectors';
import { actions as partnersActions } from 'containers/Partners/slice';

import Assignment from '@material-ui/icons/Assignment';

import Card from 'components/Card/Card';
import CardBody from 'components/Card/CardBody';
import CardIcon from 'components/Card/CardIcon';
import CardHeader from 'components/Card/CardHeader';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Table from 'components/Table/Table';
import Pagination from 'components/Pagination/Pagination';
import Search from 'components/SearchBar/SearchBar';
import Button from 'components/CustomButtons/Button';
import { selectOffset, selectLimit } from 'components/Pagination/selectors';
import Dvr from '@material-ui/icons/Dvr';
import Close from '@material-ui/icons/Close';

const headers = (deleteRow: (arg: string) => void, showDues: (arg: {}) => void, list: any[]) => [
  {
    Header: 'Numero de Prestacion',
    accessor: 'plan',
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

const BenefitList = () => {
  return (
    <GridContainer justify="center">
      <GridItem xs={12} sm={12}>
        <Card>
          <CardHeader color="primary" icon>
            <CardIcon color="primary">
              <Assignment />
            </CardIcon>
            {/* TODO: add styles file */}
            <h4 style={{ color: '#000' }}>Lista de Socios</h4>
          </CardHeader>
          <CardBody>
            <Search />
            <Pagination totalItems={10} numberOfRowsData={[5, 10, 20, 25, 50]} />
            <Table columns={[]} data={[]} handlerSortBy={() => {}} />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
};

export default BenefitList;
