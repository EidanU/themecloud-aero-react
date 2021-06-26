import React from "react";
import { useForm } from "react-hook-form";
import SelectInput from "../components/Select";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import * as data from "../data/data.json";

export default function App() {
  let history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    history.push(
      `/flight/trip?from=${data.departure}&to=${data.arrival}&date=${data.date}`
    );
  };

  return (
    <Container>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <label>Départ</label>
        <StyledSelect register={register} location="departure" />
        {errors.departure && <span>This field is required</span>}

        <label>Arrivée</label>
        <StyledSelect register={register} location="arrival" />
        {errors.arrival && <span>This field is required</span>}

        <label>Date du voyage</label>
        <StyledInput type="date" {...register("date", { required: true })} />
        {errors.date && <span>This field is required</span>}

        <StyledInput type="submit" value="Rechercher" />
      </StyledForm>
    </Container>
  );
}

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

//il faudrait un state pour la departure et un state ou l'arrivée un nom de ville dedans
// lorsque l'on selectionne cela active une fonction qui modifie le state, et rajoute le nom de cette ville
// lorsque dans le state departure on met paris, alors on filtre dans toute la data
