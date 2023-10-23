import React, { useState } from 'react'
import { TextField , Button} from '@mui/material'
import { useNavigate } from 'react-router-dom';

import { fbSignup} from '../config/Firbase/FirebaseMethod'
import ASelect from '../Components/SELECT/ASelect';
import ADate from '../Components/DATE PICKER/ADate';





export default function Signup() {
    const[model , setModel] = useState<any>({ })
      
      
const navigate = useNavigate();      

let signup= ()=>{
    

  fbSignup(model, "users").then((res)=>{
navigate('../Login');
      }).catch(err=>{
        alert(err);
      })
  }
      
  return (
    <div>


<div className="app">

      <div className="main " >

   <div className="sub  text-center "  >
   <h1 className='text-white bg-black py-2 text-center'>REGISTRATION FORM</h1>
<div className="p-3">
  
  
<TextField className="m-3" onChange={(e)=>{setModel({ ...model , userName:e.target.value,})}} label="User Name" type='text'  variant='standard' ></TextField>

<TextField className="m-3" onChange={(e)=>{setModel({ ...model , contact:e.target.value,})}} label="Contact" type='number'  variant='standard' ></TextField>

<ASelect option={["A","B","AB","O"]} change={(e:any)=>{setModel({ ...model , bloodG:e.target.value,})}} label="YOUR BLOOD GROUP"  />
<TextField className="m-3 " onChange={(e)=>{setModel({...model , email:e.target.value} )}} label="EMAIL" type='email'  variant='standard' ></TextField>
<TextField className="m-3" onChange={(e)=>{setModel({ ...model , password:e.target.value,})}} label="PASSWORD" type='password'  variant='standard' ></TextField>

</div>
      <br />  <Button className='m-2' variant="contained" onClick={signup}>REGISTOR NOW</Button>

     
</div>
        </div>
        </div>
   </div>
  )
}
