import React from "react"
import NavMenu from "../core/NavMenu"
import { Link } from "react-router-dom";

const Register=()=>{
  const registerForm=()=>(
    <div className="card shadow-lg">
       <p className="h3 text-dark p-4">Login</p>
       <div>
        <form>
        <div className="form-group m-3">
          <input
            type="text"
            className="col-12 form-control"
            placeholder="Email Address"
            
          />
         
         
        </div>
        <div className="form-group m-3">
          <input
            type="text"
            className="col-12 form-control"
            placeholder="Password"
            
          />
         
         
        </div>
        <div className="row p-4">
          <p className="col text-primary">New User ? Register</p>
          <Link className="col" to="/products"><button  className="col-12 btn btn-lg btn-block btn-primary">Login</button></Link>
        </div>
        </form>
       </div>
    </div>
  )
  return(
    <div>
      <div><NavMenu /></div>
      <div className="d-flex align-items-center" style={{minHeight:"90vh"}}>
        <div className="col-4 mx-auto">
          {registerForm()}
        </div>
      </div>
    </div>
  )
}

export default Register