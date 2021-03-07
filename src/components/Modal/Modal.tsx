import React from 'react';

import Close from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

import Button from 'components/CustomButtons/Button';
import GridItem from 'components/Grid/GridItem';
import GridContainer from 'components/Grid/GridContainer';
import { IRegularButtonProps } from 'components/CustomButtons/Button';

import { useNotificationStyles } from './styles';

export type ButtonConfig = {
  label: string;
  onClick: () => void;
} & IRegularButtonProps;

interface IModalProps {
  children: React.ReactNode;
  title: string;
  openState: boolean;
  buttonsList: Array<ButtonConfig>;
  handleCloseModal: () => void;
  classNames?: string;
}

const Modal = ({ children, title, openState, buttonsList, handleCloseModal, classNames }: IModalProps) => {
  const classes = useNotificationStyles();

  return (
    <GridContainer justify="center">
      <GridItem xs={12} sm={12} md={12} className={classes.center}>
        <Dialog
          classes={{
            root: classes.center + ' ' + classes.modalRoot,
            paper: classes.modal + ' ' + classes.modalLarge,
          }}
          open={!!openState}
          onClose={handleCloseModal}
        >
          <DialogTitle disableTypography className={classes.modalHeader}>
            <Button
              className={classes.modalCloseButton}
              justIcon
              key="close"
              aria-label="Close"
              color="transparent"
              onClick={handleCloseModal}
            >
              <Close className={classes.closeIcon} />
            </Button>
            <h4 className={classes.modalTitle}>{title}</h4>
          </DialogTitle>
          <DialogContent id="classic-modal-slide-description" className={classes.modalBody}>
            <GridContainer justify="center">{children}</GridContainer>
          </DialogContent>
          <DialogActions className={classes.modalFooter + ' ' + classes.modalFooterCenter}>
            {buttonsList.map(bl => (
              <Button {...bl}>{bl.label}</Button>
            ))}
          </DialogActions>
        </Dialog>
      </GridItem>
    </GridContainer>
  );
};

export default Modal;
