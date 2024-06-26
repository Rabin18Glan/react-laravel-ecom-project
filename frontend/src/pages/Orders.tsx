import MyButton from '../components/Button/MyButton';
import Cart from '../components/Cart';
import ListTile from '../components/ListTile';
import { useAppSelector } from '../store/hooks';


function Orders() {
    const orderedProduct = useAppSelector(state=>state.order.ordered)
    const addedToCart = useAppSelector(state=>state.order.cart);

  return (
    <>
<div className='flex justify-center items-center bg-gray-100'>
 <div className='p-10 w-2/5 flex flex-col gap-5 '>
 <h1 className='text-4xl text-gray-700'>Added to Cart</h1>
 {addedToCart.length?addedToCart.map((cartProduct)=>{
    
      return <Cart cartProduct={cartProduct}/>
    }):<div>No Products to show</div>}
 </div>
 <div className='w-2/5 p-10 flex flex-col gap-5'>
  <h1 className='text-4xl text-gray-700'>Ordered Items</h1>
 {orderedProduct.length?orderedProduct.map((product)=>{
        return   <ListTile title={product.name} subtitle={product.price} imageSrc={product.image} trailing={<MyButton onClick={()=>{}} btnColor='orange-500'>Buy Again</MyButton>}/>
    }):<div>No Products to show</div>}
 </div>
 

</div>
    </>
    
  )
}

export default Orders