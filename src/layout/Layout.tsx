import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

type LayoutProps = {
  children: React.ReactNode
}
const Layout = ({ children }: React.PropsWithChildren<LayoutProps>) => (
  <>
    <Header />
    {children}
    <Footer/>
  </>
)

export default Layout;