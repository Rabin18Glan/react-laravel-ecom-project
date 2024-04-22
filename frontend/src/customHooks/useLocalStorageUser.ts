import { useEffect } from "react";
import { useAppDispatch } from "../store/hooks";
import { login } from "../store/slices/authSlice";



export const  useLocalStorageUser = ()=>{
        const dispatch = useAppDispatch()
        useEffect(() => {
     
            const state= JSON.parse(localStorage.getItem('auth')||'null')
            if(state.token==null)      
              {
             
              }
              else{
      
              
               dispatch(login({token:state.token,userData:state.userData}));
            
              }
              
            }, []);
    }