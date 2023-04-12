import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ redirectPath = "/Login" }) => {
  if (!localStorage.getItem("token")) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};

export default PrivateRoute;
