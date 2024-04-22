import axios from "axios"
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fectchCarts } from "../store/slices/orderSlice";

export const useFetchUserCart=()=>{
    const user = useAppSelector(state=>state.auth.userData);
    const token = useAppSelector(state=>state.auth.token);
    const dispatch = useAppDispatch();
useEffect(()=>{
    const request =async ()=>{
      console.log(user)
      const response = await axios.get(`http://127.0.0.1:8000/api/cart/get-carts/${user?.user_id}`,
      {
        headers:{
          'Authorization':`Bearer ${token}`,
          'Accept':'application/json'
        }
      }
      )
      
      console.log(response.data.products)
    dispatch(fectchCarts({products:response.data.products}));
    
    
    }
    request();
    
    },[])

}