import { useState } from "react";
import Select from "@atlaskit/select";
import { useSelector } from "react-redux";

const SinglSelect = () => {
  const city = useSelector((state) => state.iniFlight.city);
  return (
    <Select
      className="single-select"
      classNamePrefix="react-select"
      options={city}
      placeholder="Choose a City"
    />
  );
};

export default SinglSelect;
