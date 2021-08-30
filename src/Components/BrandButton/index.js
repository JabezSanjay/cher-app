import React, { useState } from "react";

const BrandButton = ({ buttonName, buttonValue, setActive, active }) => {
  const [selectedValue, setSelectedValue] = useState(buttonValue);

  return (
    <div>
      <button
        onClick={() => {
          // console.log(selectedValue);
          setSelectedValue(buttonValue);
        }}
        className={`p-3 w-20 m-4 text-white rounded-lg bg-indigo-800 hover:bg-indigo-600 `}
      >
        {buttonName}
      </button>
    </div>
  );
};

export default BrandButton;
