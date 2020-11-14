import React from 'react';
import PropTypes from 'prop-types';

import Face from '@material-ui/icons/Face';
import withStyles from '@material-ui/core/styles/withStyles';

import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import TextInput from 'components/Form/TextInput';
import SelectInput from 'components/Form/SelectInput';

const style = {
  infoText: {
    fontWeight: '300',
    margin: '10px 0 30px',
    textAlign: 'center',
  },
  inputAdornmentIcon: {
    color: '#555',
  },
  inputAdornment: {
    position: 'relative',
  },
};

class Step1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      associateNumber: {
        value: '',
        state: false,
      },
      documentType: {
        value: '',
        state: false,
      },
      documentNumber: {
        value: '',
        state: false,
      },
      procedureNumber: {
        value: '',
        state: false,
      },
      gender: {
        value: '',
        state: false,
      },
      cuil: {
        value: '',
        state: false,
      },
    };
  }
  sendState() {
    return this.state;
  }

  isValidated() {
    if (this.state.associateNumber.state) {
      return true;
    } else {
      if (!this.state.associateNumber.state) {
        this.setState(prevState => ({
          ...prevState,
          associateNumber: {
            ...prevState.associateNumber,
            state: false,
          },
        }));
      }
    }
    return false;
  }

  onChangeHanlder = ({ id, value, isValid }) => {
    this.setState(prevState => ({
      ...prevState,
      [id]: { value: value, state: isValid },
    }));
  };

  render() {
    const { classes } = this.props;
    return (
      <>
        <GridContainer>
          <GridItem xs={12} sm={2}>
            <TextInput
              id="associateNumber"
              label="N de socio"
              isRequired={true}
              onChange={this.onChangeHanlder}
              value={this.state.associateNumber.value}
              length={[2, 25]}
              endAdornmentIcon={<Face className={classes.inputAdornmentIcon} />}
            />
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={4}>
            <SelectInput
              id="documentType"
              label="Tipo de Documento"
              mainSelectLabel="Selecione su tipo de documento"
              value={this.state.documentType.value}
              handleSelect={this.onChangeHanlder}
              items={[
                { value: 'dni', label: 'DNI' },
                { value: 'passaporte', label: 'Passaporte' },
              ]}
            />
          </GridItem>
          <GridItem xs={12} sm={3}>
            <TextInput
              id="documentNumber"
              label="N de documento"
              isRequired={true}
              onChange={this.onChangeHanlder}
              value={this.state.documentNumber.value}
              length={[2, 25]}
              endAdornmentIcon={<Face className={classes.inputAdornmentIcon} />}
            />
          </GridItem>
          <GridItem xs={12} sm={3}>
            <TextInput
              id="procedureNumber"
              label="N de tramite"
              isRequired={true}
              onChange={this.onChangeHanlder}
              value={this.state.procedureNumber.value}
              length={[2, 25]}
              endAdornmentIcon={<Face className={classes.inputAdornmentIcon} />}
            />
          </GridItem>
          <GridItem xs={12} sm={2}>
            <SelectInput
              id="gender"
              label="Genero"
              mainSelectLabel="Selecione su genero"
              value={this.state.gender.value}
              handleSelect={this.onChangeHanlder}
              items={[
                { value: 'm', label: 'Masculino' },
                { value: 'F', label: 'Femenino' },
              ]}
            />
          </GridItem>
          <GridItem xs={12} sm={2}>
            <TextInput
              id="cuil"
              label="N de CUIL"
              isRequired={true}
              onChange={this.onChangeHanlder}
              value={this.state.cuil.value}
              length={[2, 25]}
              endAdornmentIcon={<Face className={classes.inputAdornmentIcon} />}
            />
          </GridItem>
        </GridContainer>
      </>
    );
  }
}

Step1.propTypes = {
  classes: PropTypes.object,
};

export default connect(withStyles(style)(Step1));
