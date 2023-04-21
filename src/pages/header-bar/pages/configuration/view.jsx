import React from "react";
import PageTitle from "../../../page-title";
import { Icons } from "../../../icons";
import ModalMessage from "../../../modals/message";

import "./styles.scss";

function View({
  uploadVersion,
  setUploadVersion,
  noCommentsVersion,
  setNoCommentsVersion,
  comunicationWeek,
  setComunicationWeek,
  news,
  setNews,
  modalMessage,
  setModalMessage,
  startDelete,
  setStartDelete,
  languaje,
  setLanguaje,
  updateDataConfigurations,
}) {
  return (
    <div className="configuration-page page">
      <PageTitle
        page={"brands-form-page"}
        user={true}
        title="Mi configuración"
      />

      <section className="content ">
        <div className="lenguaje flex">
          <div className="title">Idioma</div>
          <select
            name="languaje_select"
            id="languaje_select"
            className="select"
            onChange={(e) => setLanguaje(e.target.value)}
          >
            <option value="español" selected={languaje === "español"}>
              Español
            </option>
            <option value="ingles" selected={languaje === "ingles"}>
              Ingles
            </option>
          </select>
        </div>

        <p>Preferencias de notificaciones por email</p>

        <table className="table">
          <tbody>
            <tr>
              <td>
                <div className="text flex">
                  {Icons("notification_circle")}
                  Notificarme cuando el diseñador sube una versión del proyecto
                </div>
              </td>
              <td>
                <div
                  className={`switch ${uploadVersion ? "active" : "inactive"} `}
                >
                  <div
                    className={`switch-toogle ${
                      uploadVersion ? "active" : "inactive"
                    } `}
                    onClick={() => setUploadVersion(!uploadVersion)}
                  ></div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="text flex">
                  {Icons("notification_circle")}
                  Notificarme cuando no he realizado los comentarios/anotaciones
                </div>
              </td>
              <td>
                <div
                  className={`switch ${
                    noCommentsVersion ? "active" : "inactive"
                  } `}
                >
                  <div
                    className={`switch-toogle ${
                      noCommentsVersion ? "active" : "inactive"
                    } `}
                    onClick={() => setNoCommentsVersion(!noCommentsVersion)}
                  ></div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="text flex">
                  {Icons("notification_circle")}Comunicaciones semanales
                </div>
              </td>
              <td>
                <div
                  className={`switch ${
                    comunicationWeek ? "active" : "inactive"
                  } `}
                >
                  <div
                    className={`switch-toogle ${
                      comunicationWeek ? "active" : "inactive"
                    } `}
                    onClick={() => setComunicationWeek(!comunicationWeek)}
                  ></div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="text flex">
                  {Icons("notification_circle")}Novedades
                </div>
              </td>
              <td>
                <div className={`switch ${news ? "active" : "inactive"} `}>
                  <div
                    className={`switch-toogle ${news ? "active" : "inactive"} `}
                    onClick={() => setNews(!news)}
                  ></div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="delete-account flex">
          <p>Eliminar cuenta</p>
          <button className="button-blue" onClick={() => setModalMessage(true)}>
            Eliminar
          </button>
        </div>
      </section>

      <section className="footer">
        <section className="section-buttons flex">
          <button className="button" onClick={() => updateDataConfigurations()}>
            Guardar cambios
          </button>
        </section>
      </section>

      {modalMessage && (
        <ModalMessage
          next={() =>
            startDelete ? setModalMessage(false) : setStartDelete(true)
          }
          cancel={() => setStartDelete && setModalMessage(false)}
          cancelVisible={startDelete ? false : true}
          message={
            startDelete
              ? "Tu cuenta ha sido eliminada"
              : "¿Por qué quieres eliminar tu cuenta?"
          }
          subMessage={
            startDelete ? (
              "Gracias por utilizar nuestro producto."
            ) : (
              <div className="options-delete">
                <div className="options-delete-item">
                  <input type="checkbox" name="" id="" />
                  <span>No la voy a usar más</span>
                </div>
                <div className="options-delete-item">
                  <input type="checkbox" name="" id="" />
                  <span>Es muy costosa</span>
                </div>
                <div className="options-delete-item">
                  <input type="checkbox" name="" id="" />
                  <span>Voy a utilizar otro tipo de servicio</span>
                </div>
                <div className="options-delete-item">
                  <input type="checkbox" name="" id="" />
                  <span>Otra</span>
                </div>
              </div>
            )
          }
        />
      )}
    </div>
  );
}

export default View;
