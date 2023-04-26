import React from "react";

import { Icons } from "../../icons";

import "../../modals/styles.scss";
import "./styles.scss";
import { GiTicket } from "react-icons/gi";

import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";

initMercadoPago("APP_USR-9b0c6ab6-4363-43db-9e54-2ac153b479d0", {
  locale: "es-CO",
});

function View({
  close,
  setCoinsQ,
  total,
  coinsQ,
  idWallet,
  discountValidate,
  loadingDiscount,
  setCodeInput,
  discountTotal,
  excBuy,
  loadingExcBuy,
}) {
  const customization = {
    checkout: {
      theme: {
        elementsColor: "#6b72fd",
        headerColor: "#6b72fd",
      },
    },
    texts: {
      action: "buy",
      valueProp: "security_details",
    },
  };
  return (
    <div id="myModal" className="modal buy-credits">
      <div className="modal-content">
        <h2>Compra de monedas</h2>

        <div className="select-coins">
          <div className="coins">
            <div>{Icons("credits")}</div>
            <div className="coins-input">
              <label htmlFor="coins">Seleccione cantidad</label>
              <input
                type="number"
                name="coins"
                id="coins"
                min={0}
                onChange={(e) => setCoinsQ(e.target.value)}
                className="input-txt"
              />
            </div>
          </div>
        </div>
        <div className="select-coins">
          <div className="coins">
            <div className="coins-icons">
              <GiTicket />
            </div>
            <div className="coins-input">
              <label htmlFor="coins">Ingrese cupón de descuento</label>
              <input
                disabled={discountValidate}
                type="text"
                name="discount"
                id="discount"
                className={`input-txt ${loadingDiscount && "loading"} ${
                  discountValidate === null
                    ? ""
                    : !discountValidate
                    ? "error"
                    : "ok"
                } `}
                onChange={(e) =>
                  e.target.value.length === 10 && setCodeInput(e.target.value)
                }
              />

              {discountValidate !== null && !discountValidate && (
                <div className="discount-not-exists">
                  Código de descuento no existe
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="totals">
          <div className="total">Subtotal: $ {coinsQ * 1000}</div>
          <div className="total">
            Descuento: $ {(coinsQ * 1000 * discountTotal) / 100}
          </div>
          <div className="total">Total: $ {total}</div>
        </div>

        <section className="footer">
          <section className="section-buttons flex">
            <button className="button" onClick={() => close(false)}>
              Cancelar
            </button>
            {!idWallet && (
              <button
                disabled={total === 0}
                className="button-purple"
                onClick={() => excBuy()}
              >
                {loadingExcBuy ? "Procesando..." : "Procesar pago"}
              </button>
            )}
            <div className="mp-button">
              {idWallet && (
                <>
                  <div id={idWallet}></div>
                  <Wallet
                    initialization={{
                      preferenceId: idWallet,
                      redirectMode: "modal",
                    }}
                    customization={customization}
                    onSubmit={() => close(false)}
                  />
                </>
              )}
            </div>
          </section>
        </section>
      </div>
    </div>
  );
}

export default View;
