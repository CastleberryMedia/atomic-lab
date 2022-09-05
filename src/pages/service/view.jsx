import React from "react";

import { TYPE_PUBLICATION_DATA } from "../constats";
import PageTitle from "../page-title";
import parse from "html-react-parser";
import ModalMessage from "../modals/message";

import { Icons } from "../icons";
import "./styles.scss";

function View({
  serviceData,
  typePublication,
  setTypePublication,
  typeManual,
  setTypeManual,
  redirectToHome,
  modalPriceTotal,
  redirectToForm,
  selectType,
  setSelectType,
  modalMessage,
  setModalMessage,
  socialNetwork,
  setSocialNetwork,
  brands,
  data,
  formData,
  setFormData,
  navigate,
}) {
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

      <section className="section-specs">
        {serviceData?.specs?.map((spec, index) => (
          <div key={index} className="section-specs-spec">
            <h3>{spec.title}</h3>
            <ul>
              {spec.options.map((option, index) => (
                <li key={index}>{option}</li>
              ))}
            </ul>
          </div>
        ))}
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
            onChange={(e) =>
              setFormData({ ...formData, brand_select: e.target.value })
            }
          >
            <option disabled selected>
              Selecciona una opción
            </option>
            {brands?.map((brand, index) => (
              <option key={index} defaultValue={brand.name}>
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

      <section className="section-publication-type">
        <h3>2. {serviceData?.publication_type?.title}</h3>

        <div className="type-check flex">
          {serviceData?.publication_type?.options.map((option, index) => (
            <label key={index} className="flex">
              <div className="circle-check">
                <input
                  checked={typePublication === option}
                  key={index}
                  type="checkbox"
                  id="p_type"
                  value={option}
                  onClick={() => {
                    setTypePublication(option);
                    setFormData({
                      ...formData,
                      type_publication: option
                        .replaceAll(" ", "-")
                        .toLowerCase(),
                    });
                  }}
                />
              </div>
              {option}
            </label>
          ))}
        </div>

        {typePublication !== "" && (
          <>
            <p className="type-check-desc">
              Selecciona el tipo de {typePublication.toLowerCase()} que
              nesecitas
            </p>
            <div className="type-cards flex">
              {TYPE_PUBLICATION_DATA[typePublication].options.map(
                (option, index) => (
                  <div
                    key={index}
                    className={`type-card flex ${
                      selectType === option && "active"
                    }`}
                    onClick={() => {
                      setSelectType(selectType === option ? "" : option);
                      setFormData({
                        ...formData,
                        type_post: option.replaceAll(" ", "-").toLowerCase(),
                      });
                    }}
                  >
                    {option}

                    {Icons("img_circle")}
                  </div>
                )
              )}
            </div>
          </>
        )}
      </section>

      <section className="section-social-network">
        <h3>3. {serviceData?.social_network?.title}</h3>

        <div className="social-network-check flex">
          {serviceData?.social_network?.options.map((option, index) => (
            <label className="flex" key={index}>
              <div className="circle-check">
                <input
                  checked={socialNetwork === option.name}
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
        </div>
      </section>

      <section className="section-buttons flex">
        <div className="button" onClick={() => redirectToHome()}>
          Atrás
        </div>

        {
          /* !data.brand_select || */
          !data.type_publication || !data.type_post || !data.social_network ? (
            <div className="button-gray">Continuar</div>
          ) : (
            <div className="button" onClick={() => redirectToForm()}>
              Continuar
            </div>
          )
        }
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

const x = {
  user_id: "1",
  designer_freedom: "high",
  social_network: "Facebook",
  brand_select: "Pepsi",
  type_publication: "post",
  type_post: "post",
  name_project: "Mi nuevo proyecto",
  public_goal: "mi público objetivo",
  palete_colors: "mi paleta de colores",
  references: [
    {
      id: 0,
      text: "mi referencia 1",
      content: {},
    },
  ],
  idea_post: "Mi idea a desarrollar",
  post: [
    {
      id: 1,
      objetive: "mi objetivo imagen 1",
      text: "Mi texto a incluir",
      file_img: {},
    },
    {
      id: 2,
      text: "texto imagen 2",
      objetive: "mi objetivo imagen2",
      file_img: {},
    },
  ],
};
