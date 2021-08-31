import React, { useEffect, useRef, useState } from "react";

const apiKey = "AIzaSyCSLSZ4uesQ-2Er85fECnQJ_5kuGteLrWY";
const mapApiJs = "https://maps.googleapis.com/maps/api/js";
// const geocodeJson = "https://maps.googleapis.com/maps/api/geocode/json";

function loadAsyncScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    Object.assign(script, {
      type: "text/javascript",
      async: true,
      src,
    });
    script.addEventListener("load", () => resolve(script));
    document.head.appendChild(script);
  });
}

const extractAddress = (place) => {
  const address = {
    city: "",
    state: "",
    zip: "",
    country: "",
    plain() {
      const city = this.city ? this.city + ", " : "";
      const zip = this.zip ? this.zip + ", " : "";
      const state = this.state ? this.state + ", " : "";
      return city + zip + state + this.country;
    },
  };

  if (!Array.isArray(place?.address_components)) {
    return address;
  }

  place.address_components.forEach((component) => {
    const types = component.types;
    const value = component.long_name;

    if (types.includes("locality")) {
      address.city = value;
    }

    if (types.includes("administrative_area_level_2")) {
      address.state = value;
    }

    if (types.includes("postal_code")) {
      address.zip = value;
    }

    if (types.includes("country")) {
      address.country = value;
    }
  });

  return address;
};

const BrandInput = () => {
  const searchInputZip = useRef(null);
  const searchInputCity = useRef(null);
  const [address, setAddress] = useState("");

  // init gmap script
  const initMapScript = () => {
    // if script already loaded
    if (window.google) {
      return Promise.resolve();
    }
    const src = `${mapApiJs}?key=${apiKey}&libraries=places&v=weekly`;
    return loadAsyncScript(src);
  };

  // do something on address change
  const onChangeAddress = (autocomplete) => {
    const place = autocomplete.getPlace();
    setAddress(extractAddress(place));
  };

  // init autocomplete
  const initAutocomplete = () => {
    if (!searchInputCity.current) return;
    if (!searchInputZip.current) return;

    const autocompleteZip = new window.google.maps.places.Autocomplete(
      searchInputCity.current
    );
    autocompleteZip.setFields(["address_component", "geometry"]);
    autocompleteZip.addListener("place_changed", () =>
      onChangeAddress(autocompleteZip)
    );
    const autocompleteCity = new window.google.maps.places.Autocomplete(
      searchInputZip.current
    );
    autocompleteCity.setFields(["address_component", "geometry"]);
    autocompleteCity.addListener("place_changed", () =>
      onChangeAddress(autocompleteCity)
    );
  };

  // const reverseGeocode = ({ latitude: lat, longitude: lng }) => {
  //   const url = `${geocodeJson}?key=${apiKey}&latlng=${lat},${lng}`;
  //   searchInput.current.value = "Getting your location...";
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((location) => {
  //       const place = location.results[0];
  //       const _address = extractAddress(place);
  //       setAddress(_address);
  //       searchInput.current.value = _address.plain();
  //     });
  // };

  // const findMyLocation = () => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       reverseGeocode(position.coords);
  //     });
  //   }
  // };

  // load map script after mounted
  useEffect(() => {
    initMapScript().then(() => initAutocomplete());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col">
      <input
        value={address.country}
        className="bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 w-56 mb-5 transition-colors duration-200 ease-in-out"
        type="text"
        placeholder="Country"
        onChange={(e) => {
          setAddress(e.target.value);
        }}
      />
      <input
        value={address.city}
        className="bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 w-56 mb-5 leading-8 transition-colors duration-200 ease-in-out"
        type="text"
        placeholder="City"
        ref={searchInputCity}
        onChange={(e) => {
          setAddress(e.target.value);
        }}
      />
      <input
        value={address.zip}
        ref={searchInputZip}
        className="bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 w-56 leading-8 transition-colors duration-200 ease-in-out"
        type="text"
        placeholder="Zip Code"
        onChange={(e) => {
          setAddress(e.target.value);
        }}
      />
    </div>
  );
};

export default BrandInput;
