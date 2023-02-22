import React from "react";
import FadeLoader from "react-spinners/FadeLoader";
import "../../modals/styles.scss";
import "./styles.scss";

function View({
  close,
  assignDesigner,
  listDesigner,
  teamFilter,
  deleteDesigner,
  userData,
  loading,
}) {
  return (
    <div id="myModal" className="modal designer-assign">
      <div className="modal-content">
        <h3>Diseñadores asignados</h3>

        {loading ? (
          <div className="loading">
            <FadeLoader color="#6b72fd" />
          </div>
        ) : (
          <div className="list-designer">
            {listDesigner?.map((user_data, index) => (
              <div key={index} className="designer asigner">
                <p>
                  {user_data?.last_name !== null
                    ? user_data?.name + " " + user_data?.last_name
                    : user_data?.name}
                </p>
                {userData.rol_id === 8 && (
                  <div
                    className="button"
                    onClick={() =>
                      deleteDesigner(user_data.id, user_data.union_id)
                    }
                  >
                    Eliminar
                  </div>
                )}
              </div>
            ))}
            {console.log("teamFilter", teamFilter)}
            {userData.rol_id === 8 &&
              teamFilter
                .filter(
                  (user) =>
                    !listDesigner?.some((user_list) => user_list.id === user.id)
                )
                .map((user_data, index) => (
                  <div key={index} className="designer">
                    <div>
                      {user_data?.last_name !== null
                        ? user_data?.name + " " + user_data?.last_name
                        : user_data?.name}
                    </div>

                    <div
                      className="button"
                      onClick={() => assignDesigner(user_data.id)}
                    >
                      Asignar
                    </div>
                  </div>
                ))}
          </div>
        )}

        <section className="footer">
          <section className="section-buttons flex">
            <div className="button" onClick={() => close(false)}>
              Cerrar
            </div>
          </section>
        </section>
      </div>
    </div>
  );
}

export default View;
