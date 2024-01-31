import React, { useState } from "react";

import PageTitle from "../page-title";
import parse from "html-react-parser";
import ModalMessage from "../modals/message";
import ModalBuyCredits from "../modals/buy-credits";
import { FORM_INPUTS, SUMMARY_OPTIONS } from "../constats";
import References from "./references";
import Post from "./post";
import { Icons } from "../icons";

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
  serviceData,
  typeManual,
  setTypeManual,
  redirectToHome,
  modalPriceTotal,
  redirectToForm,
  modalMessage,
  setModalMessage,
  socialNetwork,
  setSocialNetwork,
  brands,
  formData,
  setFormData,
  navigate,
  redirectToService,
  setStep,
  step,
  references,
  setReferences,
  referencesCount,
  setReferencesCount,
  selectedImgArray,
  post,
  setPost,
  setPostCount,
  postCount,
  handleUpdatePost,
  modalMessageStart,
  setModalMessageStart,
  modalMessageStartStatus,
  setModalMessageStartStatus,
  handleStartProject,
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
  /*   dataLocal, */
}) {

  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    sessionStorage.setItem('terms', JSON.stringify(true));
  };
  
  return (
    <div className="form-page page service-page selection-page summary-page">
      <PageTitle
        title={serviceData?.title}
        price={serviceData?.price?.basic}
        modalPriceTotal={modalPriceTotal}
      />
      <section className="section-image">
        {Icons(`header_${serviceData?.title.replace(" ", "_").toLowerCase()}`)}
      </section>
      <section className="section-description">
        {parse(serviceData?.description_page)}
      </section>
      {serviceData?.types_manuals && (
        <section className="section-cards-manuals flex">
          {serviceData?.types_manuals?.map((type, index) => (
            <div key={index} className="card-manual">
              <div className="title-section flex">
                <div className="title">{type.title}</div>
                <div className="check">
                  <input
                    checked={typeManual === type.title}
                    key={index}
                    type="checkbox"
                    id="m_type"
                    value={type.title}
                    onClick={() => setTypeManual(type.title)}
                  />
                </div>
              </div>

              <div className="content-section">
                {type.options.map((option, index) => (
                  <p key={index} className="flex">
                    <div className="icon-check-purple">x</div>
                    <div className="option-value">{option}</div>
                  </p>
                ))}
              </div>

              <div className="footer-section flex">
                <div className="icon-credit">X</div>
                <div className="credit-value">$ {type.price} Monedas</div>
              </div>
            </div>
          ))}
        </section>
      )}
      <section className="section-brand">
        <h3>1. ¿Cuál marca vas a utilizar?  
        <span className="required2">
          {FORM_INPUTS.name.required && "(Requerido)"}
        </span></h3>

        <div className="o-brands flex">
          <select
            name="brand_select"
            id="brand_select"
            className="select"
            onChange={({ target }) => {
              setFormData({ ...formData, brand_select: target.value });
            }}
            defaultValue={formData?.brand_select}
          >
            <option disabled selected>
              Selecciona una opción
            </option>
            {[
              ...new Map(brands?.map((item) => [item["name"], item])).values(),
            ]?.map((brand, index) => (
              <option
                key={index}
                value={brand?.name}
                selected={formData?.brand_select === brand?.name}
              >
                {brand?.name}
              </option>
            ))}
          </select>

          <div
            className="add-brand flex"
            onClick={() => { 
              handleToggle(); 
              navigate("/brands/brands-form"); 
            }}
          >
            {Icons("add_circle")}{" "}
            <span className="text-purple">Agregar nueva marca</span>
          </div>
        </div>
      </section>

      <section className="section-social-network">
        <h3>2. {serviceData?.social_network?.title}
        <span className="required2">
          {FORM_INPUTS.name.required && "(Requerido)"}
        </span></h3>

        <div className="social-network-check flex">
          {serviceData?.social_network?.options.map((option, index) => (
            <label className="flex" key={index}>
              <div className="circle-check">
                <input
                  checked={
                    socialNetwork === option.name ||
                    option.name === formData?.social_network
                  }
                  disabled={option.status === "inactive"}
                  type="checkbox"
                  id="s_net"
                  value={option.name}
                  onChange={(e) => {
                    setSocialNetwork(e.target.value);
                    setFormData({
                      ...formData,
                      social_network: e.target.value,
                    });
                  }}
                />
              </div>
              <div>
                <p>{option.name}</p>
                <p>{option.status === "inactive" ? "(próximamente)" : ""}</p>
              </div>
            </label>
          ))}
          {socialNetwork === "Otra ¿Cuál?" && (
            <div className="other-design">
              <label htmlFor="other-design" className="label">
                ¿Cuál?
              </label>
              <input
                type="text"
                name="other-design"
                id="other-design"
                className="input-txt"
              />
            </div>
          )}
        </div>
      </section>

      <section className="subtitle">
        <p>
          Contesta las siguientes preguntas por medio de
          <span className="text-purple"> texto</span>,
          <span className="text-purple"> voz</span>, y/o un
          <span className="text-purple"> video</span>. También puedes
          <span className="text-purple"> adjuntar</span> un archivo si lo
          deseas.
        </p>
        <p>
          Todos los campos son opcionales excepto el
          <span className="text-purple"> nombre del proyecto</span>.
        </p>
        <p>
          Entre más información nos brindes, mejor será todo el proceso de
          desarrollo de tu requerimiento.
        </p>
      </section>

      <section className="content1">
        <div className="columns">
          <div className="column">
            <div>
              <label htmlFor="name">
                {FORM_INPUTS.name.label}{" "}
                <span className="required">
                  {FORM_INPUTS.name.required && "(Requerido)"}
                </span>
              </label>
              <input
                {...FORM_INPUTS.name}
                id="name"
                onChange={(e) => {
                  setFormData({ ...formData, name_project: e.target.value });
                }}
                value={formData?.name_project}
              />
            </div>
          </div>
          <div className="column"></div>
        </div>
        {/* <div className="columns">
          <div className="column">
            <div>
              <label htmlFor="public">{FORM_INPUTS.public.label}</label>
              <textarea
                {...FORM_INPUTS.public}
                id="public"
                name="public"
                onChange={(e) => {
                  setFormData({ ...formData, public_goal: e.target.value });
                }}
                value={formData?.public_goal}
              />
            </div>
          </div>
          <div className="column">
            <div>
              <label htmlFor="colors">{FORM_INPUTS.palete_colors.label}</label>
              <textarea
                {...FORM_INPUTS.palete_colors}
                id="colors"
                onChange={(e) => {
                  setFormData({ ...formData, palete_colors: e.target.value });
                }}
                value={formData?.palete_colors}
              />
            </div>
          </div>
        </div> */}
        <p>
          Adjunta los <span className="text-purple"> archivos</span> y
          <span className="text-purple"> referencias/ejemplos</span> que creas
          que nos pueden ayudar a diseñar tu requerimiento.
        </p>
        {references
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .map((item, index) => (
            <References
              key={index}
              references={references}
              setReferences={setReferences}
              data={item}
            />
          ))}

        <div
          className="more flex"
          onClick={() => {
            setReferencesCount(referencesCount + 1);
            setReferences((references) => [
              ...references,
              { id: referencesCount },
            ]);
          }}
        >
          <div className="icon-add flex">{Icons("add_white")}</div>
          <p>Adjuntar más archivos/referencias/ejemplos/etc.</p>
        </div>
      </section>

      <section className="subtitle">
        <p>
          Ingresa la información que tengas para cada una de las publicaciones a
          diseñar
        </p>
      </section>

      <section className="content2">
        <div className="columns">
          <div className="column">
            <div className="column-item">
              <label htmlFor="idea">
                {FORM_INPUTS.idea.label}{" "}
                <div className="required">
                  {FORM_INPUTS.idea.required && "(Requerido)"}
                </div>
              </label>
              <textarea
                {...FORM_INPUTS.idea}
                id="idea"
                onChange={(e) => {
                  setFormData({ ...formData, idea_post: e.target.value });
                }}
                defaultValue={formData?.idea_post}
              />
            </div>
          </div>
          <div className="column"></div>
        </div>

        {post
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .map(
            (item, index) =>
              item.id >= 1 && (
                <Post
                  key={index}
                  id={item.id}
                  post={post}
                  setPost={setPost}
                  setPostCount={setPostCount}
                  postCount={postCount}
                  handleUpdatePost={handleUpdatePost}
                />
              )
          )}

        <div
          className="add flex"
          onClick={() => {
            setPost((post) => [
              ...post,
              { id: postCount + 1, objetive: "", text: "" },
            ]);
            setPostCount(postCount + 1);
          }}
        >
          {Icons("add_white")}
          <p>Añade una nueva publicación a ésta solicitud </p>
        </div>
      </section>

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
            <div className="value">{formData.brand_select}</div>
          </div>
          {/* <div className="row">
            <div className="title">Post</div>
            <div className="value">{formData.type_post}</div>
          </div> */}
          <div className="row">
            <div className="title">Redes Sociales</div>
            <div className="value">{formData.social_network}</div>
          </div>
          {/* <div className="row">
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
          </div> */}
        </div>

        {/* <div className="liberty flex">
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
                    formData.designer_freedom === "ninguna" && "active"
                  }`}
                  onClick={() => {
                    setFormData({ ...formData, designer_freedom: "ninguna" });
                  }}
                ></div>
                <p>Ninguna</p>
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
                <p>Media</p>
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
                <p>Mucha</p>
              </div>
            </div>
            <div className="line-back"></div>
          </div>
        </div> */}

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
                  Tiempo de entrega estimado (1ra versión): {val_date}{Icons("help_circle")}
                </div>
              </td>
            </tr>
            <tr>
              <td>Formato de entrega</td>
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
              <td>Revisiones</td>
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
              <td>Tamaño</td>
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
              <td>Archivos editables</td>
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
                {Icons("credits")} ${getTotalProject()} Monedas
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
                    Recargar monedas
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
          <button className="button" onClick={() => redirectToHome()}>
            Atrás
          </button>
          <button
            disabled={!formData?.brand_select || !formData?.social_network || !formData?.name_project || !formData?.idea_post}
            className="button"
            onClick={() =>
              getTotalProject() > coins
                ? setModalBuyCredit(!modalBuyCredits)
                : setModalMessageStart(true)
            }
          >
            {getTotalProject() > coins
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


      {/* <section className="section-specs">
        {serviceData?.specs?.map((spec, index) => (
          <div key={index} className="section-specs-spec" onClick={() => setIsActive(!isActive)}>
            <div>
              <h3 className="plus-title-left">{spec.title}</h3>
              <h3 className="plus-title-right">{isActive ? '-' : '+'}</h3>
            </div>
            {isActive && 
            <ul className="content-accordion">
              {spec.options.map((option, index) => (
                <li key={index}>{option}</li>
              ))}
            </ul>}
          </div>
        ))}
      </section> */}
      {/* <section className="section-buttons flex">
        <button className="button" onClick={() => redirectToHome()}>
          Atrás
        </button>

        <button
          disabled={!formData?.brand_select || !formData?.social_network}
          className={"button"}
          onClick={() => redirectToForm()}
        >
          Continuar
        </button>
      </section> */}
      {modalMessage && (
        <ModalMessage
          next={setModalMessage}
          message="Una vez empieces, la información ingresada se guardará automáticamente en tus borradores"
        />
      )}
    </div>
  );
}

export default View;
