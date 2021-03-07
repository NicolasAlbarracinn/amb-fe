import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';

import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Button from 'components/CustomButtons/Button';
import FileUploadField from 'components/Form/FileUploadField';
import { useStyles } from 'components/Wizard/styles';

import { useWizardStep } from '../../wizard/hooks';
import { selectStepsData } from '../../wizard/selectors';
import { actions } from '../store/slice';

import { WizardStepsConfig } from '../config';

const StepPDFCreator = () => {
  const { handleSubmit, handlePrevious } = useWizardStep(WizardStepsConfig.DOCUMENTATION_STEP);
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
        handleSubmit(values);
      }}
      enableReinitialize={true}
      validationSchema={yup.object().shape({ benefitFile: yup.mixed().required('campo requerido') })}
    >
      {props => {
        return (
          <Form>
            <Button color="primary" onClick={handleGeneratePdf}>
              generar legajo
            </Button>
            <GridContainer container direction="row" justify="flex-end" alignItems="center">
              <GridItem container direction="row" justify="flex-end" xs={12} sm={12} md={12}></GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <Field name="benefitFile" label="Legajo de solicitud de prestacion" component={FileUploadField} />
              </GridItem>
            </GridContainer>
            <div className={classes.footer}>
              <div className={classes.left}>
                <Button color="rose" onClick={handlePrevious}>
                  Anterior
                </Button>
              </div>
              <div className={classes.right}>
                <Button type="submit" color="rose">
                  Solicitar prestacion
                </Button>
              </div>
              <div className={classes.clearfix} />
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default StepPDFCreator;
