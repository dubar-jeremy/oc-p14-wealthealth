import CreateEmployeeForm from "../forms/createEmployee/CreateEmployeeForm.tsx";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="navigation">
        <h1>HRnet</h1>
        <Link to="/employees">View Current Employees</Link>
      </div>
      <div className="home-form-container">
        <CreateEmployeeForm />
      </div>
    </>
  );
};

export default Home;
