import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function Appointment() {

    const[state,setState]= useState({
        service: "", name:"", email:"",doctor:"", mobile:"",time:"",date:"", profile:""
    })

    const handler = (e)=>{
       setState  ({...state, [e.target.id]:e.target.value})
       
    }
   const fileHandler=(e)=>{
        //  console.log(e.target.files[0].name)
        setState({...state,profile:e.target.files[0]})
   }
  

  const submitData =(e)=>{
    const{service, name, email,doctor, mobile,time,date,profile}=state
    const formData =new FormData()
    formData.append("service",service)
    formData.append("name", name)
    formData.append("email", email)
    formData.append("doctor", doctor)
    formData.append("mobile", mobile )
    formData.append("time", time )
    formData.append("date", date)
    formData.append("profile", profile)
    e.preventDefault()
    console.log(state)
    fetch('/appointment', {
  method: 'POST',
  body: formData
})
  .then((response) => response.json())
  .then((json) => {
    console.log(json)
    alert(json.message)
    setState({service: "", name:"", email:"",doctor:"", mobile:"",date:"",time:"", profile:""})
    document.getElementById("profile").value = "";

}).catch(()=>console.log("API CALL ERROR"))
  }

    return (
        <>
            {/* <!-- Full Screen Search Start --> */}
            <div className="modal fade" id="searchModal" tabIndex="-1">
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content" style={{ background: "rgba(9, 30, 62, .7)" }}>
                        <div className="modal-header border-0">
                            <button type="button" className="btn bg-white btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body d-flex align-items-center justify-content-center">
                            <div className="input-group" style={{ maxwidth: "600px" }}>
                                <input type="text" className="form-control bg-transparent border-primary p-3" placeholder="Type search keyword" />
                                <button className="btn btn-primary px-4"><i className="bi bi-search"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Full Screen Search End --> */}


            {/* <!-- Hero Start --> */}
            <div className="container-fluid bg-primary py-5 hero-header mb-5">
                <div className="row py-3">
                    <div className="col-12 text-center">
                        <h1 className="display-3 text-white animated zoomIn">Appointment</h1>
                        <Link to="" className="h4 text-white">Home</Link>
                        <i className="far fa-circle text-white px-2"></i>
                        <Link to="" className="h4 text-white">Appointment</Link>
                    </div>
                </div>
            </div>
            {/* <!-- Hero End --> */}


            {/* <!-- Appointment Start --> */}
            <div className="container-fluid bg-primary bg-appointment mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ margintop: "90px" }}>
                <div className="container">
                    <div className="row gx-5">
                        <div className="col-lg-6 py-5">
                            <div className="py-5">
                                <h1 className="display-5 text-white mb-4">We Are A Certified and Award Winning Dental Clinic You Can Trust</h1>
                                <p className="text-white mb-0">We recommend and choose the best dental materials for your treatment, to make it a 100% success and hence we don’t hesitate in providing LifeTime Warranties over all our dental treatments.

We are proud to have the best team of trained cosmetic dentists, endodontists, orthodontists, dental implantologists, and oral and maxillofacial surgeons.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="appointment-form h-100 d-flex flex-column justify-content-center text-center p-5 wow zoomIn" data-wow-delay="0.6s">
                                <h1 className="text-white mb-4">Make Appointment</h1>
                                <form method="post" encType="multipart/form-data">
                                    <div className="row g-3">
                                        <div className="col-12 col-sm-6">
                                            <select className="form-select bg-light border-0" id="service" value= {state.service}  onChange={handler} style={{ height: "55px" }}>
                                                <option value="">Select A Service</option>
                                                <option value="Dental Implants">Dental Implants</option>
                                                <option value="Root Canal">Root Canal</option>
                                                <option value="Teeth Whitening">Teeth Whitening</option>
                                                <option value="Tooth Bleaching">Tooth Bleaching</option>
                                            </select>
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <select className="form-select bg-light border-0" id="doctor" value= {state.doctor}  onChange={handler} style={{ height: "55px" }}>
                                                <option value="">Select Doctor</option>
                                                <option value="Neeraj Kumar">Neeraj Kumar</option>
                                                <option value="Vishwajeet Singh">Vishwajeet Singh</option>
                                                <option value="Akhil Yadav">Akhil Yadav</option>
                                                <option value="Abhishek Singh">Abhishek Singh</option>
                                                <option value="Shiv Yadav">Shiv Yadav</option>
                                            </select>
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <input type="text" className="form-control bg-light border-0" id="name" value= {state.name}  onChange={handler} placeholder="Your Name" style={{ height: "55px" }} />
                                        </div>

                                        <div className="col-12 col-sm-6">
                                            <input type="email" className="form-control bg-light border-0" id="email" value= {state.email}  onChange={handler} placeholder="Your Email" style={{ height: "55px" }} />
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <input type="number" className="form-control bg-light border-0" id="mobile" value= {state.mobile}  onChange={handler} placeholder="Contact no" style={{ height: "55px" }} />
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <input type="date" className="form-control bg-light border-0" id="date" value= {state.date}  onChange={handler} placeholder="Appointment Date" style={{ height: "55px" }} />
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <input type="time" className="form-control bg-light border-0" id="time" value= {state.time}  onChange={handler} placeholder="Appointment Time" style={{ height: "55px" }} />
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <input type="file" className="form-control bg-light border-0" id="profile"   onChange={fileHandler} placeholder="Appointment Time" style={{ height: "55px" }} />
                                        </div>

                                

                                        <div className="col-12">
                                            <button className="btn btn-dark w-100 py-3" type="submit" onClick={submitData}>Make Appointment</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Appointment End --> */}


            {/* <!-- Newsletter Start --> */}
            <div className="container-fluid position-relative pt-5 wow fadeInUp" data-wow-delay="0.1s" style={{ zindex: "1" }}>
                <div className="container">
                    <div className="bg-primary p-5">
                        <form className="mx-auto" style={{ maxwidth: "600px" }}>
                            <div className="input-group">
                                <input type="text" className="form-control border-white p-3" placeholder="Your Email" />
                                <button className="btn btn-dark px-4">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* <!-- Newsletter End --> */}



        </>
    )
}

export default Appointment