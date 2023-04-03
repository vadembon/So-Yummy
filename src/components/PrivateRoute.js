import { Route, Navigate } from 'react-router-dom';

export const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Navigate
          to={{ pathname: '/login', state: { from: props.location } }}
        />
      )
    }
  />
);
