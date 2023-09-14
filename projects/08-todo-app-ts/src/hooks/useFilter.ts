import { useState } from "react";
import { FilterValue, ListOfTodos } from "../types";
import { TODO_FILTERS } from "../consts";

export const useFilter = (todos: ListOfTodos) => {
  const [filterSelected, setFilterSelected] = useState<FilterValue>(
    TODO_FILTERS.ALL,
  );

  const handleFilterChange = (filter: FilterValue) => {
    setFilterSelected(filter);
  };

  const filteredTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed;
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed;
    return;
  });

  const completedCounts = todos.filter(todo => todo.completed).length;
  const activeCounts = todos.length - completedCounts;

  return {
    activeCounts,
    completedCounts,
    filteredTodos,
    filterSelected,
    handleFilterChange,
  };
};
