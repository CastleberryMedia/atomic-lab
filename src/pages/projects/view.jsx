import React from "react";
import FadeLoader from "react-spinners/FadeLoader";
import { Icons } from "../icons";
import { PROJECTS_2 } from "../constats";
import ModalPrivateNotes from "../modals/private-notes";
import ModalFinalComments from "../modals/final-comments";
import ModalFinalDesigns from "../modals/final-designs";
import ModalZoomImg from "../modals/zoom-img";
import ModalReviews from "../modals/reviews";
import DesignerProject from "../modals/designers-project";
import ModalMessage from "../modals/message";
import PageTitle from "../page-title";
import ModalDownloadPDF from "./components/infoPDF";

import "./styles.scss";

function View({
  page,
  setModalPrivateNotes,
  modalPrivateNotes,
  dataModals,
  setDataModals,
  modalReviews,
  setModalReviews,
  modalZoomImg,
  setModalZoomImg,
  menuFloat,
  setMenuFloat,
  navigate,
  userData,
  setModalDesignerProject,
  modalDesignerProject,
  getLastVersion,
  updateDateNextReview,
  projectsFilter,
  typeFin,
  modalMessage,
  setModalMessage,
  modalMessageFinish,
  setModalMessageFinish,
  loadingAllProjects,
  setModalFinalDesigns,
  modalFinalDesigns,
  filter,
  setFilter,
  applySort,
  orderSelect,
  asc,
  setModalFinalComments,
  modalFinalComments,
  paginationPage,
  setPaginationPage,
  projectsFilterOriginal,
  modals,
  setModals,
}) {
  return (
    <div className="page active-projects">
      <PageTitle
        page={page}
        user={true}
        title={`Proyectos ${typeFin === "active" ? "activos" : "terminados"}`}
      />
      {loadingAllProjects ? (
        <div className="loading">
          <FadeLoader color="#6b72fd" />
        </div>
      ) : projectsFilter && projectsFilter.length <= 0 ? (
        <div className="message">
          <h3 className="text-purple">{`No tienes proyectos ${
            typeFin === "active" ? "activos" : "terminados"
          }`}</h3>
          {userData?.rol_id !== 3 && (
            <div className="button" onClick={() => navigate("/new-project")}>
              Empezar proyecto
            </div>
          )}
        </div>
      ) : (
        <div className="table-data">
          <table>
            <thead>
              <tr>
                {PROJECTS_2({
                  rol: userData?.rol_id,
                  page: page,
                  type: typeFin,
                  filter: filter,
                  setFilter: setFilter,
                  /*  applyFilter: applyFilter, */
                }).map((item, index) => (
                  <th key={index}>
                    <div className="th-flex flex">
                      <p>{item.title}</p>
                      {item.title !== "" && (
                        <p className="flex">{Icons("help_circle")}</p>
                      )}
                      {item.sortable && (
                        <div
                          className={
                            orderSelect === item.title && !asc && "sortable"
                          }
                          onClick={() => applySort(item.title)}
                        >
                          {Icons("sortable")}
                        </div>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {projectsFilter
                ?.filter((item, idx) =>
                  page === "home" ? idx < 5 : idx < 1000
                )
                ?.filter((item, idx) => item.flow_parse[3].status !== typeFin)
                .map((project, index) => {
                  return (
                    <tr key={index}>
                      {PROJECTS_2({
                        rol: userData?.rol_id,
                        page: page,
                        type: typeFin,
                        navigate: navigate,
                        project: project,
                        modalDesignerProject: modalDesignerProject,
                        setModalDesignerProject: setModalDesignerProject,
                        setDataModals: setDataModals,
                        modalZoomImg: modalZoomImg,
                        setModalZoomImg: setModalZoomImg,
                        getLastVersion: getLastVersion,
                        setModalPrivateNotes: setModalPrivateNotes,
                        modalPrivateNotes: modalPrivateNotes,
                        setMenuFloat: setMenuFloat,
                        menuFloat: menuFloat,
                        setModalReviews: setModalReviews,
                        updateDateNextReview: updateDateNextReview,
                        setModalFinalDesigns: setModalFinalDesigns,
                        modalFinalDesign: modalFinalDesigns,
                        setModalFinalComments: setModalFinalComments,
                        modalFinalComments: modalFinalComments,
                        modals: modals,
                        setModals: setModals,
                      }).map((project_field) => (
                        <td>
                          <div>{project_field.render || "-"}</div>
                          <div>{project_field?.subtitle}</div>
                        </td>
                      ))}
                    </tr>
                  );
                })}
            </tbody>
          </table>

          {projectsFilterOriginal.length > 5 && (
            <div className="pagination">
              <div
                className={`pagination-page ${
                  paginationPage === 1 && "not-view"
                } `}
                onClick={() => setPaginationPage(paginationPage - 1)}
              >
                {"< Prev"}
              </div>

              {[...Array(Math.round(projectsFilterOriginal.length / 5))].map(
                (item, index) => (
                  <div
                    onClick={() => setPaginationPage(index + 1)}
                    className={`pagination-page ${
                      paginationPage === index + 1 ? "active" : "inactive"
                    }`}
                  >
                    {index + 1}
                  </div>
                )
              )}

              <div
                className={`pagination-page ${
                  paginationPage ===
                    Math.round(projectsFilterOriginal.length / 5) && "not-view"
                } `}
                onClick={() => setPaginationPage(paginationPage + 1)}
              >
                {"Next >"}
              </div>
            </div>
          )}

          {console.log(modals)}

          {modals.infoPDF && (
            <ModalDownloadPDF
              modals={modals}
              data={dataModals}
              setModals={setModals}
            />
          )}

          {modalPrivateNotes && (
            <ModalPrivateNotes close={setModalPrivateNotes} data={dataModals} />
          )}
          {modalPrivateNotes && (
            <ModalPrivateNotes close={setModalPrivateNotes} data={dataModals} />
          )}
          {modalFinalComments && (
            <ModalFinalComments
              close={setModalFinalComments}
              data={dataModals}
            />
          )}
          {modalFinalDesigns && (
            <ModalFinalDesigns close={setModalFinalDesigns} data={dataModals} />
          )}
          {modalZoomImg && (
            <ModalZoomImg close={setModalZoomImg} data={dataModals} />
          )}
          {modalReviews && (
            <ModalReviews close={setModalReviews} data={dataModals} />
          )}
          {modalDesignerProject && (
            <DesignerProject
              close={setModalDesignerProject}
              data={dataModals}
            />
          )}
          {modalMessage && (
            <ModalMessage
              next_type="continuar"
              next={() => {
                setModalMessage(false);
              }}
              message={"Ahora espera a que tu proyecto sea asignado"}
              subMessage={
                <>
                  <p>Aquí en Proyectos Activos vas a poder:</p>
                  <ul>
                    <li>
                      {Icons("check_circle")} Ver el estado (y hacerle
                      seguimiento).
                    </li>
                    <li>{Icons("check_circle")} Ver la información.</li>
                    <li>
                      {Icons("check_circle")} Invitar a tu equipo y compartirlo.
                    </li>
                    <li>
                      {Icons("check_circle")} Realizar las anotaciones del
                      diseño cuando el diseñador suba las diferentes versiones.
                    </li>
                    <li>{Icons("check_circle")} Y mucho más …</li>
                  </ul>
                </>
              }
            />
          )}
          {modalMessageFinish && (
            <ModalMessage
              next_type="continuar"
              next={() => {
                setModalMessageFinish(false);
              }}
              message={"Ahora espera a que tu diseñador suba los archivos"}
              subMessage={
                <>
                  <p>
                    Mientras tanto, aquí en proyectos terminados vas a poder:
                  </p>
                  <ul>
                    <li>
                      {Icons("check_circle")} Ver el estado (y hacerle
                      seguimiento).
                    </li>
                    <li>{Icons("check_circle")} Ver la información.</li>
                    <li>{Icons("check_circle")} Compartirlo.</li>
                    <li>
                      {Icons("check_circle")} Realizar tus propias notas
                      privadas
                    </li>
                    <li>{Icons("check_circle")} Visualizarlo</li>
                    <li>
                      {Icons("check_circle")} Calificar el diseño final y tu
                      experiencia en general
                    </li>
                    <br />
                  </ul>
                </>
              }
            />
          )}
        </div>
      )}
    </div>
  );
}

export default View;
