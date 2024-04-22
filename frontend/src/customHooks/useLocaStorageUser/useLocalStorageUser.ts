import { useEffect } from "react";
import { useAppDispatch } from "../../store/hooks";
import { login } from "../../store/slices/auth/authSlice";



export const  useLocalStorageUser = ()=>{
        const dispatch = useAppDispatch()
        useEffect(() => {
            const data:any = localStorage.getItem('auth');
            const state= JSON.parse(data)
            if(state.token==null)      
              {
               console.log(data)
              }
              else{
               console.log(state.userData.user_id);
              
               dispatch(login({token:state.token,userData:state.userData}));
            
              }
              
            }, []);
    }