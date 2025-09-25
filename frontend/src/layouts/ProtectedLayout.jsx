import { use } from "react";
import { Outlet, Navigate } from "react-router";
import { AuthContext } from "../context/AuthProvider.jsx";
const ProtectedLayout = () => {
  const { user, loading } = use(AuthContext);
  return (
    <div>
      {loading ? (
        <span className="loading loading-spinner loading-xl"></span>
      ) : user ? (
        <Outlet />
      ) : (
        <Navigate to="login" />
      )}
    </div>
  );
};

export default ProtectedLayout;
