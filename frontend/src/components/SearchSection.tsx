import React, { useEffect } from 'react'
import { RiCloseCircleFill } from 'react-icons/ri';
import { AiOutlineSearch } from 'react-icons/ai';

interface SearchSectionProps {
    setSearched: Function,
    handleSearch: Function,
    setSearchTerm: Function,
    searchTerm: string
}

function SearchSection({ setSearched, handleSearch, setSearchTerm, searchTerm }: SearchSectionProps) {

    return (
        <div className='flex items-center justify-start w-72'>
            <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}

                onChange={(e) => {
                    handleSearch(e.target.value)

                }}
                className="w-100 p-2 px-2 relative rounded-l-xl bg-white border border-gray-400 text-gray-800 font-semibold focus:border-gray-800 focus:outline-none"
            />

            <button onClick={() => { setSearched(true) }} className='bg-orange-500 p-2 border-r border-t border-gray-400 border-b border-customBlue  rounded-r-xl focus:border-gray-800 focus:outline-none'><AiOutlineSearch color='white' size={24} /></button>

            {searchTerm && <button onClick={() => {
                setSearchTerm("");
            }} className='relative right-1/4'><RiCloseCircleFill size={30} /></button>}</div>
    )
}

export default SearchSection