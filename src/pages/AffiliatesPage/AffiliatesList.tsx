import React from 'react';

import Assignment from '@material-ui/icons/Assignment';

import Card from 'components/Card/Card';
import CardBody from 'components/Card/CardBody';
import CardIcon from 'components/Card/CardIcon';
import CardHeader from 'components/Card/CardHeader';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';

import Table from 'components/Table/Table';

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

const AffiliatesList = ({ affiliates }) => {
  const columns = React.useMemo(headers, []);
  const data = React.useMemo(() => affiliates, [affiliates]);

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
