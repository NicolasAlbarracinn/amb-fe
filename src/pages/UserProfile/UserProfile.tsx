import React, { useState } from 'react';

import PermIdentity from '@material-ui/icons/PermIdentity';

import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Button from 'components/CustomButtons/Button';
import CustomInput from 'components/CustomInput/CustomInput';
import Clearfix from 'components/Clearfix/Clearfix';
import Card from 'components/Card/Card';
import CardBody from 'components/Card/CardBody';
import CardHeader from 'components/Card/CardHeader';
import CardIcon from 'components/Card/CardIcon';
import EmailInput from 'components/Form/EmailInput';
import TextInput from 'components/Form/TextInput';

import { useStyles } from './styles';

const initialForm = {
  email: '',
  firstName: '',
  lastName: '',
};

const UserProfile = ({ handleSubmit }) => {
  const classes = useStyles();
  let form = initialForm;

  const onChangeHanlder = ({ id, value }) => {
    form[id] = value;
  };

  const onSubmit = e => {
    e.preventDefault();
    handleSubmit(form);
  };

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
              <form onSubmit={e => onSubmit(e)}>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <EmailInput isRequired={true} emailHandler={onChangeHanlder} />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <TextInput
                      length={[0, 25]}
                      labelText="Nombre"
                      id="firstName"
                      isRequired={true}
                      handler={onChangeHanlder}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <TextInput
                      length={[0, 25]}
                      labelText="Apellido"
                      id="lastName"
                      isRequired={true}
                      handler={onChangeHanlder}
                    />
                  </GridItem>
                </GridContainer>
                {/*<GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Ciudad"
                      id="city"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Nacionalidad"
                      id="country"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Codigo Postal"
                      id="postal-code"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                  </GridItem>
                    </GridContainer>*/}
                <Button type="submit" color="rose" className={classes.updateProfileButton}>
                  Guardar Perfil
                </Button>
                <Clearfix />
              </form>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default UserProfile;
