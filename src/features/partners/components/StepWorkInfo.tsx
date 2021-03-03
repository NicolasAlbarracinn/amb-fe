import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, FormikProps } from 'formik';
import { useSelector } from 'react-redux';

import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Button from 'components/CustomButtons/Button';
import TextFormField from 'components/Form/TextField';
import SelectFormField from 'components/Form/SelectField';
import { useStyles } from 'components/Wizard/styles';

import { ministriesList } from 'utils/constants';
import getCbuValues from 'utils/getCbuValues';

import { useWizardStep } from '../../wizard/hooks';

import { IWorkInfo } from '../types';
import { defaultWork, WizardStepsConfig } from '../config';
import { selectWorkInfo, selectFetchedRenaperData } from '../store/selectors';

const StepWorkInfo = () => {
  const { handleSubmit, handlePrevious } = useWizardStep(WizardStepsConfig.WORK_STEP);
  const classes = useStyles();

  const [inputFields, setInputFields] = useState(defaultWork);

  const renaperData = useSelector(selectWorkInfo);
  const fetchedRenaperData = useSelector(selectFetchedRenaperData);

  useEffect(() => {
    if (fetchedRenaperData) {
      setInputFields(renaperData);
    }
  }, [renaperData, fetchedRenaperData]);

  const handleCBUChange = (props: FormikProps<IWorkInfo>) => {
    const handleOnChange = field => {
      props.setFieldValue('cbu', field.target.value);

      const hasError = props.errors.cbu;

      if (!hasError) {
        const bankData = getCbuValues(field.target.value);
        if (!!bankData) {
          setInputFields(prevState => ({ ...prevState, ...bankData }));
        }
      }
    };
    return handleOnChange;
  };

  return (
    <div>
      <Formik enableReinitialize={true} initialValues={inputFields} onSubmit={values => handleSubmit(values)}>
        {props => {
          return (
            <Form>
              <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  <Field name="repartition" label="Reparticion" options={ministriesList} component={SelectFormField} />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Field name="fileNumber" label="Legajo" component={TextFormField} />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Field name="fileItem" label="Item Legajo" component={TextFormField} />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Field
                    name="cbu"
                    label="CBU"
                    onChange={handleCBUChange(props)}
                    value={props.values.cbu}
                    component={TextFormField}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Field name="bankName" label="Banco" component={TextFormField} />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Field name="bankBranchName" label="Nombre Sucursal" component={TextFormField} />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Field name="bankBranchCode" label="Codigo Sucursal" component={TextFormField} />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Field name="bankAccountNumber" label="N de Cuenta" component={TextFormField} />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Field name="observations" label="Observaciones" component={TextFormField} />
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
                    Proximo
                  </Button>
                </div>
                <div className={classes.clearfix} />
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default StepWorkInfo;
