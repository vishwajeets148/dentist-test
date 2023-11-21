import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./components/Home"
import About from "./components/About"
import Header from './components/Header'
import Contact from "./components/Contact"
import Service from './components/Service'
import Appointment from './components/Appointment'
import Errorpage from './components/Errorpage'
import Register from './components/Register'
import Fetch from './components/Fetch'
import Update from './components/Update'
import AdminRegister from './components/admin/AdminRegister'
import AdminLogin from './components/admin/AdminLogin'
import PrivateRoute from './components/admin/PrivateRoute'
import ContactFetch from './components/ContactFetch'
import HomeAppointmentFetch from './components/HomeAppointmentFetch'
import Team from './components/Team'
import Testimonial from './components/Testimonial'


function App() {
  return (
    <>
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route element={<PrivateRoute/>}>
    <Route path="/fetch" element={<Fetch/>}> </Route>
    <Route path="/update/:id" element={<Update/>}> </Route>
    <Route path="/contactfetch" element={<ContactFetch/>}> </Route>
    <Route path="/appointmentfetch" element={<HomeAppointmentFetch/>}> </Route>

    </Route>
    <Route path="/"  element={<Home/>}> </Route>
    <Route path="/about" element={<About/>} >  </Route>
    <Route path="/contact" element={<Contact/>}>  </Route>
    <Route path="/service" element={<Service/>}>  </Route>
    <Route path="/appointment" element={<Appointment/>}> </Route>
    <Route path="*" element={<Errorpage/>}> </Route>
    <Route path="/register" element={<Register/>}> </Route>

    <Route path="/admin-register" element={<AdminRegister/>}> </Route>
    <Route path="/admin-login" element={<AdminLogin/>}> </Route>
    <Route path="/team" element={<Team/>}> </Route>
    <Route path="/testimonial" element={<Testimonial/>}> </Route>


    
   </Routes>
   
   </BrowserRouter>
    
    </>
  )
}

export default App
