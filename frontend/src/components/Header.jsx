import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import useOnlineStatus from "../hooks/useOnlineStatus"
import userContext from "../Utils/userContext";
function Header(){
    const [isloggedIn,setBtnName]=useState(false)
    const onlineStatus=useOnlineStatus();
    const user=useContext(userContext);

    return (
        <div className="flex justify-between bg-orange-300 shadow-sm mb-5 "> 
            <div className="w-56">
                <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWBp7aun7JiFQKHR7ak7Xbx8KXa_uEYR-9VQ&s"
                    alt="logo"
                    className="logo-icon" 
                />
            </div>
            <div >
                <ul className="flex p-4 m-4 items-center font-medium">
                    <li className="py-2 px-2">{onlineStatus ? "🟢 Online" : "🔴 Offline"}</li>
                    <li className="py-2 px-2"><Link to="/">Home</Link></li>
                    <li className="py-2 px-2"><Link to="/about">About Us</Link></li>
                    <li className="py-2 px-2"><Link to="/contact">Contact Us</Link></li>
                    <li className="py-2 px-2"><FaShoppingCart className="text-xl" /></li>
                    {/* <li className="py-2 px-2">
                        <button onClick={() => setBtnName(!isloggedIn)}>
                        {isloggedIn ? "Logout" : "Login"}
                        </button>
                    </li> */}
                    <li>{user.username}</li>

                </ul>
            </div>
        </div>
    )
}
export default Header;

