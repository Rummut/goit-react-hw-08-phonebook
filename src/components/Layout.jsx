import { Suspense } from 'react';
import { AppBar } from './app-bar/AppBar';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense>
        <Outlet />
      </Suspense>
      ;
    </>
  );
};
