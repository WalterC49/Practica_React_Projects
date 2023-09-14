import { TodoId, TodoIdCompleted, Todo as TodoType } from "../types";

interface Props extends TodoType {
  handleRemove: ({ id }: TodoId) => void;
  handleCompleted: ({ id, completed }: TodoIdCompleted) => void;
}

export const Todo: React.FC<Props> = ({
  id,
  title,
  completed,
  handleRemove,
  handleCompleted,
}) => {
  return (
    <div>
      <input
        className="toggle"
        checked={completed}
        type="checkbox"
        onChange={event => {
          handleCompleted({ id, completed: event.target.checked });
        }}
      />
      <label>{title}</label>
      <button
        className="destroy"
        onClick={() => {
          handleRemove({ id });
        }}
      ></button>
    </div>
  );
};
