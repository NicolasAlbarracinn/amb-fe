import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { makeStyles, Theme } from '@material-ui/core';
import DialogContent from '@material-ui/core/DialogContent';

import { selectBenefitsData } from '../store/selectors';
import { actions } from '../store/slice';
import { IBenefit, IDistributionInfo, IPartnerInfo } from '../types';
import { labelsRepartitions, labelsPartners } from '../config';

import Modal, { ButtonConfig } from 'components/Modal/Modal';
import GridItem from 'components/Grid/GridItem';
import GridContainer from 'components/Grid/GridContainer';

import Accordion from 'components/Accordion/Accordion';
import { grayColor, primaryBoxShadow, hexToRgb, blackColor } from 'utils/styles';

import BenefitEditor from './BenefitEditor';

const ModalDetails = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const benefitDetail: IBenefit | null = useSelector(selectBenefitsData);

  const handleCloseModal = () => {
    dispatch(actions.setBenefitDetailsToNull());
  };

  const handleChangeBenefitStatus = (status: string) => {
    if (benefitDetail) {
      dispatch(actions.updateBenefitStatusRequest({ id: benefitDetail.benefitId!, status }));
      dispatch(actions.setBenefitDetailsToNull());
    }
  };

  const buttonConfig: Array<ButtonConfig> = [
    { label: 'aprobar', onClick: () => handleChangeBenefitStatus('a'), color: 'success' },
    { label: 'rechzar', onClick: () => handleChangeBenefitStatus('r'), color: 'danger' },
  ];

  console.log(benefitDetail);

  return (
    <Modal
      openState={!!benefitDetail}
      handleCloseModal={handleCloseModal}
      title={`Detalle de prestacion N° ${benefitDetail?.benefitId || '-'}`}
      buttonsList={buttonConfig}
    >
      <DialogContent id="classic-modal-slide-description" className={classes.modalBody}>
        <GridContainer justify="center">
          {/* TODO: Add a mofication form here */}
          {benefitDetail ? (
            <Accordion
              defaultTab={0}
              collapses={[
                {
                  title: 'Detalle de la prestacion',
                  content: <BenefitEditor benefitData={benefitDetail} />,
                },
                {
                  title: 'Detalle del socio',
                  content: <PartnerDetails partner={benefitDetail.partnerDetail} />,
                },
                {
                  title: 'Detalle de la reparticion',
                  content: <DistributionDetails distribution={benefitDetail.distributionDetail} />,
                },
              ]}
            />
          ) : (
            <div>No pudiemos encontrar datos</div>
          )}
        </GridContainer>
      </DialogContent>
    </Modal>
  );
};

export default ModalDetails;

export const useStyles = makeStyles((theme: Theme) => ({
  dataContainer: {
    ...primaryBoxShadow,
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '18px',
    backgroundColor: grayColor[2],
    padding: '10px',
    color: '#fff',
    boxShadow: '0 1px 4px 0 rgba(' + hexToRgb(blackColor) + ', 0.14)',
    borderRadius: '6px',
  },

  title: {
    fontSize: '14px',
    color: grayColor[12],
    textTransform: 'uppercase',
  },
  values: {
    color: grayColor[4],
    fontSize: '14px',
  },
  modalBody: {
    paddingTop: '24px',
    paddingRight: '24px',
    paddingBottom: '16px',
    paddingLeft: '24px',
    position: 'relative',
    overflow: 'visible',
  },
  itemsContainer: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
  },
}));

const LabaledItems = (props: { label: string; value: string }) => {
  const classes = useStyles();

  return (
    <GridItem xs={12} sm={4}>
      <div className={classes.dataContainer}>
        <label className={classes.title}>{props.label}</label>
        <span className={classes.values}>{props.value}</span>
      </div>
    </GridItem>
  );
};

const PartnerDetails = (props: { partner: IPartnerInfo }) => {
  const classes = useStyles();
  return (
    <div className={classes.itemsContainer}>
      {Object.keys(props.partner)
        .filter(k => labelsPartners[k] && props.partner[k])
        .map(k => (
          <LabaledItems label={labelsPartners[k]} value={props.partner[k]} />
        ))}
    </div>
  );
};

const DistributionDetails = (props: { distribution: IDistributionInfo }) => {
  const classes = useStyles();
  return (
    <div className={classes.itemsContainer}>
      {Object.keys(props.distribution)
        .filter(k => labelsRepartitions[k] && props.distribution[k])
        .map(k => (
          <LabaledItems label={labelsRepartitions[k]} value={props.distribution[k]} />
        ))}
    </div>
  );
};

// const BenefitDetail = (benefit: IBenefitInfo) => (
//   <div>
//     {Object.keys(benefit)
//       .filter(k => labelsDetails[k] && benefit[k])
//       .map(k => (
//         <LabaledItems label={labelsDetails[k]} value={benefit[k]} />
//       ))}
//   </div>
// );
