import { useEffect, useState } from "react";
export function useRangeOfProduct(category:string,range:number) {
    const [newrange,setNewRange] = useState(range);
    const [oldrange,setOldRange] = useState(0);
    const [selected,setSelected] = useState(0);
    useEffect(()=>{
        setNewRange(range);
        setOldRange(0);
        setSelected(0);
        },[category])

        return { 
            oldrange,newrange,
            setOldRange,setNewRange,
            selected,setSelected
        }
}

export default useRangeOfProduct