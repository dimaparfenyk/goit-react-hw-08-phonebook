import { Outlet } from "react-router-dom";

import { AppBar } from "components/AppBar";
import { Header,  } from "./SharedLayout.styled";

export const Layout = () => (
  <>
    <Header>
       <AppBar />
    </Header>
    <main>
      <Outlet />
    </main>
  </>);
 
