import React from "react";
import PageTitle from "../../../page-title";
import "./styles.scss";
import { Icons } from "../../../icons";
import ModalMessage from "../../../modals/message";
import ReactTooltip from "react-tooltip";

function View({
  redirectToBrandForm,
  brands,
  predeterminateBrand,
  modalMessage,
  setModalMessage,
  delete_brand,
}) {
  return (
    <div className="brands-page page">
      <PageTitle page={"brands-page"} user={true} title="Mis marcas" />
      <div className="description">
        Agrega la información de tu empresa y de la marca. Si tienes otras
        marcas, las puedes agregar aqui.
      </div>

      <section className="content flex">
        {brands?.map((brand, index) => (
          <div key={index} className="brand-card">
            <div
              className="delete-icon"
              data-tip={"Borrar marca"}
              onClick={() => delete_brand(brand.id)}
            >
              {Icons("delete_circle")}
            </div>
            <div
              className="card-content"
              onClick={() => redirectToBrandForm(brand.id)}
            >
              <p>Perfil de la marca</p>

              <p>
                {brand.url_image ? (
                  <img src={brand.url_image} alt={brand.url_image} />
                ) : (
                  Icons("icon_img_post")
                )}
              </p>
              <p>{brand.name}</p>
            </div>
            <div className="footer">
              {brand.predeterminate === 1 ? (
                <div className="predt">
                  <div className="start-pred">☆</div>
                  <div>Predeterminar</div>
                </div>
              ) : (
                <div
                  className="predt"
                  onClick={() => predeterminateBrand(brand.id)}
                >
                  <div className="start">☆</div>
                  <div>Predeterminar</div>
                </div>
              )}
            </div>
          </div>
        ))}
        <div className="brand-card" onClick={() => redirectToBrandForm()}>
          <div className="card-content">
            <p>Perfil de la marca</p>

            {Icons("add_brand")}

            <p>Añadir otra marca</p>
          </div>
          <div className="footer"></div>
        </div>

        <ReactTooltip place={"bottom"} data-for={2} />
      </section>

      {modalMessage.visible && (
        <ModalMessage
          next={() => setModalMessage(false)}
          cancelVisible={false}
          message={modalMessage.message}
        />
      )}
    </div>
  );
}

export default View;
