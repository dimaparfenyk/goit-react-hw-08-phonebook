import { useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";
import { authSelector } from 'components/redux/auth';

export function PrivateRoute({
children
}) {
  const isLoggedIn= useSelector(authSelector.getIsLoggedIn)
  return ( 
    <div>
         {isLoggedIn ? (
            <div>{children}</div>
         ) : (
            <Navigate replace to="login" />
         )}
      </div>
  )
}