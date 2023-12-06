import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../context/auth.jsx";

const ProfileOutlet = () => {
  const auth = useAuth();
  return auth.user ? <Outlet /> : <Navigate to="/signin" />;
};

export default ProfileOutlet;
