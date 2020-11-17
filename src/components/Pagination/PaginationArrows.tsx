import React from 'react';
import { ArrowStyles } from './styles';

import IconButton from '@material-ui/core/IconButton';

import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

interface IPaginationArrowsProps {
  from: number;
  to: number;
  totalItems: number;
  onClickNext: Function;
  onClickPrevious: Function;
}

//Should we use the selector here to?
const PaginationArrows = ({ from, to, totalItems, onClickNext, onClickPrevious }: IPaginationArrowsProps) => {
  const classes = ArrowStyles();
  return (
    <div className={classes.pagingArrowContainer}>
      <IconButton color="secondary" aria-label="previous" disabled={from === 1} onClick={() => onClickPrevious()}>
        <NavigateBeforeIcon />
      </IconButton>
      <span className={classes.pagingValuesBox}>{`${from}-${to > totalItems ? totalItems : to} de ${totalItems}`}</span>
      <IconButton color="secondary" disabled={to === totalItems} onClick={() => onClickNext()}>
        <NavigateNextIcon />
      </IconButton>
    </div>
  );
};

export default PaginationArrows;
