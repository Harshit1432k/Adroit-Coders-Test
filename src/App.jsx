import React from "react";
import styled from "styled-components";
import Form from "./components/Form";
import TasksContainer from "./components/TasksContainer";

const App = () => {
  return (
    <Container>
      <h1 className="heading">Task List</h1>

      <Form></Form>

      <TasksContainer></TasksContainer>
    </Container>
  );
};

export default App;

const Container = styled.div`
  border: 2px solid black;
  width: 50rem;
  min-height: 60rem;
  margin: 10rem auto;

  .heading {
    font-size: 4rem;
    text-align: center;
    margin-top: 1.2rem;
  }
`;
