import React from "react";

 export const emailField = ({ input, label, meta:{touched, error}}) => {
  return (
    <div className="auth-form">
      <label className="auth-form__label" for={label}>{label} </label>  
      <input className="auth-form__input" {...input} id={label} />
      <div className="auth-form__danger"> {touched && error}</div>
    </div>
  );
};


 export const passwordField = ({ input, label, meta:{touched, error}}) => {
  return (
    <div className="auth-form">
      <label className="auth-form__label" for={label}>{label} </label>  
      <input type="password" className="auth-form__input" {...input} id={label} />
      <div className="auth-form__danger"> {touched && error}</div>
    </div>
  );
};

 export const surveyField = ({ input, label, meta:{touched, error}}) => {
  return (
    <div className="auth-form">
      <label className="auth-form__label" for={label}>{label} </label>  
      <input className="auth-form__input" {...input} id={label} />
      <div className="auth-form__danger"> {touched && error}</div>
    </div>
  );
};



