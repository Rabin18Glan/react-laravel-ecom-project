import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import About from "./pages/About";
import Buy from "./pages/Buy";
import Contact from "./pages/Contact";
import CreateProduct from "./pages/CreateProduct";
import FullDetails from "./pages/FullDetails";
import Home from "./pages/Home";
import Location from "./pages/Location";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import Register from "./pages/Register";
import Root from "./Root";


const router = createBrowserRouter( 
  createRoutesFromElements(
    <>
    <Route path={'/'} element = {<Root/>}>
    <Route path={''} element={<Navigate to={'home'}/>}/>
     <Route path={'home'} element={<Home/>}/>
     <Route path={'about'} element={<About/>}/>
     <Route path={'contact'} element={<Contact />}/>
     <Route path={'details'} element={<FullDetails />}/>
     <Route path={'location'} element={<Location />}/>
    </Route>
    <Route path={"create-product"} element={<CreateProduct/>}/>
    <Route path={'orders'} element={<Orders/>}/>
    <Route path="register" element={<Register/>}/>
    <Route path="login" element={<Login/>}/>
    <Route path="buy" element={<Buy />}/>
    </>
  )
)
export default router;
