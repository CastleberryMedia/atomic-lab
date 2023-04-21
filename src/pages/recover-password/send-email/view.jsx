import React from "react";
import { Icons } from "../../icons";
import "./styles.scss";

function View({ redirectTo }) {
  return (
    <div className="recover-password">
      <div className="login-content flex">
        <div className="inputs-main">
          <div className="inputs">
            <div className="logo">{Icons("logo")}</div>

            <div className="content">
              <div className="text-purple">
                <h2>Recuperación email</h2>
              </div>
              <p className="text-purple desc">
                Se te ha enviado un correo a tu email para que puedas recuperar
                tu contraseña.
              </p>

              <div className="buttons-email">
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
