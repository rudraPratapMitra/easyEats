import { useState,useEffect } from "react";
const useResInfo=(resId)=>{
    const [resInfo,setResInfo]=useState(null);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData =async()=>{
        const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9698196&lng=77.7499721&restaurantId=${resId}`
    );
    const json=await data.json();
    setResInfo(json);
    }
    return resInfo;
}
export default useResInfo;