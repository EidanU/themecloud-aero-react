import * as data from "../data/data.json";

//This component is a select from the form in the HomePage
const Select = ({ register, location, className }) => {
  const cities = data.default.city;

  return (
    <select className={className} {...register(location, { required: true })}>
      <option value=""></option>
      {cities.map((city) => (
        <option value={city} key={city}>
          {city}
        </option>
      ))}
    </select>
  );
};
export default Select;
