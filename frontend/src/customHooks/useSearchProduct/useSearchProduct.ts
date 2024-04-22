import { useState } from "react";
import { useAppSelector } from "../../store/hooks";
import { Product } from "../../Types/Types";

const useProductSearch = () => {
    const [searchResults, setSearchResults] = useState<Product[]>([]);
    const products = useAppSelector(state => state.products.products);
  const [searchTerm, setSearchTerm] = useState<string>("");
 

  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);

    console.log(searchTerm);
    if (searchTerm.trim() === "") {
      setSearchResults([]);
      return;
    }
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  
  };

  return {
    searchTerm,
    searchResults,
    setSearchTerm,
    handleSearch,
  };
};

export default useProductSearch;
