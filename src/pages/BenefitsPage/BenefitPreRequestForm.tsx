import React, { useEffect, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import LibraryBooks from '@material-ui/icons/LibraryBooks';
import { makeStyles, Theme } from '@material-ui/core';

import { selectStepsData } from 'containers/WizardContainer/selectors';
import { actions } from 'containers/Benefits/slice';
import { DefaultState, useInputChange } from 'containers/WizardContainer/hooks';

import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Card from 'components/Card/Card';
import CardBody from 'components/Card/CardBody';
import CardIcon from 'components/Card/CardIcon';
import CardHeader from 'components/Card/CardHeader';
import Button from 'components/CustomButtons/Button';
import FileUpload from 'components/CustomUpload/FileUpload';

import { cardTitle, successColor, dangerColor } from 'utils/styles';

const useStyles = makeStyles((theme: Theme) => ({
  cardIconTitle: {
    ...cardTitle,
    marginTop: '15px',
    marginBottom: '0px',
  },
  staticFormGroup: {
    marginLeft: '0',
    marginRight: '0',
    paddingBottom: '10px',
    margin: '8px 0 0 0',
    position: 'relative',
    '&:before,&:after': {
      display: 'table',
      content: '" "',
    },
    '&:after': {
      clear: 'both',
    },
  },
  staticFormControl: {
    marginBottom: '0',
    paddingTop: '8px',
    paddingBottom: '8px',
    minHeight: '34px',
  },
  inputAdornment: {
    marginRight: '8px',
    position: 'relative',
  },
  inputAdornmentIconSuccess: {
    color: successColor[0] + '!important',
  },
  inputAdornmentIconError: {
    color: dangerColor[0] + '!important',
  },
}));

const BenefitPreRequestForm = () => {
  const classes = useStyles();
  const data = useSelector(selectStepsData);
  const dispatch = useDispatch();

  const { inputs, onChangeHanlder } = useInputChange({
    benefitFile: {
      value: '',
      isValid: false,
    },
  });

  const [invalidForm, setInvalidForm] = useState(true);

  const isValid = useMemo(() => Object.entries(inputs).some(key => key[1].isValid === false), [inputs]);

  useEffect(() => {
    setInvalidForm(!isValid);
  }, [isValid]);

  const handleGeneratePdf = () => {
    dispatch(actions.getPDFFileRequest(data));
  };

  return (
    <Card>
      <CardHeader color="rose" icon>
        <CardIcon color="rose">
          <LibraryBooks />
        </CardIcon>
        <h4 className={classes.cardIconTitle}>Creacion y carga de documentacion</h4>
        <Button color="primary" onClick={handleGeneratePdf}>
          generar legajo
        </Button>
      </CardHeader>
      <CardBody>
        <GridContainer container direction="row" justify="flex-end" alignItems="center">
          <GridItem container direction="row" justify="flex-end" xs={12} sm={12} md={12}></GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <FileUpload id="benefitFile" title="Legajo de solicitud de prestacion" setUploadFile={onChangeHanlder} />
          </GridItem>
        </GridContainer>

        <Button color="rose">Solicitar prestacion</Button>
      </CardBody>
    </Card>
  );
};

export default BenefitPreRequestForm;
