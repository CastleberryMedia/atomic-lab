import React from "react";
import PageTitle from "../../../page-title";
import { Icons } from "../../../icons";
import { SUMMARY_OPTIONS } from "../../../constats";
import ModalMessage from "../../../modals/message";
import ModalBuyCredits from "../../../modals/buy-credits";

import "../styles.scss";
import "./styles.scss";

const current = new Date();
var current_days_one = new Date(current.getTime() + 86400000);
var current_days_two = new Date(current.getTime() + 172800000);
var current_days_three = new Date(current.getTime() + 345600000);
const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
const date_one = current_days_one.toLocaleDateString('es-es', options);
const date_two = current_days_two.toLocaleDateString('es-es', options);
const date_four = current_days_three.toLocaleDateString('es-es', options);
let val_date = date_two + '.' + date_four + '.';

function View({
  modalMessageStart,
  setModalMessageStart,
  modalMessageStartStatus,
  setModalMessageStartStatus,
  setStep,
  step,
  handleStartProject,
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
  coins,
}) {
  return (
    <div className="summary-page page">
      <div className="step flex">{Icons("step_summary")}</div>

      <PageTitle title={"Review of the summary"} />

      <section className="description">
        <p>Below is a summary of your request.</p>
        <p>
          Please check each point and when you are ready click on
          <span className="text-purple-noclick"> Start project</span>, otherwise make the necessary adjustments.
        </p>
      </section>

      <section className="content">
        <div className="info">
          <div className="row">
            <div className="title">Brand</div>
            <div className="value">{formData.brand_select}</div>
          </div>
          <div className="row">
            <div className="title">Post</div>
            <div className="value">{formData.type_post}</div>
          </div>
          <div className="row">
            <div className="title">Social Networks</div>
            <div className="value">{formData.social_network}</div>
          </div>
          <div className="row">
            <div className="title">Form {Icons("edit")}</div>
            <div className="value">Complete</div>
            <div className="more text-purple" onClick={() => setStep(step - 2)}>
              See more...
            </div>
          </div>
          <div className="row">
            <div className="title">Selection {Icons("edit")}</div>
            <div className="value">Complete</div>
            <div className="more text-purple" onClick={() => setStep(step - 1)}>
              See more...
            </div>
          </div>
        </div>

        <div className="liberty flex">
          <p className="flex">
            How much freedom do you want the designer to have in your project based on their experience, knowledge and judgment?
            {Icons("help_circle")}
          </p>

          <div className="vote-main">
            <div className="vote flex">
              <div className="section">
                <div
                  className={`circle none ${
                    formData.designer_freedom === "ninguna" && "active"
                  }`}
                  onClick={() => {
                    setFormData({ ...formData, designer_freedom: "ninguna" });
                  }}
                ></div>
                <p>None</p>
              </div>
              <div className="section">
                <div
                  className={`circle ${
                    formData.designer_freedom === "media" && "active"
                  }`}
                  onClick={() => {
                    setFormData({ ...formData, designer_freedom: "media" });
                  }}
                ></div>
                <p>Half</p>
              </div>
              <div className="section">
                <div
                  className={`circle ${
                    formData.designer_freedom === "mucha" && "active"
                  }`}
                  onClick={() => {
                    setFormData({ ...formData, designer_freedom: "mucha" });
                  }}
                ></div>
                <p>Much</p>
              </div>
            </div>
            <div className="line-back"></div>
          </div>
        </div>

        <table>
          <tbody>
            <tr>
              <td>Base project cost</td>
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
              <td>Delivery time</td>
              <td>
                <div className="flex price">
                  <div>$</div>
                  <div>{timePrice?.price}</div>
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
                    setFormData({
                      ...formData,
                      tiempo_entrega: e.target.value,
                    });
                    if (e.target.value == 'Estándar') {
                      val_date = date_two + '.' + date_four + '.';
                    } else {
                      val_date = date_one + '.' + date_two + '.';
                    }
                  }}
                >
                  {SUMMARY_OPTIONS["tiempo"].options.map((option, index) => (
                    <option
                      key={index}
                      value={option.text}
                      selected={formData?.tiempo_entrega === option.text}
                    >
                      {option.text} {option?.extra_text}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                <div className="more text-purple-noclick">
                  Estimated delivery time (first version): {val_date}{Icons("help_circle")}
                </div>
              </td>
            </tr>
            <tr>
              <td>Delivery format</td>
              <td>
                <div className="flex price">
                  <div>$</div>
                  <div>{formatPrice?.price}</div>
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
                          (option) => option?.text === e.target.value
                        )[0]?.price,
                        text: e.target.value,
                      });

                      setFormData({
                        ...formData,
                        formato_entrega: e.target.value,
                      });
                    }}
                  >
                    {SUMMARY_OPTIONS["formato"].options.map((option, index) => (
                      <option
                        key={index}
                        value={option?.text}
                        selected={formData?.formato_entrega === option?.text}
                      >
                        {option?.text}
                      </option>
                    ))}
                  </select>

                  {formatPrice?.text === "Personalizado" && (
                    <input
                      placeholder="Ingrese formato deseado"
                      className="input-txt-2"
                      type="text"
                      name="f_custom"
                      id="f_custom"
                      value={formData.f_custom}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          f_custom: e.target.value,
                        });
                      }}
                    />
                  )}
                </div>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>Revisions</td>
              <td>
                <div className="flex price">
                  <div>$</div>
                  <div>{reviewPrice?.price}</div>
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
                    setFormData({
                      ...formData,
                      revisiones: e.target.value,
                    });
                  }}
                >
                  {SUMMARY_OPTIONS["revisiones"].options.map(
                    (option, index) => (
                      <option
                        key={index}
                        value={option.text}
                        selected={formData?.revisiones === option?.text}
                      >
                        {option.text}
                      </option>
                    )
                  )}
                </select>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>Size</td>
              <td>
                <div className="flex price">
                  <div>$</div>
                  <div>{sizePrice?.price}</div>
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
                      setFormData({
                        ...formData,
                        tamaño: e.target.value,
                      });
                    }}
                  >
                    {SUMMARY_OPTIONS["tamaño"].options.map((option, index) => (
                      <option
                        key={index}
                        value={option?.text}
                        selected={formData?.tamaño === option?.text}
                      >
                        {option?.text}
                      </option>
                    ))}
                  </select>
                  {sizePrice?.text === "Personalizado" && (
                    <input
                      placeholder="Ingrese tamaño deseado"
                      className="input-txt-2"
                      type="text"
                      name="t_custom"
                      id="t_custom"
                      value={formData.t_custom}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          t_custom: e.target.value,
                        });
                      }}
                    />
                  )}
                </div>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>Editable files</td>
              <td>
                <div className="flex price">
                  <div>$</div>
                  <div>{editPrice?.price}</div>
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
                    setFormData({
                      ...formData,
                      archivos_editables: e.target.value,
                    });
                  }}
                >
                  {SUMMARY_OPTIONS["editables"].options.map((option, index) => (
                    <option
                      key={index}
                      value={option.text}
                      selected={formData?.archivos_editables === option?.text}
                    >
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
                {Icons("credits")} ${getTotalProject()} Coins
              </td>
              <td>
                {coins <= getTotalProject() &&  (
                  <div
                    className="button-blue flex"
                    onClick={() => {
                      setModalBuyCredit(!modalBuyCredits);
                      setDataModals();
                    }}
                  >
                    Recharge coins
                  </div>
                )}
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="footer">
        <section className="section-buttons flex">
          <button className="button" onClick={() => setStep(step - 1)}>
            Back
          </button>
          <button
            className="button"
            onClick={() =>
              getTotalProject() > coins
                ? setModalBuyCredit(!modalBuyCredits)
                : setModalMessageStart(true)
            }
          >
            {getTotalProject() > coins
              ? "Insufficient coins"
              : "Start project"}
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
          message={"Are you sure you want to start the project?"}
          subMessage={
            "Once started you will not be able to change the information or attachments. However, you will be able to purchase more revisions if required."
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
