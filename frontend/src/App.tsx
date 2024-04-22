
import { RouterProvider, useLocation } from 'react-router-dom'
import router from './Routes.tsx'
import { useFetchAllProducts } from './customHooks/useFetchProducts/useFetchAllProducts.ts';
import { useLocalStorageUser } from './customHooks/useLocaStorageUser/useLocalStorageUser.ts';

function App(){

useLocalStorageUser();
useFetchAllProducts();
  return (
  <RouterProvider router={router} />
  )
}

export default App