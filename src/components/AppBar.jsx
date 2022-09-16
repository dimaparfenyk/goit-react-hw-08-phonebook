import { getIsLoggedIn } from "redux/auth/auth-selectors";
import { useSelector } from "react-redux";

import { Navigation } from "./Navigation/Navigation";
import { UserMenu } from "./UserMenu/UserMenu";
import { AuthNav } from "./AuthNav";
    

export const AppBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </>
  );
};