import React from "react";
import { useForm } from "react-hook-form";
import Select from "../components/Select";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Select register={register} airport="departure" />
      {errors.departure && <span>This field is required</span>}
      <Select register={register} airport="arrival" />
      {errors.arrival && <span>This field is required</span>}
      <input type="date" {...register("date", { required: true })} />
      {errors.date && <span>This field is required</span>}
      <input type="submit" />
    </form>
  );
}
