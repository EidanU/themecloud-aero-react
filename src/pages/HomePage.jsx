import React from "react";
import { useForm } from "react-hook-form";
import SelectInput from "../components/Select";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

export default function App() {
  // The useHistory redirect to another url
  let history = useHistory();
  // Here I import all function from the UseForm. I use useForm because it come with good error handling
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //I decide to pass my data through the url because in this project it's the better way to keep the data through pages
  const onSubmit = (data) => {
    history.push(
      `/flight/trip?from=${data.departure}&to=${data.arrival}&date=${data.date}`
    );
  };

  return (
    <Container>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <label>Departure</label>
        <StyledSelect register={register} location="departure" />
        {errors.departure && <p>This field is required</p>}

        <label>Landing</label>
        <StyledSelect register={register} location="arrival" />
        {errors.arrival && <p>This field is required</p>}

        <label>Travel date</label>
        <StyledInput type="date" {...register("date", { required: true })} />
        {errors.date && <p>This field is required</p>}

        <StyledInput type="submit" value="Reserve" />
      </StyledForm>
    </Container>
  );
}
//Here I use styled component to stylize in the Javascript code
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background: #e5e5e5;
`;
const StyledForm = styled.form`
  margin: auto;
  display: block;
  padding: 2%;
  border-radius: 3px;
  background: white;
`;
const StyledSelect = styled(SelectInput)`
  display: block;
  background: #e5e5e5;
  border: none;
  border-radius: 2px;
  margin-bottom: 10%;
  margin-top: 3%;
  height: 30px;
  width: 200px;
`;
const StyledInput = styled.input`
  background: #e5e5e5;
  display: block;
  border: none;
  border-radius: 2px;
  margin-top: 3%;
  margin-bottom: 10%;
  height: 30px;
`;
