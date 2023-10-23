import { getValue } from '@testing-library/user-event/dist/utils';
import React from 'react'
import'./ASelect.module.css'

type typeSelet={
label:string ,
option:any[],
change :any, 
}

export default function ASelect(props:typeSelet) {
const{label , option , change} = props;



  return (
    <div>
     
      <select className='p-3' onChange={(e)=>{change(e)}}>
        <option>{label}</option>
        {
           Array.isArray(option)&& option.map((x ,i)=>{
               
                return(
<>
<option key={i} value={x}>{x}</option>
<hr />

</>
                )
})
        }

      </select>
    </div>
  )
}


