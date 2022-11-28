import React from "react";
import PageTitle from "../../../page-title";
import "./styles.scss";
import { Icons } from "../../../icons";
import ModalAddMember from "../../../modals/add-member";
import { TEAM_ROL } from "../../../constats";

function View({
  modalAddMember,
  setModalAddMember,
  dataModals,
  team,
  deleteMember,
  userData,
  teamFilter,
}) {
  return (
    <div className="team-page page">
      <PageTitle
        page={!teamFilter && "team-page"}
        user={!teamFilter}
        title="Mi equipo"
        func={setModalAddMember}
        help={false}
      />

      <div className="table-data">
        {team ? (
          <table>
            <thead>
              <tr>
                <td>Nombre</td>
                <td>Email</td>
                <td>Rol</td>
                <td>Proyectos</td>
                {(userData?.rol_id === 8 || userData?.rol_id === 1) && (
                  <td>Eliminar</td>
                )}
              </tr>
            </thead>
            <tbody>
              {team.map((member, index) => (
                <tr key={index}>
                  <td>{member.name}</td>
                  <td>{member.email}</td>
                  <td>
                    {userData?.rol_id === 8 ? (
                      <select name="rol" id="rol" className="select">
                        <option value="8" selected={member.rol_id === 8}>
                          Super-admin
                        </option>
                        <option value="1" selected={member.rol_id === 1}>
                          Admin
                        </option>
                        <option value="3" selected={member.rol_id === 3}>
                          Diseñador
                        </option>
                      </select>
                    ) : (
                      TEAM_ROL.filter((rol) => rol.id === member.rol_id)[0].text
                    )}
                  </td>
                  <td></td>
                  {(userData?.rol_id === 8 || userData?.rol_id === 1) && (
                    <td>
                      <div
                        className="delete-icon"
                        onClick={() => deleteMember(member.id)}
                      >
                        {Icons("delete_circle")}
                      </div>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="message text-purple">
            No hay personas en el equipo
          </div>
        )}
      </div>

      {!teamFilter && (
        <section className="footer">
          <section className="section-buttons flex">
            <div className="button">Guardar cambios</div>
          </section>
        </section>
      )}

      {modalAddMember && (
        <ModalAddMember close={setModalAddMember} data={dataModals} />
      )}
    </div>
  );
}

export default View;
