import React from 'react'
import { Product } from '../../types/types'
import SideScrollerstyled from './SideScrollerstyled'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import Card from '../Card'
import { storeSelectedProduct } from '../../store/slices/productSlice'


function SideSroller({products,className}:{products:Product[],className:string}) {
  const currentSelected = useAppSelector(state=>state.products.selectedProduct)
  const dispatch = useAppDispatch();
  return (
   <SideScrollerstyled className={className}>
      {products.map((product) => {
            return product != currentSelected && <Card product={product} className="mb-5" onClick={() => { dispatch(storeSelectedProduct({ selectedProduct: product, selectedProductCategory: product.category })) }} />
          })}

   </SideScrollerstyled>
  )
}

export default SideSroller