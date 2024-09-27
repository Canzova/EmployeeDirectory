import React from "react";

const EmployeeCard = ({ name, designation, about, photo }) => {
  return (
    <div className="card_wrapper">
      <div className="upper_part">
        <img src={photo} alt="profile" />
      </div>
      <div className="lower_part">
        <h2>{name}</h2>
        <h3>{designation}</h3>
        <p>{about}</p>
      </div>
    </div>
  );
};

export default EmployeeCard;
