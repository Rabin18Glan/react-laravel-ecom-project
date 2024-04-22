import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import { useFetchAllProducts } from './customHooks/useFetchAllProducts';
import { useFetchUserCart } from './customHooks/useFetchUserCart';

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
