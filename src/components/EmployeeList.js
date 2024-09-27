import React from "react";
import EmployeeCard from "./EmployeeCard";

const EmployeeList = (props) => {
  const { data } = props;
  return (
    <div className="employeelist_wrapper">
      {data.map((employee) => {
        return (
          <EmployeeCard
            key={employee.id}
            name={employee.name}
            designation={employee.designation}
            about={employee.about}
            photo={employee.photo}
          />
        );
      })}
    </div>
  );
};

export default EmployeeList;
