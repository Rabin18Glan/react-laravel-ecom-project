import { useEffect, useState } from 'react';
import SearchSection from '../components/SearchSection';
import ShowItems from '../components/ShowItems';
import ShowSearchedItems from '../components/ShowSearchedItems';
import useMakeCategory from '../customHooks/useMakeCategory';
import useProductSearch from '../customHooks/useSearchProduct';



function Home() {

  const {searchTerm,searchResults,setSearchTerm,handleSearch} = useProductSearch();
const {categories,selectedCategory,setSelectedCategory} = useMakeCategory();
  const [searched,setSearched]=useState(false);
  useEffect(()=>{
    if(searchTerm.length==0)
      {
        setSearched(false);
      }
      else{
        setSearched(true);
      }
  },[searchTerm])

 


  return (
   <div className='bg-gray-100  px-32 w-full flex-col items-center'>
    <div className='bg-white p-5 rounded-b-xl flex gap-4 items-center'>
      
      
    <ul className='flex'>
    <SearchSection setSearched={setSearched} setSearchTerm={setSearchTerm} handleSearch={handleSearch} searchTerm={searchTerm}/>                                        
    {categories.map((data,index)=>{
    return <li key={index}><button onClick={()=>{setSelectedCategory(data)}}  className={`${data==selectedCategory?" text-customBlue border-b-2  border-customBlue":"text-gray-700"} w-32 font-semibold` }>{data}</button></li>
      })}
    </ul>

    </div>
  {searched?<ShowSearchedItems products={searchResults} />:<ShowItems category={selectedCategory}/>} 

   </div>
  )
}

export default Home