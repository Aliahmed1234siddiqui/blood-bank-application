import React from 'react'
import Switch from '@mui/material/Switch';
import { type } from '@testing-library/user-event/dist/type';

type swictType={
    label:string,
change:any ,
}

export default function ASwitch(props:swictType) {
  return (
    <div>
      <Switch onChange={(e)=>{props.change(e)}} aria-label={props.label} />
    </div>
  )
}
