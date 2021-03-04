import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import GridContainer from 'components/Grid/GridContainer';
import Button from 'components/CustomButtons/Button';
import GridItem from 'components/Grid/GridItem';
import FileUpload from 'components/CustomUpload/FileUpload';
import { useStyles } from 'components/Wizard/stepsStyles';
import { humanPersonFiles, legalPersonFiles } from '../config';
import { selectLenderData } from '../store/selectors';

import { actions as wizardActions } from '../../wizard/slice';

//TODO: Refactor

export const humanPersonState = {
  cuitCertificate: {
    value: '',
    isValid: false,
  },
  proofGrossIncome: {
    value: '',
    isValid: false,
  },
  incomesCertificates: {
    value: '',
    isValid: false,
  },
  dniCertificate: {
    value: '',
    isValid: false,
  },
  proofOfInscriptionUIF: {
    value: '',
    isValid: false,
  },
  originLegalityFundsCertificate: {
    value: '',
    isValid: false,
  },
  pepAuthoritiesCertificate: {
    value: '',
    isValid: false,
  },
  uidInscriptionCertificateAsLender: {
    value: '',
    isValid: false,
  },
  manualCopyPLAFT: {
    value: '',
    isValid: false,
  },
};

export const legalPersonState = {
  statuteStatutoryReform: {
    value: '',
    isValid: false,
  },
  cuitCertificate: {
    value: '',
    isValid: false,
  },
  proofGrossIncome: {
    value: '',
    isValid: false,
  },
  lastBalanceCertificate: {
    value: '',
    isValid: false,
  },
  proofLegalPerson: {
    value: '',
    isValid: false,
  },
  proofOfInscriptionUIF: {
    value: '',
    isValid: false,
  },
  originLegalityFundsCertificate: {
    value: '',
    isValid: false,
  },
  currentAuthoritiesCertificate: {
    value: '',
    isValid: false,
  },
  ActOfAssemblyCurrentauthorities: {
    value: '',
    isValid: false,
  },
  ActOfGoverningBody: {
    value: '',
    isValid: false,
  },
  currentAuthoritiesDNICertificates: {
    value: '',
    isValid: false,
  },
  pepAuthoritiesCertificate: {
    value: '',
    isValid: false,
  },
  regulatoryComplianceUIFCertificate: {
    value: '',
    isValid: false,
  },
  uifInscriptionCertificate: {
    value: '',
    isValid: false,
  },
  meetingMinutesOfficialDesignation: {
    value: '',
    isValid: false,
  },
  actPLAFT: {
    value: '',
    isValid: false,
  },
  manualCopyPLAFT: {
    value: '',
    isValid: false,
  },
};

export const parseSubmitForm = form => {
  let parsedForm = {};
  Object.entries(form).forEach((key: any) => {
    parsedForm[key[0]] = key[1].value;
  });
  return parsedForm;
};

export interface DefaultState {
  value: string;
  isValid: boolean;
}

export const useInputChange = (defaultState: { [key: string]: DefaultState }) => {
  const [inputs, setInputs] = useState(defaultState);

  const onChangeHanlder = useCallback(({ id, value, isValid }) => {
    setInputs(prevState => ({
      ...prevState,
      [id]: {
        value: value,
        isValid,
      },
    }));
  }, []);

  const updateInputs = useCallback((updatedValues: { [key: string]: DefaultState }) => {
    setInputs(prevState => ({ ...prevState, ...updatedValues }));
  }, []);

  return {
    inputs,
    onChangeHanlder,
    updateInputs,
  };
};

const StepFilesUpload = () => {
  const dispatch = useDispatch();
  const { personType } = useSelector(selectLenderData);

  const handleSubmit = (files: { [key: string]: DefaultState }) => {
    const isFormInvalid = Object.entries(files).some(key => key[1].isValid === false);

    if (!isFormInvalid) {
      dispatch(
        wizardActions.setStep({
          stepId: 'ledersFileUpdates',
          data: parseSubmitForm(files),
          isValid: true,
          type: 'submit',
        }),
      );
    }
  };

  const handlePrevious = (files: { [key: string]: DefaultState }) => {
    dispatch(
      wizardActions.setStep({
        stepId: 'address',
        data: parseSubmitForm(files),
        isValid: true,
        type: 'previous',
      }),
    );
  };

  return personType === 'fisica' ? (
    <HumanPersonFiles submitHandler={handleSubmit} backHandler={handlePrevious} />
  ) : (
    <LegalPersonFiles submitHandler={handleSubmit} backHandler={handlePrevious} />
  );
};

interface IPersonFilesProps {
  submitHandler: (arg: { [key: string]: DefaultState }) => void;
  backHandler: (arg: { [key: string]: DefaultState }) => void;
}

const HumanPersonFiles = ({ submitHandler, backHandler }: IPersonFilesProps) => {
  const classes = useStyles();
  const { inputs, onChangeHanlder } = useInputChange(humanPersonState);

  const [invalidForm, setInvalidForm] = useState(true);

  const isValid = useMemo(() => Object.entries(inputs).some(key => key[1].isValid === false), [inputs]);

  useEffect(() => {
    setInvalidForm(!isValid);
  }, [isValid]);

  return (
    <>
      <GridContainer>
        {humanPersonFiles(onChangeHanlder).map(f => (
          <GridItem xs={12} sm={12}>
            <FileUpload {...f} />
          </GridItem>
        ))}
      </GridContainer>
      <div className={classes.footer}>
        <div className={classes.left}>
          <Button color="rose" onClick={() => backHandler(inputs)}>
            Anterior
          </Button>
        </div>
        <div className={classes.right}>
          <Button disabled={invalidForm} type="submit" color="rose" onClick={() => submitHandler(inputs)}>
            Finalizar carga
          </Button>
        </div>
        <div className={classes.clearfix} />
      </div>
    </>
  );
};

const LegalPersonFiles = ({ submitHandler, backHandler }: IPersonFilesProps) => {
  const classes = useStyles();
  const { inputs, onChangeHanlder } = useInputChange(legalPersonState);

  const [invalidForm, setInvalidForm] = useState(true);

  // const isValid = useMemo(() => Object.entries(inputs).some(key => key[1].isValid === false), [inputs]);

  useEffect(() => {
    const isValid = Object.entries(inputs).some(key => key[1].isValid === false);
    setInvalidForm(isValid);
  }, [inputs]);

  return (
    <>
      <GridContainer>
        {legalPersonFiles(onChangeHanlder).map(f => (
          <GridItem xs={12} sm={12}>
            <FileUpload {...f} />
          </GridItem>
        ))}
      </GridContainer>
      <div className={classes.footer}>
        <div className={classes.left}>
          <Button color="rose" onClick={() => backHandler(inputs)}>
            Anterior
          </Button>
        </div>
        <div className={classes.right}>
          <Button disabled={invalidForm} type="submit" color="rose" onClick={() => submitHandler(inputs)}>
            Finalizar carga
          </Button>
        </div>
        <div className={classes.clearfix} />
      </div>
    </>
  );
};

export default StepFilesUpload;
