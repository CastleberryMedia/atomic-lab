import React from "react";
import { Icons } from "../../icons";
import "./styles.scss";

function View({ redirectTo }) {
  return (
    <div className="verify-email">
      <div className="login-content flex">
        <div className="inputs-main">
          <div className="inputs">
            <div className="logo">{Icons("logo")}</div>

            <div className="content">
              <div className="text-purple">
                <h2>Verificación email</h2>
              </div>
              <p className="text-purple desc">
                Se te ha enviado un correo de confirmación a tu email.
              </p>

              <div className="buttons">
                <button className="button-blue" onClick={() => redirectTo("/")}>
                  Aceptar
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
