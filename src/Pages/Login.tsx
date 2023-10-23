import React, { useState } from 'react'
import { TextField , Button} from '@mui/material'


import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';

import { fbLogin } from '../config/Firbase/FirebaseMethod';

type useModel = {
  email: string,
  password: string,
  

}




export default function Login() {
    const[model , setModel] = useState<useModel>({
        email:"",
        password:"",
        
      })
      const [get , setGet] =useState<any>()
      
      
 let navigate = useNavigate();  



      
    let login= (screen:any)=>{
            fbLogin(model).then((res:any)=>{
            setGet(res);
navigate(`../${screen}/${res.id}`)
      }).catch(err=>{
        console.log(err);
      })
     }

      
  return (
    <div>
      <div className="app" >
   
   
   <div className="main   mx-auto  "  >
   <h1 className='text-white bg-black py-2 text-center'>LOG IN</h1>
   <div className="sub text-center ">
<TextField className="m-3" onChange={(e)=>{setModel({...model , email:e.target.value} )}} label="EMAIL" type='email'  variant='standard' ></TextField>
<TextField className="m-3" onChange={(e)=>{setModel({ ...model , password:e.target.value,})}} label="PASSWORD" type='password'  variant='standard' ></TextField>

     <div className="row">
     
     <div className="col-md-6 mt-4"><Button variant="contained" onClick={()=>{login("Donor")}}>Login As Donor</Button></div>
     <div className="col-md-6 mt-4"><Button variant="contained" onClick={()=>{login("Acceptor")}}>Login As Acceptor</Button></div>


     </div>
<br />
<hr />
      <div className='m-3 '> this user is not found first signup ! <div className='btn btn-danger' onClick={()=>{
        navigate('../Signup');
      }}>Signup </div> 
      </div>
        </div>
        </div>

   </div>
    </div>
  
  )
}
