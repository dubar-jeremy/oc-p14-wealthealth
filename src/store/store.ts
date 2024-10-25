import { EmployeeInterface } from "../interfaces/Employee.interface.ts";

import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

interface StoreStates {
  employees: EmployeeInterface[];
  addEmployee: (employee: EmployeeInterface) => void;
}
export const store = create<
  StoreStates,
  [["zustand/persist", StoreStates], ["zustand/devtools", never]]
>(
  devtools(
    persist(
      (set) => ({
        employees: [],
        addEmployee: (employee: EmployeeInterface) =>
          set((state) => ({
            employees: [...state.employees, employee],
          })),
      }),
      { name: "store" },
    ),
  ),
);