import React from "react";
import PageTitle from "../../../page-title";
import { Icons } from "../../../icons";
import { SUMMARY_OPTIONS } from "../../../constats";
import ModalMessage from "../../../modals/message";
import ModalBuyCredits from "../../../modals/buy-credits";

import "../styles.scss";
import "./styles.scss";

function View({
  modalMessageStart,
  setModalMessageStart,
  modalMessageStartStatus,
  setModalMessageStartStatus,
  libertyLevel,
  setLibertyLevel,
  setStep,
  step,
  handleStartProject,
  data,
  formData,
  setFormData,
  modalMessageStartData,
  handleGetActiveProjects,
  modalBuyCredits,
  setModalBuyCredit,
  dataModals,
  setDataModals,
  timePrice,
  setTimePrice,
  formatPrice,
  setFormatPrice,
  reviewPrice,
  setReviewPrice,
  sizePrice,
  setSizePrice,
  editPrice,
  setEditPrice,
  getTotalProject,
  setFCustom,
  setTCustom,
  userData,
}) {
  return (
    <div className="summary-page page">
      <div className="step flex">{Icons("step_summary")}</div>

      <PageTitle title={"Revisión del resumen"} />

      <section className="description">
        <p>A continuación te mostramos un resumen de tu requerimiento.</p>
        <p>
          Por favor verifica cada punto y cuando estés listo haz click en
          <span className="text-purple-noclick"> Iniciar proyecto</span>, de lo
          contrario realiza los ajustes necesarios.
        </p>
      </section>

      <section className="content">
        <div className="info">
          <div className="row">
            <div className="title">Marca</div>
            <div className="value">{data.brand_select}</div>
          </div>
          <div className="row">
            <div className="title">Post</div>
            <div className="value">{data.type_post}</div>
          </div>
          <div className="row">
            <div className="title">Redes Sociales</div>
            <div className="value">{data.social_network}</div>
          </div>
          <div className="row">
            <div className="title">Formulario {Icons("edit")}</div>
            <div className="value">Completo</div>
            <div className="more text-purple" onClick={() => setStep(step - 2)}>
              Ver más...
            </div>
          </div>
          <div className="row">
            <div className="title">Selección {Icons("edit")}</div>
            <div className="value">Completo</div>
            <div className="more text-purple" onClick={() => setStep(step - 1)}>
              Ver más...
            </div>
          </div>
        </div>

        <div className="liberty flex">
          <p className="flex">
            ¿Qué tanta libertad quieres que tenga el diseñador en tu proyecto
            basado en su experiencia, conocimiento y criterio?
            {Icons("help_circle")}
          </p>

          <div className="vote-main">
            <div className="vote flex">
              <div className="section">
                <div
                  className={`circle none ${
                    libertyLevel === "none" && "active"
                  }`}
                  onClick={() => {
                    setLibertyLevel("none");
                    setFormData({ ...formData, designer_freedom: "ninguna" });
                  }}
                ></div>
                <p>Ninguna</p>
              </div>
              <div className="section">
                <div
                  className={`circle ${libertyLevel === "medium" && "active"}`}
                  onClick={() => {
                    setLibertyLevel("medium");
                    setFormData({ ...formData, designer_freedom: "media" });
                  }}
                ></div>
                <p>Media</p>
              </div>
              <div className="section">
                <div
                  className={`circle ${libertyLevel === "high" && "active"}`}
                  onClick={() => {
                    setLibertyLevel("high");
                    setFormData({ ...formData, designer_freedom: "mucha" });
                  }}
                ></div>
                <p>Mucha</p>
              </div>
            </div>
            <div className="line-back"></div>
          </div>
        </div>

        <table>
          <tbody>
            <tr>
              <td>Costo base del proyecto</td>
              <td>
                <div className="flex price">
                  <div>$</div>
                  <div>{formData.project_price}</div>
                </div>
              </td>
              <td>
                <input
                  className="select-disabled"
                  type="text"
                  name="post"
                  id="post"
                  value={formData.project_type}
                  disabled
                />
              </td>
              <td></td>
            </tr>
            <tr>
              <td>Tiempo de entrega</td>
              <td>
                <div className="flex price">
                  <div>$</div>
                  <div>{timePrice.price}</div>
                </div>
              </td>
              <td>
                <select
                  name="brand_select"
                  id="brand_select"
                  className="select"
                  onChange={(e) => {
                    setTimePrice({
                      price: SUMMARY_OPTIONS["tiempo"]?.options.filter(
                        (option) => option.text === e.target.value
                      )[0]?.price,
                      text: e.target.value,
                    });
                  }}
                >
                  {SUMMARY_OPTIONS["tiempo"].options.map((option, index) => (
                    <option key={index} value={option.text}>
                      {option.text} {option?.extra_text}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                <div className="more text-purple-noclick">
                  Tiempo de entrega estimado (1ra versión): martes, 28 de Sept.
                  - miércoles 30 de Sept.{Icons("help_circle")}
                </div>
              </td>
            </tr>
            <tr>
              <td>Formato de entrega</td>
              <td>
                <div className="flex price">
                  <div>$</div>
                  <div>{formatPrice.price}</div>
                </div>
              </td>
              <td>
                <div className="flex addtext">
                  <select
                    name="brand_select"
                    id="brand_select"
                    className="select"
                    onChange={(e) => {
                      setFormatPrice({
                        price: SUMMARY_OPTIONS["formato"]?.options.filter(
                          (option) => option.text === e.target.value
                        )[0]?.price,
                        text: e.target.value,
                      });
                      setFCustom(null);
                    }}
                  >
                    {SUMMARY_OPTIONS["formato"].options.map((option, index) => (
                      <option key={index} value={option.text}>
                        {option.text}
                      </option>
                    ))}
                  </select>

                  {formatPrice.text === "Personalizado" && (
                    <input
                      className="input-txt-2"
                      type="text"
                      name=""
                      id=""
                      onChange={(e) => setFCustom(e.target.value)}
                    />
                  )}
                </div>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>Revisiones</td>
              <td>
                <div className="flex price">
                  <div>$</div>
                  <div>{reviewPrice.price}</div>
                </div>
              </td>
              <td>
                <select
                  name="brand_select"
                  id="brand_select"
                  className="select"
                  onChange={(e) => {
                    setReviewPrice({
                      price: SUMMARY_OPTIONS["revisiones"]?.options.filter(
                        (option) => option.text === e.target.value
                      )[0]?.price,
                      text: e.target.value,
                    });
                  }}
                >
                  {SUMMARY_OPTIONS["revisiones"].options.map(
                    (option, index) => (
                      <option key={index} value={option.text}>
                        {option.text}
                      </option>
                    )
                  )}
                </select>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>Tamaño</td>
              <td>
                <div className="flex price">
                  <div>$</div>
                  <div>{sizePrice.price}</div>
                </div>
              </td>
              <td>
                <div className="flex addtext">
                  <select
                    name="brand_select"
                    id="brand_select"
                    className="select"
                    onChange={(e) => {
                      setSizePrice({
                        price: SUMMARY_OPTIONS["tamaño"]?.options.filter(
                          (option) => option.text === e.target.value
                        )[0]?.price,
                        text: e.target.value,
                      });
                      setTCustom(null);
                    }}
                  >
                    {SUMMARY_OPTIONS["tamaño"].options.map((option, index) => (
                      <option key={index} value={option.text}>
                        {option.text}
                      </option>
                    ))}
                  </select>
                  {sizePrice.text === "Personalizado" && (
                    <input
                      className="input-txt-2"
                      type="text"
                      name=""
                      id=""
                      onChange={(e) => setTCustom(e.target.value)}
                    />
                  )}
                </div>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>Archivos editables</td>
              <td>
                <div className="flex price">
                  <div>$</div>
                  <div>{editPrice.price}</div>
                </div>
              </td>
              <td>
                <select
                  name="brand_select"
                  id="brand_select"
                  className="select"
                  onChange={(e) => {
                    setEditPrice({
                      price: SUMMARY_OPTIONS["editables"]?.options.filter(
                        (option) => option.text === e.target.value
                      )[0]?.price,
                      text: e.target.value,
                    });
                  }}
                >
                  {SUMMARY_OPTIONS["editables"].options.map((option, index) => (
                    <option key={index} value={option.text}>
                      {option.text}
                    </option>
                  ))}
                </select>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <div className="more text-purple-noclick">Total</div>
              </td>
              <td className="credits flex">
                {Icons("credits")} ${getTotalProject()} Monedas
              </td>
              <td>
                <div
                  className="button-blue flex"
                  onClick={() => {
                    setModalBuyCredit(!modalBuyCredits);
                    setDataModals();
                  }}
                >
                  Comprar
                </div>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="footer">
        <section className="section-buttons flex">
          <button className="button" onClick={() => setStep(step - 1)}>
            Atrás
          </button>
          <button
            className="button"
            onClick={() =>
              getTotalProject() > userData?.credits
                ? setModalBuyCredit(!modalBuyCredits)
                : setModalMessageStart(true)
            }
          >
            {getTotalProject() > userData?.credits
              ? "Monedas insuficientes"
              : "Iniciar proyecto"}
          </button>
        </section>
      </section>

      {modalMessageStart && (
        <ModalMessage
          next_type="create"
          next={() => {
            handleStartProject();
          }}
          cancel={() => setModalMessageStart(false)}
          cancelVisible={true}
          message={"¿Estas seguro que quieres iniciar el proyecto?"}
          subMessage={
            "Una vez iniciado no podrás cambiar la información ni los archivos adjuntos. Sin embargo, podrás comprar más revisiones si lo requieres."
          }
        />
      )}

      {modalMessageStartStatus && (
        <ModalMessage
          next_type="continue"
          next={() => {
            if (modalMessageStartData.type === "ok") {
              handleGetActiveProjects();
            } else {
              setModalMessageStartStatus(false);
              setModalMessageStart(false);
            }
          }}
          cancelVisible={false}
          message={modalMessageStartData.message}
          subMessage={modalMessageStartData.subMessage}
        />
      )}

      {modalBuyCredits && (
        <ModalBuyCredits close={setModalBuyCredit} data={dataModals} />
      )}
    </div>
  );
}

export default View;
