import React from "react";
import ReactiveButton from "reactive-button";
import { Icons } from "../icons";
import "./styles.scss";

function View({
  redirectTo,
  email,
  setEmail,
  password,
  setPassword,
  passwordValidation,
  state,
  onClickHandler,
  messageValidation,
  handleKeyPress,
  viewPassword,
  setViewPassword,
  remember,
  setRemember,
}) {
  return (
    <div className="login">
      <div className="login-content flex">
        <div className="logo-main">
          <div className="logo">{Icons("login_main")}</div>
        </div>

        <div className="inputs-main">
          <div className="inputs">
            <div className="text-purple">
              <h2>Login</h2>
            </div>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className={passwordValidation ? "input-txt error" : "input-txt"}
              onKeyPress={(e) => handleKeyPress(e)}
            />
            {passwordValidation && (
              <p className="text-error">* Invalid email</p>
            )}
            <div className="pass flex">
              <input
                type={viewPassword ? "text" : "password"}
                className="input-txt"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => handleKeyPress(e)}
              />
              <div
                className="view-pass"
                onClick={() => setViewPassword(!viewPassword)}
              >
                {Icons(viewPassword ? "hidde_eye" : "eye")}
              </div>
            </div>

            {messageValidation && (
              <div className="user-invalid">
                <p className="text-error">Invalid user</p>
              </div>
            )}

            <div
              className="text-purple recovery"
              onClick={() => redirectTo("recover-password")}
            >
              ¿Forgot your password?
            </div>

            <div className="remember">
              <input
                defaultChecked={remember}
                type="checkbox"
                name="remember"
                id="remember"
                onChange={() => setRemember(!remember)}
              />
              Recovery password
            </div>

            <div className="button-reactive">
              <ReactiveButton
                className={
                  !password || !email
                    ? "button button-gray"
                    : "button button-blue"
                }
                buttonState={state}
                onClick={() => (password || email) && onClickHandler()}
                shadow={false}
                loadingText={"Logging in..."}
                outline={false}
                rounded={false}
                block={false}
                idleText={"Login"}
              />
            </div>

            {/* <div
              className={!password || !email ? "button-gray" : "button-blue"}
              onClick={() => {
                (password || email) && login();
                // toggleAuthenticated();
                // redirectTo(USER_DATA.onboarding ? "onboarding" : "/");
              }}
            >
              Iniciar sesión
            </div> */}
            <div className="not-account">
              <div>¿Don't have an account??</div>
              <button
                className="button-text-purple"
                onClick={() => redirectTo("sing-up")}
              >
                Register account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default View;
