import React, { useState, ReactNode, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { makeStyles, Theme } from '@material-ui/core';
import Face from '@material-ui/icons/Face';

import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import TextInput from 'components/Form/TextInput';
import Button from 'components/CustomButtons/Button';

import { actions as wizardActions } from 'containers/WizardContainer/slice';
import SelectInput from 'components/Form/SelectInput';
import { parseReceivedForm, parseSubmitForm } from 'utils/parseForm';
import { selectWorkInfo, selectFetchedRenaperData } from 'containers/Partners/selectors';

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

type SubmitFunction = (arg: any) => void;

interface IStep1 {
  handleSubmit: SubmitFunction;
  formValues: typeof initialForm;
  compone: ReactNode;
}

const initialForm = {
  repartition: {
    value: '',
    isValid: false,
  },
  fileNumber: {
    value: '',
    isValid: false,
  },
  fileItem: {
    value: '',
    isValid: false,
  },
  cbu: {
    value: '',
    isValid: false,
  },
  bank: {
    value: '',
    isValid: false,
  },
  branch: {
    value: '',
    isValid: false,
  },
  banking: {
    value: '',
    isValid: false,
  },
  accountNumber: {
    value: '',
    isValid: false,
  },
  observations: {
    value: '',
    isValid: false,
  },
};

const WorkInfo = () => {
  const classes = useStyles();
  const [workInfo, setWorkInfo] = useState(initialForm);

  const renaperData = useSelector(selectWorkInfo);
  const fetchedRenaperData = useSelector(selectFetchedRenaperData);

  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchedRenaperData) {
      const parsedData = parseReceivedForm(renaperData);
      setWorkInfo(prevState => ({ ...prevState, ...parsedData }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchedRenaperData, renaperData]);

  const handleNext = () => {
    const isFormInvalid = Object.entries(workInfo).some(key => key[1].isValid === false);
    if (isFormInvalid) {
      dispatch(wizardActions.setStep({ stepId: 'workInfo', data: parseSubmitForm(workInfo), isValid: false }));
    } else {
      dispatch(
        wizardActions.setStep({ stepId: 'workInfo', data: parseSubmitForm(workInfo), isValid: true, type: 'complete' }),
      );
    }
  };

  const handleSubmit = () => {
    const isFormInvalid = Object.entries(workInfo).some(key => key[1].isValid === false);
    if (!isFormInvalid) {
      dispatch(
        wizardActions.setStep({ stepId: 'workInfo', data: parseSubmitForm(workInfo), isValid: true, type: 'submit' }),
      );
    }
  };

  const handlePrevious = () => {
    dispatch(
      wizardActions.setStep({ stepId: 'workInfo', data: parseSubmitForm(workInfo), isValid: true, type: 'previous' }),
    );
  };

  const onChangeHanlder = ({ id, value, isValid }) => {
    setWorkInfo(prevState => ({
      ...prevState,
      [id]: {
        value: value,
        isValid,
      },
    }));
  };

  return (
    <>
      <GridContainer style={{ marginBottom: '3%' }}>
        <GridItem xs={12} sm={4}>
          <SelectInput
            id="repartition"
            label="Reparticion"
            mainSelectLabel="Selecione su Reparticion"
            value={workInfo.repartition.value}
            handleSelect={onChangeHanlder}
            items={[
              { value: 'bica', label: 'BICA' },
              { value: 'slta', label: 'Secretaria Legal y Técnica de Autoridad del Agua' },
              { value: 'cic', label: 'CIC' },
              { value: 'cp', label: 'Caja de Policía' },
              { value: 'ug', label: 'Unidad Gobernador' },
              { value: 'e', label: 'Educacion' },
              { value: 'fe', label: 'Fiscalia del Estado' },
              { value: 'h', label: 'Hipodromo' },
              { value: 'ioma', label: 'IOMA' },
              { value: 'ips', label: 'IPS' },
              { value: 'lot', label: 'Loteria' },
              { value: 'slyt', label: 'Secretaria Legal y Técnica' },
              { value: 'ma', label: 'Ministerio Agroindustria' },
              { value: 'mc', label: 'Ministerio Cultura' },
              { value: 'mds', label: 'Ministerio Desarrollo Social' },
              { value: 'mec', label: 'Ministerio Economia' },
              { value: 'mgo', label: 'Ministerio Gobierno' },
              { value: 'minf', label: 'Ministerio Infraestructura' },
              { value: 'mtr', label: 'Ministerio de Trabajo' },
              { value: 'pol', label: 'Policía' },
              { value: 'msa', label: 'Ministerio Salud' },
              { value: 'sgob', label: 'Secretaria de Gobierno' },
              { value: 'spen', label: 'Servicio Penitenciario' },
              { value: 'dvi', label: 'Dirección de Vialidad' },
              { value: 'rgm', label: 'RGM' },
            ]}
            isValid={workInfo.repartition.isValid}
          />
        </GridItem>
        <GridItem xs={12} sm={4}>
          <TextInput
            id="fileNumber"
            label="Legajo"
            onChange={onChangeHanlder}
            value={workInfo.fileNumber.value}
            length={[2, 25]}
            isValid={workInfo.fileNumber.isValid}
            endAdornmentIcon={<Face className={classes.inputAdornmentIcon} />}
          />
        </GridItem>
        <GridItem xs={12} sm={4}>
          <TextInput
            id="fileItem"
            label="Item Legajo"
            value={workInfo.fileItem.value}
            onChange={onChangeHanlder}
            length={[2, 25]}
            isValid={workInfo.fileItem.isValid}
            endAdornmentIcon={<Face className={classes.inputAdornmentIcon} />}
          />
        </GridItem>
      </GridContainer>
      <GridContainer style={{ marginBottom: '3%' }}>
        <GridItem xs={12} sm={4}>
          <TextInput
            id="cbu"
            label="CBU"
            onChange={onChangeHanlder}
            value={workInfo.cbu.value}
            length={[2, 25]}
            isValid={workInfo.cbu.isValid}
            endAdornmentIcon={<Face className={classes.inputAdornmentIcon} />}
          />
        </GridItem>
      </GridContainer>
      {workInfo.cbu.value !== '' && (
        <GridContainer style={{ marginBottom: '3%' }}>
          <GridItem xs={12} sm={4}>
            <TextInput
              id="bank"
              label="Banco"
              onChange={onChangeHanlder}
              value={workInfo.bank.value}
              length={[2, 25]}
              isValid={workInfo.bank.isValid}
              endAdornmentIcon={<Face className={classes.inputAdornmentIcon} />}
            />
          </GridItem>
          <GridItem xs={12} sm={3}>
            <TextInput
              id="branch"
              label="Sucursal"
              onChange={onChangeHanlder}
              value={workInfo.branch.value}
              length={[2, 25]}
              isValid={workInfo.branch.isValid}
              endAdornmentIcon={<Face className={classes.inputAdornmentIcon} />}
            />
          </GridItem>
          <GridItem xs={12} sm={3}>
            <TextInput
              id="banking"
              label="Bancaria"
              onChange={onChangeHanlder}
              value={workInfo.banking.value}
              length={[2, 25]}
              isValid={workInfo.banking.isValid}
              endAdornmentIcon={<Face className={classes.inputAdornmentIcon} />}
            />
          </GridItem>
          <GridItem xs={12} sm={2}>
            <TextInput
              id="accountNumber"
              label="N de Cuenta"
              onChange={onChangeHanlder}
              value={workInfo.accountNumber.value}
              length={[2, 25]}
              isValid={workInfo.accountNumber.isValid}
              endAdornmentIcon={<Face className={classes.inputAdornmentIcon} />}
            />
          </GridItem>
        </GridContainer>
      )}
      <GridContainer>
        <GridItem xs={12} sm={12}>
          <TextInput
            id="observations"
            label="Observaciones"
            onChange={onChangeHanlder}
            value={workInfo.observations.value}
            length={[2, 25]}
            isValid={workInfo.observations.isValid}
            endAdornmentIcon={<Face className={classes.inputAdornmentIcon} />}
          />
        </GridItem>
      </GridContainer>
      <div className={classes.footer}>
        <div className={classes.left}>
          <Button color="rose" onClick={handlePrevious}>
            Anterior
          </Button>
        </div>
        <div className={classes.right}>
          {true ? (
            <Button color="rose" onClick={handleSubmit}>
              Finalizar
            </Button>
          ) : null}
        </div>
        <div className={classes.clearfix} />
      </div>
    </>
  );
};

export default WorkInfo;
