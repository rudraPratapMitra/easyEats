import { useEffect,useState } from "react";

const useOnlineStatus=()=>{

    const [onlineStaus,setOnlineStatus]=useState(true);
    //check if online
    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setOnlineStatus(false);
        })

        window.addEventListener("online",()=>{
            setOnlineStatus(true);
        })
    },[])
    //boolean result
    return onlineStaus;

    
}
export default useOnlineStatus;