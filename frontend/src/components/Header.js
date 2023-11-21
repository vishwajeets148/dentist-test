import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Header() {
 
    const authToken = sessionStorage.getItem("token")
    const emailId = sessionStorage.getItem("email")
    const navigate = useNavigate()

    const logout=()=>{
        sessionStorage.clear()
        navigate("/admin-login")
    }


  return (
    <>


    {/* <!-- Topbar Start --> */}
    <div className="container-fluid bg-light ps-5 pe-0 d-none d-lg-block">
        <div className="row gx-0">
            <div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
                <div className="d-inline-flex align-items-center">
                    <small className="py-2"><i className="far fa-clock text-primary me-2"></i>Opening Hours: Mon - Tues : 6.00 am - 10.00 pm, Sunday Closed </small>
                </div>
            </div>
            <div className="col-md-6 text-center text-lg-end">
                <div className="position-relative d-inline-flex align-items-center bg-primary text-white top-shape px-5">
                    <div className="me-3 pe-3 border-end py-2">
                        <p className="m-0"><i className="fa fa-envelope-open me-2"></i>info@dentcare.com</p>
                    </div>
                    <div className="py-2">
                        <p className="m-0"><i className="fa fa-phone-alt me-2"></i>+ 8800127852</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Topbar End --> */}

   {
    authToken ?
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
    <Link to="/" className="navbar-brand p-0">
        <h1 className="m-0 text-primary"><i className="fa fa-tooth me-2"></i>DentCare</h1>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0">
            
            <Link to="/fetch" className="nav-item nav-link">Register </Link>
            <Link to="/contactfetch" className="nav-item nav-link">Contact </Link>
            <Link to="/appointmentfetch" className="nav-item nav-link">Appointment </Link>
           
        </div>
        <button className='btn btn-danger rounded-3' onClick={logout}  >Logout | Welcome {emailId} </button>
     
    </div>
</nav>
   :
   <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
   <Link to="/" className="navbar-brand p-0">
       <h1 className="m-0 text-primary"><i className="fa fa-tooth me-2"></i>DentCare</h1>
   </Link>
   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
       <span className="navbar-toggler-icon"></span>
   </button>
   <div className="collapse navbar-collapse" id="navbarCollapse">
       <div className="navbar-nav ms-auto py-0">
           <Link to="/" className="nav-item nav-link active">Home</Link>
           <Link to="/about" className="nav-item nav-link">About</Link>
           <Link to="/service" className="nav-item nav-link">Service</Link>
           <Link to="/register" className="nav-item nav-link">Register</Link>
           <div className="nav-item dropdown">
               <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
               <div className="dropdown-menu m-0">
                
                   <Link to="/team" className="dropdown-item">Our Dentist</Link>
                   <Link to="/testimonial" className="dropdown-item">Testimonial</Link>
                   <Link to="/appointment" className="dropdown-item">Appointment</Link>
               </div>
           </div>
           <Link to="/contact" className="nav-item nav-link">Contact</Link>
       </div>
    
       <Link to="/appointment" className="btn btn-primary py-2 px-4 ms-3">Appointment</Link>
   </div>
</nav>
   }
        
    </>
  )
}

export default Header