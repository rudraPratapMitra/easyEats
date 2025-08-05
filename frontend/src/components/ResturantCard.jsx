 import { CiTimer } from "react-icons/ci";
 import { FaStar } from "react-icons/fa";
function ResturantCard(props) {
  const { name, imageId, cuisines, rating, deliveryTime } = props;

  return (
    <div className="w-[280px] h-[350px] bg-gray-100 m-2 p-2 rounded-lg shadow-md flex flex-col justify-between">
      {/* Image: Top Half */}
      <div className="h-1/2">
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imageId}`}
          className="w-full h-full"
          alt="res-logo"
        />
      </div>

      {/* Info: Bottom Half */}
      <div className="h-1/2 px-2 py-1 flex flex-col justify-evenly">
        <h3 className="font-bold text-md">{name}</h3>
        <h4 className="text-sm text-gray-600 ">{cuisines.join(", ")}</h4>
        <h4 className="text-sm flex items-center gap-1">
            <FaStar className="text-yellow-500" /> {rating}
        </h4>
        <h4 className="text-sm flex items-center gap-1">
            <CiTimer className="text-gray-600" /> {deliveryTime}
        </h4>
      </div>
    </div>
  );
}

export default ResturantCard;


