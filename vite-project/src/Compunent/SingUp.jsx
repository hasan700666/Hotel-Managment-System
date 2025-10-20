import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../Firebase/init";
import { FaGithub } from "react-icons/fa";

const GoogleProvider = new GoogleAuthProvider();
const GithubProvider = new GithubAuthProvider();

const SingUp = () => {
  const [user, SetUser] = useState(null);

  const hendleGoogle = () => {
    signInWithPopup(auth, GoogleProvider)
      .then((result) => {
        console.log(result.user);
        SetUser(result.user);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const hendleSingOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign-out successful");
        SetUser(null);
      })
      .catch((e) => {
        console.log(e, "Not Sing Out");
      });
  };

  const hendleGithub = ()=>{
    signInWithPopup(auth, GithubProvider)
    .then(result=>{
        console.log(result.user);
        SetUser(result.user)
    })
    .catch(e=>{
        console.log(e);
        
    })
    
  }

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          {user ? (
            <div>
                <h1 className="text-5xl font-bold my-7">WelCome</h1>
              <h1 className="text-3xl font-bold my-5">{user?.displayName}</h1>
              <h1 className="text-2xl font-bold">{user?.email}</h1>
            </div>
          ) : (
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
          )}

          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                {user ? (
                  <button className="btn" onClick={hendleSingOut}>
                    {" "}
                    Sing Out
                  </button>
                ) : (
                    <>
                  <button className="btn" onClick={hendleGoogle}>
                    <FcGoogle />
                    Sing in With Google
                  </button>
                  <button className="btn" onClick={hendleGithub}>
                    <FaGithub />
                    Sing in With Github
                  </button>
                  </>
                )}
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
