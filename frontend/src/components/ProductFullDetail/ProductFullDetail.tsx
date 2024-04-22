import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import StarRating from '../Star/Star';
import AddOrders from '../AddOrders/AddOrders';
import RateProduct from '../RateProduct/RateProduct';
import Reviews from '../Reviews/Reviews';

function ProductFullDetail() {
    
    const currentSelected = useAppSelector(state=>state.products.selectedProduct);
    const [rated,setRated]=useState(false);
    
  return (
    <div className='bg-gray-100 w-full h-auto border flex flex-col rounded-lg'>
    <div className='flex gap-10 border h-4/5 rounded-lg p-5'>
      <div className='w-1/2 overflow-hidden'>
        <img className='border rounded-lg  flex justify-center items-center w-full h-full object-contain' src={currentSelected?.image} alt="" />
      </div>
      <div className='flex flex-col justify-between '>
        <div>  <h1 className='text-5xl text-gray-800 font-semibold'>{currentSelected?.name}</h1>
          <StarRating rating={currentSelected?.ratings} />
          <div><h1 className='text-gray-800 font-semibold'>{currentSelected?.description}</h1></div></div>
        <div className='flex flex-col gap-5'>
          <AddOrders />
        </div>
      </div>

    </div>
    <hr />
    <div className=' px-20'>
      <h1 className='text-gray-800 text-2xl font-semibold px-12'>Ratings:</h1>
      <RateProduct setRated={setRated} rated={rated} />
    </div>
    <hr />
    <div className='bg-gray-100 px-20 ' >
      <h1 className='text-gray-800 text-2xl font-semibold px-12'>Reviews:</h1>
      <Reviews rated={rated}/>
    </div>


  </div>
  )
}

export default ProductFullDetail