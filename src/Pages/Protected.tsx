import React, { useEffect, useState } from 'react'
import { fbAuth } from '../config/Firbase/FirebaseMethod'
import { useNavigate } from 'react-router-dom'

import Spinner from 'react-bootstrap/Spinner';
import '../Router/ARouter';
import Loader from '../Components/Loader';

export default function Protected(props:any) {
    const {Screen} = props

    const [loader ,SetLoader ] =useState<any>(true)
    let navigate = useNavigate()
    let checkAuth = ()=>{
    SetLoader(true)
fbAuth().then((res) =>{
  
  navigate('/')
    SetLoader(false)
    
   
}).catch(err=>{
    SetLoader(false)
    navigate('./login')
    console.log(err)
})
}

useEffect(()=>{checkAuth()},[])
  return loader ?   (
    <div className='ma d-flex justify-content-center'>
    <Loader/>
    </div>
  ):(
    <>
    
   {<Screen/>}

    </>
  )
}