import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


function Fetch() {

 const[data,setData]=useState([])

 useEffect(()=>{
  getData();
 },[])

 let getData=()=>{
  fetch('/fetch')
  .then((response) => response.json())
  .then((d) =>{
   // console.log(d.fetchData)
    setData(d.fetchData)
  }).catch(()=>console.log("API Call Error"))

 }

 const deleted=async(id)=>{
  console.log(id)
 let de= await fetch(`http://localhost:8000/delete/${id}`, {
  method: 'DELETE',
});

if(de){
  alert("Deleted")
  getData()

}
  
 }
  return (
    <>
    <div className='container py-3'>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">S.No</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Mobile</th>
      <th scope="col">Address</th>
     
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {
        data.length>0 ?
        data.map((v,i)=>
        <tr key={i}>
        <th>{i+1}</th>
        <td>{v.name}</td>
        <td>{v.email}</td>
        <td>{v.mobile}</td>
        <td>{v.address}</td>
       
        <td>
          <button className='btn btn-danger' onClick={()=>deleted(v._id)}>Delete</button>
          <Link to={`/update/${v._id}`}> <button className='btn btn-warning'>Update</button></Link>
        </td>
        </tr>
        )
        :
        <tr><th colSpan={6} className='text-center text-danger'>No Data</th></tr>
     }

  </tbody>
</table>
</div>
<div className='py-4'></div>
    
    
    </>
  )
}

export default Fetch