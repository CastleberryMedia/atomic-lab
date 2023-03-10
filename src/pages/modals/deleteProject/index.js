import React, { useState, useContext } from "react";
import { putDeleteProject, getAllProjects } from "../../../services";
import { toast } from "react-toast";
import DataContext from "../../../data-context";
import "./styles.scss";

function Index({ modals, data, setModals }) {
  const [loading, setLoading] = useState(false);
  const { setAllProjects } = useContext(DataContext);
  const user_id = JSON.parse(sessionStorage?.getItem("atomiclab-user")).user_id;

  console.log(data);

  const onSubmit = () => {
    setLoading(true);
    putDeleteProject(data.id)
      .then((res) => {
        toast.success("Proyecto eliminado!");
        setModals({
          ...modals,
          deleteProject: false,
        });
        getAllProjects(user_id).then(({ data }) => {
          setAllProjects(data.response);
        });
      })
      .catch((error) => {
        toast("Error al eliminar proyecto, intente de nuevo", {
          backgroundColor: "#ff5151",
          color: "#ffffff",
        });
      });

    setTimeout(function () {
      setLoading(false);
    }, 1000);
  };

  return (
    <div id="myModal" className="modal modal-delete">
      <div className="modal-content">
        <div className="content">
          <h3>¿Desea eliminar el proyecto?</h3>
        </div>
        <div className="content-button">
          <button
            className="button"
            onClick={() => {
              setModals({
                ...modals,
                deleteProject: false,
              });
            }}
          >
            Cancelar
          </button>
          <button
            className="button-purple"
            onClick={() => onSubmit()}
            disabled={loading}
          >
            {loading ? "Eliminando..." : "Confirmar"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Index;
