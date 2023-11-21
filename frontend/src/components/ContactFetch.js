import React, { useEffect, useState } from 'react'


function ContactFetch() {

 const[data,setData]=useState([])

 useEffect(()=>{
  getData();
 },[])

 let getData=()=>{
  fetch('/contactfetch')
  .then((response) => response.json())
  .then((d) =>{
   // console.log(d.fetchData)
    setData(d.message)
  }).catch(()=>console.log("API Call Error"))


 }

 const deleted=async(id)=>{
  console.log(id)
 let de= await fetch(`/contactdelete/${id}`, {
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
      <th scope="col">Subject</th>
      <th scope="col">Message</th>
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
        <td>{v.subject.slice(0,20)}</td>
        <td>{v.message.slice(0,50)}</td>
       
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

export default ContactFetch