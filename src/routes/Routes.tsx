import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import ProductsPage from '../containers/Products';
import ProductDetailPage from '../containers/ProductDetails';
import CartPage from '../containers/Cart';

const routes = [
  { component: ProductsPage, exact: true, path: '/products' },
  { component: ProductDetailPage, exact: true, path: '/products/:id' },
  { component: CartPage, exact: true, path: '/cart' },
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