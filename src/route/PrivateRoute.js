import React, { useState } from "react";
import TodoPage from "../pages/TodoPage";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ user, children }) => {
  return (
    //react에는 Children이라는 예악어가 있다. children을 props를 사용하면 강제로 자식 컴포넌트를 props 해준다.
    user ? children : <Navigate to={"/login"} />
  );
};

// user값이 있으면 ? Todopage : redirect to /login

export default PrivateRoute;
