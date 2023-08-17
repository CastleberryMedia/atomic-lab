import React, { useState } from "react";

import PageTitle from "../page-title";
import parse from "html-react-parser";
import ModalMessage from "../modals/message";
import { FORM_INPUTS } from "../constats";

import { Icons } from "../icons";
import "./styles.scss";

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
  /*   dataLocal, */
}) {

  const [isActive, setIsActive] = useState(false);
  
  return (
    <div className="page service-page">
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
        <h3>1. ¿Cuál marca vas a utilizar?</h3>

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
            onClick={() => navigate("/brands/brands-form")}
          >
            {Icons("add_circle")}{" "}
            <span className="text-purple">Agregar nueva marca</span>
          </div>
        </div>
      </section>

      <section className="section-social-network">
        <h3>2. {serviceData?.social_network?.title}</h3>

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
      <section className="section-specs">
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
      </section>
      <section className="section-buttons flex">
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
      </section>
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
