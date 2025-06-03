import React from "react";

const Pages = ({ item }) => {
  return (
    <div className="text-white">
      <div className="bg-gray-800 p-4 rounded-xl h-full flex flex-col justify-between lg:w-115 lg:h-90">
        <div className="flex flex-col items-center">
          <img
            className="bg-white w-40 h-40 sm:w-40 sm:h-40 rounded-2xl"
            src={item.image}
            alt=""
          />
          <h1 className="p-2 text-center font-bold text-base sm:text-lg">
            {item.title}
          </h1>
          <h1 className="mb-2 text-gray-200 text-sm sm:text-base">
            Price: {item.price}
          </h1>
        </div>
        <div className="text-black flex flex-col sm:flex-row justify-center items-center gap-3 mt-2">
          <button className="bg-gray-200 rounded-lg px-4 py-2 text-md w-full sm:w-auto hover:cursor-pointer">
            Add to Cart
          </button>
          <button className="bg-gray-200 rounded-lg px-4 py-2 text-md w-full sm:w-auto hover:cursor-pointer">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pages;
