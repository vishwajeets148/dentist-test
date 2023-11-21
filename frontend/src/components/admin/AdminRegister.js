import React, { useState } from 'react'

function AdminRegister() {

    const [state, setState] = useState({ name: "", email: "", password: "", conpassword: "" })

    const handler = (e) => {
        setState({ ...state, [e.target.id]: e.target.value })
    }

    const submitData = (e) => {
        const { name, email, password, conpassword } = state
        e.preventDefault()
        //console.log(state)
        fetch('/adminregister', {
            method: 'POST',
            body: JSON.stringify({ name, email, password, conpassword }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                alert(json.message)
                setState({ name: "", email: "", password: "", conpassword: "" })
            }).catch(() => console.log("Api call error"))
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
                                        <input type="text" className="form-control" id="name" placeholder="Your Name" value={state.name} onChange={handler} />
                                        <label htmlFor="name">Your Name</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="email" className="form-control" id="email" placeholder="Your Email" value={state.email} onChange={handler} />
                                        <label htmlFor="email">Your Email</label>
                                    </div>
                                </div>


                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="password" className="form-control" id="password" placeholder="password" value={state.password} onChange={handler} />
                                        <label htmlFor="email">Your Password</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="password" className="form-control" id="conpassword" placeholder="confirm password" value={state.conpassword} onChange={handler} />
                                        <label htmlFor="email">Your Confirm Password</label>
                                    </div>
                                </div>
                                <div className="col-12 px- 4">
                                    <button className="btn btn-primary w-100 py-3" type="submit" onClick={submitData}>Admin Register</button>
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

export default AdminRegister