import { useEffect,useState } from "react";

const useBody=()=>{
    const[resList,setResList] =useState([]);
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData=async()=>{
        const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9698196&lng=77.7499721&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
     const restaurants = json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      setResList(restaurants);
    }
    return resList;
    
}
export default useBody