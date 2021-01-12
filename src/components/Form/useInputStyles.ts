import classNames from 'classnames';
import { FormControlProps } from '@material-ui/core/FormControl';
import { useStyles } from '../CustomInput/styles';

export const useInputStyles = (
  hasError: boolean,
  white?: boolean,
  inputRootCustomClasses?: string,
  formControlProps?: FormControlProps,
) => {
  const classes = useStyles();

  const labelClasses = classNames({
    [' ' + classes.labelRootError]: hasError,
    [' ' + classes.labelRootSuccess]: !hasError,
  });

  const underlineClasses = classNames({
    [classes.underlineError]: hasError,
    [classes.underlineSuccess]: !hasError,
    [classes.underline]: true,
    [classes.whiteUnderline]: white,
  });
  const marginTop = classNames({
    [inputRootCustomClasses!]: inputRootCustomClasses !== undefined,
  });

  const inputClasses = classNames({
    [classes.input]: true,
    [classes.whiteInput]: white,
  });

  const formControlClasses = !!formControlProps
    ? classNames(formControlProps.className, classes.formControl)
    : classes.formControl;

  const helpTextClasses = classNames({
    [classes.labelRootError]: hasError,
    [classes.labelRootSuccess]: !hasError,
  });

  return { labelClasses, underlineClasses, marginTop, formControlClasses, helpTextClasses, inputClasses, classes };
};
