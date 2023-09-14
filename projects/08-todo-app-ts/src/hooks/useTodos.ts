import { useState } from "react";
import { ListOfTodos, TodoId, TodoIdCompleted, TodoTitle } from "../types";

/* const mockTodos = [
  {
    id: "1",
    title: "todo 1",
    completed: false,
  },
  {
    id: "2",
    title: "todo 2",
    completed: true,
  },
  {
    id: "3",
    title: "todo 3",
    completed: false,
  },
]; */

export const useTodos = (mockTodos: ListOfTodos) => {
  const [todos, setTodos] = useState<ListOfTodos>(mockTodos);

  const handleAddTodo = ({ title }: TodoTitle) => {
    const newTodo = {
      title,
      id: crypto.randomUUID(),
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const handleRemove = ({ id }: TodoId) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };

  const handleCompleted = ({ id, completed }: TodoIdCompleted) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const onClearCompleted = () => {
    const newTodos = todos.filter(todo => !todo.completed);
    setTodos(newTodos);
  };

  return {
    todos,
    handleAddTodo,
    handleCompleted,
    handleRemove,
    onClearCompleted,
  };
};
