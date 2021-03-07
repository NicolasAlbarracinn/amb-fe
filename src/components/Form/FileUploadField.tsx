import React, { useRef, useState } from 'react';
import { FieldProps, getIn } from 'formik';
import { makeStyles, Theme, FormHelperText, FormControl } from '@material-ui/core';
import Attachment from '@material-ui/icons/Attachment';

import RegularButton from '../CustomButtons/Button';
import { defaultFont, grayColor } from 'utils/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  uploadContainer: {
    ...defaultFont,
    color: grayColor[3] + ' !important',
    fontWeight: 400,
    lineHeight: '1.42857',
    margin: '0',
    paddingTop: '7px',
    paddingBottom: '7px',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  fileDescription: {
    display: 'flex',
    flexDirection: 'column',
  },
  description: {
    color: grayColor[1],
    fontSize: 18,
  },
  fileName: {
    fontSize: 14,
  },
  icons: {
    width: '17px',
    height: '17px',
  },
}));

const FileUploadField: React.FC<FieldProps & { label: string }> = ({ field, form, label, ...props }) => {
  const errorText = getIn(form.touched, field.name) && getIn(form.errors, field.name);
  const classes = useStyles();
  const [file, setFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleUploload = ({ target: { files }, preventDefault }: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();

    const newFile = files![0];
    reader.onloadend = () => {
      setFile(newFile);
      form.setFieldValue(field.name, reader.result);
    };
    if (newFile) {
      reader.readAsDataURL(newFile);
    }
  };

  const handleClick = () => {
    const currentInput = inputRef.current;
    if (currentInput) {
      currentInput.click();
    }
  };

  return (
    <FormControl margin="normal" fullWidth error={!!errorText}>
      <div className={classes.uploadContainer}>
        <div className={classes.fileDescription}>
          <h1 className={classes.description}>{label}</h1>
          {file && <span className={classes.fileName}>{file.name}</span>}
        </div>

        <div>
          <RegularButton size="sm" color="primary" onClick={handleClick}>
            <Attachment className={classes.icons} /> adjuntar
          </RegularButton>
          <input ref={inputRef} type="file" onChange={handleUploload} style={{ display: 'none' }} />
        </div>
      </div>
      <FormHelperText>{errorText}</FormHelperText>
    </FormControl>
  );
};

export default FileUploadField;
