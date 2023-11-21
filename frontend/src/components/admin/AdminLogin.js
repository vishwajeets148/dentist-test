import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AdminLogin() {

    const a={email:"",password:""}
    const [state,setState] = useState(a)
    const navigate =useNavigate()

    const handler=(e)=>{
        setState({...state,[e.target.name]:e.target.value})
    }
 
    const submitData = async (e) => {
        e.preventDefault()
        const { email, password } = state
       if(email && password){
  let result = await  fetch('/adminlogin', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })

          result = await result.json()
          console.log(result)
          
          if(result.token){
                sessionStorage.setItem("email", result.userEmail.email)
                sessionStorage.setItem("token", result.token)
                navigate("/fetch")
          }
          else{
              alert("Your email and password is incorrect")
          }
        }
        else{
            alert("All field is Required")
        }
          

    

   }

  return (
    <>
   {/* <!-- Contact Start --> */}
   <div className="container-md py-5">
                <div className="col-md-12 ">
                    <div className="wow fadeInUp" data-wow-delay="0.2s">
                        <p className="mb-4">You can contact us by filling out the form below, and we will get back to you as soon as possible. Alternatively, you can also email us at vishwajeets142@gmail.com or connect with us on social media.</p>
                        <form>
                            <div className="row g-3">
                             
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="email" className="form-control" name="email" placeholder="Your Email" value={state.email} onChange={handler} />
                                        <label htmlFor="email">Your Email</label>
                                    </div>
                                </div>


                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="password" className="form-control" name="password" placeholder="password" value={state.password} onChange={handler} />
                                        <label htmlFor="email">Your Password</label>
                                    </div>
                                </div>
                              
                                <div className="col-12 px- 4">
                                    <button className="btn btn-primary w-100 py-3" type="submit" onClick={submitData}>Admin Login</button>
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

export default AdminLogin