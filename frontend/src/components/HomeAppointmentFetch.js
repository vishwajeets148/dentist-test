import React, { useEffect, useState } from 'react'


function HomeAppointmentFetch() {

 const[data,setData]=useState([])

 useEffect(()=>{
  getData();
 },[])

 let getData=()=>{
  fetch('/homeappointmentfetch')
  .then((response) => response.json())
  .then((d) =>{
   // console.log(d.message)
    setData(d.message)
  }).catch(()=>console.log("API Call Error"))


 }

 const deleted=async(id)=>{
  console.log(id)
 let de= await fetch(`/homeappointmentdelete/${id}`, {
  method: 'DELETE',
});

if(de){
  alert("Deleted")
  getData()

}
else{
    alert ("Not deleted")
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
      <th scope="col">Service</th>
      <th scope="col">Doctor</th>
      <th scope="col">Date</th>
      <th scope="col">Time</th>
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
        <td>{v.service}</td>
        <td>{v.doctor}</td>
        <td>{v.date}</td>
        <td>{v.time}</td>

       
        <td>
          <button className='btn btn-danger' onClick={()=>deleted(v._id)}>Delete</button>
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

export default HomeAppointmentFetch