import React from 'react'

import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../store/hooks'
import { storeSelectedProduct } from '../store/slices/productSlice'
import { CardProps} from '../types/types'
import StarRating from '../customHooks/Star'

const Card:React.FC<CardProps>=({product,onClick,className})=> {
  const navigate= useNavigate();
  const dispatch = useAppDispatch();
  return (
    <div onDoubleClick={()=>{
      dispatch(storeSelectedProduct({selectedProduct:product}))
      navigate('/details')}} onClick={onClick} className={`card w-60 bg-white h-96 shadow-xl rounded-lg ${className}`}>
    <figure><img src={product.image} alt="Shoes" /></figure>
    <div className="card-body">
     
      <h2 className="card-title text-gray-700">{product.name}</h2>
      <p className='text-gray-700'>Rs.{product.price}</p>
    <div className='flex'>
    <p className='text-gray-700'><StarRating className='' rating={product.ratings}></StarRating></p>
      <button className="badge badge-outline">{product.category}</button>
    </div>

    </div>
  </div>
  )
}

export default Card