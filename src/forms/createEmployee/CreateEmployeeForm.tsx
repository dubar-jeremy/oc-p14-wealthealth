import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  departmentDataList,
  DepartmentInterface,
} from "../../data/departmentDataList.ts";
import Select from "../../components/Select.tsx";
import Input from "../../components/Input.tsx";

import {
  CreateEmployeeFormValues,
  createEmployeeValidationSchema,
} from "./CreateEmployeeFormConfig.ts";

import { useStore } from "zustand";
import { store } from "../../store/store.ts";

import "./CreateEmployeeForm.css";
import { useState } from "react";
import { ReactModal } from "react-modal-oop-project";

const CreateEmployeeForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateEmployeeFormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      startDate: "",
      street: "",
      city: "",
      state: "",
      zipCode: "",
      department: "",
    },
    resolver: yupResolver(createEmployeeValidationSchema),
  });

  const { addEmployee } = useStore(store);

  const onSubmit = (data: CreateEmployeeFormValues) => {
    addEmployee(data);
    setIsOpen(true);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        id="create-employee"
        className="form-container"
      >
        <h2>Create Employee</h2>
        <div className="form-group">
          <Controller
            name="firstName"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                type="text"
                id={field.name}
                label="First Name"
                error={errors.firstName?.message}
                field={field}
              />
            )}
          />
        </div>
        <div className="form-group">
          <Controller
            name="lastName"
            control={control}
            render={({ field }) => (
              <Input
                type="text"
                id={field.name}
                label="Last Name"
                error={errors.lastName?.message}
                field={field}
              />
            )}
          />
        </div>

        <div className="form-group">
          <Controller
            name="dateOfBirth"
            control={control}
            render={({ field }) => (
              <Input
                type="date"
                id={field.name}
                label="Date of Birth"
                error={errors.dateOfBirth?.message}
                field={field}
              />
            )}
          />
        </div>

        <div className="form-group">
          <Controller
            name="startDate"
            control={control}
            render={({ field }) => (
              <Input
                type="date"
                id={field.name}
                label="Start Date"
                error={errors.startDate?.message}
                field={field}
              />
            )}
          />
        </div>

        <fieldset className="address form-group">
          <legend>Address</legend>

          <div className="form-group">
            <Controller
              name="street"
              control={control}
              render={({ field }) => (
                <Input
                  type="text"
                  id={field.name}
                  label="Street"
                  error={errors.street?.message}
                  field={field}
                />
              )}
            />
          </div>

          <div className="form-group">
            <Controller
              name="city"
              control={control}
              render={({ field }) => (
                <Input
                  type="text"
                  id={field.name}
                  label="City"
                  error={errors.city?.message}
                  field={field}
                />
              )}
            />
          </div>

          <div className="form-group">
            {/*<Controller*/}
            {/*  name="state"*/}
            {/*  control={control}*/}
            {/*  render={({ field }) => (*/}
            {/*    <Select<StateInterface>*/}
            {/*      id={field.name}*/}
            {/*      label="State"*/}
            {/*      field={field}*/}
            {/*      error={errors.state?.message}*/}
            {/*      options={statesDataList}*/}
            {/*      getOptionLabel={(option: StateInterface) => option.name}*/}
            {/*      getOptionValue={(option: StateInterface) =>*/}
            {/*        option.abbreviation*/}
            {/*      }*/}
            {/*    />*/}
            {/*  )}*/}
            {/*/>*/}
          </div>

          <div className="form-group">
            <Controller
              name="zipCode"
              control={control}
              render={({ field }) => (
                <Input
                  type="text"
                  id={field.name}
                  label="Zip Code"
                  error={errors.zipCode?.message}
                  field={field}
                />
              )}
            />
          </div>
        </fieldset>

        <div className="form-group">
          <Controller
            name="department"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Select<DepartmentInterface>
                id={field.name}
                label="Department"
                field={field}
                error={errors.department?.message}
                options={departmentDataList}
                getOptionLabel={(option: DepartmentInterface) => option.label}
                getOptionValue={(option: DepartmentInterface) => option.value}
              />
            )}
          />
        </div>

        <button type="submit" className="submit-button">
          Create Employee
        </button>
      </form>
      <ReactModal
        open={isOpen}
        onClose={closeModal}
        title="Success"
        content={<p>Employee created with success</p>}
        options={{
          shouldCloseOnOverlayClick: true,
        }}
      />
    </>
  );
};

export default CreateEmployeeForm;
