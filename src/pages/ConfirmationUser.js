import React, { useState } from "react";

export default function ConfirmationUser() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

  const [passwordMatch, setPasswordMatch] = useState(false);

  const [confirmation, setConformation] = useState({
    //here i made an object to holds all data that user will
    name: "", //write as after i will send this state to somewhere else
    emailAddress: "",
    userName: "",
    password: null,
    confirmPassword: null,
  });
  const [confirmationValidation, setConformationValidation] = useState({
    name: null,
    emailAddress: null,
    userName: null,
    password: null,
    confirmPassword: null,
  });

  const handleFormChange = (event) => {
    /////////////////////////////////////////////////////////////////////////////////////
    if (event.target.name === "name") {
      setConformation({
        ...confirmation,
        name: event.target.value,
      });
      setConformationValidation({
        ...confirmationValidation,
        name:
          event.target.value.length === 0 //دا الكلام اللى هكتبه جوا input
            ? "Reuired"
            : event.target.value.length < 3 // Or
            ? "Min length is 3"
            : null,
      });
    }

    ////////////////////////////////////////////////////////////////////////////////////

    if (event.target.name === "emailAddress") {
      const isValidEmail = emailRegex.test(event.target.value);
      setConformation({
        ...confirmation,
        emailAddress: event.target.value,
      });
      setConformationValidation({
        ...confirmationValidation,
        emailAddress: isValidEmail ? null : "Invalid email address format",
      });
    }

    /////////////////////////////////////////////////////////////////////////////////////

    if (event.target.name === "userName") {
      const hasSpaces = event.target.value.includes(" "); // Check if username has spaces
      setConformation({
        ...confirmation,
        userName: event.target.value,
      });
      setConformationValidation({
        ...confirmationValidation,
        userName:
          event.target.value.length === 0 //دا الكلام اللى هكتبه جوا input
            ? "Reuired"
            : hasSpaces // Or
            ? "User name should have no spaces"
            : null,
      });
    }

    /////////////////////////////////////////////////////////////////////////////////////

    if (event.target.name === "password") {
      const isValidPassword = passwordRegex.test(event.target.value);
      setConformation({
        ...confirmation,
        password: event.target.value,
      });
      setConformationValidation({
        ...confirmationValidation,
        password: isValidPassword
          ? null
          : "Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one digit, and one special character",
      });
    }

    /////////////////////////////////////////////////////////////////////////////////////

    if (event.target.name === "confirmPassword") {
      setConformation({
        ...confirmation,
        confirmPassword: event.target.value,
      });
      const isPasswordMatch = event.target.value === confirmation.password; //here return true or false
      setPasswordMatch(isPasswordMatch); //here i'm setting the new boolean value (true or false ? )

      setConformationValidation({
        ...confirmationValidation,
        confirmPassword:
          event.target.value.length === 0 //دا الكلام اللى هكتبه جوا input
            ? "Reuired"
            : isPasswordMatch // Or   // here state of confirmation.password  this component can see it so i can use it for my logic !!!!
            ? "Matched pasword"
            : "Passwords do not match",
      });
    }
  };

  return (
    <div>
      <h2>Registration form</h2>
      <hr />
      <form>
        <div className="mb-3">
          <label htmlFor="Name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="Name"
            aria-describedby="emailHelp"
            value={confirmation.name}
            name="name"
            onChange={handleFormChange}
          />
          {/* Here below i'm making condion error that if (name inside validate state not equal null show this dev for the user ) */}
          {confirmationValidation.name && (
            <div id="name" className="form-text text-danger">
              {confirmationValidation.name}
            </div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={confirmation.emailAddress}
            name="emailAddress"
            onChange={handleFormChange}
          />
          {confirmationValidation.emailAddress && ( //if true >> emailaddress have string it will show this div
            <div id="emailaddress" className="form-text text-danger">
              {confirmationValidation.emailAddress}
            </div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="User Name" className="form-label">
            User Name
          </label>
          <input
            type="text"
            className="form-control"
            id="User Name"
            aria-describedby="emailHelp"
            value={confirmation.userName}
            name="userName"
            onChange={handleFormChange}
          />
          {confirmationValidation.userName && ( //if true >> userName have string it will show this div
            <div id="userName" className="form-text text-danger">
              {confirmationValidation.userName}
            </div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            value={confirmation.password}
            name="password"
            placeholder="Example: P@ssword1234"
            onChange={handleFormChange}
          />
          {confirmationValidation.password && (
            <div className="form-text text-danger">
              {confirmationValidation.password}
            </div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword2" className="form-label">
            Confirm Password
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword2"
            value={confirmation.confirmPassword}
            name="confirmPassword"
            onChange={handleFormChange}
          />
          {confirmationValidation.confirmPassword && (       //as if it's not equal null 
            <div
              className={`form-text ${
                passwordMatch ? "text-success" : "text-danger"
              }`}
            >
              {confirmationValidation.confirmPassword}
            </div>
          )}
        </div>
        <div className="mb-3 form-check"></div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
