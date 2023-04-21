import React, { useState } from "react";
import ReactiveButton from "reactive-button";
import "../../modals/styles.scss";
import "./styles.scss";

function View({ next, cancel, message, subMessage, cancelVisible, next_type }) {
  const [state, setState] = useState("idle");

  const onClickHandler = () => {
    setState("loading");
    setTimeout(() => {
      next();
    }, 2000);
  };

  return (
    <div id="myModal" className="modal modal-message">
      <div className="modal-content">
        <div
          className={`text ${
            message && subMessage ? "is-justify" : "is-center"
          }`}
        >
          <div className="text-purple">{message}</div>
          {subMessage && <div>{subMessage}</div>}
        </div>

        <div
          className={`modal-message-buttons flex ${
            cancel && next ? "is-justify" : "is-center"
          }`}
        >
          {cancelVisible && (
            <button className="button" onClick={() => cancel()}>
              Cancelar
            </button>
          )}

          {next &&
            (next_type === "create" ? (
              <div className="button-reactive">
                <ReactiveButton
                  className="button"
                  buttonState={state}
                  onClick={() => onClickHandler()}
                  shadow={false}
                  loadingText={"Creando Proyecto..."}
                  outline={false}
                  rounded={false}
                  block={false}
                  idleText={"Continuar"}
                />
              </div>
            ) : (
              <div
                className="button"
                onClick={() => {
                  next();
                }}
              >
                Continuar
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default View;
