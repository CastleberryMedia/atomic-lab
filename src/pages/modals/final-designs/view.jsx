import React from "react";
import ReactiveButton from "reactive-button";
import { Icons } from "../../icons";
import "../../modals/styles.scss";
import "./styles.scss";

function View({
  close,
  state,
  onClickHandler,
  uploadFile,
  setUploadFile,
  userData,
  finalDesigns,
}) {
  return (
    <div id="myModal" className="modal private-notes">
      <div className="modal-content">
        <h3>Diseños finales</h3>
        {userData?.rol_id === 3 ? (
          <>
            <div className="content-desc">
              Adjunta los diseños finales en un archivo .zip para ser
              descargados por el usuario
            </div>
            <div className="input-area">
              <label for="file-upload" class="custom-file-upload">
                <i class="fa fa-cloud-upload"></i>
                {uploadFile?.name || "Seleccionar archivo"}
              </label>
              <input
                id="file-upload"
                type="file"
                onChange={(e) => setUploadFile(e.target.files[0])}
                accept=".zip,.rar,.7zip"
              />
              {finalDesigns && (
                <div className="adown-design">
                  <a
                    href={finalDesigns}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {Icons("download")}
                  </a>
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="download-data">
            <div className="content-desc">
              Descargar los diseños finales subidos por el diseñador en un
              archivo .zip
            </div>

            <div className="adown">
              {finalDesigns ? (
                <a
                  href={finalDesigns}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {Icons("download")}
                </a>
              ) : (
                <p>El diseñador no ha subido los archivos</p>
              )}
            </div>
          </div>
        )}
        <section className="section-buttons flex">
          <div className="button" onClick={() => close(false)}>
            Cancelar
          </div>
          <div className="button-reactive">
            {userData?.rol_id === 3 && (
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
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default View;
