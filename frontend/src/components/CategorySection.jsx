import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";

function CategorySection({ categoryData }) {
  const { title, itemCards } = categoryData.card.card;

  if (!itemCards || itemCards.length === 0) return null;
  const [isOpen,setIsOpen]=useState(true)

  return (
    <div className="mb-6 text-center">
      {/* Accordion Title */}
      <div className="w-10/12 flex justify-between items-center m-auto bg-gray-100 shadow-lg p-4 rounded-md"
      onClick={() => setIsOpen(!isOpen)}>
        <h2 className="text-xl font-semibold">
          {title} [{itemCards.length}]
        </h2>
        <FaAngleDown className={`transform transition-transform duration-300 ${isOpen?"rotate-0":"rotate-180" }`} />
      </div>

      {/* Accordion Content */}
      {isOpen&&(
      <div>
        {itemCards.map((itemCard) => {
          const info = itemCard.card.info;
          const imageId = info.imageId;
          const price = (info.price || info.defaultPrice) / 100;

          return (
            <div
              key={info.id}
              className="flex justify-between items-start w-9/12 m-auto border-b pb-4 pt-4 min-w-0"
            >
              {/* Left Info Section */}
              <div className="text-left pr-4 break-words w-9/12">
                <h3 className="font-bold">{info.name}</h3>
                <p className="font-bold text-gray-700">₹{price}</p>
                <p className="text-sm text-gray-500">{info.description}</p>
              </div>

              {/* Right Image Section */}
              <div className=" relative w-3/12 flex flex-col items-center">
                {imageId ? (
                <div className="h-40 overflow-hidden rounded-lg">
                  <img
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imageId}`}
                    alt={info.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="flex items-center justify-center text-gray-400 text-sm bg-gray-100 rounded-lg">
                  No image
                </div>
              )}
              <button className="absolute bottom-2 px-3 py-1  text-green-600 border bg-white rounded-md shadow-sm hover:bg-gray-200 font-medium">
                 + Add
             </button>
              </div>
              
            </div>
            
          );
        })}
      </div>
      )}
    </div>
  );
}

export default CategorySection;


