import React from "react";
import PageTitle from "../page-title";
import { STATUS_TABLES, STATUS_TABLES_FLOW } from "../constats";
import { Icons } from "../icons";
import moment from "moment";

import "./styles.scss";

function View({ projectData, rate }) {
  return (
    <div className="page status-projects">
      <PageTitle page={"status"} user={true} title="Estado detallado" />

      <h3>{projectData?.values.name_project}</h3>
      <div className="table-data">
        <table>
          <thead>
            <tr>
              <th></th>
              {STATUS_TABLES().map((item, index) => (
                <th key={index}>
                  {item.isActive && (
                    <div className="th-flex flex">
                      <p>{item.title}</p>
                      <p className="flex">{Icons("help_circle")}</p>
                    </div>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {projectData?.flow?.map((status, index) => (
              <tr key={index}>
                <td>
                  {Icons(
                    status.status === "active"
                      ? "check_blue"
                      : "check_blue_none"
                  )}
                  {index === 0 && <div className="line-td"></div>}
                </td>
                <td>
                  {
                    STATUS_TABLES_FLOW.filter(
                      (item) => item.id === status.id
                    )[0].text
                  }
                </td>
                <td>{moment(status.date).format("YY-MM-DD, h:mm:ss a")}</td>
                <td></td>
              </tr>
            ))}
          </tbody>
          <tbody></tbody>
        </table>
      </div>

      <div className="qualify-experience">
        <div className="qualify-experience-title flex">
          <h3>Califica tu experiencia</h3>
          <p className="flex">{Icons("help_circle")}</p>

          <div className="stars">
            <input
              type="radio"
              name="stars-1"
              id="stars-1-0"
              value="5"
              onClick={() => rate(this.value)}
            />
            <label htmlFor="stars-1-0"></label>
            <input
              type="radio"
              name="stars-1"
              id="stars-1-1"
              value="4"
              onClick={() => rate(this.value)}
            />
            <label htmlFor="stars-1-1"></label>
            <input
              type="radio"
              name="stars-1"
              id="stars-1-2"
              value="3"
              onClick={() => rate(this.value)}
            />
            <label htmlFor="stars-1-2"></label>
            <input
              type="radio"
              name="stars-1"
              id="stars-1-3"
              value="2"
              onClick={() => rate(this.value)}
            />
            <label htmlFor="stars-1-3"></label>
            <input
              type="radio"
              name="stars-1"
              id="stars-1-4"
              value="1"
              onClick={() => rate(this.value)}
            />
            <label htmlFor="stars-1-4"></label>
          </div>
        </div>
        <div className="comments">
          <p>Escribe tu comentario</p>
          <textarea
            className="comments-textarea"
            name="textarea"
            rows="10"
            cols="50"
          ></textarea>
          <section className="section-buttons flex">
            <div className="button">Enviar</div>
          </section>
        </div>

        <section className="section-buttons flex">
          <div className="button">Atrás</div>
        </section>
      </div>
    </div>
  );
}

export default View;
