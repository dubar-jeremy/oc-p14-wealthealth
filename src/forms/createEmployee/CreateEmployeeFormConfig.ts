import * as yup from "yup";
import { EmployeeInterface } from "../../interfaces/Employee.interface.ts";

export type CreateEmployeeFormValues = EmployeeInterface;

export const createEmployeeValidationSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  dateOfBirth: yup.string().required("Date of birth is required"),
  startDate: yup.string().required("Start date is required"),
  street: yup.string().required("Street is required"),
  city: yup.string().required("City is required"),
  state: yup.string().required("State is required"),
  zipCode: yup
    .string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .required("Zip code is required")
    .typeError("Zip code must be a number"),
  department: yup.string().required("Department is required"),
});
