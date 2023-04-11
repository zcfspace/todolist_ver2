import React from "react";
import TodoItem from "../TodoItem/TodoItem";

type ToDoListContainerProps = {
  todos: { id: number; task: string; complete: boolean }[];
  handleDelete: (id: number) => void;
  handleEdit: (id: number, newTask: string) => void;
  handleComplete: (id: number) => void;
};

const ToDoListContainer = ({
  todos,
  handleDelete,
  handleEdit,
  handleComplete,
}: ToDoListContainerProps) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          handleComplete={handleComplete}
        />
      ))}
    </div>
  );
};

export default ToDoListContainer;