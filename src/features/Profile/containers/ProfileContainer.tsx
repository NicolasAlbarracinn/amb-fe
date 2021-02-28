import React from 'react';
import * as yup from 'yup';
import { Formik, Form, Field } from 'formik';

import PermIdentity from '@material-ui/icons/PermIdentity';

import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Button from 'components/CustomButtons/Button';
import Card from 'components/Card/Card';
import CardBody from 'components/Card/CardBody';
import CardHeader from 'components/Card/CardHeader';
import CardIcon from 'components/Card/CardIcon';
import TextFormField from 'components/Form/TextField';

import { useStyles } from '../styles';
import { ILoginFormFields } from '../types';

const formSchema = yup.object().shape({
  email: yup.string().required('campo requerido').email('Formato invalido'),
  firstName: yup.string().required('campo requerido').min(3, 'minimo 3 caracteres'),
  lastName: yup.string().required('campo requerido').min(3, 'minimo 3 caracteres'),
});

const initialForm: ILoginFormFields = {
  email: '',
  firstName: '',
  lastName: '',
};

interface IUserProfileProps {
  handleSubmit: (args: ILoginFormFields) => void;
}

const UserProfile = ({ handleSubmit }: IUserProfileProps) => {
  const classes = useStyles();

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="rose" icon>
              <CardIcon color="rose">
                <PermIdentity />
              </CardIcon>
              <h4 className={classes.cardIconTitle}>
                Editar Perfil - <small>Complete su perfil</small>
              </h4>
            </CardHeader>
            <CardBody>
              <Formik
                initialValues={initialForm}
                validationSchema={formSchema}
                onSubmit={values => {
                  handleSubmit(values);
                }}
              >
                <Form>
                  <Field label="Email" name="email" component={TextFormField} />
                  <Field label="Nombre" name="firstName" component={TextFormField} />
                  <Field label="Apellido" name="lastName" component={TextFormField} />
                  <Button type="submit" color="rose" className={classes.updateProfileButton}>
                    Guardar Perfil
                  </Button>
                </Form>
              </Formik>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default UserProfile;
