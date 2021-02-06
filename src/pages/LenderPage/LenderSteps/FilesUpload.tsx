import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import GridContainer from 'components/Grid/GridContainer';
import Button from 'components/CustomButtons/Button';
import GridItem from 'components/Grid/GridItem';
import FileUpload from 'components/CustomUpload/FileUpload';
import { useStyles } from 'components/Wizard/stepsStyles';

import { actions as wizardActions } from 'containers/WizardContainer/slice';
import { selectLenderData } from 'containers/Lender/selectors';
import { DefaultState, useInputChange } from 'containers/WizardContainer/hooks';

import { parseSubmitForm } from 'utils/parseForm';

import { humanPersonFiles, legalPersonFiles } from './filesConfig';
import { legalPersonState, humanPersonState } from './lenderDefaultValues';

const FilesUpload = () => {
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

export default FilesUpload;

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
    console.log(inputs);
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
