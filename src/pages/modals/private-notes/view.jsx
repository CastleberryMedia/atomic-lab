import React from "react";
import ReactiveButton from "reactive-button";
import "../../modals/styles.scss";
import "./styles.scss";

function View({ close, notes, setNotes, state, onClickHandler }) {
  return (
    <div id="myModal" className="modal private-notes">
      <div className="modal-content">
        <h3>Mis notas privadas</h3>

        <div className="content-desc">
          Ingresa aquí cualquier anotación que desees del respectivo proyecto.
          Ten en cuenta que éstas notas son privadas para ti. Ningún otro
          usuario o diseñador las podrá ver.
        </div>

        <div className="content-notes">
          <textarea
            className="input-texarea"
            name=""
            id=""
            cols="30"
            rows="10"
            onChange={(e) => setNotes(e.target.value)}
          >
            {notes}
          </textarea>
        </div>

        <section className="section-buttons flex">
          <button className="button" onClick={() => close(false)}>
            Cancelar
          </button>
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
