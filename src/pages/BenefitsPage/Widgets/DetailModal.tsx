import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { selectBenefitsData } from 'containers/Benefits/selectors';
import { IBenefit } from 'containers/Benefits/types';
import { actions } from 'containers/Benefits/slice';

import Close from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

import Button from 'components/CustomButtons/Button';
import GridItem from 'components/Grid/GridItem';
import GridContainer from 'components/Grid/GridContainer';

import { useNotificationStyles } from '../../PortfolioPage/styles';

import { labelsDetails, labelsPartners, labelsRepartitions } from './DetailsLabels';
import { useModalStyles } from './styles';

const DetailsModal = () => {
  const history = useHistory();
  const classes = useNotificationStyles();
  const modalClasses = useModalStyles();
  const dispatch = useDispatch();

  const benefitDetail: IBenefit | null = useSelector(selectBenefitsData);

  const handleCloseModal = () => {
    dispatch(actions.setBenefitDetailsToNull());
  };

  const handleChangeBenefitStatus = (status: string) => {
    if (benefitDetail) {
      dispatch(actions.updateBenefitStatusRequest({ id: benefitDetail.benefitId, status }));
      dispatch(actions.setBenefitDetailsToNull());
    }
  };

  const handleSetFormData = () => {
    if (benefitDetail) {
      dispatch(actions.getPartnerInformationSuccess(benefitDetail));
      dispatch(actions.setBenefitId(benefitDetail.benefitId));
      history.push(`/app/benefits/${benefitDetail.benefitId}`);
    }
  };

  return (
    <GridContainer justify="center">
      <GridItem xs={12} sm={12} md={12} className={classes.center}>
        <Dialog
          classes={{
            root: classes.center + ' ' + classes.modalRoot,
            paper: classes.modal + ' ' + classes.modalMedium,
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
            <GridContainer justify="center">
              {benefitDetail ? (
                <>
                  {Object.keys(benefitDetail)
                    .filter(k => labelsDetails[k] && benefitDetail[k])
                    .map(k => (
                      <GridItem xs={12} sm={4}>
                        <div className={modalClasses.dataContainer}>
                          <label className={modalClasses.title}>{labelsDetails[k]}</label>
                          <span>{benefitDetail[k]}</span>
                        </div>
                      </GridItem>
                    ))}
                  {/* 
                  <GridItem xs={12} sm={12}>
                    {' '}
                    <h3>Delegacion</h3>
                  </GridItem>

                  {Object.keys(benefitDetail.distributionDetail)
                    .filter(k => labelsRepartitions[k] && benefitDetail.distributionDetail[k])
                    .map(k => (
                      <GridItem xs={12} sm={4}>
                        <div className={modalClasses.dataContainer}>
                          <label className={modalClasses.title}>{labelsRepartitions[k]}</label>
                          <span>{benefitDetail.distributionDetail[k]}</span>
                        </div>
                      </GridItem>
                    ))}

                  <GridItem xs={12} sm={12}>
                    {' '}
                    <h3>Datos del socio</h3>
                  </GridItem>
                  {Object.keys(benefitDetail.partnerDetail)
                    .filter(k => labelsPartners[k] && benefitDetail.partnerDetail[k])
                    .map(k => (
                      <GridItem xs={12} sm={4}>
                        <div className={modalClasses.dataContainer}>
                          <label className={modalClasses.title}>{labelsPartners[k]}</label>
                          <span>{benefitDetail.partnerDetail[k]}</span>
                        </div>
                      </GridItem>
                    ))} */}
                </>
              ) : (
                <div>No pudiemos encontrar datos</div>
              )}
            </GridContainer>
          </DialogContent>
          <DialogActions className={classes.modalFooter + ' ' + classes.modalFooterCenter}>
            <Button onClick={() => handleChangeBenefitStatus('a')} color="success" simple>
              aprobar
            </Button>
            <Button onClick={() => handleSetFormData()} color="warning" simple>
              modificar
            </Button>
            <Button onClick={() => handleChangeBenefitStatus('r')} color="danger" simple>
              rechazar
            </Button>
          </DialogActions>
        </Dialog>
      </GridItem>
    </GridContainer>
  );
};

export default DetailsModal;
