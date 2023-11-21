import React, { useEffect, useState } from 'react'

function Contact() {

    const[state,setState]=useState({name:"",email:"",subject:"",message:""})

    const handler=(e)=>{
       setState({...state,[e.target.id]:e.target.value})
    }

    const submitData=(e)=>{
        const{name,email,subject,message}=state
     e.preventDefault()
     console.log(state)
     fetch('/contact', {
  method: 'POST',
  body: JSON.stringify({name,email,subject,message}),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
.then((response) => response.json())
.then((json) => {
  console.log(json)
  alert(json.message)
  setState({name:"",email:"",subject:"",message:""})

}).catch(()=>console.log("API CALL ERROR"))

    }


  return (
    <>
   {/* <!-- Full Screen Search Start --> */}
    <div className="modal fade" id="searchModal" tabIndex="-1">
        <div className="modal-dialog modal-fullscreen">
            <div className="modal-content" style={{background: "rgba(9, 30, 62, .7)"}}>
                <div className="modal-header border-0">
                    <button type="button" className="btn bg-white btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body d-flex align-items-center justify-content-center">
                    <div className="input-group" style={{maxwidth: "600px"}}>
                        <input type="text" className="form-control bg-transparent border-primary p-3" placeholder="Type search keyword"/>
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
                <h1 className="display-3 text-white animated zoomIn">Contact Us</h1>
                <a href="" className="h4 text-white">Home</a>
                <i className="far fa-circle text-white px-2"></i>
                <a href="" className="h4 text-white">Contact</a>
            </div>
        </div>
    </div>
    {/* <!-- Hero End --> */}


    {/* <!-- Contact Start --> */}
    <div className="container-fluid py-5">
        <div className="container">
            <div className="row g-5">
                <div className="col-xl-4 col-lg-6 wow slideInUp" data-wow-delay="0.1s">
                    <div className="bg-light rounded h-100 p-5">
                        <div className="section-title">
                            <h5 className="position-relative d-inline-block text-primary text-uppercase">Contact Us</h5>
                            <h1 className="display-6 mb-4">Feel Free To Contact Us</h1>
                        </div>
                        <div className="d-flex align-items-center mb-2">
                            <i className="bi bi-geo-alt fs-1 text-primary me-3"></i>
                            <div className="text-start">
                                <h5 className="mb-0">Our Office</h5>
                                <span>Gale no - 1, Shakarpur, Laxmi Nagar, New Delhi</span>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mb-2">
                            <i className="bi bi-envelope-open fs-1 text-primary me-3"></i>
                            <div className="text-start">
                                <h5 className="mb-0">Email Us</h5>
                                <span>info@dentcare.com</span>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <i className="bi bi-phone-vibrate fs-1 text-primary me-3"></i>
                            <div className="text-start">
                                <h5 className="mb-0">Call Us</h5>
                                <span>+ 8800127852</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6 wow slideInUp" data-wow-delay="0.3s">
                    <form>
                        <div className="row g-3">
                            <div className="col-12">
                                <input type="text" className="form-control border-0 bg-light px-4" placeholder="Your Name" id="name" value={state.name}  onChange={handler}  style={{height: "55px"}}/>
                            </div>
                            <div className="col-12">
                                <input type="email" className="form-control border-0 bg-light px-4" id="email" placeholder="Your Email" value={state.email}  onChange={handler} style={{height: "55px"}}/>
                            </div>
                            <div className="col-12">
                                <input type="text" className="form-control border-0 bg-light px-4" placeholder="Subject" id='subject' value={state.subject}  onChange={handler} style={{height: "55px"}}/>
                            </div>
                            <div className="col-12">
                                <textarea className="form-control border-0 bg-light px-4 py-3" rows="5" id='message' value={state.message}  onChange={handler} placeholder="Message"></textarea>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary w-100 py-3" type="submit" onClick={submitData}>Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-xl-4 col-lg-12 wow slideInUp" data-wow-delay="0.6s">
                    <iframe className="position-relative rounded w-100 h-100"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                        frameBorder="0" style={{minheight: "400px", border:"0"}} allowFullScreen="" aria-hidden="false"
                        tabIndex="0"></iframe>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Contact End --> */}


    {/* <!-- Newsletter Start --> */}
    <div className="container-fluid position-relative pt-5 wow fadeInUp" data-wow-delay="0.1s" style={{zindex: "1"}}>
        <div className="container">
            <div className="bg-primary p-5">
                <form className="mx-auto" style={{maxwidth: "600px"}}>
                    <div className="input-group">
                        <input type="text" className="form-control border-white p-3" placeholder="Your Email"/>
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

export default Contact