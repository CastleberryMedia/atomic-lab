import React from "react";
import { Icons } from "../icons";
import Tour from "./pages/tour";
import ModalBuyCredits from "../modals/buy-credits";
import ModalHelp from "../modals/help";
import { MAIN_MENU, MAIN_SUBMENU, NOTIFICATION_TEXT } from "../constats";
import ReactTooltip from "react-tooltip";
import parse from "html-react-parser";
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
  modalHelp,
  setModalHelp,
  updateTour,
  notifications,
  notificationsView,
  setNotificationsView,
  brands,
  search,
  setSearch,
  coins,
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
          updateTour={updateTour}
        />
      )}
      {tourActive && <div className="back-white"></div>}

      <a href="/#/"><div className="icon-logo">{Icons("logo")}</div></a>

      {MAIN_MENU(userData?.rol_id).map((item, index) => (
        <>
          <div
            key={index}
            className={`home option ${
              item.active?.some((el) => path.includes(el)) && "active"
            } ${item.tour_title.replaceAll(" ", "-").toLowerCase()}`}
            onClick={() => redirectTo(item.redirect)}
            data-tip={item.tour_title}
          >
            {tourActive && tourStep === item.id && (
              <Tour
                setTourActive={setTourActive}
                tourStep={tourStep}
                setTourStep={setTourStep}
                title={item.tour_title}
                text={item.tour_text}
                updateTour={updateTour}
              />
            )}

            {Icons(
              item.active?.some((el) => path.includes(el))
                ? `${item.id_text}_purple`
                : item.id_text
            )}
            <p>&nbsp;{item.tour_title}</p>
          </div>
          <ReactTooltip type={"light"} place={"bottom"} data-for={1} />
        </>
      ))}

      {/* <div className="search flex">
        <div className="icon-search flex"> {Icons("search")}</div>
        <input
          type="text"
          name=""
          id=""
          placeholder="Buscar..."
          onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
        />
      </div> */}
      {notificationsView}
      <div className="icon-notifications option notificaciones">
        <div
          className="image"
          onClick={() => setNotificationsView(!notificationsView)}
        >
          <div data-tip="Notifications">{Icons("notifications")}</div>
          {notifications?.length >= 1 && (
            <div className="count">{notifications?.length}</div>
          )}
        </div>
        <ReactTooltip type={"light"} place={"bottom"} data-for={2} />

        {notificationsView && (
          <div className="float-notifications">
            {notifications.length ? (
              <div className="float-notifications-list">
                {notifications
                  ?.slice(0)
                  .reverse()
                  .map((noti, index) => (
                    <div
                      className="float-notifications-list-item"
                      key={index}
                      onClick={() =>
                        redirectTo(`/project-detail/${noti.project_id}`)
                      }
                    >
                      <div className="float-notifications-list-item-text">
                        {parse(NOTIFICATION_TEXT(noti))}
                      </div>
                      <div className="float-notifications-list-item-date">
                        {noti.updated_at}
                      </div>
                    </div>
                  ))}
              </div>
            ) : (
              <div className="float-notifications-cero">
                <div className="float-notifications-cero-icon">
                  {Icons("notification_circle")}
                </div>
                <div className="float-notifications-cero-title">
                  Tus notificaciones se mostrarán aquí
                </div>
                <div className="float-notifications-cero-subtitle">
                  Recibe información importante sobre nuestros productos y
                  servicios, tu colaboración con otros usuarios y otras
                  actualizaciones relevantes para ti.
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {userData?.rol_id === 8 && (
        <button
          className="button-purple"
          onClick={() => {
            redirectTo("/discounts");
          }}
        >
          Discounts
        </button>
      )}
      {userData?.rol_id === 1 && (
        <div className="credits flex">
          <div className="icon-credit flex">
            {Icons("credits")} $ {coins}
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
      <div className="account flex admin-cuenta option">
        {brands?.filter((brand) => brand.predeterminate === 1)[0]
          ?.url_image && (
          <div className="icon-account">
            <img
              src={
                brands?.filter((brand) => brand.predeterminate === 1)[0]
                  ?.url_image || Icons("icon_img_post")
              }
              alt="logo_predeterminate"
            />
          </div>
        )}

        <div className="account-value" data-tip="Administración de la cuenta">
          <div>
            {brands?.filter((brand) => brand.predeterminate === 1)[0]?.name}
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
                  setIsAuthenticated,
                  setModalHelp,
                  modalHelp
                ).map((menu, index) =>
                  menu.text === "line" ? (
                    <hr key={index} />
                  ) : (
                    <li
                      key={index}
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
        <ReactTooltip type={"light"} place={"bottom"} data-for={3} />
      </div>
      {modalBuyCredits && (
        <ModalBuyCredits close={setModalBuyCredit} data={dataModals} />
      )}
      {modalHelp && <ModalHelp close={setModalHelp} data={dataModals} />}
    </div>
  );
}

export default View;
