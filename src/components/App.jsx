import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/HomePage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));

export const App = () => {

  return (
    <Routes>
      <Route exact path="/" element={ <HomePage/>} />
      <Route exact path="login" element={<LoginPage />} />
      <Route exact path="register" element={ <RegisterPage/>} />
    </Routes>
  );
};

 