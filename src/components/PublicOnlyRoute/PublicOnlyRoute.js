import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';

const PublicOnlyRoute = () => {
  return (
    <UserContext.Consumer>
      {(userContext) =>
        !!userContext.user.id ? (
          <Navigate to={'/'} />
        ) : (
          <Outlet
            to={{
              pathname: userContext.user.idle ? '/login' : '/login',
            }}
          />
        )
      }
    </UserContext.Consumer>
  );
};

export default PublicOnlyRoute;
