import React from 'react'
import '../App.css';
import AButton from '../Components/BUTTON/AButton';
import { useNavigate, useParams } from 'react-router-dom';
export default function Main() {
    const navigate = useNavigate();
    let params = useParams();
console.log(params);
  return (
    <div>
      <div className="maS " >

        <div className='works'>
            <div className="click">
        <h3 className='text-white'>    WELCOME! TO A BLOOD BANK CENTER <br /> WHO ARE YOU </h3>
        <div className="row">
        <div className="col-md-3 col-sm-12">
</div>
            <div className="col-md-3 col-sm-12">
            <AButton label='Donor' clicked={()=>{
                navigate('../Donor');
            }}/>
            </div>
            <div className="col-md-3 col-sm-12">
            <AButton label='Acceptor' clicked={()=>{
                navigate('../Accepter');
            }}/>

            </div>
            <div className="col-md-3 col-sm-12">
</div>
                        </div>
            </div>
        </div>
      </div>
    </div>
  )
}
