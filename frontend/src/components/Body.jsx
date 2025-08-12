import ResturantCard from "./ResturantCard";
import useBody from "../hooks/useBody";
import { use, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import DiscountedResCard from "./DiscountedResCard";
import ShimmerResCard from "./ShimmerResCard";
import userContext from "../Utils/userContext";
import { FaSearch, FaStar, FaRedo, FaUser, FaWifi } from "react-icons/fa";

function Body() {
  const restaurantList = useBody(); 
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const onlineStatus = useOnlineStatus();
  const { username, setUsername } = useContext(userContext);

  useEffect(() => {
    setFilteredRestaurants(restaurantList);
  }, [restaurantList]);

  const resWithDiscount = restaurantList.filter(
    (restaurant) => restaurant.info.aggregatedDiscountInfoV3
  );
  const DiscountedRestaurntCard = DiscountedResCard(ResturantCard);

  return onlineStatus ? (
    restaurantList.length === 0 ? (
      <ShimmerResCard />
    ) : (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 py-12 mb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Discover Amazing Restaurants
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Find the perfect meal from thousands of restaurants near you
              </p>
            </div>
          </div>
        </div>

        {/* Controls Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
            <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center">
              
              {/* Search Bar */}
              <div className="flex-1">
                <div className="relative">
                  <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white shadow-sm"
                    type="text"
                    placeholder="Search restaurants, cuisines..."
                    value={searchVal}
                    onChange={(e) => {
                      const userInput = e.target.value;
                      setSearchVal(userInput);
                      const searchItem = restaurantList.filter((restaurant) => {
                        return restaurant.info.name.toLowerCase().includes(userInput.toLowerCase());
                      });
                      setFilteredRestaurants(searchItem);
                    }}
                  />
                </div>
              </div>

              {/* Filter Buttons */}
              <div className="flex flex-wrap gap-3">
                <button
                  className="flex items-center space-x-2 px-6 py-3 bg-orange-500 text-white rounded-xl hover:transition-all duration-300 transform hover:scale-105 shadow-lg font-medium"
                  onClick={() => {
                    const topRatedRestaurant = filteredRestaurants.filter(
                      (restaurant) => restaurant.info.avgRating > 4.3
                    );
                    setFilteredRestaurants(topRatedRestaurant);
                  }}
                >
                  <FaStar />
                  <span>Top Rated</span>
                </button>

                <button
                  className="flex items-center space-x-2 px-6 py-3 bg-blue-500 text-white rounded-xl hover:transition-all duration-300 transform hover:scale-105 shadow-lg font-medium"
                  onClick={() => {
                    setFilteredRestaurants(restaurantList);
                    setSearchVal("");
                  }}
                >
                  <FaRedo />
                  <span>Refresh</span>
                </button>
              </div>

              {/* User Input */}
              <div className="lg:w-64">
                <div className="relative">
                  <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white shadow-sm"
                    type="text"
                    placeholder="Your name"
                    value={username}
                    onChange={(e) => {
                      const userInput = e.target.value;
                      setUsername(userInput);
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Results Counter */}
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-gray-600 font-medium">
                Showing <span className="text-orange-600 font-bold">{filteredRestaurants.length}</span> restaurants
                {searchVal && (
                  <span className="ml-2">
                    for "<span className="text-purple-600 font-semibold">{searchVal}</span>"
                  </span>
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Restaurant Cards Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          {filteredRestaurants.length === 0 ? (
            <div className="text-center py-16">
              <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">No restaurants found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your search or filters</p>
                <button
                  onClick={() => {
                    setFilteredRestaurants(restaurantList);
                    setSearchVal("");
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Show All Restaurants
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredRestaurants.map((restaurant) => {
                const {
                  id,
                  name,
                  cloudinaryImageId,
                  cuisines,
                  avgRating,
                  sla: { deliveryTime },
                  aggregatedDiscountInfoV3
                } = restaurant.info;

                const hasDiscount = resWithDiscount.some(
                  (res) => res.info.id === restaurant.info.id
                );
                const CardToRender = hasDiscount ? DiscountedRestaurntCard : ResturantCard;

                return (
                  <Link
                    to={`/resturants/${id}`}
                    key={id}
                    className="group transform transition-all duration-300 hover:scale-105"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group-hover:border-orange-200">
                      <CardToRender
                        key={id}
                        name={name}
                        imageId={cloudinaryImageId}
                        cuisines={cuisines}
                        rating={avgRating}
                        deliveryTime={deliveryTime}
                        discountInfo={aggregatedDiscountInfoV3}
                      />
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
    )
  ) : (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center border border-red-200">
        <div className="bg-gradient-to-r from-red-400 to-red-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <FaWifi className="text-3xl text-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">You're Offline</h2>
        <p className="text-gray-600 text-lg mb-6">
          Please check your internet connection and try again.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="px-8 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}

export default Body;