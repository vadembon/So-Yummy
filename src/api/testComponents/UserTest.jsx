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

  const handleSubmit = e => {
    e.preventDefault();
    let formData = new FormData();
    const name = e.target.name.value;
    const file = e.target.file.files[0];
    formData.append('name', name);
    formData.append('avatar', file);
    console.log('Form data', formData);
    updateUser.mutate(formData);
  };

  return (
    <>
      <p>{JSON.stringify(user.data)}</p>
      <p>{JSON.stringify(statistics.data)}</p>
      {/* <button onClick={() => updateUser.mutate({ name: 'Ann' })}>
        Change user Name Ann
      </button>
      <button onClick={() => updateUser.mutate({ name: 'Olena' })}>
        Change user Name Olena
      </button> */}
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input name="name" type="text" />
        </label>
        <input name="file" type="file" />
        <button>Submit</button>
      </form>

      {/* <button onClick={() => updateUser.mutate({ avatar: '' })}>
        Delete avatar
      </button>
      <button
        onClick={() => updateUser.mutate({ avatar: 'https://pin.it/1CT1WFj' })}
      >
        Restore avatar
      </button> */}
      {error && <p>Error {error.message}</p>}
      {isLoading && <p>Loading... </p>}
    </>
  );
};
