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
import ModalDeleteProject from "../modals/deleteProject";
import ModalInvite from "../modals/invite";
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
        title={`${typeFin === "active" ? "Active" : "Finished"} projects`}
      />
      {loadingAllProjects ? (
        <div className="loading">
          <FadeLoader color="#6b72fd" />
        </div>
      ) : projectsFilter && projectsFilter.length <= 0 ? (
        <div className="message">
          <h3 className="text-purple">{`Has no projects ${
            typeFin === "active" ? "activos" : "Finished"
          }`}</h3>
          {userData?.rol_id !== 3 && (
            <button className="button" onClick={() => navigate("/new-project")}>
              Start project
            </button>
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
                ?.slice(0, page === "home" ? 6 : 1000)
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
                      }).map((project_field, index) => (
                        <td key={index}>
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
                    key={index}
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

          {modals.infoPDF && (
            <ModalDownloadPDF
              modals={modals}
              data={dataModals}
              setModals={setModals}
            />
          )}

          {modals.invite && (
            <ModalInvite
              modals={modals}
              data={dataModals}
              setModals={setModals}
            />
          )}

          {modals.deleteProject && (
            <ModalDeleteProject
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
              next_type="next"
              next={() => {
                setModalMessage(false);
              }}
              message={"Now wait for your project to be assigned"}
              subMessage={
                <>
                  <p>Here in Proyectos Activos you will be able to:</p>
                  <ul>
                    <li>
                      {Icons("check_circle")} View status (and track
                      tracking).
                    </li>
                    <li>{Icons("check_circle")} See the information.</li>
                    <li>
                      {Icons("check_circle")} Invite your team and share it.
                    </li>
                    <li>
                      {Icons("check_circle")} Make design annotations when the designer
                      when the designer uploads the different versions.
                    </li>
                    <li>{Icons("check_circle")} And much more ...</li>
                  </ul>
                </>
              }
            />
          )}
          {modalMessageFinish && (
            <ModalMessage
              next_type="next"
              next={() => {
                setModalMessageFinish(false);
              }}
              message={"Now wait for your designer to upload the files."}
              subMessage={
                <>
                  <p>
                    In the meantime, here in finished projects you will be able to:
                  </p>
                  <ul>
                    <li>
                      {Icons("check_circle")} View status (and track
                      tracking).
                    </li>
                    <li>{Icons("check_circle")} See the information.</li>
                    <li>{Icons("check_circle")} Share it.</li>
                    <li>
                      {Icons("check_circle")} Make your own private notes
                      private
                    </li>
                    <li>{Icons("check_circle")} View it</li>
                    <li>
                      {Icons("check_circle")} Qualify the final design and your
                      overall experience
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
