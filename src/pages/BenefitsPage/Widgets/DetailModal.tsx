import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectBenefitsData } from 'containers/Benefits/selectors';
import { IBenefit } from 'containers/Benefits/types';
import { actions } from 'containers/Benefits/slice';

import Close from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';

import Button from 'components/CustomButtons/Button';
import GridItem from 'components/Grid/GridItem';
import GridContainer from 'components/Grid/GridContainer';
import { useNotificationStyles } from '../../PortfolioPage/styles';

const DetailsModal = () => {
  const classes = useNotificationStyles();
  const dispatch = useDispatch();

  const benefitDetail: IBenefit | null = useSelector(selectBenefitsData);

  const handleCloseModal = () => {
    dispatch(actions.setBenefitDetailsToNull());
  };

  return (
    <GridContainer justify="center">
      <GridItem xs={12} sm={12} md={12} className={classes.center}>
        <Dialog
          classes={{
            root: classes.center + ' ' + classes.modalRoot,
            paper: classes.modal + ' ' + classes.modalSmall,
          }}
          open={!!benefitDetail}
          onClose={handleCloseModal}
        >
          <DialogTitle id="classic-modal-slide-title" disableTypography className={classes.modalHeader}>
            <Button
              className={classes.modalCloseButton}
              justIcon
              key="close"
              aria-label="Close"
              color="transparent"
              onClick={handleCloseModal}
            >
              <Close />
            </Button>
            <h4 className={classes.modalTitle}>Detalle de prestacion</h4>
          </DialogTitle>
          <DialogContent id="classic-modal-slide-description" className={classes.modalBody}>
            data here
          </DialogContent>
        </Dialog>
      </GridItem>
    </GridContainer>
  );
};

export default DetailsModal;
