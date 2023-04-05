import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Header } from 'components/Header';
import { Footer } from 'components/Footer';

export const SharedLayout = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
};
