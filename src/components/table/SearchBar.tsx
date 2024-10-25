import { InputHTMLAttributes, useEffect, useState } from "react";

interface SearchBarProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  value: string | number;
  onChange: (value: string | number) => void;
}

const Searchbar = ({
  value: initialValue,
  onChange,
  ...props
}: SearchBarProps) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    onChange(value);
  }, [onChange, value]);

  return (
    <div className="search-bar-container">
      <label htmlFor="searchBar">Search</label>
      <input
        {...props}
        value={value}
        name="searchBar"
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Searchbar;
