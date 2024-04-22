import { createSlice } from "@reduxjs/toolkit";

interface Product {
    product_id: number;
    name: string;
    price: number;
    description: string;
    category: string;
    image: string;
    number_of_ratings?: number | null;
    number_of_sale?: number | null;
    ratings: number;
    created_at?: string;
    updated_at?: string;
}

interface InitialState {
    status: boolean;
    products: Product[];
    selectedProduct: Product | null;
}

const initialState: InitialState = {
    status: false,
    products: [],
    selectedProduct: null
};


const authSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        storeProducts:(state,action)=>{
            state.status = true;
            state.products = action.payload.products;
        },
        storeSelectedProduct:(state,action)=>{
            state.status = true;
            state.selectedProduct=action.payload.selectedProduct;
        }

    }

})

export const  {storeProducts,storeSelectedProduct} = authSlice.actions

export default authSlice.reducer