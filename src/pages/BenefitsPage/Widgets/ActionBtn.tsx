import React from 'react';
import { useDispatch } from 'react-redux';

import Close from '@material-ui/icons/Close';
import AllOutIcon from '@material-ui/icons/AllOut';
import Attachment from '@material-ui/icons/Attachment';
import { Tooltip } from '@material-ui/core';

import { actions as benefitActions } from 'containers/Benefits/slice';

import Button from 'components/CustomButtons/Button';

export const DeleteBtn = (props: { benefitId: string }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(benefitActions.deleteBenefitRequest(props.benefitId));
  };

  return (
    <Tooltip title="Eliminar" aria-label="benefits">
      <Button justIcon round simple onClick={handleDelete} color="danger" className="remove">
        <Close />
      </Button>
    </Tooltip>
  );
};

export const DetailBtn = (props: { benefitId: number }) => {
  const dispatch = useDispatch();

  //TODO: dispatch fetch details action
  const handleFetchDetails = () => {
    dispatch(benefitActions.getBenefitDetailRequest(props.benefitId));
  };

  return (
    <Tooltip title="Detalle" aria-label="benefits">
      <Button justIcon round simple onClick={handleFetchDetails} color="dribbble" className="benefits">
        <AllOutIcon />
      </Button>
    </Tooltip>
  );
};

export const AttachmentBtn = (props: { benefitId: number }) => {
  const dispatch = useDispatch();

  const handleUploadModal = () => {
    dispatch(benefitActions.setBenefitId(props.benefitId));
  };

  return (
    <Tooltip title="Cargar transferencia bancaria" aria-label="benefits">
      <Button justIcon round simple onClick={handleUploadModal} color="info" className="benefits">
        <Attachment />
      </Button>
    </Tooltip>
  );
};
