import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import axios from "axios";
import { getAllProductsApi } from "../../api/api";
import { storeProducts } from "../../store/slices/product/productSlice";


export const useFetchAllProducts = ()=>{
    const dispatch = useAppDispatch();
    const token = useAppSelector(store=>store.auth.token);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(getAllProductsApi,
              {
                headers:{
                  'Authorization':`Bearer ${token}`,
                  'Accept':'application/json'
                }
              }
            );
            dispatch(storeProducts({products:response.data.products}))
          
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
      
        fetchData();
      }, []);

}