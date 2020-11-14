import React, { useState, useEffectm ReactNode } from 'react';
import { makeStyles, Theme } from '@material-ui/core';
// @material-ui/icons
import Face from '@material-ui/icons/Face';
import RecordVoiceOver from '@material-ui/icons/RecordVoiceOver';
import Email from '@material-ui/icons/Email';

// core components
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import PictureUpload from 'components/CustomUpload/PictureUpload';
import EmailInput from 'components/Form/EmailInput';
import TextInput from 'components/Form/TextInput';

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
}));

type SubmitFunction = (arg: any) => void;

interface IStep1 {
  handleSubmit: SubmitFunction;
  formValues: typeof initialForm;
  compone: REeact
}

const initialForm = {
  email: '',
  firstName: '',
  lastName: '',
};

const Step1 = ({ handleSubmit, formValues }: IStep1) => {
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

  return (
    <GridContainer justify="center">
      <GridItem xs={12} sm={12}>
        <h4>Let{"'"}s start with the basic information (with validation)</h4>
      </GridItem>
      <GridItem xs={12} sm={4}>
        <PictureUpload id="image" onChange={onChangeHanlder} />
      </GridItem>
      <GridItem xs={12} sm={6}>
        <TextInput
          id="firstName"
          label="nombre"
          isRequired={true}
          onChange={onChangeHanlder}
          value={inputValues.firstName}
          length={[0, 25]}
          endAdornmentIcon={<Face className={classes.inputAdornmentIcon} />}
        />
        <TextInput
          id="lastName"
          label="apellido"
          isRequired={true}
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
          isRequired={true}
          onChange={onChangeHanlder}
          value={inputValues.email}
          endAdornmentIcon={<Email className={classes.inputAdornmentIcon} />}
        />
      </GridItem>
    </GridContainer>
  );
};

export default Step1;
