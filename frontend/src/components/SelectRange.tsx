import React from 'react'
import useRangeOfProduct from '../customHooks/useRangeOfProduct';
interface SelectRangeProps{
    setNewRange:Function,
    setOldRange:Function,
    setSelected:Function,
    selected:number,
    category:string,
    categoryProductLength:number,
    range:number

}
const  SelectRange:React.FC<SelectRangeProps>=({setNewRange,setOldRange,setSelected,selected,categoryProductLength,category,range}) =>{
  
    const  rangeLength = [];
    for(let i=0; i<Math.ceil(categoryProductLength/range);i++)
      {
       rangeLength.push(i)
      }
  return (
<div className='flex  items-center justify-center gap-2 py-5'>
        {rangeLength.map((index)=>
      {
return <button className={`border-2 ${selected==index?'bg-orange-500 text-white':'text-gray-700 border-gray-400'} p-4 rounded-lg h-12 flex items-center`}  onClick={()=>{
  setNewRange((index+1)*range);
  setOldRange(index*range);
  setSelected(index);
}} >{`${index+1}`}</button>
      })}
      </div>
  )
}

export default SelectRange