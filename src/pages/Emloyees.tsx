import EmployeesTable from "../tables/employeesTable/EmployeesTable.tsx";
import { Link } from "react-router-dom";

const Employees = () => {
  return (
    <>
      <div className="navigation-employees">
        <h1>Current Emloyees</h1>
      </div>
      <div className="navigation-employees">
        <Link to="/">Add employee</Link>
      </div>
      <div className="employee-form-container">
        <EmployeesTable paginate />
      </div>
    </>
  );
};

export default Employees;
