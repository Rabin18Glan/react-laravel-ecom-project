import React, { useEffect, useState } from 'react'
import MyButton from '../MyButton/MyButton'
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useFetchUserCart } from '../../../customHooks/useFetchUserCart/useFetchUserCart';

function OrdersButton() {
    const navigate=useNavigate();
    const numberOfOrders=useAppSelector(state => state.order.cart.length + state.order.ordered.length)
const dispatch=useAppDispatch();
 const isLoggedIn = useAppSelector(state => state.auth.status);
 useFetchUserCart();

  return (
    <div className='flex items-center'>
    {isLoggedIn && <MyButton onClick={() => {
      navigate('/orders')
    }} btnColor='white' textColor='orange-500' className='border border-solid border-orange-500'><FontAwesomeIcon icon={faShoppingCart} />Orders
    </MyButton>}
    {isLoggedIn && numberOfOrders != 0 && <span className='self-start relative bottom-3 right-4 bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs'>{numberOfOrders}</span>}
    </div>
  )
}

export default OrdersButton