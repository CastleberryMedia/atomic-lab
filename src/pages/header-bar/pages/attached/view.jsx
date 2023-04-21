import React from "react";
import PageTitle from "../../../page-title";
import { URL_IMG } from "../../../constats";
import { Icons } from "../../../icons";
import "./styles.scss";

function View({ attached }) {
  return (
    <div className="attached-page page">
      <PageTitle page={"attached-page"} user={true} title="Mis adjuntos" />
      <div className="table-data">
        <table>
          <thead>
            <tr>
              <td>Nombre</td>
              <td>Tipo</td>
              <td>Tamaño</td>
              <td>Descargar</td>
              <td>Eliminar</td>
            </tr>
          </thead>
          <tbody>
            {attached?.map((attached, index) => (
              <tr key={index}>
                <td>{attached.comments}</td>
                <td>{attached.type_file}</td>
                <td>{attached.size}</td>
                <td>
                  <a
                    href={URL_IMG + attached.filename}
                    download="filename"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {Icons("download")}
                  </a>
                </td>
                <td>{Icons("delete_circle")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <section className="footer">
        <section className="section-buttons flex">
          <button className="button">Guardar cambios</button>
        </section>
      </section>
    </div>
  );
}

export default View;
