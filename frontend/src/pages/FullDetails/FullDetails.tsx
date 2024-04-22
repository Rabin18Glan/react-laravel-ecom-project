
import SideScroller from '../../components/SideScroller/SideSroller';
import ProductFullDetail from '../../components/ProductFullDetail/ProductFullDetail';
import useShuffleProduct from '../../customHooks/useShuffleProduct/useShuffleProduct';
import { useCustomRedux } from '../../customHooks/useReduxStore/useReduxStore';
import { useNavigate } from 'react-router-dom';
import ButtomItems from '../../components/BottomItems/ButtomItems';


function FullDetails() {
  const navigate=useNavigate();
  const{currentSelectedProduct} = useCustomRedux()
const {shuffledProductCategory,shuffledProducts}= useShuffleProduct();
 // Create a copy of the original array
  return (
    currentSelectedProduct? <div className='flex flex-col'>
      <div className='flex p-6 bg-white justify-between'>
        <ProductFullDetail />
        <div > <h1 className='text-2xl text-gray-700 font-semibold'>Similar Items</h1>
          <SideScroller products={shuffledProductCategory} className='h-lvh overflow-y-auto w-fit p-2 border rounded-lg' />
        </div>
      </div>
     <ButtomItems shuffledProducts={shuffledProducts} />
    </div> : navigate('home')
  );
}

export default FullDetails



