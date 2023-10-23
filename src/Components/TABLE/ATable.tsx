import { type } from 'os'
import React from 'react'
type tableType ={
    cols : any[];
    data : any[];
     
}
export default function ATable(props:tableType) {
  return (
    <div>
      
      <table className='table table-striped ' >

        <thead>
<tr>   
  {props.cols.map((x,i)=>{
    return(
<th key={i}>{x.heading}</th>
    )
  })}
</tr>
        </thead>
        <tbody>

{props.data.map((x,i)=>{
  return(
<tr onClick={()=>{console.log(x)}}>{props.cols.map((y,j)=>{
  return(
<td key={j}>{x[y.key]}</td>
  )
})}</tr>
  )
})}
   

        </tbody>
      </table>
    </div>
  )
}
