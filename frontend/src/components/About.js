import React from 'react'

function About() {
  return (
    <>
     {/* <!-- Full Screen Search Start --> */}
    <div class="modal fade" id="searchModal" tabindex="-1">
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content" style={{background: "rgba(9, 30, 62, .7)"}} >
                <div class="modal-header border-0">
                    <button type="button" class="btn bg-white btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body d-flex align-items-center justify-content-center">
                    <div class="input-group" style={{maxwidth: "600px"}} >
                        <input type="text" class="form-control bg-transparent border-primary p-3" placeholder="Type search keyword"/>
                        <button class="btn btn-primary px-4"><i class="bi bi-search"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Full Screen Search End --> */}


    {/* <!-- Hero Start --> */}
    <div class="container-fluid bg-primary py-5 hero-header mb-5">
        <div class="row py-3">
            <div class="col-12 text-center">
                <h1 class="display-3 text-white animated zoomIn">About Us</h1>
                <a href="" class="h4 text-white">Home</a>
                <i class="far fa-circle text-white px-2"></i>
                <a href="" class="h4 text-white">About</a>
            </div>
        </div>
    </div>
    {/* <!-- Hero End --> */}


    {/* <!-- About Start --> */}
    <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container">
            <div class="row g-5">
                <div class="col-lg-7">
                    <div class="section-title mb-4">
                        <h5 class="position-relative d-inline-block text-primary text-uppercase">About Us</h5>
                        <h1 class="display-5 mb-0">Welcome to Best Dental Clinic in Laxmi Nagar</h1>
                    </div>
                    <h4 class="text-body fst-italic mb-4">DentCare is one of the best Dental Clinics in Delhi and is known for its team of well-qualified doctors and for personalized and state of the art dentistry.</h4>
                    <p class="mb-4">Dr Aakrati Raina  is a Certified Endodontist (Root Canal Specialist) and exclusively treats root canals under a microscope that assists her in visualizing even the tiniest of the tooth details. With this precision dentistry approach, she is able to preserve most of the tooth structure thus retaining the natural strength of the tooth and making the whole procedure more predictable and efficient with extremely high success rates. Her passion for quality dentistry is also evident in other dental procedures like Dental Fillings and Veneers which is more of an artwork for her and she strives to make the treated tooth appear as natural as possible after a veneer or a filling.</p>
                    <div class="row g-3">
                        <div class="col-sm-6 wow zoomIn" data-wow-delay="0.3s">
                            <h5 class="mb-3"><i class="fa fa-check-circle text-primary me-3"></i>Award Winning</h5>
                            <h5 class="mb-3"><i class="fa fa-check-circle text-primary me-3"></i>Professional Staff</h5>
                        </div>
                        <div class="col-sm-6 wow zoomIn" data-wow-delay="0.6s">
                            <h5 class="mb-3"><i class="fa fa-check-circle text-primary me-3"></i>24/7 Opened</h5>
                            <h5 class="mb-3"><i class="fa fa-check-circle text-primary me-3"></i>Fair Prices</h5>
                        </div>
                    </div>
                    <a href="appointment.html" class="btn btn-primary py-3 px-5 mt-4 wow zoomIn" data-wow-delay="0.6s">Make Appointment</a>
                </div>
                <div class="col-lg-5" style={{minheight: "500px"}}>
                    <div class="position-relative h-100">
                        <img class="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s" src="img/about.jpg" style={{objectfit: "cover"}} />
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- About End --> */}
    

    {/* <!-- Newsletter Start --> */}
    <div class="container-fluid position-relative pt-5 wow fadeInUp" data-wow-delay="0.1s" style={{zindex: "1"}}>
        <div class="container">
            <div class="bg-primary p-5">
                <form class="mx-auto" style={{maxwidth: "600px"}}>
                    <div class="input-group">
                        <input type="text" class="form-control border-white p-3" placeholder="Your Email"/>
                        <button class="btn btn-dark px-4">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    {/* <!-- Newsletter End --> */}
    

    </>
  )
}

export default About