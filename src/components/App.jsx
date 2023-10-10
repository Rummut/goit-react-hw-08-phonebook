import { Layout } from './Layout';
import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operatons';
import { useAuth } from 'hooks';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivetRoute';

const HomePage = lazy(() => import('../page/Home'));
const RegisterPage = lazy(() => import('../page/Register'));
const LoginPage = lazy(() => import('../page/Login'));
const ContactsPage = lazy(() => import('../page/contacts/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    'Fetching user data...'
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />}></Route>
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contact"
              component={<RegisterPage />}
            />
          }
        ></Route>
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contact" component={<LoginPage />} />
          }
        ></Route>
        <Route
          path="/contact"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        ></Route>
      </Route>
    </Routes>
  );
};
