import React from "react";
import { Icons } from "../icons";
import PageTitle from "../page-title";
import ModalZoomImg from "../modals/zoom-img";
import Message from "../modals/message";
import ReactiveButton from "reactive-button";
import "./styles.scss";

function View({
  projectData,
  redirectTo,
  setModalZoomImg,
  modalZoomImg,
  menuTopView,
  setMenuTopView,
  modalData,
  setModalData,
  reviews,
  versionSelect,
  setVersionSelect,
  versionVote,
  setVersionVote,
  id,
  userData,
  optionsImg,
  selectedImgArray,
  optionsCount,
  onSelectFile,
  setOptionsImg,
  setOptionsCount,
  state,
  onClickHandler,
  finishProject,
  onClickHandlerFinishReview,
  stateFinishReview,
  modalMessageFinish1,
  setModalMessageFinish1,
  modalMessageFinish2,
  setModalMessageFinish2,
  projectExtraData,
  modalMessageFinish3,
  setModalMessageFinish3,
}) {
  return (
    <div className="page reviews">
      <div>
        <PageTitle
          page={"reviews"}
          user={true}
          title={projectData?.values.name_project}
        />

        <div className="info-drop flex">
          {reviews?.review_data?.length >= 1 && (
            <div className="info-drop-item flex">
              Versión {versionSelect}
              <div
                onClick={() =>
                  setMenuTopView(menuTopView === "version" ? "" : "version")
                }
              >
                {Icons(menuTopView === "version" ? "arrow_up" : "arrow_down")}
              </div>
              {menuTopView === "version" && (
                <div className="menu-float">
                  {reviews?.review_data?.length >= 1 ? (
                    <>
                      {reviews?.review_data?.map((review, index) => (
                        <div
                          key={index}
                          className="option-reviews"
                          onClick={() => {
                            setVersionSelect(review.version);
                            setMenuTopView("");
                          }}
                        >
                          Versión {review.version}
                        </div>
                      ))}
                      {userData?.rol_id === 3 && (
                        <div
                          className="option-reviews"
                          onClick={() => {
                            setVersionSelect(reviews?.review_data?.length + 1);
                            setMenuTopView("");
                          }}
                        >
                          Versión {reviews?.review_data?.length + 1}
                        </div>
                      )}
                    </>
                  ) : userData?.rol_id !== 3 ? (
                    <p>No hay más versiones disponibles</p>
                  ) : (
                    <div
                      className="option-reviews"
                      onClick={() => {
                        setVersionSelect(1);
                        setMenuTopView("");
                      }}
                    >
                      Versión 1
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
          <div className="info-drop-item flex">
            Información del proyecto
            <div
              onClick={() =>
                setMenuTopView(menuTopView === "info" ? "" : "info")
              }
            >
              {Icons(menuTopView === "info" ? "arrow_up" : "arrow_down")}
            </div>
            {menuTopView === "info" && (
              <div className="menu-float">
                <p className="title">Tiempo de entrega</p>
                <p className="text-purple">{projectExtraData.tiempo_entrega}</p>
                <p className="title">Formato de entrega</p>
                <p className="text-purple">
                  {projectExtraData.formato_entrega}
                </p>
                <p className="title">Tamaño</p>
                <p className="text-purple">{projectExtraData.tamaño}</p>
                <p className="title">Archivos editables</p>
                <p className="text-purple">
                  {projectData.values.archivos_editables}
                </p>
                <p className="title">Impresión</p>
                <p className="text-purple">????</p>
              </div>
            )}
          </div>
          <div className="info-drop-item flex">
            Revisiones
            <div
              onClick={() =>
                setMenuTopView(menuTopView === "review" ? "" : "review")
              }
            >
              {Icons(menuTopView === "review" ? "arrow_up" : "arrow_down")}
            </div>
            {menuTopView === "review" && (
              <div className="menu-float">
                <div className="reviews-count">
                  Has realizado
                  <span className="text-purple">
                    {" "}
                    {projectData.review} de{" "}
                    {projectData.values.revisiones === "Ilimitado"
                      ? "∞"
                      : projectData.values.revisiones}{" "}
                  </span>
                  revisiones
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {reviews?.versions?.length >= 1 ||
      (reviews?.review_data?.length >= 1 &&
        reviews?.review_data?.filter(
          (filter) => filter.version === versionSelect
        )[0] !== undefined) ? (
        <>
          <p className="description">
            Haz click sobre la(s) imagen(es) para agrandar, luego arrastra para
            dejar un comentario. Una vez termines de hacer todos los comentarios
            en la imagen, haz click en guardar. Ten en cuenta que luego de
            guardar no podrás realizar más comentarios
          </p>

          <div className="versions-content flex">
            {reviews?.review_data?.filter(
              (filter) => filter.version === versionSelect
            )[0] &&
              reviews?.review_data
                ?.filter((filter) => filter.version === versionSelect)[0]
                .versions?.map((version, index) => (
                  <div key={index} className="version">
                    <div className="version-id">Opción {version.id}</div>
                    <div
                      className={`version-img ${
                        reviews?.review_data?.filter(
                          (filter) => filter.version === versionSelect
                        )[0].versions.length >= 2
                          ? "img-2"
                          : "img-1"
                      } ${
                        reviews.last_selection_id === version.id
                          ? "img-select"
                          : "img-no-select"
                      }`}
                      onClick={() => {
                        setModalData({
                          id: version.id,
                          img: version.content,
                          version_id: versionSelect,
                          project_id: id,
                        });
                        setModalZoomImg(!modalZoomImg);
                      }}
                    >
                      <img
                        className="img-load"
                        src={version.content}
                        alt={version.id}
                      />
                    </div>
                  </div>
                ))}
            {userData?.rol_id !== 3 &&
              reviews?.review_data?.filter(
                (filter) => filter.version === versionSelect
              )[0].versions?.length >= 2 && (
                <div className="versio vote-main">
                  <p>De las anteriores propuestas, ¿Cuál te gusta más?</p>

                  {reviews?.review_data
                    ?.filter((filter) => filter.version === versionSelect)[0]
                    .versions?.map((version, index) => (
                      <div key={index} className="version-vote flex">
                        <div className="version-vote-id">
                          Opción {version.id}
                        </div>
                        <div className="version-vote-id">
                          <input
                            checked={version.id === versionVote}
                            type="checkbox"
                            name=""
                            id=""
                            onClick={() => setVersionVote(version.id)}
                          />
                        </div>
                      </div>
                    ))}
                </div>
              )}
          </div>
        </>
      ) : userData?.rol_id !== 3 ? (
        <div className="message">
          <h3 className="text-purple">No hay revisiones disponibles</h3>
        </div>
      ) : (
        <>
          <p className="description">
            Adjunta las(s) imágen(es) para subirlas en la version seleccionada
          </p>
          <div className="versions-content flex">
            {optionsImg.map((item, index) => (
              <div key={index} className="version lines flex">
                {selectedImgArray?.filter(
                  (itemImg) => itemImg.id === item.id
                )[0]?.object && (
                  <div className="lines-img">
                    <img
                      className="img-load"
                      src={
                        selectedImgArray?.filter(
                          (itemImg) => itemImg.id === item.id
                        )[0]?.object
                      }
                      alt="preview"
                    />
                    <div className="buttons-action flex">
                      <>
                        <label
                          htmlFor={`reference-${item.id}`}
                          className="button-purple flex"
                        >
                          Modificar
                        </label>
                        <input
                          type="file"
                          label="Texto a incluir"
                          required={false}
                          className="input-add-option"
                          id={`reference-${item.id}`}
                          onChange={(e) => {
                            onSelectFile(e, item.id);
                          }}
                        />
                      </>
                      <div
                        className="button-purple"
                        onClick={() =>
                          setOptionsImg(
                            optionsImg.filter((option) => option.id !== item.id)
                          )
                        }
                      >
                        Eliminar
                      </div>
                    </div>
                  </div>
                )}

                {!selectedImgArray?.filter(
                  (itemImg) => itemImg.id === item.id
                )[0]?.object && (
                  <>
                    <label
                      htmlFor={`reference-${item.id}`}
                      className="button-blue flex"
                    >
                      {Icons("clip_white")}
                      {selectedImgArray?.filter((img) => img.id === item.id)
                        .length >= 1
                        ? selectedImgArray?.filter(
                            (img) => img.id === item.id
                          )[0].name
                        : "Adjuntar"}
                    </label>
                    <input
                      type="file"
                      label="Texto a incluir"
                      required={false}
                      className="input-add-option"
                      id={`reference-${item.id}`}
                      onChange={(e) => {
                        onSelectFile(e, item.id);
                      }}
                    />
                  </>
                )}
              </div>
            ))}
            {optionsCount <= 3 && (
              <div
                className="version add flex"
                onClick={() => {
                  setOptionsImg((post) => [...post, { id: optionsCount + 1 }]);
                  setOptionsCount(optionsCount + 1);
                }}
              >
                {Icons("add_plus")} <span className="text-purple">Agregar</span>
              </div>
            )}
          </div>
        </>
      )}
      {modalZoomImg && (
        <ModalZoomImg close={setModalZoomImg} data={modalData} />
      )}
      <div className="footer">
        {userData?.rol_id !== 3 ? (
          reviews?.review_data?.length >= 1 && (
            <p className="footer-desc">
              Si ya realizaste todos tus comentarios, haz click en
              <span className="text-purple"> Finalizar revisión </span>para
              notificarle a tu diseñador. De lo contrario haz click en
              <span className="text-purple"> Aprobar proyecto </span>para
              terminar tu proyecto
            </p>
          )
        ) : (
          <p className="footer-desc">
            Si ya subiste todas las opciones a revisar, haz click en
            <span className="text-purple"> Guardar opciones </span>
            para notificarle al administrador del proyecto.
          </p>
        )}
        <div className="buttons flex">
          <div className="button" onClick={() => redirectTo("/")}>
            Atrás
          </div>

          {userData?.rol_id !== 3 &&
          versionSelect === reviews?.review_data?.length ? (
            <div className="buttons-approve flex">
              <div className="button-reactive">
                <div className="globe-text">
                  Si estas satisfecho con el diseño, haz click en
                  <div className="text-red">aprobar proyecto</div> para darlo
                  por terminado.
                </div>
                <div
                  className="button"
                  onClick={() => setModalMessageFinish1(true)}
                >
                  Aprobar proyecto
                </div>
              </div>
              <div className="button-reactive">
                <div className="globe-text">
                  Si ya realizaste todos tus comentarios, haz click en
                  <div className="text-purple">finalizar revisión</div> para
                  notificarle al diseñador.
                </div>
                <ReactiveButton
                  className="button"
                  buttonState={stateFinishReview}
                  onClick={() => onClickHandlerFinishReview()}
                  shadow={false}
                  loadingText={"Finalizando...."}
                  outline={false}
                  rounded={false}
                  block={false}
                  idleText={"Finalizar revisión"}
                />
              </div>
            </div>
          ) : (
            selectedImgArray.length >= 1 && (
              <div className="button-reactive">
                <ReactiveButton
                  className="button"
                  buttonState={state}
                  onClick={() => onClickHandler("save")}
                  shadow={false}
                  loadingText={"Guardando..."}
                  outline={false}
                  rounded={false}
                  block={false}
                  idleText={"Guardar Opciones"}
                />
              </div>
            )
          )}
        </div>
      </div>
      {modalMessageFinish1 && (
        <Message
          message="¿Estas seguro que quieres dar por terminado el proyecto?"
          subMessage="Después de dar continuar no podrás realizar ninguna modificación"
          cancel={() => setModalMessageFinish1(false)}
          cancelVisible={true}
          next_type="finish"
          next={() => {
            setModalMessageFinish1(false);
            setModalMessageFinish2(true);
            onClickHandler("finish");
          }}
        />
      )}
      {modalMessageFinish2 && (
        <Message
          message="!Felicitaciones¡ Tu proyecto ha finalizado"
          subMessage="Espera a que el diseñador suba los archivos para que los puedas descargar. Mientras tanto, puedes visualizar el diseño final"
          next={() => {
            setModalMessageFinish2(false)();
          }}
        />
      )}
      {modalMessageFinish3 && (
        <Message
          message="Tus comentarios han sido recibidos"
          next={() => {
            setModalMessageFinish3(false)();
          }}
        />
      )}
    </div>
  );
}

export default View;
