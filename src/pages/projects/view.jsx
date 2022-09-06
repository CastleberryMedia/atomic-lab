import React from "react";
import { Icons } from "../icons";
import { PROJECTS } from "../constats";
import ModalPrivateNotes from "../modals/private-notes";
import ModalZoomImg from "../modals/zoom-img";
import ModalReviews from "../modals/reviews";
import DesignerProject from "../modals/designers-project";
import ModalMessage from "../modals/message";
import PageTitle from "../page-title";
import moment from "moment";
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
}) {
  return (
    <div className="page active-projects">
      <PageTitle
        page={page}
        user={true}
        title={`Proyectos ${typeFin === "active" ? "activos" : "terminados"}`}
      />

      {projectsFilter && projectsFilter.length <= 0 ? (
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
                {PROJECTS(page, typeFin).map((item, index) => (
                  <th key={index}>
                    <div className="th-flex flex">
                      <p>{item.title}</p>
                      {item.title !== "" && (
                        <p className="flex">{Icons("help_circle")}</p>
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
                .map((project, index) => {
                  const projectValues =
                    project?.values !== null ? project?.values[0] : [];

                  const flows = project.flow && JSON.parse(project?.flow);
                  const flow_active =
                    "status_check_" +
                    parseInt(
                      Array.isArray(flows) &&
                        flows.filter((flow) => flow.status === "active")[0].id
                    );

                  return (
                    <tr key={index}>
                      {PROJECTS(
                        page,
                        typeFin,
                        navigate,
                        project,
                        modalDesignerProject,
                        setModalDesignerProject,
                        setDataModals,
                        modalZoomImg,
                        setModalZoomImg,
                        getLastVersion,
                        setModalPrivateNotes,
                        modalPrivateNotes,
                        setMenuFloat,
                        menuFloat,
                        flow_active,
                        userData?.rol_id,
                        setModalReviews
                      ).map((project_field) => (
                        <td>
                          <div
                            onClick={project_field?.onClick}
                            className={
                              project_field?.onClick
                                ? project_field.field + " pointer"
                                : project_field.field
                            }
                          >
                            {project_field?.type === "date" ? (
                              <input
                                className="select-date"
                                type="date"
                                name=""
                                id=""
                                value={project.review_date}
                                onChange={(e) =>
                                  updateDateNextReview(
                                    project.id,
                                    moment(e.target.value).format("YYYY-MM-DD")
                                  )
                                }
                              />
                            ) : project_field?.type === "download" ? (
                              <a
                                rel="noreferrer"
                                download="custom-filename.jpg"
                                target="_blank"
                                href={
                                  "http://api.ticvzla.xyz/public/versions-images/8/8869911647031424.jpeg"
                                }
                                title="ImageName"
                              >
                                {Icons(project_field?.icon)}
                              </a>
                            ) : project_field?.type === "review" ? (
                              <div className="flex review">
                                <p>
                                  {project[project_field?.field]} de{" "}
                                  {projectValues?.revisiones?.includes("Hasta")
                                    ? projectValues?.revisiones?.replace(
                                        "Hasta ",
                                        ""
                                      )
                                    : "∞"}
                                </p>
                                {projectValues?.revisiones?.includes("Hasta") &&
                                  Icons(project_field?.icon)}
                              </div>
                            ) : project_field?.icon ? (
                              Icons(project_field?.icon)
                            ) : (
                              projectValues[project_field?.field] ||
                              project[project_field?.field]
                            )}

                            {project_field?.subtitle && (
                              <p
                                className={`view-more ${
                                  project_field?.subtitle?.onClick && "pointer"
                                }`}
                                onClick={project_field?.subtitle?.onClick}
                              >
                                {project_field?.subtitle.text}
                              </p>
                            )}

                            {project_field.isMenu && (
                              <>
                                {Icons("menu_points")}
                                {menuFloat === project?.id && (
                                  <div className={`menu-float ${project?.id} `}>
                                    {project_field.isMenu.map((item_menu) => (
                                      <div
                                        className="menu-float-item flex"
                                        onClick={item_menu?.onClick}
                                      >
                                        <p>{item_menu.title}</p>
                                        {Icons("help_circle")}
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </>
                            )}
                          </div>
                        </td>
                      ))}
                    </tr>
                  );
                })}
            </tbody>
          </table>
          {modalPrivateNotes && (
            <ModalPrivateNotes close={setModalPrivateNotes} data={dataModals} />
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
