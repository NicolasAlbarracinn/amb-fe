import React, { useState } from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';

import { useStyles } from 'components/CustomButtons/styles';

export const Alerts = () => {
  const classes = useStyles();
  const [alert, setAlert] = useState<any>(null);

  const hideAlert = () => {
    setAlert(null);
  };
  const successAlert = () => {
    setAlert(
      <SweetAlert
        error
        style={{ display: 'block', marginTop: '-100px' }}
        title="Good job!"
        onConfirm={() => hideAlert()}
        onCancel={() => hideAlert()}
        confirmBtnCssClass={classes.button + ' ' + classes.success}
      >
        You clicked the button!
      </SweetAlert>,
    );
  };

  return { alert };
};
