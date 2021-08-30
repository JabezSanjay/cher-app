import React from "react";

const BrandImageDiv = ({ name, value, image }) => {
  const returnValueOfImageDiv = () => {
    //pass the value to backend instead of console log
    console.log(value);
  };

  return (
    <div className="hover:border-purple-800" onClick={returnValueOfImageDiv}>
      <div className="p-4 md:w-1/6">
        <div
          className={`h-full border-2 hover:border-purple-800 
          cursor-pointer border-opacity-60 rounded-lg overflow-hidden`}
        >
          <img
            className="object-cover object-center w-40"
            src={image}
            alt="blog"
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              CATEGORY
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              {name}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandImageDiv;
