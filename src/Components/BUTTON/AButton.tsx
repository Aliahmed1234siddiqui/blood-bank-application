import React from 'react'
import { Button } from '@mui/material'
import { ArrowFunction } from 'typescript';
import { click } from '@testing-library/user-event/dist/click';

type btnType ={
  label: string;
  clicked : any;
  
  }
export default function AButton(props:btnType) {
  const {label , clicked} = props
  return (

    <div>
      <Button onClick={clicked} variant="contained">{label}</Button>
    </div>
  )
}
