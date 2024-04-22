import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { useFetchAllProducts } from './customHooks/useFetchProducts/useFetchAllProducts';
import { useFetchUserCart } from './customHooks/useFetchUserCart/useFetchUserCart';

const Root= () => {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
