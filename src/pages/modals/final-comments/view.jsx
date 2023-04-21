import React from "react";
import ReactiveButton from "reactive-button";
import "../../modals/styles.scss";
import "./styles.scss";

function View({
  data,
  close,
  commentFinals,
  setCommentsFinals,
  state,
  onClickHandler,
}) {
  return (
    <div id="myModal" className="modal private-notes">
      <div className="modal-content">
        <h3>Comentarios finales</h3>

        <div className="content-desc">
          {!data?.comments_finals
            ? "Ingresa aquí los comentarios finales del cierre del proyecto."
            : "Comentarios finales del diseñador"}
        </div>

        <div className="content-notes">
          <textarea
            className="input-texarea"
            name=""
            id=""
            cols="30"
            rows="10"
            onChange={(e) => setCommentsFinals(e.target.value)}
            disabled={data?.comments_finals}
          >
            {commentFinals}
          </textarea>
        </div>

        <section className="section-buttons flex">
          <button className="button" onClick={() => close(false)}>
            Cancelar
          </button>
          {!data?.comments_finals && (
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
      </div>
    </div>
  );
}

export default View;
