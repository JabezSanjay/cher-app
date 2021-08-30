import React from "react";

const BrandButton = ({ buttonName, buttonValue }) => {
  return (
    <div>
      <button
        onClick={() => {
          console.log(buttonValue);
        }}
        className={`p-3 w-20 m-4 text-black hover:text-white hover:bg-purple-800 border-2 border-purple-800 `}
      >
        {buttonName}
      </button>
    </div>
  );
};

export default BrandButton;
