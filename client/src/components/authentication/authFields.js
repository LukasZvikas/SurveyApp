import React from "react";

export default ({ input, label, meta:{touched, error}}) => {
  return (
    <div>
      <label>{label}</label>
      <div className="form-group" style={{"marginBottom": "5px"}}>
        <input className="form-control" {...input} />
      </div>
      <div className="text-danger" style={{"marginBottom": "20px"}}> {touched && error}</div>
    </div>
  );
};