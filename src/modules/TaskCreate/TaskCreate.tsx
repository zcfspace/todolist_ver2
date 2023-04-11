import React, { useState } from "react";
import styled from "styled-components";
import { SAddButton } from "../../components/Button/SButton";

type TaskCreateProps = {
  handleAdd: (task: string) => void;
};

const TaskCreate = ({ handleAdd }: TaskCreateProps) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAdd(task);
    setTask("");
  };

  return (
    <STaskForm className="task-form" onSubmit={handleSubmit}>
      <SInput
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Ingrese una tarea"
      />
      <SAddButton type="submit">Agregar</SAddButton>
    </STaskForm>
  );
};

const STaskForm = styled.form``;

const SInput = styled.input``;

export default TaskCreate;
