import React, { useState } from "react";
import PageTitle from "../../../page-title";
import { FORM_INPUTS_PROFILE } from "../../../constats";
import { Icons } from "../../../icons";

import "./styles.scss";

function View({
  userData,
  onSubmit,
  handleSubmit,
  register,
  validatePassword,
}) {
  const [editFields, setEditFields] = useState([]);

  console.log(editFields);

  return (
    <div className="profile-page page">
      <form onSubmit={handleSubmit(onSubmit)}>
        <PageTitle page={"profile-page"} user={true} title="Mi perfil" />

        <div className="description">Datos personales</div>

        <section className="content">
          {FORM_INPUTS_PROFILE.map((input, index) => (
            <div key={index} className="item-input flex">
              <label htmlFor={input.id}>{input.label} </label>
              <div className="flex">
                <input
                  {...input}
                  id={input.id}
                  defaultValue={userData[input.id]}
                  {...register(input.id)}
                  className={
                    input.id === "passwordNew_confirm"
                      ? validatePassword()
                        ? "input-txt"
                        : "input-txt-error"
                      : input.className
                  }
                  disabled={!editFields.includes(input.id)}
                />
                <div
                  onClick={() =>
                    editFields.includes(input.id)
                      ? setEditFields(
                          editFields.filter((edit) => edit !== input.id)
                        )
                      : setEditFields((editFields) => [...editFields, input.id])
                  }
                  className={!editFields.includes(input.id) ? "edit" : "add"}
                >
                  {!editFields.includes(input.id)
                    ? Icons("edit")
                    : Icons("add")}
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="footer">
          <section className="section-buttons flex">
            <input
              className="button"
              type="submit"
              value={"Guardar Cambios"}
              disabled={!validatePassword()}
            />
          </section>
        </section>
      </form>
    </div>
  );
}

export default View;
