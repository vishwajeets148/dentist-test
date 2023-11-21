import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Update() {
    const params=useParams()
    //console.log(params.id)

const[state,setState]=useState({name:"",email:"",mobile:"",address:"",subject:"",message:"",password:"",conpassword:""})

const handler=(e)=>{
    setState({...state,[e.target.id]:e.target.value})
}

useEffect(()=>{
    fetch(`/singleUser/${params.id}`)
  .then((response) => response.json())
  .then((d) =>{
    //console.log(d.fetchData)
    setState(d.fetchData)
  }).catch(()=>console.log("API Call Error"))
},[])


const submitData=(e)=>{
    const{name,email,mobile,address,subject,message,password,conpassword}=state
    e.preventDefault()
    //console.log(state)
    fetch(`http://localhost:8000/update/${params.id}`, {
  method: 'PUT',
  body: JSON.stringify({
    name,email,mobile,address,subject,message,password,conpassword
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
                .then((json) => {
                    console.log(json)
                    alert(json.message)
                    setState({ name: "", email: "", mobile: "", address: "", password: "", conpassword: "" })
                }).catch(()=>console.log("Api call error"))
        }

    return (
        <>
            {/* <!-- Contact Start --> */}
            <div className="container-md py-5">
                <div className="col-md-12 ">
                    <div className="wow fadeInUp" data-wow-delay="0.2s">
                        <p className="mb-4">You can Update detail by filling out the form below.</p>
                        <form>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="name" placeholder="Your Name" value={state.name} onChange={handler} />
                                        <label htmlFor="name">Your Name</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="email" className="form-control" disabled id="email" placeholder="Your Email" value={state.email} onChange={handler} />
                                        <label htmlFor="email">Your Email</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="address" placeholder="Your Address" value={state.address} onChange={handler} />
                                        <label htmlFor="email">Your Address</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="number" className="form-control" id="mobile" placeholder="Your Mobile No" value={state.mobile} onChange={handler} />
                                        <label htmlFor="email">Your Mobile No</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="subject" placeholder="Subject" value={state.subject} onChange={handler} />
                                        <label htmlFor="subject">Subject</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <textarea className="form-control" placeholder="Leave a message here" value={state.message} onChange={handler} id="message" style={{ height: "100px" }}> </textarea>
                                        <label htmlFor="message">Message</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="password" className="form-control" id="password" placeholder="password"  onChange={handler} />
                                        <label htmlFor="email">Your Password</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="password" className="form-control" id="conpassword" placeholder="confirm password"  onChange={handler} />
                                        <label htmlFor="email">Your Confirm Password</label>
                                    </div>
                                </div>
                                <div className="col-12 px- 4">
                                    <button className="btn btn-primary w-100 py-3" type="submit" onClick={submitData}>Update Detail</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* <!-- Contact End --> */}


        </>
    )
}

export default Update