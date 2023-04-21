import React from "react";
import ReactiveButton from "reactive-button";
import "../../modals/styles.scss";
import "./styles.scss";

import "@recogito/annotorious/dist/annotorious.min.css";

function View({
  closeModal,
  data,
  imgEl,
  state,
  onClickHandler,
  countAnnotations,
}) {
  return (
    <div id="myModal" className="modal-zoom-img">
      <div className="modal-content">
        {data.type === "normal" ? (
          <img className="image-zoom" src={data.img} alt={data.img} />
        ) : (
          <img
            className="image-zoom"
            ref={imgEl}
            src={data.img}
            alt={data.img}
          />
        )}
        <section className="zoom-footer">
          <section className="section-buttons flex">
            <button className="button" onClick={() => closeModal()}>
              Cancelar
            </button>
            {countAnnotations.length !== 0 && (
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
            )}
          </section>
        </section>
      </div>
    </div>
  );
}

export default View;
