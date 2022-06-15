import { Navigate } from "react-router-dom";

const PrivetRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user?.userInfo?.role === "user") return <Navigate to="/login" />;
  else return children;
};

export default PrivetRoute;