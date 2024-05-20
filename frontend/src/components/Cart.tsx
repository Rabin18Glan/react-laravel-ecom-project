import { useState } from "react";
import { removeFromCart } from "../store/slices/orderSlice";
import MyButton from "./Button/MyButton";
import ListTile from "./ListTile";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import axios from "axios";
import { deleteCartApi } from "../api/api";
import { CartProduct} from "../types/types";

const Cart = ({cartProduct}:{cartProduct:CartProduct}) => {
    const [itemCount, setItemCount] = useState(cartProduct.count);
    const dispatch = useAppDispatch()
    const token = useAppSelector(store=>store.auth.token)

 
    const handleDelete = async()=>{

      const response = await axios.delete(`${deleteCartApi}/${cartProduct.id}`,
        {  headers:{
          'Authorization':`Bearer ${token}`,
          'Accept':'application/json'
        }

        }

        
      )
    dispatch(removeFromCart({product_id:cartProduct.id}))
    }
  
    return (
      <ListTile

        key={cartProduct.product.product_id}
        title={cartProduct.product.name}
        subtitle={cartProduct.product.price}
        imageSrc={cartProduct.product.image}
        trailing={
          <div className="flex gap-2">
            <div className="flex flex-col justify-center items-center">
              <button
                className="border h-4 w-4 flex justify-center items-center border-gray-500"
                onClick={() => setItemCount((prev:number) => prev + 1)}
              >
                +
              </button>{" "}
              {itemCount}{" "}
              <button
                className="border h-4 w-4 flex justify-center items-center border-gray-500"
                disabled={itemCount === 1}
                onClick={() => setItemCount((prev:number) => (prev > 1 ? prev - 1 : prev))}
              >
                -
              </button>
            </div>
            <div className="flex">
              <MyButton btnColor="orange-500" className={"h-10 self-center text-xs p-2"}>
                Buy
              </MyButton>
              <MyButton
                onClick={handleDelete}
                className="bg-red-600 h-10 self-center text-xs p-2"
              >
                Delete
              </MyButton>
            </div>
          </div>
        }
      />
    );
  };

  export default Cart

  