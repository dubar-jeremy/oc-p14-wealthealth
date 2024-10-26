import { ControllerRenderProps } from "react-hook-form";
import { EmployeeInterface } from "../interfaces/Employee.interface.ts";

interface SelectStateProps<T> {
  field: ControllerRenderProps<EmployeeInterface>;
  id: string;
  label: string;
  options: T[];
  getOptionLabel: (option: T) => string;
  getOptionValue: (option: T) => string;
  error?: string;
}

const Select = <T,>({
  field,
  id,
  label,
  error,
  options,
  getOptionLabel,
  getOptionValue,
}: SelectStateProps<T>) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <select id={id} {...field} className={error ? "input-error" : ""}>
        <option value="">Select State</option>
        {options.map((option) => (
          <option key={getOptionValue(option)} value={getOptionValue(option)}>
            {getOptionLabel(option)}
          </option>
        ))}
      </select>
      {error && <span className="error-message">{error}</span>}
    </>
  );
};

export default Select;
