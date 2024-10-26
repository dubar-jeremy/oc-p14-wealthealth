import { ControllerRenderProps } from "react-hook-form";
import { HTMLInputTypeAttribute } from "react";
import { EmployeeInterface } from "../interfaces/Employee.interface.ts";

interface InputProps {
  field: ControllerRenderProps<EmployeeInterface, keyof EmployeeInterface>;
  id: string;
  label: string;
  type: HTMLInputTypeAttribute;
  error?: string;
}

const Input = ({ field, id, label, type, error }: InputProps) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        className={error ? "input-error" : ""}
        {...field}
      />
      {error && <span className="error-message">{error}</span>}
    </>
  );
};

export default Input;
