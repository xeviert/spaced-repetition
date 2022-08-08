import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';

const PrivateRoute = () => {
  return (
    <UserContext.Consumer>
      {(userContext) =>
        !!userContext.user.id ? (
          <Outlet />
        ) : (
          <Navigate
            to={{
              pathname: userContext.user.idle ? '/login' : '/login',
            }}
          />
        )
      }
    </UserContext.Consumer>
  );
};

export default PrivateRoute;
