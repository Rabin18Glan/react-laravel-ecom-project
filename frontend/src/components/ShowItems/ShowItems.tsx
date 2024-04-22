import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import Card from '../Card/Card'
import ShowDetail from '../ShowDetails/ShowDetail';
import { storeSelectedProduct } from '../../store/slices/product/productSlice';
import useRangeOfProduct from '../../customHooks/useRangeOfProduct/useRangeOfProduct';
import SelectRange from '../SelectRange/SelectRange';


function ShowItems({category}: { category: string}) {
const {oldrange,newrange,setNewRange,setOldRange,selected,setSelected} = useRangeOfProduct(category,10)
  const dispatch = useAppDispatch();
    const categoryProduct=useAppSelector(state=>category=="All"?state.products.products:state.products.products.filter(product=>product.category==category));
 const products = categoryProduct.slice(oldrange,newrange);
    const selectedProduct = useAppSelector(state=>state.products.selectedProduct)




  return (
    <>
    <div className='py-5 flex flex-wrap gap-2'>
    {products.length==0?<div>No Products to show</div>:products.map((product,index)=>{
        return <Card onClick={()=>{
          dispatch(storeSelectedProduct({selectedProduct:product}))
         }} product={product} />
      })}
      
      </div>
   <SelectRange range={10} category={category} categoryProductLength={categoryProduct.length} selected={selected} setNewRange={setNewRange} setSelected={setSelected} setOldRange={setOldRange} />
    {selectedProduct!=null&&<><ShowDetail /><button onClick={()=>{dispatch(storeSelectedProduct({selectedProduct:null}))}}  style={{ position: 'fixed',  top:155, left: 1000, }}><button className="btn btn-circle bg-orange-500 border border-red-500 btn-outline hover:bg-red-500">
  <svg  xmlns="http://www.w3.org/2000/svg" className="h-4 w-4"  viewBox="0 0 24 24" stroke="currentColor" color='white'><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button></button></>}

    
      </>
      
  )
}

export default ShowItems