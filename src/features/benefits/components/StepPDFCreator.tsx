import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';

import { makeStyles, Theme } from '@material-ui/core';

import { selectStepsData } from '../../wizard/selectors';
import { actions } from '../store/slice';

import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';

import Button from 'components/CustomButtons/Button';
import FileUploadField from 'components/Form/FileUploadField';

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

const StepPDFCreator = () => {
  const classes = useStyles();
  const data = useSelector(selectStepsData);
  const dispatch = useDispatch();

  const handleGeneratePdf = () => {
    dispatch(actions.getPDFFileRequest(data));
  };

  return (
    <Formik
      initialValues={{ benefitFile: null }}
      onSubmit={values => {
        //TODO: add submit function
        console.log(values);
      }}
      enableReinitialize={true}
    >
      {props => {
        return (
          <Form>
            <h4 className={classes.cardIconTitle}>Creacion y carga de documentacion</h4>
            <Button color="primary" onClick={handleGeneratePdf}>
              generar legajo
            </Button>
            <GridContainer container direction="row" justify="flex-end" alignItems="center">
              <GridItem container direction="row" justify="flex-end" xs={12} sm={12} md={12}></GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <Field name="benefitFile" label="Legajo de solicitud de prestacion" component={FileUploadField} />
              </GridItem>
            </GridContainer>

            <Button color="rose">Solicitar prestacion</Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default StepPDFCreator;
