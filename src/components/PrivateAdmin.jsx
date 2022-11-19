import React from "react";
import { useContext } from "react";
import toast from "react-hot-toast";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./Context/AuthPrvider";
import Loading from "./Shared/Loading";
import useAdmin from "./useHooks/useAdmin";

const PrivateAdmin = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);

  if (loading || isAdminLoading) {
    return <Loading></Loading>;
  }

  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default PrivateAdmin;
