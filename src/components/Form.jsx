import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import { TaskContext } from "../context/TaskProvider";

const Form = () => {
  const { task, handleChange,handleSubmit } = useContext(TaskContext);

  return (
    <div>
      <Container onSubmit={handleSubmit}>
        <input type="text" value={task} onChange={handleChange} />
        <button>Add</button>
      </Container>
    </div>
  );
};

export default Form;

const Container = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6rem;
  width: 70%;
  margin: 2rem auto;
  border: 2px solid black;
  padding: 2rem;
  border-radius: 10px;

  input {
    font-size: 2rem;
    width: 80%;
    border: none;
    border-bottom: 2px solid grey;
    margin-right: 2rem;
    height: 4rem;
    padding: 2rem 1rem;

    &:focus {
      outline: none;
    }
  }

  button {
    border: 2px solid grey;
    background-color: yellowgreen;
    padding: 0.3rem 1.5rem;
    border-radius: 10px;
    font-size: 2rem;
  }
`;
