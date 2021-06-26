import React from "react";
import { useForm } from "react-hook-form";
import Select from "../components/Select";
import { useHistory } from "react-router-dom";

export default function App() {
  let history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    history.push(`/flight/trip?from=${data.departure}&to=${data.arrival}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Select register={register} location="departure" />
      {errors.departure && <span>This field is required</span>}
      <Select register={register} location="arrival" />
      {errors.arrival && <span>This field is required</span>}
      <input type="date" {...register("date", { required: true })} />
      {errors.date && <span>This field is required</span>}
      <input type="submit" />
    </form>
  );
}
