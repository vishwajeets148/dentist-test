import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
    const a= {name:"",email:"",doctor:"",service:"", date:"",time:""}

  const [state,setState]= useState(a)
  
  const handler= (e)=>{
    setState({...state,[e.target.name]:e.target.value})
  }

  const submitData=(e)=>{
        e.preventDefault()
        const {name,email,doctor,service,date,time}= state
        fetch('/homeappointment', {
            method: 'POST',
            body: JSON.stringify({name,email,doctor,service,date,time }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                setState(json.message)
                alert("Your appointment has been scheduled")
            
            });

        console.log(state)
  }


  return (
    <>
     {/* <!-- Full Screen Search Start --> */}
    <div className="modal fade" id="searchModal" tabindex="-1">
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


    {/* <!-- Carousel Start --> */}
    <div className="container-fluid p-0">
        <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="w-100" src="img/carousel-1.jpg" alt="Image"/>
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" style={{maxwidth: "900px"}}>
                            <h5 className="text-white text-uppercase mb-3 animated slideInDown">Keep Your Teeth Healthy</h5>
                            <h1 className="display-1 text-white mb-md-4 animated zoomIn">Take The Best Quality Dental Treatment</h1>
                            <Link to="/appointment" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Appointment</Link>
                            <Link to="/contact" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Contact Us</Link>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="w-100" src="img/carousel-2.jpg" alt="Image"/>
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" style={{maxwidth: "900px"}}>
                            <h5 className="text-white text-uppercase mb-3 animated slideInDown">Keep Your Teeth Healthy</h5>
                            <h1 className="display-1 text-white mb-md-4 animated zoomIn">Take The Best Quality Dental Treatment in Laxmi Nagar, New Delhi</h1>
                            <Link to="/appointment" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Appointment</Link>
                            <Link to="" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
    {/* <!-- Carousel End --> */}


    {/* <!-- Banner Start --> */}
    <div className="container-fluid banner mb-5">
        <div className="container">
            <div className="row gx-0">
                <div className="col-lg-4 wow zoomIn" data-wow-delay="0.1s">
                    <div className="bg-primary d-flex flex-column p-5" style={{height: "300px"}}>
                        <h3 className="text-white mb-3">Opening Hours</h3>
                        <div className="d-flex justify-content-between text-white mb-3">
                            <h6 className="text-white mb-0">Mon - Fri</h6>
                            <p className="mb-0"> 8:00am - 9:00pm</p>
                        </div>
                        <div className="d-flex justify-content-between text-white mb-3">
                            <h6 className="text-white mb-0">Saturday</h6>
                            <p className="mb-0"> 8:00am - 7:00pm</p>
                        </div>
                        <div className="d-flex justify-content-between text-white mb-3">
                            <h6 className="text-white mb-0">Sunday</h6>
                            <p className="mb-0"> 8:00am - 5:00pm</p>
                        </div>
                        <Link className="btn btn-light" to="/appointment">Appointment</Link>
                    </div>
                </div>
                <div className="col-lg-4 wow zoomIn" data-wow-delay="0.3s">
                    <div className="bg-dark d-flex flex-column p-5" style={{height: "300px"}}>
                        <h3 className="text-white mb-3">Search A Doctor</h3>
                        <div className="date mb-3" id="date" data-target-input="nearest">
                            <input type="text" className="form-control bg-light border-0 datetimepicker-input"
                                placeholder="Appointment Date" data-target="#date" data-toggle="datetimepicker" style={{height: "40px"}} />
                        </div>
                        <select className="form-select bg-light border-0 mb-3" style={{height: "40px"}}>
                            <option selected>Select A Service</option>
                            <option value="1">Service 1</option>
                            <option value="2">Service 2</option>
                            <option value="3">Service 3</option>
                        </select>
                        <Link className="btn btn-light" to="">Search Doctor</Link>
                    </div>
                </div>
                <div className="col-lg-4 wow zoomIn" data-wow-delay="0.6s">
                    <div className="bg-secondary d-flex flex-column p-5" style={{height: "300px"}}>
                        <h3 className="text-white mb-3">Make Appointment</h3>
                        <p className="text-white">Book Fast & Professional Treatments (Please give us a call to schedule an appointment.)</p>
                        <h2 className="text-white mb-0">+8800127852</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Banner Start --> */}


    {/* <!-- About Start --> */}
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-7">
                    <div className="section-title mb-4">
                        <h5 className="position-relative d-inline-block text-primary text-uppercase">About Us</h5>
                        <h1 className="display-5 mb-0">The Best Dental Clinic That You Can Trust</h1>
                    </div>
                    <h4 className="text-body fst-italic mb-4">We’re Always Accepting New Patients!</h4>
                    <p className="mb-4">The right expertise and technology enable us to undertake advanced smile makeovers, full mouth dental implants, laser dentistry and more. Our in-house 3D CT scan machine ensures flawless accuracy in diagnosis and treatment.</p>
                    <div className="row g-3">
                        <div className="col-sm-6 wow zoomIn" data-wow-delay="0.3s">
                            <h5 className="mb-3"><i className="fa fa-check-circle text-primary me-3"></i>Award Winning</h5>
                            <h5 className="mb-3"><i className="fa fa-check-circle text-primary me-3"></i>Professional Staff</h5>
                        </div>
                        <div className="col-sm-6 wow zoomIn" data-wow-delay="0.6s">
                            <h5 className="mb-3"><i className="fa fa-check-circle text-primary me-3"></i>24/7 Opened</h5>
                            <h5 className="mb-3"><i className="fa fa-check-circle text-primary me-3"></i>Fair Prices</h5>
                        </div>
                    </div>
                    <Link to="/appointment" className="btn btn-primary py-3 px-5 mt-4 wow zoomIn" data-wow-delay="0.6s">Make Appointment</Link>
                </div>
                <div className="col-lg-5" style={{minheight: "500px"}}>
                    <div className="position-relative h-100">
                        <img className="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s" src="img/about.jpg" style={{objectfit: "cover"}}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- About End --> */}


    {/* <!-- Appointment Start --> */}
    <div className="container-fluid bg-primary bg-appointment my-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
            <div className="row gx-5">
                <div className="col-lg-6 py-5">
                    <div className="py-5">
                        <h1 className="display-5 text-white mb-4">We Are A Certified and Award Winning Dental Clinic You Can Trust</h1>
                        <p className="text-white mb-0">We recommend and choose the best dental materials for your treatment, to make it a 100% success and hence we don’t hesitate in providing LifeTime Warranties over all our dental treatments.</p>
                        <p className="text-white mt-2">We are proud to have the best team of trained cosmetic dentists, endodontists, orthodontists, dental implantologists, and oral and maxillofacial surgeons.</p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="appointment-form h-100 d-flex flex-column justify-content-center text-center p-5 wow zoomIn" data-wow-delay="0.6s">
                        <h1 className="text-white mb-4">Make Appointment</h1>
                        <form>
                            <div className="row g-3">
                                <div className="col-12 col-sm-6">
                                    <select className="form-select bg-light border-0" name="service" value={state.service} onChange={handler} style={{height: "55px"}}>
                                        <option selected>Select A Service</option>
                                        <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
                                        <option value="Dental Implants">Dental Implants</option>
                                        <option value="Dental Bridges">Dental Bridges</option>
                                        <option value="Teeth Whitening">Teeth Whitening</option>
                                    </select>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <select className="form-select bg-light border-0" name="doctor" value={state.doctor} onChange={handler} style={{height: "55px"}}>
                                        <option selected>Select Doctor</option>
                                        <option value="Gaurav Singh">Gaurav Singh</option>
                                        <option value="Renu Yadav">Renu Yadav</option>
                                        <option value="Aatish Patel">Aatish Patel</option>
                                        <option value="Shakti Singh">Shakti Singh</option>
                                    </select>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <input type="text" className="form-control bg-light border-0" name="name" value={state.name} onChange={handler} placeholder="Your Name" style={{height: "55px"}}/>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <input type="email" className="form-control bg-light border-0" name="email" value={state.email} onChange={handler} placeholder="Your Email" style={{height: "55px"}}/>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <div className="date" id="date1" data-target-input="nearest">
                                        <input type="date"
                                            className="form-control bg-light border-0 "
                                            placeholder="Appointment Date" name="date" value={state.date} onChange={handler}  style={{height: "55px"}}/>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <div className="time" id="time1" data-target-input="nearest">
                                        <input type="time"
                                            className="form-control bg-light border-0 "
                                            placeholder="Appointment Time" name="time" value={state.time} onChange={handler}  style={{height: "55px"}}/>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-dark w-100 py-3" onClick={submitData} type="submit">Make Appointment</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Appointment End --> */}


    {/* <!-- Service Start --> */}
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
            <div className="row g-5 mb-5">
                <div className="col-lg-5 wow zoomIn" data-wow-delay="0.3s" style={{minheight: "400px"}}>
                    <div className="twentytwenty-container position-relative h-100 rounded overflow-hidden">
                        <img className="position-absolute w-100 h-100" src="img/before.jpg" style={{objectfit: "cover"}}/>
                        <img className="position-absolute w-100 h-100" src="img/after.jpg" style={{objectfit: "cover"}}/>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="section-title mb-5">
                        <h5 className="position-relative d-inline-block text-primary text-uppercase">Our Services</h5>
                        <h1 className="display-5 mb-0">We Offer The Best Quality Dental Services</h1>
                    </div>
                    <div className="row g-5">
                        <div className="col-md-6 service-item wow zoomIn" data-wow-delay="0.6s">
                            <div className="rounded-top overflow-hidden">
                                <img className="img-fluid" src="img/service-1.jpg" alt=""/>
                            </div>
                            <div className="position-relative bg-light rounded-bottom text-center p-4">
                                <h5 className="m-0">Cosmetic Dentistry</h5>
                            </div>
                        </div>
                        <div className="col-md-6 service-item wow zoomIn" data-wow-delay="0.9s">
                            <div className="rounded-top overflow-hidden">
                                <img className="img-fluid" src="img/service-2.jpg" alt=""/>
                            </div>
                            <div className="position-relative bg-light rounded-bottom text-center p-4">
                                <h5 className="m-0">Dental Implants</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row g-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="col-lg-7">
                    <div className="row g-5">
                        <div className="col-md-6 service-item wow zoomIn" data-wow-delay="0.3s">
                            <div className="rounded-top overflow-hidden">
                                <img className="img-fluid" src="img/service-3.jpg" alt=""/>
                            </div>
                            <div className="position-relative bg-light rounded-bottom text-center p-4">
                                <h5 className="m-0">Dental Bridges</h5>
                            </div>
                        </div>
                        <div className="col-md-6 service-item wow zoomIn" data-wow-delay="0.6s">
                            <div className="rounded-top overflow-hidden">
                                <img className="img-fluid" src="img/service-4.jpg" alt=""/>
                            </div>
                            <div className="position-relative bg-light rounded-bottom text-center p-4">
                                <h5 className="m-0">Teeth Whitening</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 service-item wow zoomIn" data-wow-delay="0.9s">
                    <div className="position-relative bg-primary rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-4">
                        <h3 className="text-white mb-3">Make Appointment</h3>
                        <p className="text-white mb-3">Book Fast & Professional Treatments (Please give us a call to schedule an appointment.)</p>
                        <h2 className="text-white mb-0">+8800127852</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Service End --> */}


    {/* <!-- Offer Start --> */}
    <div className="container-fluid bg-offer my-5 py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-lg-7 wow zoomIn" data-wow-delay="0.6s">
                    <div className="offer-text text-center rounded p-5">
                        <h1 className="display-5 text-white">Save 30% On Your First Dental Checkup</h1>
                        <p className="text-white mb-4">Applicable on the first visit.</p>
                        <Link to="/appointment" className="btn btn-dark py-3 px-5 me-3">Appointment</Link>
                        <Link to="" className="btn btn-light py-3 px-5">Read More</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Offer End --> */}


    {/* <!-- Testimonial Start --> */}
    <div className="container-fluid bg-primary bg-testimonial py-5 my-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-lg-7">
                    <div className="owl-carousel testimonial-carousel rounded p-5 wow zoomIn" data-wow-delay="0.6s">
                        <div className="testimonial-item text-center text-white">
                            <img className="img-fluid mx-auto rounded mb-4" src="img/testimonial-1.jpg" alt=""/>
                            <p className="fs-5">Dolores sed duo clita justo dolor et stet lorem kasd dolore lorem ipsum. At lorem lorem magna ut et, nonumy labore diam erat. Erat dolor rebum sit ipsum.</p>
                            <hr className="mx-auto w-25"/>
                            <h4 className="text-white mb-0">Client Name</h4>
                        </div>
                        <div className="testimonial-item text-center text-white">
                            <img className="img-fluid mx-auto rounded mb-4" src="img/testimonial-2.jpg" alt=""/>
                            <p className="fs-5">Dolores sed duo clita justo dolor et stet lorem kasd dolore lorem ipsum. At lorem lorem magna ut et, nonumy labore diam erat. Erat dolor rebum sit ipsum.</p>
                            <hr className="mx-auto w-25"/>
                            <h4 className="text-white mb-0">Client Name</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Testimonial End --> */}


    {/* <!-- Team Start --> */}
    <div className="container-fluid py-5">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-4 wow slideInUp" data-wow-delay="0.1s">
                    <div className="section-title bg-light rounded h-100 p-5">
                        <h5 className="position-relative d-inline-block text-primary text-uppercase">Our Dentist</h5>
                        <h1 className="display-6 mb-4">Meet Our Certified & Experienced Dentist</h1>
                        <Link to="appointment" className="btn btn-primary py-3 px-5">Appointment</Link>
                    </div>
                </div>
                <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
                    <div className="team-item">
                        <div className="position-relative rounded-top" style={{zindex: "1"}}>
                            <img className="img-fluid rounded-top w-100" src="img/team-1.jpg" alt=""/>
                            <div className="position-absolute top-100 start-50 translate-middle bg-light rounded p-2 d-flex">
                                <Link className="btn btn-primary btn-square m-1" to="#"><i className="fab fa-twitter fw-normal"></i></Link>
                                <Link className="btn btn-primary btn-square m-1" to="#"><i className="fab fa-facebook-f fw-normal"></i></Link>
                                <Link className="btn btn-primary btn-square m-1" to="#"><i className="fab fa-linkedin-in fw-normal"></i></Link>
                                <Link className="btn btn-primary btn-square m-1" to="#"><i className="fab fa-instagram fw-normal"></i></Link>
                            </div>
                        </div>
                        <div className="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
                            <h4 className="mb-2">Dr. John Doe</h4>
                            <p className="text-primary mb-0">Implant Surgeon</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
                    <div className="team-item">
                        <div className="position-relative rounded-top" style={{zindex: "1"}}>
                            <img className="img-fluid rounded-top w-100" src="img/team-2.jpg" alt=""/>
                            <div className="position-absolute top-100 start-50 translate-middle bg-light rounded p-2 d-flex">
                                <Link className="btn btn-primary btn-square m-1" to="#"><i className="fab fa-twitter fw-normal"></i></Link>
                                <Link className="btn btn-primary btn-square m-1" to="#"><i className="fab fa-facebook-f fw-normal"></i></Link>
                                <Link className="btn btn-primary btn-square m-1" to="#"><i className="fab fa-linkedin-in fw-normal"></i></Link>
                                <Link className="btn btn-primary btn-square m-1" to="#"><i className="fab fa-instagram fw-normal"></i></Link>
                            </div>
                        </div>
                        <div className="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
                            <h4 className="mb-2">Dr. John Doe</h4>
                            <p className="text-primary mb-0">Implant Surgeon</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 wow slideInUp" data-wow-delay="0.1s">
                    <div className="team-item">
                        <div className="position-relative rounded-top" style={{zindex: "1"}}>
                            <img className="img-fluid rounded-top w-100" src="img/team-3.jpg" alt=""/>
                            <div className="position-absolute top-100 start-50 translate-middle bg-light rounded p-2 d-flex">
                                <Link className="btn btn-primary btn-square m-1" to="#"><i className="fab fa-twitter fw-normal"></i></Link>
                                <Link className="btn btn-primary btn-square m-1" to="#"><i className="fab fa-facebook-f fw-normal"></i></Link>
                                <Link className="btn btn-primary btn-square m-1" to="#"><i className="fab fa-linkedin-in fw-normal"></i></Link>
                                <Link className="btn btn-primary btn-square m-1" to="#"><i className="fab fa-instagram fw-normal"></i></Link>
                            </div>
                        </div>
                        <div className="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
                            <h4 className="mb-2">Dr. John Doe</h4>
                            <p className="text-primary mb-0">Implant Surgeon</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
                    <div className="team-item">
                        <div className="position-relative rounded-top" style={{zindex: "1"}}>
                            <img className="img-fluid rounded-top w-100" src="img/team-4.jpg" alt=""/>
                            <div className="position-absolute top-100 start-50 translate-middle bg-light rounded p-2 d-flex">
                                <Link className="btn btn-primary btn-square m-1" to="#"><i className="fab fa-twitter fw-normal"></i></Link>
                                <Link className="btn btn-primary btn-square m-1" to="#"><i className="fab fa-facebook-f fw-normal"></i></Link>
                                <Link className="btn btn-primary btn-square m-1" to="#"><i className="fab fa-linkedin-in fw-normal"></i></Link>
                                <Link className="btn btn-primary btn-square m-1" to="#"><i className="fab fa-instagram fw-normal"></i></Link>
                            </div>
                        </div>
                        <div className="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
                            <h4 className="mb-2">Dr. John Doe</h4>
                            <p className="text-primary mb-0">Implant Surgeon</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
                    <div className="team-item">
                        <div className="position-relative rounded-top" style={{zindex: "1"}}>
                            <img className="img-fluid rounded-top w-100" src="img/team-5.jpg" alt=""/>
                            <div className="position-absolute top-100 start-50 translate-middle bg-light rounded p-2 d-flex">
                                <Link className="btn btn-primary btn-square m-1" to="#"><i className="fab fa-twitter fw-normal"></i></Link>
                                <Link className="btn btn-primary btn-square m-1" to="#"><i className="fab fa-facebook-f fw-normal"></i></Link>
                                <Link className="btn btn-primary btn-square m-1" to="#"><i className="fab fa-linkedin-in fw-normal"></i></Link>
                                <Link className="btn btn-primary btn-square m-1" to="#"><i className="fab fa-instagram fw-normal"></i></Link>
                            </div>
                        </div>
                        <div className="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
                            <h4 className="mb-2">Dr. John Doe</h4>
                            <p className="text-primary mb-0">Implant Surgeon</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Team End --> */}


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
    {/* <!-- Newsletter End --></div> */}

    
    
    </>
  )
}

export default Home