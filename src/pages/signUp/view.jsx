import React from "react";
import ReactiveButton from "reactive-button";
import { Icons } from "../icons";
import "./styles.scss";

function View({
  redirectTo,
  name,
  setName,
  lastName,
  setLastName,
  setEmail,
  setPassword,
  passwordConfirm,
  setPasswordConfirm,
  password,
  validateEmail,
  email,
  emailValidate,
  setEmailValidate,
  state,
  onClickHandler,
}) {
  return (
    <div className="sign-up">
      <div className="login-content flex">
        <div className="logo-main">
          <div className="logo">{Icons("login_main")}</div>
        </div>

        <div className="inputs-main">
          <div className="inputs">
            <div className="text-purple">
              <h2>Create an account</h2>
            </div>
            <input
              type="text"
              className="input-txt"
              placeholder="Name(s)"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              className="input-txt"
              placeholder="Surname"
              onChange={(e) => setLastName(e.target.value)}
            />

            <input
              type="email"
              className="input-txt"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailValidate(validateEmail(e.target.value) ? true : false);
              }}
            />

            {email && !emailValidate && <p className="error">Invalid Email</p>}

            <p id="errormail" className="error"></p>

            <input
              type="password"
              className="input-txt"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />

            {password && password.length <= 6 && (
              <p className="error">Minimum 6 characters</p>
            )}

            <input
              type="password"
              className="input-txt"
              placeholder="Confirm your password"
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />

            {passwordConfirm && password !== passwordConfirm && (
              <p className="error">Password does not match</p>
            )}

            <div className="buttons">
              <button className="button" onClick={() => redirectTo("/")}>
                Back
              </button>
              <div className="button-reactive">
                <ReactiveButton
                  className={
                    !password ||
                    !email ||
                    !name ||
                    !lastName ||
                    password !== passwordConfirm ||
                    password.length <= 6
                      ? "button button-gray"
                      : "button button-purple"
                  }
                  buttonState={state}
                  onClick={() =>
                    password &&
                    email &&
                    name &&
                    lastName &&
                    password === passwordConfirm &&
                    password.length > 6 &&
                    onClickHandler()
                  }
                  shadow={false}
                  loadingText={"Registering..."}
                  outline={false}
                  rounded={false}
                  block={false}
                  idleText={"Register"}
                />
              </div>
            </div>

            <p className="text-purple privacity">
              By clicking Register I agree to the Terms and Conditions and Privacy Policy.
              Conditions and Privacy Policy.
            </p>

            <div className="not-account">
              <p>Already have an account? </p>
              <span className="text-purple" onClick={() => redirectTo("/")}>
                Login{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default View;
