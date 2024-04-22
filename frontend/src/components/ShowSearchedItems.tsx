import React from 'react'
import { Product } from '../types/types'

import { useAppDispatch, useAppSelector } from '../store/hooks'
import { storeSelectedProduct } from '../store/slices/productSlice';
import Card from './Card';
import ShowDetail from './ShowDetail';

function ShowSearchedItems({products}:{products:Product[]}) {
    const dispatch = useAppDispatch();
    const selectedProduct = useAppSelector(state=>state.products.selectedProduct);
  return (
    <div className='py-5 flex flex-wrap gap-2'>
    {products.length==0?<div>No Products to show</div>:products.map((product,index)=>{
        return <Card onClick={()=>{
          dispatch(storeSelectedProduct({selectedProduct:product}))
         }} product={product} />
      })}
      {selectedProduct!=null&&<><ShowDetail /><button onClick={()=>{dispatch(storeSelectedProduct({selectedProduct:null}))}}  style={{ position: 'fixed',  top:155, left: 1000, }}><button className="btn btn-circle bg-orange-500 border border-red-500 btn-outline hover:bg-red-500">
  <svg  xmlns="http://www.w3.org/2000/svg" className="h-4 w-4"  viewBox="0 0 24 24" stroke="currentColor" color='white'><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button></button></>}
      
      </div>
  )
}

export default ShowSearchedItems