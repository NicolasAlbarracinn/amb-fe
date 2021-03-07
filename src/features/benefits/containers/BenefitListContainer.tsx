import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actions as benefitActions } from '../store/slice';
import { selectBenefitCount, selectBenefitList } from '../store/selectors';

import Assignment from '@material-ui/icons/Assignment';

import Card from 'components/Card/Card';
import CardBody from 'components/Card/CardBody';
import CardIcon from 'components/Card/CardIcon';
import CardHeader from 'components/Card/CardHeader';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Table from 'components/Table/Table';
import Pagination from 'components/Pagination/Pagination';
import { selectOffset, selectLimit } from 'components/Pagination/selectors';

import { benefitStatusList } from 'utils/constants';
import ModalDetails from '../components/ModalDetails';
import ModalUploadFile from '../components/ModalUploadFile';
import { DeleteBtn, DetailBtn, AttachmentBtn } from '../components/ListActionButtons';

const headers = () => [
  {
    Header: 'ID prestacion',
    accessor: 'benefitId',
  },
  {
    Header: 'Nombre',
    accessor: 'portfolio',
  },
  {
    Header: 'Estado',
    accessor: 'benefitStatus',
    Cell: props => {
      const status = props.cell.row.original.benefitStatus;
      const name = benefitStatusList.find(bs => bs.value === status);
      return <span>{name?.label || status}</span>;
    },
  },
  {
    Header: 'Acciones',
    accessor: 'actions',
    alignItems: 'center',
    Cell: props => {
      return (
        <div className="actions-right">
          <DetailBtn benefitId={props.row.values.benefitId} />
          {props.row.values.benefitStatus === 's' && <DetailBtn benefitId={props.row.values.benefitId} />}
          {props.row.values.benefitStatus === 'a' && <AttachmentBtn benefitId={props.row.original.benefitId} />}
          {props.row.values.benefitStatus !== 'o' && <DeleteBtn benefitId={props.row.original._id} />}
        </div>
      );
    },
  },
];

const BenefitListContainer = () => {
  const dispatch = useDispatch();
  const columns = useMemo(headers, []);

  const list = useSelector(selectBenefitList);
  const count = useSelector(selectBenefitCount);
  const limit = useSelector(selectLimit);
  const offset = useSelector(selectOffset);

  useEffect(() => {
    dispatch(benefitActions.getBenefitListRequest({ limit, offset }));
  }, [limit, offset, dispatch]);

  return (
    <>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12}>
          <Card>
            <CardHeader color="primary" icon>
              <CardIcon color="primary">
                <Assignment />
              </CardIcon>
              {/* TODO: add styles file */}
              <h4 style={{ color: '#000' }}>Lista de Prestaciones</h4>
            </CardHeader>
            <CardBody>
              <Pagination totalItems={count} numberOfRowsData={[5, 10, 20, 25, 50]} />
              <Table columns={columns} data={list} handlerSortBy={() => {}} />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      <ModalDetails />
      <ModalUploadFile />
    </>
  );
};

export default BenefitListContainer;
