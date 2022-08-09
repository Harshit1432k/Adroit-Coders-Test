import React, { useState } from "react";
import { useContext } from "react";
import styled from "styled-components";
import { TaskContext } from "../context/TaskProvider";

const Task = ({ text, id }) => {
  const { removeTask } = useContext(TaskContext);

  const [isTaskComplete, setIsTaskComplete] = useState(false);

  const checkBoxToggle = () => {
    setIsTaskComplete((prevState) => !prevState);
  };


  return (
    <Container>
      <div
        className={` task ${
          isTaskComplete ? "task--completed " : "task--pending"
        }`}
      >
        <input type="checkbox" value="submit" onChange={checkBoxToggle} />

        <p>{text}</p>

        <button
          onClick={() => {
            removeTask(id);
          }}
        >
          X
        </button>
      </div>
    </Container>
  );
};

export default Task;

const Container = styled.div`
  .task {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 2px solid black;
    padding: 0 2rem;
    font-size: 3rem;
    margin-bottom: 1rem;
    border-radius: 10px;

    button {
      all: unset;
      font-size: 3rem;
      cursor: pointer;
    }
  }

  .task--completed {
    background-color: #00cc00;

    p {
      text-decoration: line-through;
    }
  }

  .task--pending {
    background-color: #fffb1f;
  }
`;
