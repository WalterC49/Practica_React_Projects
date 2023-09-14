import { type FilterValue } from "../types";
import { Filters } from "./Filters";

interface Props {
  activeCounts: number;
  completedCounts: number;
  filterSelected: FilterValue;
  handleFilterChange: (filter: FilterValue) => void;
  onClearCompleted: () => void;
}

export const Footer: React.FC<Props> = ({
  activeCounts,
  completedCounts,
  filterSelected,
  handleFilterChange,
  onClearCompleted,
}) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCounts}</strong> tareas pendientes
      </span>

      <Filters
        filterSelected={filterSelected}
        onFilterChange={handleFilterChange}
      />

      {completedCounts > 0 && (
        <button className="clear-completed" onClick={onClearCompleted}>
          Borrar Completadas
        </button>
      )}
    </footer>
  );
};
