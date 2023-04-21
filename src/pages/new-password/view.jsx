import React from "react";
import { Icons } from "../icons";
import "./styles.scss";

function View({
  redirectTo,
  password1,
  setPassword1,
  password2,
  setPassword2,
  exeNewPassword,
}) {
  return (
    <div className="new-password">
      <div className="login-content flex">
        <div className="inputs-main">
          <div className="inputs">
            <div className="logo">{Icons("logo")}</div>

            <div className="content">
              <div className="text-purple">
                <h2>Nueva contraseña</h2>
              </div>
              <input
                type="password"
                className="input-txt"
                placeholder="Nueva contraseña"
                onChange={(e) => setPassword1(e.target.value)}
              />
              <input
                type="password"
                className="input-txt"
                placeholder="Repetir contraseña"
                onChange={(e) => setPassword2(e.target.value)}
              />
              {password1 !== password2 && (
                <div className="error">Contraseñas no coinciden</div>
              )}

              <div className="buttons">
                <button className="button" onClick={() => redirectTo("/")}>
                  Atrás
                </button>
                {password1 === password2 && password1 && password2 && (
                  <button
                    className="button-blue"
                    onClick={() => exeNewPassword()}
                  >
                    Actualizar
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default View;
