import { useEffect } from "react";
import { useAppSelector } from "../store/hooks";



const useShuffleProduct = ()=>{
    const products = useAppSelector(state => state.products.products);
    const currentSelected = useAppSelector(state => state.products.selectedProduct);

    const selectedProductCategory = useAppSelector(state => state.products.products).filter(product => product.category === currentSelected?.category);
    const shuffledProductCategory = [...selectedProductCategory];
    const shuffledProducts = [...products];
    
  useEffect(() => {



    for (let i = shuffledProductCategory.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledProductCategory[i], shuffledProductCategory[j]] = [shuffledProductCategory[j], shuffledProductCategory[i]];
    }
    for (let i = shuffledProducts.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledProducts[i], shuffledProducts[j]] = [shuffledProducts[j], shuffledProducts[i]];
    }

  }, [currentSelected]);

  return{
    shuffledProductCategory,
    shuffledProducts

  }

}

export default useShuffleProduct;