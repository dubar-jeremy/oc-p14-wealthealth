import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { useStore } from "zustand/index";
import { store } from "../../store/store.ts";
import { EmployeeInterface } from "../../interfaces/Employee.interface.ts";
import Table from "../../components/table/Table.tsx";

interface EmployeesTableProps {
  paginate?: boolean;
}

const EmployeesTable = ({ paginate }: EmployeesTableProps) => {
  const { employees } = useStore(store);

  const columnHelper = createColumnHelper<EmployeeInterface>();

  const columns: ColumnDef<EmployeeInterface, string>[] = [
    columnHelper.accessor((row) => row.firstName, {
      id: "firstName",
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>First Name</span>,
    }),
    columnHelper.accessor((row) => row.lastName, {
      id: "lastName",
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>Last Name</span>,
    }),
    columnHelper.accessor((row) => row.startDate, {
      id: "startDate",
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>Start Date</span>,
    }),
    columnHelper.accessor((row) => row.department, {
      id: "department",
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>Department</span>,
    }),
    columnHelper.accessor((row) => row.dateOfBirth, {
      id: "dateOfBirth",
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>Date of Birth</span>,
    }),
    columnHelper.accessor((row) => row.street, {
      id: "street",
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>Street</span>,
    }),
    columnHelper.accessor((row) => row.city, {
      id: "city",
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>City</span>,
    }),
    columnHelper.accessor((row) => row.state, {
      id: "state",
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>State</span>,
    }),
    columnHelper.accessor((row) => row.zipCode, {
      id: "zipCode",
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>Zip Code</span>,
    }),
  ];

  return (
    <Table<EmployeeInterface>
      data={employees}
      columns={columns}
      paginate={paginate}
    />
  );
};

export default EmployeesTable;
