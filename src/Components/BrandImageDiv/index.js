import React from "react";

const BrandImageDiv = ({ name, value, image }) => {
  const returnValueOfImageDiv = () => {
    //pass the value to backend instead of console log
    console.log(value);
  };

  return (
    <div className="hover:border-purple-800" onClick={returnValueOfImageDiv}>
      <div class="p-4 md:w-1/6">
        <div
          class={`h-full border-2 hover:border-purple-800 
          cursor-pointer border-opacity-60 rounded-lg overflow-hidden`}
        >
          <img class="object-cover object-center w-40" src={image} alt="blog" />
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              CATEGORY
            </h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
              {name}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandImageDiv;
