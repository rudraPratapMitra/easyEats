import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import useOnlineStatus from "../hooks/useOnlineStatus";
import userContext from "../Utils/userContext";
import { useSelector } from "react-redux";

function Header() {
    const [isloggedIn, setBtnName] = useState(false);
    const onlineStatus = useOnlineStatus();
    const user = useContext(userContext);
    const cartObject = useSelector((state) => state.cart.items);
    const totalItems = Object.values(cartObject).reduce((acc, i) => acc + (i?.quantity || 0), 0);

    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo Section */}
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWBp7aun7JiFQKHR7ak7Xbx8KXa_uEYR-9VQ&s"
                                alt="logo"
                                className="h-10 w-10 rounded-lg object-cover"
                            />
                            <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                                FoodieApp
                            </span>
                        </Link>
                    </div>

                    {/* Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link
                            to="/"
                            className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200 relative group"
                        >
                            Home
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link
                            to="/about"
                            className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200 relative group"
                        >
                            About Us
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link
                            to="/contact"
                            className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200 relative group"
                        >
                            Contact Us
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                    </nav>

                    {/* Right Section */}
                    <div className="flex items-center space-x-6">
                        {/* Online Status */}
                        <div className="flex items-center space-x-2">
                            <div className={`w-2 h-2 rounded-full ${onlineStatus ? 'bg-green-500' : 'bg-red-500'}`}></div>
                            <span className="text-sm font-medium text-gray-600">
                                {onlineStatus ? "Online" : "Offline"}
                            </span>
                        </div>

                        {/* Cart */}
                        <Link to="/cart" className="relative group">
                            <div className="flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                                <FaShoppingCart className="text-lg" />
                                <span className="font-medium">{totalItems}</span>
                            </div>
                        </Link>

                        {/* User Profile */}
                        <div className="flex items-center space-x-2 bg-gray-100 px-3 py-2 rounded-full hover:bg-gray-200 transition-colors">
                            <FaUser className="text-gray-600" />
                            <span className="text-gray-700 font-medium">{user.username}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden border-t border-gray-200 bg-white">
                <div className="px-4 py-3 space-y-2">
                    <Link
                        to="/"
                        className="block px-3 py-2 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        className="block px-3 py-2 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                    >
                        About Us
                    </Link>
                    <Link
                        to="/contact"
                        className="block px-3 py-2 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;

