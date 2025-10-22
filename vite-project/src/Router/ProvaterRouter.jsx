import React, { use } from "react";
import { AuthContext } from "../context/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router";

const ProvaterRouter = ({ children }) => {
  const { user, loding } = use(AuthContext);

  const location = useLocation();
  console.log(location);

  if (loding) {
    return <span className="loading loading-spinner loading-xs"></span>;
  }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/SingIn"></Navigate>;
};

export default ProvaterRouter;
