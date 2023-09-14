import { FILTERS_BUTTONS } from "../consts";
import { FilterValue } from "../types";

interface Props {
  filterSelected: FilterValue;
  onFilterChange: (filter: FilterValue) => void;
}

export const Filters: React.FC<Props> = ({
  filterSelected,
  onFilterChange,
}) => {
  const handleClick =
    (filter: FilterValue) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      onFilterChange(filter);
    };

  return (
    <ul className="filters">
      {Object.entries(FILTERS_BUTTONS).map(([key, { literal, href }]) => {
        const isSelected = key === filterSelected;
        const className = isSelected ? "selected" : "";

        return (
          <li key={key}>
            <a
              href={href}
              className={className}
              onClick={handleClick(key as FilterValue)}
            >
              {literal}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
