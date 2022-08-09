import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import  { TaskContext } from "../context/TaskProvider";
import Task from "./Task";

const TasksContainer = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <Container>
      {tasks.map((task) => {
        return <Task key={task.id} text={task.text} id={task.id} isTaskCompleted={task.isTaskCompleted}></Task>;
      })}
    </Container>
  );
};

export default TasksContainer;

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`;
