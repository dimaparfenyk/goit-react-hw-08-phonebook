import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';
import { Header } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Header>
        <AppBar />
      </Header>
      <main>
        <Outlet />
      </main>
      
    </>
  );
};
