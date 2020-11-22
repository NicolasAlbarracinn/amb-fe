import React, { useState, ReactNode, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { makeStyles, Theme } from '@material-ui/core';
import Face from '@material-ui/icons/Face';

import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import TextInput from 'components/Form/TextInput';
import Button from 'components/CustomButtons/Button';

import { useInputChange, useWizardStep } from 'containers/WizardContainer/hooks';

export const useStyles = makeStyles((theme: Theme) => ({
  infoText: {
    fontWeight: 300,
    margin: '10px 0 30px',
    textAlign: 'center',
  },
  inputAdornmentIcon: {
    color: '#555',
  },
  inputAdornment: {
    position: 'relative',
  },
  footer: {
    padding: '0 15px',
  },
  left: {
    float: 'left!important' as 'left',
  },
  right: {
    float: 'right!important' as 'right',
  },
  clearfix: {
    '&:after,&:before': {
      display: 'table',
      content: '" "',
    },
    clear: 'both',
  },
}));

const initialForm = {
  partnerId: {
    value: '',
    isValid: true,
  },
  name: {
    value: '',
    isValid: false,
  },
  lastName: {
    value: '',
    isValid: false,
  },
  admissionDate: {
    value: '',
    isValid: false,
  },
  documentType: {
    value: '',
    isValid: false,
  },
  documentNumber: {
    value: '',
    isValid: false,
  },
  gender: {
    value: '',
    isValid: false,
  },
  cuil: {
    value: '',
    isValid: false,
  },

  civilState: {
    value: '',
    isValid: false,
  },
  status: {
    value: '',
    isValid: false,
  },
  email: {
    value: '',
    isValid: false,
  },
};

const PartnerDetail = () => {
  const classes = useStyles();
  const { inputs: partner, onChangeHanlder } = useInputChange(initialForm);
  const { loadError, handleNext } = useWizardStep(partner, 'partnerDetail');

  return (
    <>
      <GridContainer>
        <GridItem xs={12} sm={6}>
          <TextInput
            id="streetAdress"
            label="N° de afiliado"
            value={partner.partnerId.value}
            onChange={onChangeHanlder}
            length={[2, 25]}
            isValid={partner.partnerId.isValid}
            loadError={loadError}
            endAdornmentIcon={<Face className={classes.inputAdornmentIcon} />}
          />
        </GridItem>
      </GridContainer>
      <div className={classes.footer}>
        <div className={classes.right}>
          {true ? (
            <Button color="rose" onClick={handleNext}>
              Proximo
            </Button>
          ) : null}
        </div>
        <div className={classes.clearfix} />
      </div>
    </>
  );
};

export default PartnerDetail;
