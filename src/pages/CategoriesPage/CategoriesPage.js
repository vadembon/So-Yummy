import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Categories } from 'components/Categories/Categories';
import { Loader } from 'components/Loader/Loader';


export const CategoriesPage = () => {
  return (
    <>
      <div>CategoriesPage</div>;
      <Categories/>
      <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
    </>
  )
};
