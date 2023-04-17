import React from "react";
import PageTitle from "../page-title";
import { Icons } from "../icons";
import "./styles.scss";

function View({
  generateCode,
  code,
  percent,
  setPercent,
  createDiscount,
  discountsList,
  handleDeleteDiscount,
  loading,
}) {
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
              <div className="input-percent" /* key={percent} */>
                <input
                  name="percent"
                  id="percent"
                  className="input-txt"
                  type="number"
                  min={1}
                  max={100}
                  onChange={(e) => setPercent(e.target.value)}
                  defaultValue={percent}
                  value={percent}
                  onKeyUp={(e) =>
                    e.target.value > 100 && setPercent(percent.slice(0, -1))
                  }
                />
                %
              </div>
            </div>
          </div>
          <div className="buttons">
            <button className="button-purple" onClick={() => generateCode()}>
              Generar
            </button>
            <button
              className="button-purple"
              onClick={() => createDiscount()}
              disabled={!percent}
            >
              Guardar
            </button>
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
                {loading ? (
                  <tr className="loading">Cargando...</tr>
                ) : (
                  discountsList
                    ?.sort((a, b) => b.percentage - a.percentage)
                    .map((d) => (
                      <tr key={d?.code}>
                        <td className="table-code">{d?.code}</td>
                        <td className="table-percent">{d?.percentage}%</td>
                        <td className="table-actions">
                          <div
                            onClick={() => handleDeleteDiscount(d?.id)}
                            className="delete-discount"
                          >
                            {Icons("delete_circle")}
                          </div>
                        </td>
                      </tr>
                    ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default View;
