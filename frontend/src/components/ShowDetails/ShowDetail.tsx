import React from 'react';
import StarRating from '../Star/Star';
import MyButton from '../Button/MyButton/MyButton';
import { useNavigate } from 'react-router-dom';
import {useAppSelector } from '../../store/hooks';

import AddOrders from '../AddOrders/AddOrders';

function ShowDetail() {

    const navigate = useNavigate();

    const product = useAppSelector(state=>state.products.selectedProduct);
  return (
        product&&<div className='flex-col bg-gray-900 p-2 shadow-custom w-1/3 rounded-lg' style={{ position: 'fixed', top:162 , left: 1010, }}>
        
        <div className='flex p-2 gap-2'>
      <img className=' w-3/5 rounded-xl' src={product.image} alt="" />
        <div className=' flex-col'>
           <div className='flex-col' >
           <h1 className='text-white font-bold text-3xl'>{product.name}</h1>
            
            < StarRating rating={product.ratings}/>
            <p className='text-gray-100'>{product.description}</p>
           
           </div>
          <AddOrders />
             </div>
 <div></div>

        </div>
     <MyButton onClick={()=>{navigate('/details')}} className="mx-2">More Detail</MyButton>
        </div>
     
    
  );
}

export default ShowDetail;