import { useUser, useUpdateUser, useStatistics } from '../hooks';

export const UserTest = () => {
  const user = useUser({
    onSuccess: console.log,
    onError: console.log,
  });
  const updateUser = useUpdateUser({
    onSuccess: console.log,
    onError: console.log,
  });
  const statistics = useStatistics({
    onSuccess: console.log,
    onError: console.log,
  });
  const isLoading =
    user.isLoading || updateUser.isLoading || statistics.isLoading;
  const error = user.error || updateUser.error || statistics.error;

  return (
    <>
      <p>{JSON.stringify(user.data)}</p>
      <p>{JSON.stringify(statistics.data)}</p>
      <button onClick={() => updateUser.mutate({ name: 'Ann' })}>
        Change user Name Ann
      </button>
      <button onClick={() => updateUser.mutate({ name: 'Olena' })}>
        Change user Name Olena
      </button>

      {error && <p>Error {error.message}</p>}
      {isLoading && <p>Loading... </p>}
    </>
  );
};
