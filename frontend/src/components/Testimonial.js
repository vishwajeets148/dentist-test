import React from 'react'

function Testimonial() {
  return (
    <>
   {/* <!-- Full Screen Search Start --> */}
    <div class="modal fade" id="searchModal" tabindex="-1">
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content" style={{background: "rgba(9, 30, 62, .7)"}}>
                <div class="modal-header border-0">
                    <button type="button" class="btn bg-white btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body d-flex align-items-center justify-content-center">
                    <div class="input-group" style={{maxwidth: "600px"}}>
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
                <h1 class="display-3 text-white animated zoomIn">Testimonial</h1>
                <a href="" class="h4 text-white">Home</a>
                <i class="far fa-circle text-white px-2"></i>
                <a href="" class="h4 text-white">Testimonial</a>
            </div>
        </div>
    </div>
    {/* <!-- Hero End --> */}


    {/* <!-- Testimonial Start --> */}
    <div class="container-fluid bg-primary bg-testimonial py-5 mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{margintop: "90px"}}>
        <div class="container py-5">
            <div class="row justify-content-center">
                <div class="col-lg-7">
                    <div class="owl-carousel testimonial-carousel rounded p-5 wow zoomIn" data-wow-delay="0.6s">
                        <div class="testimonial-item text-center text-white">
                            <img class="img-fluid mx-auto rounded mb-4" src="img/testimonial-1.jpg" alt=""/>
                            <p class="fs-5">Dolores sed duo clita justo dolor et stet lorem kasd dolore lorem ipsum. At lorem lorem magna ut et, nonumy labore diam erat. Erat dolor rebum sit ipsum.</p>
                            <hr class="mx-auto w-25"/>
                            <h4 class="text-white mb-0">Client Name</h4>
                        </div>
                        <div class="testimonial-item text-center text-white">
                            <img class="img-fluid mx-auto rounded mb-4" src="img/testimonial-2.jpg" alt=""/>
                            <p class="fs-5">Dolores sed duo clita justo dolor et stet lorem kasd dolore lorem ipsum. At lorem lorem magna ut et, nonumy labore diam erat. Erat dolor rebum sit ipsum.</p>
                            <hr class="mx-auto w-25"/>
                            <h4 class="text-white mb-0">Client Name</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Testimonial End --> */}
    

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
    {/* <!-- Newsletter End --></div> */}
    
    </>
  )
}

export default Testimonial