import React from "react";
import { USER_DATA } from "../constats";
import { Icons } from "../icons";
import Tour from "./pages/tour";
import ModalBuyCredits from "../modals/buy-credits";
import { MAIN_MENU, MAIN_SUBMENU } from "../constats";
import "./styles.scss";

function View({
  redirectTo,
  menuActive,
  setMenuActive,
  setIsAuthenticated,
  location,
  tourStep,
  setTourStep,
  tourActive,
  setTourActive,
  userData,
  modalBuyCredits,
  setModalBuyCredit,
  dataModals,
  setDataModals,
  user_id,
}) {
  const path = location.pathname.replaceAll(
    "/",
    location.pathname.length === 1 ? "*" : ""
  );

  return (
    <div className="header-bar flex">
      {tourActive && tourStep === 0 && (
        <Tour
          setTourActive={setTourActive}
          tourStep={tourStep}
          setTourStep={setTourStep}
          title={"¡Bienvenido a AtomicLab!"}
          text={
            "Por favor haz click en Siguiente para iniciar el tour, de lo contrario haz click en Cancelar tour."
          }
        />
      )}
      {tourActive && <div className="back-white"></div>}

      <div className="icon-logo">{Icons("logo")}</div>

      {MAIN_MENU(userData?.rol_id).map((item) => (
        <div
          className={`home option ${
            item.active?.some((el) => path.includes(el)) && "active"
          }`}
          onClick={() => redirectTo(item.redirect)}
        >
          {tourActive && tourStep === item.id && (
            <Tour
              setTourActive={setTourActive}
              tourStep={tourStep}
              setTourStep={setTourStep}
              title={item.tour_title}
              text={item.tour_text}
            />
          )}

          {Icons(
            item.active?.some((el) => path.includes(el))
              ? `${item.id_text}_purple`
              : item.id_text
          )}
        </div>
      ))}

      <div className="search flex">
        <div className="icon-search flex"> {Icons("search")}</div>
        <input type="text" name="" id="" placeholder="Buscar..." />
      </div>

      <div className="icon-notifications option">{Icons("notifications")}</div>
      {userData?.rol_id === 1 && (
        <div className="credits flex">
          <div className="icon-credit flex">
            {Icons("credits")} ${userData?.credits ? userData.credits : 0}
          </div>
          <div
            className="credits-buy flex"
            onClick={() => {
              setModalBuyCredit(!modalBuyCredits);
              setDataModals(user_id);
            }}
          >
            Comprar
          </div>
        </div>
      )}
      <div className="account flex">
        <div className="icon-account">
          <img
            src={
              USER_DATA.brands.filter(
                (brand) => brand.predeterminate === true
              )[0].logo
            }
            alt="logo_predeterminate"
          />
        </div>
        <div className="account-value">
          <div>
            {
              USER_DATA.brands.filter(
                (brand) => brand.predeterminate === true
              )[0].name
            }
          </div>
          <div>
            {userData?.name && userData?.last_name
              ? userData?.name.charAt(0) + userData?.last_name
              : userData?.name}
          </div>
        </div>
        <div className="icon-arrow-up">
          <div className="icon" onClick={() => setMenuActive(!menuActive)}>
            {!menuActive ? Icons("arrow_down") : Icons("arrow_up")}
          </div>

          {menuActive && (
            <div className="menu-account">
              <ul>
                {MAIN_SUBMENU(
                  userData?.rol_id,
                  redirectTo,
                  setIsAuthenticated
                ).map((menu) =>
                  menu.text === "line" ? (
                    <hr />
                  ) : (
                    <li
                      className={menu.text === "Cerrar sesión" && "text-purple"}
                      onClick={() => menu.onClick()}
                    >
                      {menu.text}
                    </li>
                  )
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
      {modalBuyCredits && (
        <ModalBuyCredits close={setModalBuyCredit} data={dataModals} />
      )}
    </div>
  );
}

export default View;
