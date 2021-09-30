//import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { getUserByToken } from "../redux/reducers/customAuthReducer";

// For routes that can only be accessed by authenticated users
const AuthGuard = ({ children }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.authReducer);
  const token = JSON.parse(localStorage.getItem("myToken"));

  //console.log(token);
  if (!token) {
    return <Redirect to="/auth/sign-in" />;
  } else {
    if (!auth.user) {
      dispatch(getUserByToken({ token }));
    }
  }

  return children;
};

export default AuthGuard;
