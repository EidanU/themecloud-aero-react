import { useSelector } from "react-redux";
import * as data from "../data/data.json";

const Select = ({ register, location }) => {
  const state = data.default.city;

  return (
    <select {...register(location, { required: true })}>
      {state.map((city) => (
        <option value={city} key={city}>
          {city}
        </option>
      ))}
    </select>
  );
};
export default Select;
