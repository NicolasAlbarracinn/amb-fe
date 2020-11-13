import React from 'react';

import Assignment from '@material-ui/icons/Assignment';

import Card from 'components/Card/Card';
import CardBody from 'components/Card/CardBody';
import CardIcon from 'components/Card/CardIcon';
import CardHeader from 'components/Card/CardHeader';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';

import Table from 'components/Table/Table';

const dataInfo = () => [
  {
    name: 'Kim Parrish',
    address: '4420 Valley Street, Garnerville, NY 10923',
    date: '07/11/2020',
    order: '87349585892118',
  },
  {
    name: 'Michele Castillo',
    address: '637 Kyle Street, Fullerton, NE 68638',
    date: '07/11/2020',
    order: '58418278790810',
  },
  {
    name: 'Eric Ferris',
    address: '906 Hart Country Lane, Toccoa, GA 30577',
    date: '07/10/2020',
    order: '81534454080477',
  },
  {
    name: 'Gloria Noble',
    address: '2403 Edgewood Avenue, Fresno, CA 93721',
    date: '07/09/2020',
    order: '20452221703743',
  },
  {
    name: 'Darren Daniels',
    address: '882 Hide A Way Road, Anaktuvuk Pass, AK 99721',
    date: '07/07/2020',
    order: '22906126785176',
  },
  {
    name: 'Ted McDonald',
    address: '796 Bryan Avenue, Minneapolis, MN 55406',
    date: '07/07/2020',
    order: '87574505851064',
  },
];

const headers = () => [
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Address',
    accessor: 'address',
  },
  {
    Header: 'Date',
    accessor: 'date',
  },
  {
    Header: 'Order #',
    accessor: 'order',
  },
];

//TODO: Add redux slider for fetch data
//Add funtionality for sort by function
//Add pagination
//Add search bar

const AffiliatesList = () => {
  const columns = React.useMemo(headers, []);
  const data = React.useMemo(dataInfo, []);

  const handlerSortBy = sortBy => {
    console.log(sortBy);
  };

  return (
    <GridContainer justify="center">
      <GridItem xs={12} sm={8}>
        <Card>
          <CardHeader color="primary" icon>
            <CardIcon color="primary">
              <Assignment />
            </CardIcon>
            {/* TODO: add styles file */}
            <h4 style={{ color: '#000' }}>Lista de Afiliados</h4>
          </CardHeader>
          <CardBody>
            <Table columns={columns} data={data} handlerSortBy={handlerSortBy} />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
};

export default AffiliatesList;
