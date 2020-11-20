import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAffiliatesList } from 'containers/Affiliates/selectors';
import { actions as AffiliatesActions } from 'containers/Affiliates/slice';
import { selectOffset, selectLimit } from 'components/Pagination/selectors';

import Assignment from '@material-ui/icons/Assignment';

import Dvr from '@material-ui/icons/Dvr';
import Close from '@material-ui/icons/Close';

import Card from 'components/Card/Card';
import CardBody from 'components/Card/CardBody';
import CardIcon from 'components/Card/CardIcon';
import CardHeader from 'components/Card/CardHeader';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Table from 'components/Table/Table';
import Pagination from 'components/Pagination/Pagination';
import Button from 'components/CustomButtons/Button';
import Search from 'components/SearchBar/SearchBar';

import { SortByCriterias } from 'utils/constants';

const headers = () => [
  {
    Header: 'N° socio',
    accessor: 'patnerNumber',
  },
  {
    Header: 'cuil',
    accessor: 'cuil',
  },
  {
    Header: 'dni',
    accessor: 'dni',
  },
  {
    Header: 'Nombre y apellido',
    accessor: 'personalInfo.firstName',
    Cell: props => {
      const { firstName, lastName } = props.cell.row.original.personalInfo;
      return <span>{`${firstName} ${lastName}`}</span>;
    },
  },
  {
    Header: 'Acciones',
    accessor: 'actions',
  },
];

//TODO: Add redux slider for fetch data
//Add funtionality for sort by function
//Add pagination
//Add search bar

const actions = (
  <div className="actions-right">
    {/* use this button to add a edit kind of action */}
    <Button justIcon round simple onClick={() => {}} color="warning" className="edit">
      <Dvr />
    </Button>{' '}
    {/* use this button to remove the data row */}
    <Button justIcon round simple onClick={() => {}} color="danger" className="remove">
      <Close />
    </Button>{' '}
  </div>
);

const AffiliatesList = () => {
  const dispatch = useDispatch();
  const affiliatesList = useSelector(selectAffiliatesList);
  const limit = useSelector(selectLimit);
  const offset = useSelector(selectOffset);

  const columns = React.useMemo(headers, []);
  const data = React.useMemo(() => affiliatesList.map(item => ({ ...item, actions })), [affiliatesList]);

  const [sortBy, setSortBy] = useState<{ field: string; value: string }>();

  useEffect(() => {
    dispatch(AffiliatesActions.getAffiliatesListRequest({ sortBy, limit, offset }));
  }, [sortBy, limit, offset, dispatch]);

  const handlerSortBy = sortBy => {
    console.log(sortBy);
    if (!sortBy.length) {
      setSortBy(undefined);
      return;
    }

    const criteria = sortBy[0].desc ? SortByCriterias.DESC : SortByCriterias.ASC;
    setSortBy({ field: sortBy[0].id, value: criteria });
  };

  return (
    <GridContainer justify="center">
      <GridItem xs={12} sm={12}>
        <Card>
          <CardHeader color="primary" icon>
            <CardIcon color="primary">
              <Assignment />
            </CardIcon>
            {/* TODO: add styles file */}
            <h4 style={{ color: '#000' }}>Lista de Afiliados</h4>
          </CardHeader>
          <CardBody>
            {/* TODO: Implement the paggination */}
            <Search />
            <Pagination totalItems={50} numberOfRowsData={[5, 10, 20, 25, 50]} />
            <Table columns={columns} data={data} handlerSortBy={handlerSortBy} />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
};

export default AffiliatesList;
