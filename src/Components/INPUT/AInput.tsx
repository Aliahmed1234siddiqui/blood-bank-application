import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

type InputType ={
    change:any;
    label:string,
  type: any,
}

export default function AInput(props:InputType) {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField  type={props.type} id="outlined-basic" onChange={(e)=>{
        props.change(e)
      }} label={props.label} variant="outlined" />
     
    </Box>
  );
}