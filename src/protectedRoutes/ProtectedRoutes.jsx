import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { userContext } from "../context/UserProvider";
import Loader from "../loader/Loader";

export default function ProtectedRoute({ children, requiredRole }) {
  const { user, isLoading } = useContext(userContext);

  if (isLoading) {
    return <Loader />;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (requiredRole && requiredRole !== user.role) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
