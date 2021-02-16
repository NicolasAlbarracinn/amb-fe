import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions as benefitActions } from 'containers/Benefits/slice';
import { selectBenefitsData } from 'containers/Benefits/selectors';

import Close from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';

import Button from 'components/CustomButtons/Button';
import GridItem from 'components/Grid/GridItem';
import GridContainer from 'components/Grid/GridContainer';
import { useNotificationStyles } from '../../PortfolioPage/styles';

interface IDetailsModal {
  isVisible: boolean;
  closeModal: () => void;
  benefitID: string;
}

const DetailsModal = ({ benefitID, isVisible, closeModal }: IDetailsModal) => {
  const classes = useNotificationStyles();
  const dispatch = useDispatch();
  const benefitDetail = useSelector(selectBenefitsData);

  useEffect(() => {
    dispatch(benefitActions.getBenefitDetailRequest(benefitID));
  }, [dispatch, benefitID]);

  useEffect(() => {
    console.log(benefitDetail);
  }, [benefitDetail]);

  return (
    <GridContainer justify="center">
      <GridItem xs={12} sm={12} md={12} className={classes.center}>
        <Dialog
          classes={{
            root: classes.center + ' ' + classes.modalRoot,
            paper: classes.modal + ' ' + classes.modalSmall,
          }}
          open={isVisible}
          onClose={() => closeModal()}
        >
          <DialogTitle id="classic-modal-slide-title" disableTypography className={classes.modalHeader}>
            <Button
              className={classes.modalCloseButton}
              justIcon
              key="close"
              aria-label="Close"
              color="transparent"
              onClick={() => closeModal()}
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
