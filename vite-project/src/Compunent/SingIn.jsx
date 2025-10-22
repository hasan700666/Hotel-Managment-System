//import { signInWithEmailAndPassword } from "firebase/auth";
import React, {  use, useState } from "react";
//import { auth } from "../Firebase/init";
import { AuthContext } from "../context/AuthContext/AuthContext";
import { useLocation, useNavigate } from "react-router";


const SingIn = () => {

  const location = useLocation()
  const nevegate = useNavigate()
  console.log(location);
  
  
  const {sinInUser} = use(AuthContext);
  

  const [error, SetError] = useState("");
  const [success, SetSuccess] = useState("");

  const hendleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);

    SetError("");
    SetSuccess("");

   
    sinInUser(email,password)
    .then((result) => {
        console.log(result.user);
        SetSuccess("account is created");
        nevegate(location.state || "/")
      })
      .catch((e) => {
        console.log(e.message);
        SetError("Error")
      });


    // signInWithEmailAndPassword(auth, email, password)
    //   .then((result) => {
    //     console.log(result.user);
    //     SetSuccess("account is created");
    //   })
    //   .catch((e) => {
    //     console.log(e.message);
    //     SetError("Error")
    //   });
  };


  

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">SingIn Now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={hendleSubmit}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  placeholder="Email"
                  name="email"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  name="password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
            </form>
            {error && <p>{error}</p>}
            {success && <p>{success}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingIn;
