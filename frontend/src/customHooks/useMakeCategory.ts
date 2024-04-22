import { useState } from "react";
import { useAppSelector } from "../store/hooks";

const useMakeCategory = () => {
    const products = useAppSelector(state => state.products.products);
    
    // Extract unique categories
    const categories = ["All", ...new Set(products.map(product => product.category))];
    
    const [selectedCategory, setSelectedCategory] = useState("All");

    return {
        categories,
        selectedCategory,
        setSelectedCategory
    };
}

export default useMakeCategory;
