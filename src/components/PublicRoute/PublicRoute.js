import { useSelector } from "react-redux";
import { authSelectors } from 'redux/auth/authSelectors';
import { Navigate } from "react-router-dom";

export const PublicRoute = ({ children, restricted = false }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to="/" replace /> : children;
};