import React, { useState } from "react";
import { putinvite } from "../../../services";
import { toast } from "react-toast";
import "./styles.scss";

function Index({ modals, data, setModals }) {
  const [loading, setLoading] = useState(false);

  const user_id = JSON.parse(sessionStorage?.getItem("atomiclab-user")).user_id;

  const [email, setEmail] = useState(null);

  const onSubmit = () => {
    setLoading(true);
    putinvite({ user_id: user_id, project_id: data.id, email: email })
      .then((res) => {
        toast.success("Invitación enviada!");
        setModals({
          ...modals,
          invite: false,
        });
      })
      .catch((error) => {
        toast("Error al enviar invitación, intente de nuevo", {
          backgroundColor: "#ff5151",
          color: "#ffffff",
        });
      });

    setTimeout(function () {
      setLoading(false);
    }, 1000);
  };

  return (
    <div id="myModal" className="modal modal-invite">
      <div className="modal-content">
        <div className="content">
          <h3>Invite people</h3>
          <div className="text">
            <div>Enter the email of the person to invite to the project</div>
            <div>{data?.name_project}</div>
          </div>

          <div>
            <input
              className="input-txt"
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="content-button">
          <button
            className="button"
            onClick={() => {
              setModals({
                ...modals,
                invite: false,
              });
            }}
          >
            Cancel
          </button>
          <button
            className="button-purple"
            onClick={() => onSubmit()}
            disabled={loading || !email}
          >
            {loading ? "Inviting..." : "Invite"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Index;
