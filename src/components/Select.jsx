import { useSelector } from "react-redux";
import * as data from "../data/data.json";

const Select = ({ register, location, className }) => {
  const state = data.default.city;

  return (
    <select className={className} {...register(location, { required: true })}>
      <option value=""></option>
      {state.map((city) => (
        <option value={city} key={city}>
          {city}
        </option>
      ))}
    </select>
  );
};
export default Select;
