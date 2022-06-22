import React from "react";
import PageTitle from "../page-title";
import "./styles.scss";

function View({
  filterProject,
  projectValues,
  userData,
  navigate,
  designers,
  projectExtraData,
}) {
  return (
    <div className="page more-info">
      <PageTitle user={true} title="Más información" />

      <h2>{projectValues.name_project}</h2>
      {console.log(projectValues)}
      <div className="table-data">
        <table>
          <tbody>
            <tr>
              <td className="title">Dueño del Proyecto</td>
              <td>
                {userData.name} {userData.last_name}
              </td>
              <td className="title">Diseñador</td>
              <td>
                {designers.length >= 1
                  ? designers.map((designer) => <p>{designer.name}</p>)
                  : "No asignado"}
              </td>
            </tr>
            <tr>
              <td className="title">Fecha de inicio</td>
              <td>{filterProject.updated_at}</td>
              <td className="title">Fecha estimada próxima versión</td>
              <td>{filterProject.review_date || "No programada"}</td>
            </tr>
            <tr>
              <td className="title">Valor</td>
              <td>$ {projectValues?.costo_base}</td>
            </tr>
            <tr>
              <td className="title">Revisión</td>
              <td>
                {filterProject.review} de{" "}
                {projectValues?.revisiones.replace("Hasta ", "")}
              </td>
            </tr>
            <tr>
              <td className="title">Resumen del Proyecto</td>
              <td>
                <div className="resume flex">
                  <div>Costo base del proyecto: </div>
                  <div>{projectValues?.costo_base || "-"}</div>
                </div>
                <div className="resume flex">
                  <div>Tiempo de entrega: </div>
                  <div>{projectValues?.tiempo_entrega || "-"}</div>
                </div>
                <div className="resume flex">
                  <div>Formato de entrega: </div>
                  <div>{projectValues?.formato_entrega || "-"}</div>
                </div>
                <div className="resume flex">
                  <div>Revisiones: </div>
                  <div>{projectValues?.revisiones || "-"}</div>
                </div>
                <div className="resume flex">
                  <div>Tamaño: </div>
                  <div>{projectValues?.tamaño || "-"}</div>
                </div>
                <div className="resume flex">
                  <div>Archivos editables: </div>
                  <div>{projectValues?.archivos_editables || "-"}</div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <section className="section-buttons flex">
        <div className="button" onClick={() => navigate(-1, { replace: true })}>
          Atrás
        </div>
      </section>
    </div>
  );
}

export default View;
