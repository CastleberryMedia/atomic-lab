import React, { useEffect, useState } from "react";
import PageTitle from "../page-title";
import Projects from "../projects";
import Team from "../header-bar/pages/team";
import Brands from "../header-bar/pages/brands";
import { Icons } from "../icons";
import "./styles.scss";

function View({ generateCode, code, percent }) {
  const [DATA, setDATA] = useState([]);
  useEffect(() => {
    let DATATemp = [];
    const count = Math.floor(Math.random() * (20 - 5) + 5);
    function codeR() {
      return (Math.random() + 1).toString(36).substring(2);
    }
    function percentR() {
      return Math.floor(Math.random() * (1 - 99) + 99);
    }

    [...Array(count)].map(() =>
      DATATemp.push({ code: codeR(), percent: percentR() })
    );

    setDATA(DATATemp.sort((a, b) => b.percent - a.percent));
  }, []);

  return (
    <div className="page discount">
      <PageTitle user={true} title={`Gestion de descuentos`} />
      <div className="content">
        <div className="content-add">
          <div>
            <h3>Agregar descuento</h3>
          </div>
          <div className="inputs">
            <div className="input">
              <label htmlFor="code">Código</label>
              <div className="code-discount">{code}</div>
            </div>
            <div className="input">
              <label htmlFor="percent">Porcentaje</label>
              <div className="input-percent">
                <input
                  name="percent"
                  id="percent"
                  className="input-txt"
                  value={percent}
                  type="text"
                  pattern="\d*"
                  maxLength="2"
                />
                %
              </div>
            </div>
          </div>
          <div className="buttons">
            <button className="button-purple" onClick={() => generateCode()}>
              Generar
            </button>
            <button className="button-purple">Guardar</button>
          </div>
        </div>
        <div className="content-list">
          <div>
            <h3>Lista de descuentos</h3>
          </div>
          <div>
            <table className="table-discounts">
              <thead>
                <tr>
                  <th>Código</th>
                  <th>Porcentaje</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {DATA.map((d) => (
                  <tr>
                    <td className="table-code">{d?.code}</td>
                    <td className="table-percent">{d?.percent}%</td>
                    <td className="table-actions">{Icons("delete_circle")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default View;
