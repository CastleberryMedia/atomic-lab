import React from "react";
import { Icons } from "../icons";
import "./styles.scss";

function View({ redirectTo, setEmail, sendMailRecovery }) {
  return (
    <div className="recover-password">
      <div className="login-content flex">
        <div className="inputs-main">
          <div className="inputs">
            <div className="logo">{Icons("logo")}</div>

            <div className="content">
              <div className="text-purple">
                <h2>Recuperar contraseña</h2>
              </div>
              <input
                type="email"
                className="input-txt"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />

              <div className="buttons">
                <button className="button" onClick={() => redirectTo("/")}>
                  Atrás
                </button>
                <button
                  className="button-blue"
                  onClick={() => sendMailRecovery()}
                >
                  Recuperar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default View;
