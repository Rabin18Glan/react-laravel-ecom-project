import { Product } from '../types/types'
import SelectRange from './SelectRange'
import useRangeOfProduct from '../customHooks/useRangeOfProduct'
import Card from './Card'
import { useAppDispatch } from '../store/hooks'
import { storeSelectedProduct } from '../store/slices/productSlice'

function ButtomItems({shuffledProducts}:{shuffledProducts:Product[]}) {
    const {oldrange,newrange,setNewRange,setOldRange,selected,setSelected} = useRangeOfProduct("All",6)
    const dispatch = useAppDispatch();

    const products=shuffledProducts.slice(oldrange,newrange);
    return (
    <div className=' bg-gray-100 px-5'>
     <div className='py-5 flex justify-between gap-2'>
    {products.length==0?<div>No Products to show</div>:products.map((product,index)=>{
        return <Card onClick={()=>{
          dispatch(storeSelectedProduct({selectedProduct:product}))
         }} product={product} />
      })}
      
      </div>
    <SelectRange range={6} category={"All"} categoryProductLength={shuffledProducts.length} selected={selected} setNewRange={setNewRange} setSelected={setSelected} setOldRange={setOldRange} />
  </div>
  )
}

export default ButtomItems