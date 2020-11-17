import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAffiliatesList } from 'containers/Affiliates/selectors';
import { actions } from 'containers/Affiliates/slice';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';

import Assignment from '@material-ui/icons/Assignment';

import Card from 'components/Card/Card';
import CardBody from 'components/Card/CardBody';
import CardIcon from 'components/Card/CardIcon';
import CardHeader from 'components/Card/CardHeader';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Table from 'components/Table/Table';
import Pagination from 'components/Pagination/Pagination';

import { SortByCriterias } from 'utils/constants';

const headers = () => [
  {
    Header: 'N° socio',
    accessor: 'patnerNumber',
  },
  {
    Header: 'N° Legajo ',
    accessor: 'folderNumber',
  },
  {
    Header: 'Fecha de ingreso',
    accessor: 'admissionDate',
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
    Header: 'Distribucion',
    accessor: 'distribution',
  },
  {
    Header: 'Metodo de pago',
    accessor: 'paymentMethod',
  },
  {
    Header: 'Nombre socio',
    accessor: 'personalInfo.firstName',
  },
  {
    Header: 'apellido socio',
    accessor: 'personalInfo.lastName',
  },
  {
    Header: 'comercializador',
    accessor: 'comercializador',
  },
];

//TODO: Add redux slider for fetch data
//Add funtionality for sort by function
//Add pagination
//Add search bar

const AffiliatesList = () => {
  const dispatch = useDispatch();
  const affiliatesList = useSelector(selectAffiliatesList);

  const columns = React.useMemo(headers, []);
  const data = React.useMemo(() => affiliatesList, [affiliatesList]);

  const handlerGetAffiliates = useCallback((sortBy?: { field: string; value: string }) => {
    dispatch(actions.getAffiliatesListRequest({ sortBy }));
  }, []);

  useEffect(() => {
    handlerGetAffiliates();
  }, []);

  const handlerSortBy = sortBy => {
    if (!sortBy.length) {
      handlerGetAffiliates();
      return;
    }

    const criteria = sortBy[0].desc ? SortByCriterias.DESC : SortByCriterias.ASC;

    handlerGetAffiliates({ field: sortBy[0].id, value: criteria });
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
            <Pagination totalItems={50} numberOfRowsData={[5, 10, 20, 25, 50]} />
            <Table columns={columns} data={data} handlerSortBy={handlerSortBy} />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
};

export default AffiliatesList;
