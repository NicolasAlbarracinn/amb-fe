import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPartnersList, selectPartnersListCount } from 'containers/Partners/selectors';
import { actions as PartnersActions } from 'containers/Partners/slice';
import { selectOffset, selectLimit } from 'components/Pagination/selectors';

import Assignment from '@material-ui/icons/Assignment';

import EditIcon from '@material-ui/icons/Edit';
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
import { useHistory } from 'react-router-dom';

const headers = () => [
  {
    Header: 'N° socio',
    accessor: 'partnerId',
  },
  {
    Header: 'cuil',
    accessor: 'personalData.cuil',
  },
  {
    Header: 'dni',
    accessor: 'personalData.documentNumber',
  },
  {
    Header: 'Nombre y apellido',
    accessor: 'personalInfo.firstName',
    Cell: props => {
      const { name, lastName } = props.cell.row.original.personalData;
      return <span>{`${name} ${lastName}`}</span>;
    },
  },
  {
    Header: 'Acciones',
    accessor: 'actions',
    Cell: props => {
      const history = useHistory();
      const dispatch = useDispatch();
      return (
        <div className="actions-right">
          <Button
            justIcon
            round
            simple
            onClick={() => {
              dispatch(
                PartnersActions.setPartnerData({
                  ...props.cell.row.original,
                  partnerId: props.cell.row.original.partnerId,
                }),
              );
              history.push(`/app/partners/${props.cell.row.original.partnerId}`);
            }}
            color="warning"
            className="edit"
          >
            <EditIcon />
          </Button>{' '}
          <Button justIcon round simple onClick={() => {}} color="danger" className="remove">
            <Close />
          </Button>{' '}
        </div>
      );
    },
  },
];

//TODO: Add redux slider for fetch data
//Add funtionality for sort by function
//Add pagination
//Add search bar

const PartnersList = () => {
  const dispatch = useDispatch();
  const partnersList = useSelector(selectPartnersList);
  const count = useSelector(selectPartnersListCount);
  const limit = useSelector(selectLimit);
  const offset = useSelector(selectOffset);

  const columns = React.useMemo(headers, []);
  const data = React.useMemo(() => partnersList.map(item => ({ ...item })), [partnersList]);

  const [sortBy, setSortBy] = useState<{ field: string; value: string }>();

  useEffect(() => {
    dispatch(PartnersActions.getPartnersListRequest({ sortBy, limit, offset }));
  }, [sortBy, limit, offset, dispatch]);

  const handlerSortBy = sortBy => {
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
            <h4 style={{ color: '#000' }}>Lista de Socios</h4>
          </CardHeader>
          <CardBody>
            {/* TODO: Implement the paggination */}
            <Search />
            <Pagination totalItems={count} numberOfRowsData={[5, 10, 20, 25, 50]} />
            <Table columns={columns} data={data} handlerSortBy={handlerSortBy} />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
};

export default PartnersList;
