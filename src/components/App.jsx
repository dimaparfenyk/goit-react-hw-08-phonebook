import { lazy, useEffect, Suspense  } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './SharedLayout/Layout';
import { useDispatch} from 'react-redux';
import { authOperations } from 'redux/auth/auth-operations';

import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { PublicRoute } from './PublicRoute/PublicRoute';

const HomePage = lazy(() => import('../pages/HomePage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));

export const App = () => {
  const dispatch = useDispatch();

   useEffect(() => {
      dispatch(authOperations.fetchCurrentUser())
   }, [dispatch]);

   return (
     <Suspense>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <ContactPage />
              </PrivateRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute restricted>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute restricted>
                <RegisterPage />
              </PublicRoute>
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
};
 