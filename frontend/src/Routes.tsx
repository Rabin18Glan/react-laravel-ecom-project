import { BrowserRouter as Router, Routes, Route, createBrowserRouter, createRoutesFromElements, useLocation, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import CreateProduct from "./pages/CreateProduct";
import Root from "./Root";
import About from "./pages/About";
import FullDetails from "./pages/FullDetails";
import Contact from "./pages/Contact";
import Location from "./pages/Location";
import Orders from "./pages/Orders";
import Buy from "./pages/Buy";


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
