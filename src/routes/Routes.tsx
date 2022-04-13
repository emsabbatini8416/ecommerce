import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import ProductsContainer from '../containers/ProductsContainer';
import ProductDetailContainer from '../containers/ProductDetailsContainer';
import CartContainer from '../containers/CartContainer'
import CheckoutContainer from '../containers/CheckoutContainer';

const routes = [
  { component: ProductsContainer, exact: true, path: '/products' },
  { component: ProductDetailContainer, exact: true, path: '/products/:id' },
  { component: CartContainer, exact: true, path: '/cart' },
  { component: CheckoutContainer, exact: true, path: '/checkout' },
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