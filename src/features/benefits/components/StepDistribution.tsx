import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { useSelector } from 'react-redux';

import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Button from 'components/CustomButtons/Button';
import TextFormField from 'components/Form/TextField';
import SelectFormField from 'components/Form/SelectField';
import { useStyles } from 'components/Wizard/styles';

import { paymentMethod } from 'utils/constants';

import { useWizardStep } from '../../wizard/hooks';

import { selectPartnerData, selectIsDataFetched } from '../store/selectors';
import { defaultDistribution, distributionValidationSchema, WizardStepsConfig } from '../config';
import { IPartner } from '../types';

const StepDistribution = () => {
  const [inputFields, setInputFields] = useState(defaultDistribution);
  const { handleNext, handlePrevious } = useWizardStep(WizardStepsConfig.DISTRIBUTION_STEP);

  const classes = useStyles();

  const partnerData: IPartner | null = useSelector(selectPartnerData);
  const isDataFetched = useSelector(selectIsDataFetched);

  useEffect(() => {
    if (isDataFetched && partnerData) {
      setInputFields({
        ...partnerData.distributionDetail,
        paymentMethod: partnerData.distributionDetail.paymentType,
        paymentMethodRecovery: partnerData.distributionDetail.recoveryPaymentType,
      });
    }
  }, [isDataFetched, partnerData]);

  return (
    <div>
      <Formik
        initialValues={inputFields}
        onSubmit={values => handleNext(values)}
        validationSchema={distributionValidationSchema}
        enableReinitialize={true}
      >
        {props => {
          return (
            <Form>
              <GridContainer>
                <GridItem xs={12} sm={12}>
                  <Field disabled name="repartition" label="Repartición" component={TextFormField} />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <Field disabled name="distributionCode" label="Código" component={TextFormField} />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Field disabled name="dependence" label="Dependencia" component={TextFormField} />
                </GridItem>
              </GridContainer>

              <GridContainer>
                <GridItem xs={12} sm={12} md={2}>
                  <Field disabled name="fileNumber" label="N° Legajo" component={TextFormField} />
                </GridItem>
                <GridItem xs={12} sm={12} md={2}>
                  <Field disabled name="fileItem" label="Item Legajo" component={TextFormField} />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Field
                    name="paymentMethod"
                    label="Forma de cobro"
                    options={paymentMethod}
                    component={SelectFormField}
                  />
                </GridItem>{' '}
                <GridItem xs={12} sm={12} md={4}>
                  <Field
                    name="paymentMethodRecovery"
                    label="Forma de Cobro Recupero"
                    options={paymentMethod}
                    component={SelectFormField}
                  />
                </GridItem>
              </GridContainer>

              <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  <Field disabled name="bankName" label="Banco" component={TextFormField} />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Field disabled name="cbu" label="CBU" component={TextFormField} />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Field disabled name="bankBranchName" label="Sucursal bancaria" component={TextFormField} />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Field disabled name="bankAccountNumber" label="N° de cuenta" component={TextFormField} />
                </GridItem>
              </GridContainer>

              {inputFields.repartition === 'cajaDePolicía' && (
                <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                    <Field name="programCode" label="Código de programa" component={TextFormField} />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <Field name="sequenceNumber" label="N° de secuencia" component={TextFormField} />
                  </GridItem>
                </GridContainer>
              )}

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

export default StepDistribution;
