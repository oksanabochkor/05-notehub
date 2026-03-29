import css from "./SearchBox.module.css";

interface SearchBoxProps {
  onSearch: (value: string) => void;
}

const SearchBox = ({ onSearch }: SearchBoxProps) => {
  return (
    <input
      type="text"
      placeholder="Search notes"
      className={css.input}
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default SearchBox;
