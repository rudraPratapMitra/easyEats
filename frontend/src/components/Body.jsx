import ResturantCard from "./ResturantCard";
import useBody from "../hooks/useBody";
import { use, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import DiscountedResCard from "./DiscountedResCard";
import ShimmerResCard from "./ShimmerResCard";
import userContext from "../Utils/userContext";
function Body() {
  const restaurantList = useBody(); 
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchVal,setSearchVal]=useState("");
  const onlineStatus=useOnlineStatus();
 const {username,setUsername}=useContext(userContext)
  useEffect(()=>{
    setFilteredRestaurants(restaurantList);
  },[restaurantList])
  const resWithDiscount=restaurantList.filter(
    (restaurant) => restaurant.info.aggregatedDiscountInfoV3
  )
  const DiscountedRestaurntCard=DiscountedResCard(ResturantCard);

  return onlineStatus?(
    restaurantList.length===0?<ShimmerResCard/>:
    <div className="body">
      <div className="flex  m-4 p-4 items-center">
          <div className="m-4 p-4">
            <input  className="border border-black m-2 p-2" type="text" placeholder="Search" value={searchVal} onChange={(e)=>{
              const userInput=e.target.value
              setSearchVal(userInput);
              const searchItem=restaurantList.filter((restaurant)=>{
                return restaurant.info.name.toLowerCase().includes(userInput.toLowerCase())
              })
              setFilteredRestaurants(searchItem);
            }} />

          </div>
          <div className="m-4 p-4">
            <button
            className="top-rated-btn px-4 py-2 bg-red-400 text-white rounded-lg"
            onClick={() => {
              const topRatedRestaurant = filteredRestaurants.filter(
                (restaurant) => restaurant.info.avgRating > 4.3
              );
              setFilteredRestaurants(topRatedRestaurant); 
            }}
          >
          Top Rated Restaurants
          </button>
          </div>
          <div>
            <input className="border border-black m-2 p-2" type="text" placeholder="User" value={username}
            onChange={(e)=>{
              const userInput=e.target.value;
              setUsername(userInput)
            }}/>
          </div>
          <div>
            <button className="refresh-btn px-2 py-2 bg-green-400 text-white rounded-lg" 
            onClick={()=>{
              setFilteredRestaurants(restaurantList)
            }}>
              Refresh
            </button>
          </div>
      </div>

      <div className="resturant-card-container flex flex-wrap gap-4 justify-start">
        {
        filteredRestaurants.map((restaurant) => {
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
              style={{ textDecoration: "none", color: "inherit" }}
            >
            <CardToRender
              key={id}
              name={name}
              imageId={cloudinaryImageId}
              cuisines={cuisines}
              rating={avgRating}
              deliveryTime={deliveryTime}
              discountInfo={aggregatedDiscountInfoV3} // needed by HOC
            />
            </Link>
          );
        }
      )}
      </div>
    </div>
  ): (
  <div className="offline-warning">
    <h2>⚠️ Looks like you're offline</h2>
    <p>Please check your internet connection.</p>
  </div>
);
}

export default Body;
