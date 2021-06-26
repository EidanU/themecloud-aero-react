import { useSelector } from "react-redux";

const Select = ({ register, location }) => {
  const state = useSelector((state) => state.iniFlight.city);

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
