import { useSelector } from "react-redux";

const Select = ({ register, airport }) => {
  const state = useSelector((state) => state.iniFlight.city);

  return (
    <select {...register(airport, { required: true })}>
      {state.map((city) => (
        <option value={city} key={city}>
          {city}
        </option>
      ))}
    </select>
  );
};
export default Select;
