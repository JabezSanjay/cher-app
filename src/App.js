import React from "react";
import BrandButton from "./Components/BrandButton";
import BrandImageDiv from "./Components/BrandImageDiv";
import BrandInput from "./Components/BrandInput";

const App = () => {
  return (
    <div>
      <div className="m-10">
        <BrandButton buttonName="yes" buttonValue={true} />
        <BrandButton buttonName="no" buttonValue={false} />
      </div>
      <div className="m-10">
        <BrandImageDiv />
      </div>
      <div className="m-10">
        <BrandInput />
      </div>
    </div>
  );
};

export default App;
