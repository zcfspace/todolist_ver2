import React, { useState } from "react";
import styled from "styled-components";
import { Todo } from "./ToDoItem.type";
import {
  SButton,
  SAddButton,
  SDeleteButton,
  SEditButton,
} from "../../components/Button/SButton";

type TodoItemProps = {
  todo: Todo;
  handleDelete: (id: number) => void;
  handleEdit: (id: number, newTask: string) => void;
  handleComplete: (id: number) => void;
};

const ToDoItem = ({
  todo,
  handleDelete,
  handleEdit,
  handleComplete,
}: TodoItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(todo.task);

  const handleUpdate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleEdit(todo.id, newTask);
    setIsEditing(false);
  };

  return (
    <SUl>
      {isEditing ? (
        <STaskForm onSubmit={handleUpdate}>
          <SInput
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.currentTarget.value)}
          />
          <SButton type="submit">Save</SButton>
        </STaskForm>
      ) : (
        <SDivOneTask>
          <STaskSpan complete={todo.complete}>{todo.task}</STaskSpan>
          <SButtonDiv>
            <SEditButton onClick={() => setIsEditing(true)}>Edit</SEditButton>
            <SDeleteButton onClick={() => handleDelete(todo.id)}>
              Delete
            </SDeleteButton>
            <SAddButton onClick={() => handleComplete(todo.id)}>
              Done
            </SAddButton>
          </SButtonDiv>
        </SDivOneTask>
      )}
    </SUl>
  );
};

const SDivOneTask = styled.div`
  display: flex;
  justify-content: space-between;
`;

const STaskSpan = styled.span<{ complete: boolean }>`
  text-decoration: ${(props) => (props.complete ? "line-through" : "none")};
  color: ${(props) => (props.complete ? "red" : "black")};
  align-items: center;
`;

const SUl = styled.ul``;
const STaskForm = styled.form``;
const SInput = styled.input``;
const SButtonDiv = styled.div``;

export default ToDoItem;