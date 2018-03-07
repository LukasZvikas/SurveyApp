import React from "react";

export default ({ input, label}) => {
  return (
    <div>
      <label>{label}</label>
      <div className="form-group" style={{"marginBottom": "5px"}}>
        <input className="form-control" {...input} />
      </div>
     
    </div>
  );
};