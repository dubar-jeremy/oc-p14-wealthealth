import { ControllerRenderProps, FieldValues } from "react-hook-form";
import { HTMLInputTypeAttribute } from "react";

interface InputProps {
  field: ControllerRenderProps<FieldValues, string>;
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
