import React, { useState } from 'react';
import { isEmpty } from 'lodash';
import { useSelector, useDispatch } from 'react-redux';

import { selectFetchedBenefitId } from '../store/selectors';
import { actions } from '../store/slice';

import Close from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

import Button from 'components/CustomButtons/Button';
import GridItem from 'components/Grid/GridItem';
import GridContainer from 'components/Grid/GridContainer';
import FileUpload from 'components/CustomUpload/FileUpload';

import { useNotificationStyles } from '../styles';

const UploadModal = () => {
  const [uploadedFiles, setFile] = useState({ bankTransfer: '' });

  const classes = useNotificationStyles();
  const dispatch = useDispatch();

  const benefitId: number | null = useSelector(selectFetchedBenefitId);

  const handleCloseModal = () => {
    dispatch(actions.setBenefitIdDefault());
  };

  const handleDispatchUpload = () => {
    if (benefitId) {
      dispatch(
        actions.updateBenefitRequest({ id: benefitId, updatedInfo: { files: uploadedFiles, benefitStatus: 'o' } }),
      );
      dispatch(actions.setBenefitIdDefault());
    }
  };

  const handleFileUpload: (args: { value: string; id: string; isValid: boolean }) => void = ({
    value,
    id,
    isValid,
  }) => {
    if (isEmpty(uploadedFiles.bankTransfer)) setFile(prevState => ({ ...prevState, [id]: value }));
  };

  return (
    <GridContainer justify="center">
      <GridItem xs={12} sm={12} md={12} className={classes.center}>
        <Dialog
          classes={{
            root: classes.center + ' ' + classes.modalRoot,
            paper: classes.modal + ' ' + classes.modalMedium,
          }}
          open={!!benefitId}
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
            <h4 className={classes.modalTitle}>Carga de transferencia bancaria</h4>
          </DialogTitle>
          <DialogContent id="classic-modal-slide-description" className={classes.modalBody}>
            <FileUpload
              id="bankTransfer"
              title="Comprobante de transferencia bancaria"
              setUploadFile={handleFileUpload}
            />
          </DialogContent>
          <DialogActions className={classes.modalFooter + ' ' + classes.modalFooterCenter}>
            <Button
              disabled={isEmpty(uploadedFiles.bankTransfer)}
              onClick={handleDispatchUpload}
              color="success"
              simple
            >
              finalizar carga
            </Button>
          </DialogActions>
        </Dialog>
      </GridItem>
    </GridContainer>
  );
};

export default UploadModal;
