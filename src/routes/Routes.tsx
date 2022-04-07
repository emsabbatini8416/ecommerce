import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import ProductsPage from '../containers/Products';
import ProductDetailPage from '../containers/ProductDetails';

const routes = [
  { component: ProductsPage, exact: true, path: '/products' },
  { component: ProductDetailPage, exact: true, path: '/products/:id' },
];

export function Routes() {
  return (
    <Switch>
      {routes.map(route => (
        <Route {...route} key={route.path} />
      ))}
      <Route exact path="/" 
        render={() => (
          <Redirect to="/products"/>
        )}
      />
    </Switch>
  );
}

export default React.memo(Routes);