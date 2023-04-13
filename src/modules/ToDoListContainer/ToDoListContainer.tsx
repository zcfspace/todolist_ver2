import React from "react";
import ToDoItem from "../ToDoItem/ToDoItem";
import { Todo } from "../ToDoItem/ToDoItem.type";

type ToDoListContainerProps = {
  todos: Todo[];
  handleDelete: (id: number) => void;
  handleEdit: (id: number, newTask: string) => void;
  handleComplete: (id: number) => void;
};

const ToDoListContainer: React.FC<ToDoListContainerProps> = ({
  todos,
  handleDelete,
  handleEdit,
  handleComplete,
}) => {
  return (
    <div>
      {todos.map((todo) => (
        <ToDoItem
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
