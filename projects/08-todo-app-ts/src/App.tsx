import { Header } from "./components/Header";
import { Todos } from "./components/Todos";
import { Footer } from "./components/Footer";
import { useTodos } from "./hooks/useTodos";
import { useFilter } from "./hooks/useFilter";

const mockTodos = [
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
];

const App: React.FC = () => {
  const {
    todos,
    handleAddTodo,
    handleCompleted,
    handleRemove,
    onClearCompleted,
  } = useTodos(mockTodos);

  const {
    activeCounts,
    completedCounts,
    filteredTodos,
    filterSelected,
    handleFilterChange,
  } = useFilter(todos);

  return (
    <>
      <div className="todoapp">
        <Header onAddTodo={handleAddTodo} />
        <Todos
          todos={filteredTodos}
          handleCompleted={handleCompleted}
          handleRemove={handleRemove}
        />

        <Footer
          activeCounts={activeCounts}
          completedCounts={completedCounts}
          filterSelected={filterSelected}
          handleFilterChange={handleFilterChange}
          onClearCompleted={onClearCompleted}
        />
      </div>
    </>
  );
};

export default App;
