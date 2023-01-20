import React from 'react';
import Alert from '@mui/material/Alert';

const AlertComponent = ({ status }) => {
  return status ? (
    <Alert sx={{ width: 320, height: 60, margin: 'auto' }} severity="success">
      Mesajul tau a fost trimis cu success!
    </Alert>
  ) : (
    <Alert sx={{ width: 320, height: 60, margin: 'auto' }} severity="error">
      Ceva nu a functionat!
    </Alert>
  );
};

export default AlertComponent;
