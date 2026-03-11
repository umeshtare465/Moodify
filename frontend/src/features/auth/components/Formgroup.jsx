import React from "react";

const Formgroup = ({ label, placeholder }) => {
  return (
    <div className="form-group">
      <label htmlFor={label}>{label}</label>
      <input type="text" id={label} placeholder={placeholder} />
    </div>
  );
};

export default Formgroup;
