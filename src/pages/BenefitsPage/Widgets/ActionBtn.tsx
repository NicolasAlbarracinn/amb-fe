import React from 'react';

import Button from 'components/CustomButtons/Button';
import Close from '@material-ui/icons/Close';
import AllOutIcon from '@material-ui/icons/AllOut';
import { Tooltip } from '@material-ui/core';

export const DeleteBtn = (props: { benefitId: number }) => {
  const handleDelete = () => {
    console.log(`delete: ${props.benefitId}`);
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
  //TODO: dispatch fetch details action
  const handleFetchDetails = () => {
    console.log(`fetching data for: ${props.benefitId}`);
  };

  return (
    <Tooltip title="Detalle" aria-label="benefits">
      <Button justIcon round simple onClick={handleFetchDetails} color="dribbble" className="benefits">
        <AllOutIcon />
      </Button>
    </Tooltip>
  );
};
