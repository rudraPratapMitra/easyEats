import useResInfo from "../hooks/useResInfo";
import { useParams } from "react-router-dom";
import CategorySection from "./CategorySection";
import ShimmerResCard from "./ShimmerResCard";
import { FaStar } from "react-icons/fa";
import { CiClock2,CiLocationOn  } from "react-icons/ci";

function ResturantInfo() {
    const { resId } = useParams();////----------->usePARAMS
    const resInfo = useResInfo(resId);
    if (!resInfo) return <ShimmerResCard/>//---->shimmer ui
    const restaurant=resInfo?.data?.cards[2]?.card?.card?.info;
   const allCards = resInfo?.data?.cards?.find(
  (card) => card?.groupedCard?.cardGroupMap?.REGULAR
)?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

const menuCategories = allCards.filter((cardObj) => {
  const type = cardObj?.card?.card?.["@type"];
  return (
    type === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
    type === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
  );
});
  return (
 <div className="text-center">
  <h1 className="text-4xl font-bold text-gray-800 mb-2">{restaurant.name}</h1>

  <div className="flex justify-center items-center text-xl text-yellow-600 mb-1">
    <FaStar className="mr-1" />
    <span>{restaurant.avgRating}</span>
  </div>

  <div className="flex justify-center items-center text-gray-600 mb-1">
    <CiLocationOn className="mr-1" />
    <span>{restaurant.areaName}</span>
  </div>

  <div className="flex justify-center items-center text-gray-600 mb-4">
    <CiClock2 className="mr-1" />
    <span>{restaurant.sla.deliveryTime} mins Delivery</span>
  </div>

  <hr className="my-4 border-gray-300" />

  <div>
    {menuCategories.map((category, i) => (
      <CategorySection key={i} categoryData={category} />
    ))}
  </div>
</div>

);

}

export default ResturantInfo;


