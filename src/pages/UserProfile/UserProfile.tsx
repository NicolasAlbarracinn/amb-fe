import React, { useEffect, useState } from 'react';

import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Button from 'components/CustomButtons/Button';
import Clearfix from 'components/Clearfix/Clearfix';
import Card from 'components/Card/Card';
import CardBody from 'components/Card/CardBody';
import CardHeader from 'components/Card/CardHeader';
import CardIcon from 'components/Card/CardIcon';
import EmailInput from 'components/Form/EmailInput';
import TextInput from 'components/Form/TextInput';
import PictureUpload from 'components/CustomUpload/PictureUpload';

import Face from '@material-ui/icons/Face';
import RecordVoiceOver from '@material-ui/icons/RecordVoiceOver';
import Email from '@material-ui/icons/Email';
import PermIdentity from '@material-ui/icons/PermIdentity';

import { useStyles } from './styles';

const initialForm = {
  email: '',
  firstName: '',
  lastName: '',
  image: '',
};

type SubmitFunction = (arg: any) => void;

interface IUserProfile {
  handleSubmit: SubmitFunction;
  formValues: typeof initialForm;
}

const UserProfile = ({ handleSubmit, formValues }: IUserProfile) => {
  const classes = useStyles();
  const [inputValues, setInputValues] = useState(initialForm);

  useEffect(() => {
    setInputValues(formValues);
  }, [formValues]);

  const onChangeHanlder = ({ id, value }) => {
    setInputValues(prevState => ({
      ...prevState,
      [id]: value,
    }));
  };

  const onSubmit = e => {
    e.preventDefault();
    handleSubmit(inputValues);
  };

  return (
    <div>
      <GridContainer justify="center">
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
                <GridContainer justify="center">
                  <GridItem xs={12} sm={4}>
                    <PictureUpload id="image" onChange={onChangeHanlder} image={inputValues.image} />
                  </GridItem>
                  <GridItem xs={12} sm={6}>
                    <TextInput
                      id="firstName"
                      label="Nombre"
                      onChange={onChangeHanlder}
                      value={inputValues.firstName}
                      length={[0, 25]}
                      endAdornmentIcon={<Face className={classes.inputAdornmentIcon} />}
                    />
                    <TextInput
                      id="lastName"
                      label="Apellido"
                      onChange={onChangeHanlder}
                      value={inputValues.lastName}
                      length={[0, 25]}
                      endAdornmentIcon={<RecordVoiceOver className={classes.inputAdornmentIcon} />}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={12} lg={10}>
                    <EmailInput
                      id="email"
                      label="Email"
                      onChange={onChangeHanlder}
                      value={inputValues.email}
                      endAdornmentIcon={<Email className={classes.inputAdornmentIcon} />}
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
