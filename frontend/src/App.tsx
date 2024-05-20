
import { RouterProvider } from 'react-router-dom';
import router from './Routes.tsx';
import { useFetchAllProducts } from './customHooks/useFetchAllProducts.ts';
import { useLocalStorageUser } from './customHooks/useLocalStorageUser.ts';

function App(){

useLocalStorageUser();
useFetchAllProducts();
  return (
  <RouterProvider router={router} />
  )
}

export default App