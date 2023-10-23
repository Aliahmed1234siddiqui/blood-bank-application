import React from 'react'
import IconButton from '@mui/material/IconButton';
import { type } from 'os';

type iconType ={
    label:string,
    click:any,
}
export default function AIcon(props:iconType) {
  return (
    <div>
      <IconButton className='MuiIconButton-colorPrimary' onClick={props.click}>{props.label}</IconButton>
    </div>
  )
}
