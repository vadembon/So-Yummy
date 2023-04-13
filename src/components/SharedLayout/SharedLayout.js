import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { PageLoader } from 'components/PageLoader';
import { useUser, useMotivation } from 'api/hooks';

export const SharedLayout = () => {
  const { data, isLoading, isError } = useUser();
  useMotivation();

  if (isLoading || isError) {
    return <PageLoader />;
  }

  return (
    <div>
      <Header user={data} />
      <Outlet />
      <Footer />
    </div>
  );
};
