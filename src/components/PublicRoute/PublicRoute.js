import { useSelector } from "react-redux";
import { authSelector } from "components/redux/auth";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({ children, restricted=false}) => {
    const isLoggedIn = useSelector(authSelector.getIsLoggedIn);

    return (
        <>{isLoggedIn && restricted ? (
            <Navigate replace to="/" />
        ) : (<div> {children}</div>)}
        </>
    );
}