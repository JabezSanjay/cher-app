import React from "react";
import BrandButton from "./Components/BrandButton";
import BrandImageDiv from "./Components/BrandImageDiv";
import BrandInput from "./Components/BrandInput";
import HomeOutline from "./assets/images/home.svg";
import RentOutline from "./assets/images/rent.svg";

const App = () => {
  return (
    <div>
      <div className="m-10">
        <BrandButton />
      </div>
      <div>
        <BrandImageDiv name="Home" value="home" image={HomeOutline} />
        <BrandImageDiv name="Rent" value="rent" image={RentOutline} />
      </div>
      <div className="m-10">
        <BrandInput />
      </div>
    </div>
  );
};

export default App;
