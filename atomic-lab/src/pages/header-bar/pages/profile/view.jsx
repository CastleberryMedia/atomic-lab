import React from "react";
import PageTitle from "../../../page-title";
import { FORM_INPUTS_PROFILE } from "../../../constats";
import { Icons } from "../../../icons";

import "./styles.scss";

function View({ data }) {
  const dataUser = data && data.user ? data.user[0] : {};

  return (
    <div className="profile-page page">
      <PageTitle page={"profile-page"} user={true} title="Mi perfil" />

      <div className="description">Datos personales</div>

      <section className="content">
        {FORM_INPUTS_PROFILE.map((input, index) => (
          <div key={index} className="item-input flex">
            <label for={input.id}>{input.label} </label>
            <div className="flex">
              <input {...input} id={input.id} value={dataUser[input.id]} />
              {Icons("edit")}
            </div>
          </div>
        ))}
      </section>

      <section className="footer">
        <section className="section-buttons flex">
          <div className="button">Guardar cambios</div>
        </section>
      </section>
    </div>
  );
}

export default View;
