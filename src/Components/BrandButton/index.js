import React, { useState } from "react";

const BrandButton = ({ buttonName, buttonValue }) => {
  const [selectedValue, setSelectedValue] = useState(buttonValue);

  return (
    <div>
      <button
        onClick={() => {
          console.log(selectedValue);
          setSelectedValue(buttonValue);
        }}
        className="text-3xl"
      >
        {buttonName}
      </button>
    </div>
  );
};

export default BrandButton;
