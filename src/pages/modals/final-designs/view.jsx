import React from "react";
import ReactiveButton from "reactive-button";
import "../../modals/styles.scss";
import "./styles.scss";

function View({ close, state, onClickHandler, uploadFile, handleFileReader }) {
  return (
    <div id="myModal" className="modal private-notes">
      <div className="modal-content">
        <h3>Diseños finales</h3>

        <div className="content-desc">
          Adjunta los diseños finales en un archivo .zip para ser descargados
          por el usuario
        </div>

        <div className="input-area">
          <label for="file-upload" class="custom-file-upload">
            <i class="fa fa-cloud-upload"></i>
            {uploadFile?.fileName || "Seleccionar archivo"}
          </label>
          <input
            id="file-upload"
            type="file"
            onChange={handleFileReader}
            accept=".zip,.rar,.7zip"
          />
        </div>

        <section className="section-buttons flex">
          <div className="button" onClick={() => close(false)}>
            Cancelar
          </div>
          <div className="button-reactive">
            <ReactiveButton
              className="button"
              buttonState={state}
              onClick={() => onClickHandler()}
              shadow={false}
              loadingText={"Guardando..."}
              outline={false}
              rounded={false}
              block={false}
              idleText={"Guardar"}
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default View;
