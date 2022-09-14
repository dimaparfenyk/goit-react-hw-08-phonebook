import { lazy, useEffect  } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelector } from './redux/auth';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { PublicRoute } from './PublicRoute/PublicRoute';

const HomePage = lazy(() => import('../pages/HomePage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing= useSelector(authSelector.getIsRefreshing)
  
  useEffect(() => {
    dispatch(authOperations.getCurrentUser())
  }, [dispatch])

  return isRefreshing ? (
    <h1>Refreshing user...</h1>
  ) : (
        <Routes>
        <Route path="/" element={<SharedLayout />}>
          
          
         <Route
            exact
            path="/"
            element={
               <PrivateRoute>
                  <HomePage />
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
          <Route path="contacts" element={<ContactPage/>}/>
      </Route>
    </Routes>
  );
};

 