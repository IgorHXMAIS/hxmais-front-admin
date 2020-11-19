import React from 'react';
import { Route as ReactDOMRoute, Redirect } from 'react-router-dom';

import { useAuth } from '../hooks/auth';
import SignedLayout from '../layouts/SignedLayout';
import DefaultLayout from '../layouts/DefaultLayout';

export default function Route({
  isPrivate = false,
  component: Component,
  ...rest
}) {
  const { user: signed } = useAuth();

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (!!signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  const Layout = signed ? SignedLayout : DefaultLayout;

  return (
    <ReactDOMRoute
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}
