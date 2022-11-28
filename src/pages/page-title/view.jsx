import React from "react";
import { Icons } from "../icons";
import ModalHelp from "../modals/help";
import "./styles.scss";

function View({
  page,
  user,
  title,
  price,
  modalPriceTotal,
  func,
  modalHelp,
  setModalHelp,
  userData,
  help,
}) {
  return (
    <>
      {page !== "home" && user && (
        <p>
          Hola{" "}
          {userData?.name && userData?.last_name
            ? userData?.name.charAt(0) + userData?.last_name
            : userData?.name}
          ,
        </p>
      )}
      <div className="page-title flex">
        <div className="title">
          {page === "attached-page" && Icons("clip_circle")}
          {page === "team-page" && Icons("team_circle")}

          {page === "home" ? <h2>{title}</h2> : <h2>{title}</h2>}
        </div>

        <div className="section-header-rigth flex">
          {price && (
            <div className="section-header-credit flex">
              <div className="icon-credit flex">{Icons("credits")}</div>
              <div className="credit-value">$ {price[0]?.price} monedas</div>

              <div className="section-header-credit-modal">
                {price.map((price, index) => (
                  <div key={index} className="price-option flex">
                    <p>{price.name}</p>
                    <p>{price.price}</p>
                  </div>
                ))}

                <div className="total flex">
                  <p>Total</p>
                  <div className="total-icon flex">
                    <div className="icon-credit">x</div>
                    <div className="credit-total">
                      $ {modalPriceTotal} Monedas
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {page === "team-page" && (
            <div className="button-blue" onClick={() => func(true)}>
              Invitar personas
            </div>
          )}

          {page !== "home" && (help || help === undefined) && (
            <div
              className="section-header-help flex pointer"
              onClick={() => setModalHelp(!modalHelp)}
            >
              <div className="icon-help flex">{Icons("help")}</div>
              <div className="help-text">Ayuda</div>
            </div>
          )}
        </div>
      </div>

      {modalHelp && <ModalHelp close={setModalHelp} />}
    </>
  );
}

export default View;
