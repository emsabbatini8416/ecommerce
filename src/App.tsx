import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './layout';
import { Routes } from './routes/Routes';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Routes />
    </Layout>
  </BrowserRouter>
)

export default App;
