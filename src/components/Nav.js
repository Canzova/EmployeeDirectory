import React, { useEffect, useState } from "react";
import list from "../Utils/data.json";
import EmployeeList from "./EmployeeList";

const Nav = () => {
  const [type, setType] = useState("All");
  const [data, setData] = useState(list);

  useEffect(() => {
    const filterData = () => {
      if (type === "All") {
        setData(list);
        return;
      }

      const updateData = list.filter((employee) => {
        return employee.team === type;
      });

      setData(updateData);
    };

    filterData();
  }, [type]);

  return (
    <div>
      {/* Nav */}
      <ul className="nav_wrapper">
        <li
          className={`nav_item ${type === "All" && "active"}`}
          onClick={() => {
            setType("All");
          }}
        >
          All
        </li>
        <li
          className={`nav_item ${type === "Frontend" && "active"}`}
          onClick={() => {
            setType("Frontend");
          }}
        >
          Frontend Developer
        </li>
        <li
          className={`nav_item ${type === "Backend" && "active"}`}
          onClick={() => {
            setType("Backend");
          }}
        >
          Backend Developer
        </li>
        <li
          className={`nav_item ${type === "Design" && "active"}`}
          onClick={() => {
            setType("Design");
          }}
        >
          Designer
        </li>
      </ul>

      {/* Employee List */}
      <EmployeeList data={data} />
    </div>
  );
};

export default Nav;


