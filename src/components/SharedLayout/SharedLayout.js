import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { PageLoader } from 'components/PageLoader';
import { useUser } from 'api/hooks';

export const SharedLayout = () => {
  const { data, isLoading } = useUser();

  if (isLoading) {
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
