import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

export default function ShareStory () {

  let navigate = useNavigate();

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div id="shareForm">
        <h4 id="formBorderTop">Please share your story below</h4>
        <TextField
          required
          id="form-name"
          label="Name"
        />
        <TextField
          id="form-age"
          label="Age"
          type="age"
        />
        <TextField
          id="form-email"
          label="Email"
          type="email"
        />
        <TextField
          required
          multiline
          id="form-body"
          label="Body"
          rows="10"
        />
        <Button id="shareButton" variant="contained" onClick={() => navigate('/stories')}>Share</Button>
        <div id="formBorderBottom"></div>
      </div>
    </Box>
  )
}

/*
export default function FormPropsTextFields() {
  return (
    
  );
}
*/