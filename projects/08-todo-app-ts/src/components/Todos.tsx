import { ListOfTodos, TodoId, TodoIdCompleted } from "../types";
import { Todo } from "./Todo";

interface Props {
  todos: ListOfTodos;
  handleRemove: ({ id }: TodoId) => void;
  handleCompleted: ({ id, completed }: TodoIdCompleted) => void;
}

export const Todos: React.FC<Props> = ({
  todos,
  handleRemove,
  handleCompleted,
}) => {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <li key={todo.id} className={`${todo.completed ? "completed" : ""}`}>
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            handleCompleted={handleCompleted}
            handleRemove={handleRemove}
          />
        </li>
      ))}
    </ul>
  );
};
