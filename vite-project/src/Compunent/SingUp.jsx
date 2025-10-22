import React, { use, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import {
  //createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../Firebase/init";
import { FaEyeSlash, FaGithub } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext/AuthContext";


const GoogleProvider = new GoogleAuthProvider();
const GithubProvider = new GithubAuthProvider();

const SingUp = () => {

  const { createUser } = use(AuthContext);

  const [user, SetUser] = useState(null);
  const [sucess, SetSucess] = useState(false);
  const [error, SetError] = useState("");
  const [show, setShow] = useState(false);

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

  const hendleGithub = () => {
    signInWithPopup(auth, GithubProvider)
      .then((result) => {
        console.log(result.user);
        SetUser(result.user);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const hendleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email);
    console.log(password);

    const trams = e.target.trams.checked;
    console.log(trams);

    if (!trams) {
      SetError("please checked our trams");
      return;
    }

    SetError("");
    SetSucess(false);

    const LeangthPassword = /^.{8,}$/;
    const UpperCasePassword = /[A-Z]/;
    const LowerCasePassword = /[a-z]/;
    const DigitPassword = /\d/;
    const SicalCharacterPassword = /[@$!%*?&]/;

    if (!LeangthPassword.test(password)) {
      SetError("❌ Password must be at least 8 characters long.");
      return;
    } else if (!UpperCasePassword.test(password)) {
      SetError("❌ Password must include at least one uppercase letter.");
      return;
    } else if (!LowerCasePassword.test(password)) {
      SetError("❌ Password must include at least one lowercase letter.");
      return;
    } else if (!DigitPassword.test(password)) {
      SetError("❌ Password must include at least one number.");
      return;
    } else if (!SicalCharacterPassword.test(password)) {
      SetError("❌ Password must include at least one special character.");
      return;
    }


     createUser(email, password)
      .then((result) => {
        console.log(result);
        SetSucess(true);
      })
      .catch((e) => {
        console.log(e);
        SetError("this Email is allraddy bind usd");
      });

    // createUserWithEmailAndPassword(auth, email, password)
    //   .then((result) => {
    //     console.log(result);
    //     SetSucess(true);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //     SetError("this Email is allraddy bind usd");
    //   });
  };

  const hendleShowPassword = () => {
    setShow(!show);
  };

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
              <h1 className="text-5xl font-bold">SingUp Now!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
          )}

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
                  <div className="flex">
                    <input
                      type={show ? "text" : "password"}
                      className="input"
                      placeholder="Password"
                      name="password"
                    />
                    <p className="btn" onClick={hendleShowPassword}>
                      {show ? <FaEyeSlash /> : <FaEye />}
                    </p>
                  </div>
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <label className="label">
                    <input type="checkbox" name="trams" className="checkbox" />
                    Acceapt Our Trams and Condisation
                  </label>
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
                      <button className="btn">Resister Now</button>
                    </>
                  )}
                  {error && (
                    <p className=" text-center text-red-500">{error}</p>
                  )}
                  {sucess && (
                    <p className="text-center text-green-500">
                      Account is created
                    </p>
                  )}
                </fieldset>

                
              </form>
              <p>already have an account, please <NavLink to="/SingIn"><samp className="text-blue-500 underline">Sing in</samp></NavLink></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
